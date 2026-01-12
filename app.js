/**
 * Kylmätekniikkapeli - Pääsovelluslogiikka
 * 
 * Tämä tiedosto käsittelee pelin kulun, ajastuksen,
 * pisteytyksen ja näkymien hallinnan.
 */

(function() {
    'use strict';

    // ============================================
    // PELIN TILA
    // ============================================

    const gameState = {
        currentScreen: 'start',
        questions: [],
        currentQuestionIndex: 0,
        totalScore: 0,
        questionStartTime: 0,
        timeRemaining: 20,
        timerInterval: null,
        isAnswered: false,
        difficultyOrder: ['easy', 'medium', 'hard'] // Kysymysten järjestys
    };

    // ============================================
    // KONFIGURAATIO
    // ============================================

    const config = {
        questionsPerBank: 5,
        timePerQuestion: 20, // sekuntia
        maxScore: 400, // Teoreettinen maksimi (20s × 20p/s × 15 kysymystä)
        transitionDelay: 1000, // ms ennen siirtymistä seuraavaan kysymykseen
        animationDelay: 1500 // ms ennen näytön vaihtoa tulosten jälkeen
    };

    // ============================================
    // DOM-ELEMENTIT
    // ============================================

    const elements = {
        // Näytöt
        startScreen: null,
        quizScreen: null,
        resultsInputScreen: null,
        leaderboardScreen: null,

        // Aloitusnäkymä
        startBtn: null,

        // Quiz-näkymä
        questionText: null,
        answersGrid: null,
        answerBtns: null,
        timerBar: null,
        timerText: null,
        currentQuestionNum: null,
        totalScoreDisplay: null,
        difficultyBadge: null,

        // Tulosten syöttönäkymä
        finalScoreDisplay: null,
        playerName: null,
        playerPhone: null,
        submitScoreBtn: null,

        // Leaderboard-näkymä
        leaderboardBody: null,
        leaderboardLoading: null,
        restartBtn: null
    };

    // ============================================
    // ALUSTUS
    // ============================================

    /**
     * Alustaa sovelluksen
     */
    function init() {
        cacheElements();
        bindEvents();
        showScreen('start');
        console.log('Kylmätekniikkapeli alustettu');
    }

    /**
     * Tallentaa viittaukset DOM-elementteihin
     */
    function cacheElements() {
        elements.startScreen = document.getElementById('start-screen');
        elements.quizScreen = document.getElementById('quiz-screen');
        elements.resultsInputScreen = document.getElementById('results-input-screen');
        elements.leaderboardScreen = document.getElementById('leaderboard-screen');

        elements.startBtn = document.getElementById('start-btn');

        elements.questionText = document.getElementById('question-text');
        elements.answersGrid = document.getElementById('answers-grid');
        elements.answerBtns = elements.answersGrid.querySelectorAll('.answer-btn');
        elements.timerBar = document.getElementById('timer-bar');
        elements.timerText = document.getElementById('timer-text');
        elements.currentQuestionNum = document.getElementById('current-question');
        elements.totalScoreDisplay = document.getElementById('total-score');
        elements.difficultyBadge = document.getElementById('difficulty-badge');

        elements.finalScoreDisplay = document.getElementById('final-score-display');
        elements.playerName = document.getElementById('player-name');
        elements.playerPhone = document.getElementById('player-phone');
        elements.submitScoreBtn = document.getElementById('submit-score-btn');

        elements.leaderboardBody = document.getElementById('leaderboard-body');
        elements.leaderboardLoading = document.getElementById('leaderboard-loading');
        elements.restartBtn = document.getElementById('restart-btn');
    }

    /**
     * Sitoo tapahtumakuuntelijat
     */
    function bindEvents() {
        // Aloitusnäkymä
        elements.startBtn.addEventListener('click', startGame);
        elements.startBtn.addEventListener('touchend', startGame, { passive: false });

        // Vastausnapit
        elements.answerBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => handleAnswer(index));
            btn.addEventListener('touchend', () => handleAnswer(index), { passive: false });
        });

        // Tulosten lähetys
        elements.submitScoreBtn.addEventListener('click', handleScoreSubmit);
        elements.submitScoreBtn.addEventListener('touchend', handleScoreSubmit, { passive: false });

        // Uudelleenaloitus
        elements.restartBtn.addEventListener('click', resetGame);
        elements.restartBtn.addEventListener('touchend', resetGame, { passive: false });

        // Formin submit estäminen
        const form = document.getElementById('player-form');
        if (form) {
            form.addEventListener('submit', (e) => e.preventDefault());
        }
    }

    // ============================================
    // NÄKMIEN HALLINTA
    // ============================================

    /**
     * Vaihtaa näkymää
     * @param {string} screenName - Näkymän nimi
     */
    function showScreen(screenName) {
        // Piilota kaikki näkymät
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // Näytä pyydetty näkymä
        const targetScreen = document.getElementById(`${screenName}-screen`);
        if (targetScreen) {
            targetScreen.classList.add('active');
            gameState.currentScreen = screenName;
        }
    }

    // ============================================
    // PELIN LOGIIKKA
    // ============================================

    /**
     * Aloittaa uuden pelin
     */
    function startGame() {
        // Alusta pelin tila
        gameState.questions = [];
        gameState.currentQuestionIndex = 0;
        gameState.totalScore = 0;
        gameState.isAnswered = false;

        // Valitse kysymykset kysymyspankeista
        selectQuestions();

        // Siirtymään quiz-näkymään
        showScreen('quiz');

        // Näytä ensimmäinen kysymys
        displayQuestion();

        // Aloita ajastin
        startTimer();
    }

    /**
     * Valitsee kysymykset kysymyspankeista
     */
    function selectQuestions() {
        const banks = window.questionBanks;
        if (!banks) {
            console.error('Kysymyspankkeja ei löydy!');
            return;
        }

        // Sekoita ja valitse 5 kysymystä jokaisesta pankista
        gameState.difficultyOrder.forEach(difficulty => {
            const bank = banks[difficulty];
            if (bank && bank.length > 0) {
                const selected = shuffleArray(bank).slice(0, config.questionsPerBank);
                gameState.questions.push(...selected.map(q => ({
                    ...q,
                    difficulty: difficulty
                })));
            }
        });

        console.log(`Valittu ${gameState.questions.length} kysymystä`);
    }

    /**
         * Sekoittaa taulukon (Fisher-Yates)
     * @param {Array} array - Sekoitettava taulukko
     * @returns {Array} Sekoitettu taulukko
     */
    function shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    /**
     * Näyttää nykyisen kysymyksen
     */
    function displayQuestion() {
        const question = gameState.questions[gameState.currentQuestionIndex];
        
        if (!question) {
            endGame();
            return;
        }

        gameState.isAnswered = false;

        // Päivitä kysymysteksti
        elements.questionText.textContent = question.question;

        // Päivitä vastausnapit
        elements.answerBtns.forEach((btn, index) => {
            btn.textContent = question.answers[index] || '';
            btn.className = 'answer-btn'; // Resetoi luokat
            btn.disabled = false;
        });

        // Päivitä kysymyslaskuri
        elements.currentQuestionNum.textContent = gameState.currentQuestionIndex + 1;

        // Päivitä pistemäärä
        elements.totalScoreDisplay.textContent = gameState.totalScore;

        // Päivitä vaikeustaso-badge
        updateDifficultyBadge(question.difficulty);
    }

    /**
     * Päivittää vaikeustason ilmaisimen
     * @param {string} difficulty - Vaikeustaso
     */
    function updateDifficultyBadge(difficulty) {
        const badge = elements.difficultyBadge;
        badge.className = 'difficulty-badge ' + difficulty;

        const labels = {
            easy: 'Lämmittely',
            medium: 'Keskitaso',
            hard: 'Haaste'
        };

        badge.textContent = labels[difficulty] || difficulty;
    }

    // ============================================
    // AJASTIN
    // ============================================

    /**
     * Käynnistää kysymyksen ajastimen
     */
    function startTimer() {
        // Tyhjennä mahdollinen aiempi ajastin
        stopTimer();

        // Alusta ajastin
        gameState.timeRemaining = config.timePerQuestion;
        gameState.questionStartTime = Date.now();

        // Aloita intervalli
        gameState.timerInterval = setInterval(updateTimer, 100);

        // Päivitä heti
        updateTimer();
    }

    /**
     * Päivittää ajastimen näkymän
     */
    function updateTimer() {
        const elapsed = (Date.now() - gameState.questionStartTime) / 1000;
        gameState.timeRemaining = Math.max(0, config.timePerQuestion - elapsed);

        // Laske prosenttiosuus
        const percentage = (gameState.timeRemaining / config.timePerQuestion) * 100;

        // Päivitä palkki
        elements.timerBar.style.width = `${percentage}%`;

        // Päivitä teksti
        elements.timerText.textContent = `${Math.ceil(gameState.timeRemaining)}s`;

        // Värinämuutokset
        elements.timerBar.classList.remove('warning', 'critical');
        if (percentage <= 25) {
            elements.timerBar.classList.add('critical');
        } else if (percentage <= 50) {
            elements.timerBar.classList.add('warning');
        }

        // Tarkista aika lopussa
        if (gameState.timeRemaining <= 0) {
            handleTimeout();
        }
    }

    /**
     * Pysäyttää ajastimen
     */
    function stopTimer() {
        if (gameState.timerInterval) {
            clearInterval(gameState.timerInterval);
            gameState.timerInterval = null;
        }
    }

    /**
     * Käsittelee ajan lopussa
     */
    function handleTimeout() {
        if (gameState.isAnswered) return;

        gameState.isAnswered = true;
        stopTimer();

        // Merkitse vastaus vääräksi
        markAnswer(-1);

        // Siirry seuraavaan kysymykseen
        setTimeout(nextQuestion, config.transitionDelay);
    }

    // ============================================
    // VASTAUSTEN KÄSITTELY
    // ============================================

    /**
     * Käsittelee pelaajan vastauksen
     * @param {number} answerIndex - Vastausindeksi (0-3)
     */
    function handleAnswer(answerIndex) {
        if (gameState.isAnswered) return;

        gameState.isAnswered = true;
        stopTimer();

        const question = gameState.questions[gameState.currentQuestionIndex];
        const isCorrect = answerIndex === question.correctIndex;

        // Laske pisteet
        const points = calculatePoints();
        if (isCorrect) {
            gameState.totalScore += points;
        }

        // Merkitse vastaus
        markAnswer(answerIndex);

        // Päivitä näyttö
        elements.totalScoreDisplay.textContent = gameState.totalScore;

        // Siirry seuraavaan
        setTimeout(nextQuestion, config.transitionDelay);
    }

    /**
     * Laskee pisteet nykyisestä kysymyksestä
     * @returns {number} Saadut pisteet
     */
    function calculatePoints() {
        // Pistemäärä per kysymys = (jäljellä oleva aika / 20s) × 26.66
        // Maksimi 400 = 20s × 20p/s × 15 kysymystä
        // Per kysymys max 26.66 pistettä
        const pointsPerQuestion = 27; // Pyöristetty ylös
        const timeFactor = gameState.timeRemaining / config.timePerQuestion;

        return Math.round(pointsPerQuestion * timeFactor);
    }

    /**
     * Merkitsee vastauksen oikeaksi/vääräksi
     * @param {number} selectedIndex - Valittu vastaus (-1 = ei vastausta)
     */
    function markAnswer(selectedIndex) {
        const question = gameState.questions[gameState.currentQuestionIndex];

        elements.answerBtns.forEach((btn, index) => {
            btn.disabled = true;

            if (index === question.correctIndex) {
                btn.classList.add('correct');
            } else if (index === selectedIndex && selectedIndex !== question.correctIndex) {
                btn.classList.add('incorrect');
            }
        });
    }

    /**
     * Siirtyy seuraavaan kysymykseen
     */
    function nextQuestion() {
        gameState.currentQuestionIndex++;

        if (gameState.currentQuestionIndex >= gameState.questions.length) {
            // Peli päättynyt
            endGame();
        } else {
            // Seuraava kysymys
            displayQuestion();
            startTimer();
        }
    }

    // ============================================
    // PELIN PÄÄTTYMINEN
    // ============================================

    /**
     * Päättää pelin ja siirtyy tulossyöttöön
     */
    function endGame() {
        stopTimer();

        // Päivitä lopputulos
        elements.finalScoreDisplay.textContent = gameState.totalScore;

        // Tyhjennä syötekentät
        elements.playerName.value = '';
        elements.playerPhone.value = '';

        // Siirry tulossyöttönäkymään
        showScreen('results-input');

        // Päivitä submit-napin tila
        updateSubmitButton();
    }

    /**
     * Päivittää submit-napin tilan
     */
    function updateSubmitButton() {
        const name = elements.playerName.value.trim();
        elements.submitScoreBtn.disabled = name.length === 0;
    }

    // ============================================
    // TULOSTEN KÄSITTELY
    // ============================================

    /**
     * Käsittelee tulosten lähetyksen
     */
    async function handleScoreSubmit() {
        const name = elements.playerName.value.trim();
        const phone = elements.playerPhone.value.trim();
        const score = gameState.totalScore;

        // Validoi nimi
        if (!name) {
            showNotification('Syötä nimesi', 'error');
            return;
        }

        // Estä napin kaksoisklikkaus
        elements.submitScoreBtn.disabled = true;
        elements.submitScoreBtn.textContent = 'TALLENTAA...';

        try {
            // Tallenna Supabaseen
            const result = await window.SupabaseAPI.saveScore({
                name: name,
                phone: phone || null,
                score: score
            });

            if (result.success) {
                // Hae ja näytä leaderboard
                showLeaderboard();
            } else {
                showNotification(result.error || 'Tallennus epäonnistui', 'error');
                elements.submitScoreBtn.disabled = false;
                elements.submitScoreBtn.textContent = 'TALLENNA TULOS';
            }

        } catch (error) {
            console.error('Tallennusvirhe:', error);
            showNotification('Tallennus epäonnistui', 'error');
            elements.submitScoreBtn.disabled = false;
            elements.submitScoreBtn.textContent = 'TALLENNA TULOS';
        }
    }

    /**
     * Näyttää tuloslistan
     */
    async function showLeaderboard() {
        showScreen('leaderboard');

        // Näytä latausindikaattori
        elements.leaderboardBody.innerHTML = '';
        elements.leaderboardLoading.classList.add('active');

        try {
            const result = await window.SupabaseAPI.getLeaderboard(5);

            if (result.success) {
                renderLeaderboard(result.data);
            } else {
                showNotification('Tuloslistaa ei voitu ladata', 'error');
                elements.leaderboardBody.innerHTML = '<tr><td colspan="3" class="leaderboard-empty">Tuloslista ei ole käytettävissä</td></tr>';
            }

        } catch (error) {
            console.error('Leaderboard-hakuvirhe:', error);
            elements.leaderboardBody.innerHTML = '<tr><td colspan="3" class="leaderboard-empty">Virhe ladattaessa tuloksia</td></tr>';
        } finally {
            elements.leaderboardLoading.classList.remove('active');
        }
    }

    /**
     * Renderöi tuloslistan
     * @param {Array} scores - Tulokset
     */
    function renderLeaderboard(scores) {
        elements.leaderboardBody.innerHTML = '';

        if (!scores || scores.length === 0) {
            elements.leaderboardBody.innerHTML = '<tr><td colspan="3" class="leaderboard-empty">Ei vielä tuloksia</td></tr>';
            return;
        }

        scores.forEach((entry, index) => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${escapeHtml(entry.player_name || entry.name || 'Nimetön')}</td>
                <td>${entry.score}</td>
            `;
            
            elements.leaderboardBody.appendChild(row);
        });
    }

    // ============================================
    // PELIN NOLLAUS
    // ============================================

    /**
     * Nollaa pelin aloitustilaan
     */
    function resetGame() {
        // Nollaa tila
        gameState.questions = [];
        gameState.currentQuestionIndex = 0;
        gameState.totalScore = 0;
        gameState.isAnswered = false;

        // Tyhjennä ajastin
        stopTimer();

        // Siirry aloitunäkymään
        showScreen('start');
    }

    // ============================================
    // APUFUNKTIOT
    // ============================================

    /**
     * Näyttää ilmoituksen käyttäjälle
     * @param {string} message - Viesti
     * @param {string} type - Tyyppi ('error', 'warning', 'info')
     */
    function showNotification(message, type = 'info') {
        // Luo notification-elementti jos ei ole
        let notification = document.getElementById('game-notification');
        
        if (!notification) {
            notification = document.createElement('div');
            notification.id = 'game-notification';
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                padding: 16px 24px;
                border-radius: 12px;
                font-weight: 600;
                z-index: 2000;
                opacity: 0;
                transition: opacity 0.3s ease;
                max-width: 80%;
                text-align: center;
            `;
            document.body.appendChild(notification);
        }

        const colors = {
            error: '#ef4444',
            warning: '#f59e0b',
            info: '#0284c7'
        };

        notification.style.backgroundColor = colors[type] || colors.info;
        notification.style.color = 'white';
        notification.textContent = message;
        notification.style.opacity = '1';

        // Piilota 3 sekunnin kuluttua
        setTimeout(() => {
            notification.style.opacity = '0';
        }, 3000);
    }

    /**
     * Erottaa HTML-merkit
     * @param {string} text - Teksti
     * @returns {string} Erotettu teksti
     */
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    /**
     * Vie notification-funktio globaaliin käyttöön
     */
    window.showGameNotification = showNotification;

    // ============================================
    // KÄYNNISTYS
    // ============================================

    // Käynnistä alustus kun DOM on valmis
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
