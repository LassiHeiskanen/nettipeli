/**
 * Messuvisa - Pelilogiikka
 * iPadOS 17.2 yhteensopiva
 */

(function() {
    'use strict';

    // ==================== GLOBAALIT MUUTTUJAT ====================
    let currentQuestionIndex = 0;
    let totalScore = 0;
    let playerId = '';
    let gameQueue = [];
    let timerInterval = null;
    let timeRemaining = 20;
    let isAnswering = false;

    // ==================== SUPABASE-KONFIGURAATIO ====================
    // Korvaa omilla arvoilla!
    const SUPABASE_URL = 'https://YOUR-PROJECT.supabase.co';
    const SUPABASE_ANON_KEY = 'YOUR-ANON-KEY';
    
    // Alusta Supabase (jos konfiguroitu)
    let supabaseClient = null;
    try {
        if (SUPABASE_URL && SUPABASE_URL !== 'https://YOUR-PROJECT.supabase.co') {
            supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
            console.log('Supabase yhdistetty');
        }
    } catch (e) {
        console.log('Supabase ei käytettävissä');
    }

    // ==================== ALUSTUS ====================
    document.addEventListener('DOMContentLoaded', function() {
        initApp();
    });

    function initApp() {
        // Näytön suunnan tarkistus
        checkOrientation();
        window.addEventListener('resize', checkOrientation);

        // Napit
        document.getElementById('start-btn').addEventListener('click', startGame);
        document.getElementById('restart-btn').addEventListener('click', restartGame);

        // Estä pitkä painallus valikosta
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });

        // Estä zoomauksen gestures
        document.addEventListener('touchstart', function(e) {
            if (e.touches.length > 1) {
                e.preventDefault();
            }
        }, { passive: false });

        let lastTouchEnd = 0;
        document.addEventListener('touchend', function(e) {
            const now = Date.now();
            if (now - lastTouchEnd <= 300) {
                e.preventDefault();
            }
            lastTouchEnd = now;
        }, false);
    }

    function checkOrientation() {
        if (window.innerHeight > window.innerWidth) {
            // Portrait - näytä viesti
            document.body.style.display = 'none';
            const msg = document.createElement('div');
            msg.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:#1E293B;color:white;display:flex;justify-content:center;align-items:center;font-size:24px;text-align:center;padding:40px;z-index:9999;';
            msg.innerHTML = 'Käännä laite vaakasuuntaan<br><br>Turn device to landscape';
            document.body.parentNode.appendChild(msg);
        } else {
            // Landscape
            document.body.style.display = 'block';
            const msg = document.body.parentNode.querySelector('div[style*="fixed"]');
            if (msg) msg.remove();
        }
    }

    // ==================== PELIN ALOITUS ====================
    function startGame() {
        // Alusta muuttujat
        currentQuestionIndex = 0;
        totalScore = 0;
        isAnswering = false;

        // Luo pelijono
        createGameQueue();

        // Generoi pelaaja-ID
        playerId = generatePlayerId();

        // Tallenna paikallisesti
        savePlayerData();

        // Vaihta näkymään
        showScreen('game-screen');
        
        // Päivitä näyttö
        updateScore();
        
        // Näytä ensimmäinen kysymys
        showQuestion();
    }

    function createGameQueue() {
        // Sekoita jokainen pankki ja ota 5 satunnaista kysymystä
        const shuffled1 = shuffleArray([...kysymyspankki1]).slice(0, 5);
        const shuffled2 = shuffleArray([...kysymyspankki2]).slice(0, 5);
        const shuffled3 = shuffleArray([...kysymyspankki3]).slice(0, 5);

        // Yhdistä järjestyksessä
        gameQueue = [...shuffled1, ...shuffled2, ...shuffled3];
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function generatePlayerId() {
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        let result = '';
        for (let i = 0; i < 6; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    function savePlayerData() {
        const data = {
            id: playerId,
            score: totalScore,
            timestamp: Date.now()
        };
        
        try {
            let allData = JSON.parse(localStorage.getItem('messuvisa_results') || '[]');
            allData.push(data);
            // Pidä vain viimeiset 100 tulosta
            if (allData.length > 100) {
                allData = allData.slice(-100);
            }
            localStorage.setItem('messuvisa_results', JSON.stringify(allData));
        } catch (e) {
            console.log('LocalStorage ei käytettävissä');
        }
        
        // Tallenna myös Supabaseen
        saveToSupabase(playerId, totalScore);
    }

    // ==================== SUPABASE-TALLENNUS ====================
    async function saveToSupabase(playerId, score) {
        if (!supabaseClient) return;
        
        try {
            const { error } = await supabaseClient
                .from('game_results')
                .insert([{
                    player_id: playerId,
                    score: score,
                    total_questions: 15
                }]);
            
            if (error) {
                console.log('Supabase tallennusvirhe:', error.message);
            } else {
                console.log('Tulos tallennettu Supabaseen');
            }
        } catch (e) {
            console.log('Supabase-yhteysvirhe');
        }
    }

    // ==================== KYSYMYKSET ====================
    function showQuestion() {
        if (currentQuestionIndex >= gameQueue.length) {
            showResults();
            return;
        }

        const question = gameQueue[currentQuestionIndex];
        
        // Päivitä kysymyslaskuri
        document.getElementById('current-question').textContent = currentQuestionIndex + 1;

        // Näytä kysymys
        document.getElementById('question-text').textContent = question.kysymys;

        // Luo vastausvaihtoehdot
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';

        question.vaihtoehdot.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'btn btn-option';
            btn.textContent = option;
            btn.dataset.index = index;
            btn.addEventListener('click', handleAnswer);
            optionsContainer.appendChild(btn);
        });

        // Aloita ajastin
        startTimer();
    }

    function handleAnswer(e) {
        if (isAnswering) return;
        isAnswering = true;

        const selectedIndex = parseInt(e.target.dataset.index);
        const question = gameQueue[currentQuestionIndex];
        const isCorrect = selectedIndex === question.oikea;

        // Pysäytä ajastin
        stopTimer();

        // Näytä vastaus
        showAnswerFeedback(selectedIndex, question.oikea);

        // Laske pisteet
        if (isCorrect) {
            const points = Math.ceil(timeRemaining);
            totalScore += points;
            updateScore();
        }

        // Siirry seuraavaan kysymykseen
        setTimeout(function() {
            currentQuestionIndex++;
            isAnswering = false;
            showQuestion();
        }, 1500);
    }

    function showAnswerFeedback(selectedIndex, correctIndex) {
        const buttons = document.querySelectorAll('.btn-option');
        
        // Oikea vastaus vihreäksi
        if (buttons[correctIndex]) {
            buttons[correctIndex].classList.add('correct');
        }

        // Väärä vastaus punaiseksi (jos valittu)
        if (selectedIndex !== correctIndex && buttons[selectedIndex]) {
            buttons[selectedIndex].classList.add('wrong');
        }

        // Estä lisää klikkauksia
        buttons.forEach(btn => {
            btn.style.pointerEvents = 'none';
        });
    }

    // ==================== AJASTIN ====================
    function startTimer() {
        timeRemaining = 20;
        updateTimerBar();

        timerInterval = setInterval(function() {
            timeRemaining -= 0.1;
            
            if (timeRemaining <= 0) {
                timeRemaining = 0;
                handleTimeout();
            } else {
                updateTimerBar();
            }
        }, 100);
    }

    function stopTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }

    function updateTimerBar() {
        const bar = document.getElementById('timer-bar');
        const percentage = (timeRemaining / 20) * 100;
        bar.style.width = percentage + '%';

        // Vaihda väri ajan mukaan
        bar.classList.remove('warning', 'danger');
        if (timeRemaining <= 5) {
            bar.classList.add('danger');
        } else if (timeRemaining <= 10) {
            bar.classList.add('warning');
        }
    }

    function handleTimeout() {
        if (isAnswering) return;
        isAnswering = true;

        stopTimer();

        // Näytä oikea vastaus
        const question = gameQueue[currentQuestionIndex];
        showAnswerFeedback(-1, question.oikea);

        // Ei pisteitä aikarajan ylityksestä

        // Siirry seuraavaan kysymykseen
        setTimeout(function() {
            currentQuestionIndex++;
            isAnswering = false;
            showQuestion();
        }, 2000);
    }

    // ==================== TULOKSET ====================
    function showResults() {
        stopTimer();

        // Päivitä tulokset
        document.getElementById('player-id').textContent = playerId;
        document.getElementById('final-score').textContent = totalScore;

        // Tallenna lopputulos
        savePlayerData();

        // Generoi QR-koodi
        generateQRCode();

        // Vaihta näkymään
        showScreen('result-screen');
    }

    function generateQRCode() {
        const container = document.getElementById('qr-code');
        if (!container) {
            console.log('QR-konttoria ei löydy');
            return;
        }
        
        container.innerHTML = '';

        // Forms URL
        const formsUrl = 'https://forms.office.com/e/85u09b7t9R';

        // Tarkista onko QRCode kirjasto käytettävissä
        if (typeof QRCode !== 'undefined') {
            // Odota hetki varmistaakseen että DOM on valmis
            setTimeout(function() {
                try {
                    new QRCode(container, {
                        text: formsUrl,
                        width: 200,
                        height: 200,
                        colorDark: '#1E293B',
                        colorLight: '#FFFFFF',
                        correctLevel: QRCode.CorrectLevel.M
                    });
                    console.log('QR-koodi generoitu');
                } catch (e) {
                    console.log('QR-generointivirhe:', e);
                    container.innerHTML = '<p style="font-size:14px;padding:20px;">' + formsUrl + '</p>';
                }
            }, 100);
        } else {
            // Fallback: näytä URL tekstinä
            container.innerHTML = '<p style="font-size:14px;padding:20px;">' + formsUrl + '</p>';
        }
    }

    // ==================== PELIN UUDELLEENALOITUS ====================
    function restartGame() {
        showScreen('start-screen');
    }

    // ==================== NÄKYMÄN VAIHTO ====================
    function showScreen(screenId) {
        // Piilota kaikki näkymät
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // Näytä valittu näkymä
        document.getElementById(screenId).classList.add('active');
    }

    function updateScore() {
        document.getElementById('score').textContent = totalScore;
    }

})();
