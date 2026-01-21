/**
 * Kylmätekniikkapeli - Virtuaalinäppäimistö
 * 
 * Tämä moduuli toteuttaa sovelluksen oman virtuaalinäppäimistön,
 * joka toimii iPadilla ilman laitteen omaa näppäimistöä.
 */

(function() {
    'use strict';

    // ============================================
    // NÄPPÄIMISTÖN TILA
    // ============================================

    const keyboardState = {
        isVisible: false,
        currentMode: 'text', // 'text' tai 'number'
        activeInput: null, // 'name' tai 'phone'
        capsLock: false,
        inputValue: ''
    };

    // ============================================
    // DOM-ELEMENTIT
    // ============================================

    const elements = {};

    // ============================================
    // NÄPPÄIMISTÖN ASETUKSET
    // ============================================

    const keyboardConfig = {
        text: {
            rows: [
                ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'backspace'],
                ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
                ['caps', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'backspace'],
                ['ä', 'ö', 'å', 'space', 'enter']
            ],
            specialKeys: {
                'backspace': { icon: '⌫', action: 'backspace' },
                'caps': { icon: '⇧', action: 'caps' },
                'space': { label: 'Välilyönti', action: 'space' },
                'enter': { label: 'ENTER', action: 'enter', class: 'key-enter' }
            }
        },
        number: {
            rows: [
                ['1', '2', '3'],
                ['4', '5', '6'],
                ['7', '8', '9'],
                ['clear', '0', 'enter']
            ],
            specialKeys: {
                'clear': { label: 'TYHJENNÄ', action: 'clear', class: 'key-action' },
                'enter': { label: 'ENTER', action: 'enter', class: 'key-enter' }
            }
        }
    };

    // ============================================
    // ALUSTUS
    // ============================================

    /**
     * Alustaa virtuaalinäppäimistön
     */
    function init() {
        console.log('Virtuaalinäppäimistö: Alustetaan...');
        cacheElements();
        buildKeyboards();
        bindEvents();
        preventNativeKeyboard();
        console.log('Virtuaalinäppäimistö: Alustus valmis');
    }

    /**
     * Tallentaa viittaukset DOM-elementteihin
     */
    function cacheElements() {
        elements.overlay = document.getElementById('keyboard-overlay');
        elements.textKeyboard = document.getElementById('text-keyboard');
        elements.numberKeyboard = document.getElementById('number-keyboard');
        elements.inputName = document.getElementById('player-name');
        elements.inputPhone = document.getElementById('player-phone');
        elements.triggerBtns = document.querySelectorAll('.input-trigger-btn');
        elements.form = document.getElementById('player-form');
    }

    /**
     * Sitoo tapahtumakuuntelijat
     */
    function bindEvents() {
        // Trigger-napit (näytä näppäimistö -napit)
        elements.triggerBtns.forEach(function(btn) {
            // Käytä click-tapahtumaa varmistaaksemme toimivuuden
            btn.addEventListener('click', handleTriggerClick, false);
        });

        // Sulje näppäimistö kun klikataan overlayta
        if (elements.overlay) {
            elements.overlay.addEventListener('click', handleOverlayClick, false);
        }

        // Estä formin submit
        if (elements.form) {
            elements.form.addEventListener('submit', handleFormSubmit, false);
        }

        // Sulje näppäimistö ESC-näppäimellä
        document.addEventListener('keydown', handleKeyDown, false);
    }

    // ============================================
    // NÄPPÄIMISTÖN RAKENTAMINEN
    // ============================================

    /**
     * Rakentaa näppäimistön näppäimet dynaamisesti
     */
    function buildKeyboards() {
        if (elements.textKeyboard) {
            buildKeyboardRows('text', elements.textKeyboard, keyboardConfig.text.rows);
        }
        if (elements.numberKeyboard) {
            buildKeyboardRows('number', elements.numberKeyboard, keyboardConfig.number.rows);
        }
    }

    /**
     * Rakentaa yhden näppäimistorivin
     */
    function buildKeyboardRows(mode, container, rows) {
        if (!container) return;
        
        container.innerHTML = '';

        rows.forEach(function(row) {
            const rowElement = document.createElement('div');
            rowElement.className = 'keyboard-row';

            row.forEach(function(key) {
                const keyConfig = keyboardConfig[mode].specialKeys[key];
                const keyElement = createKeyElement(key, keyConfig, mode);
                rowElement.appendChild(keyElement);
            });

            container.appendChild(rowElement);
        });
    }

    /**
     * Luo yksittäisen näppäinelementin
     */
    function createKeyElement(key, config, mode) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'key';
        button.setAttribute('data-key', key);
        button.setAttribute('data-mode', mode);

        // Aseta näppäimen sisältö
        if (config) {
            if (config.icon) {
                button.innerHTML = config.icon;
            } else {
                button.textContent = config.label || key;
            }
            if (config.class) {
                var classes = config.class.split(' ');
                classes.forEach(function(cls) {
                    button.classList.add(cls);
                });
            }
        } else {
            button.textContent = key;
        }

        // Lisää click-tapahtumakuuntelija
        button.addEventListener('click', handleKeyPress, false);

        return button;
    }

    // ============================================
    // TAPAHTUMAKÄSITTELIJÄT
    // ============================================

    /**
     * Käsittelee trigger-napin painalluksen
     */
    function handleTriggerClick(event) {
        event.preventDefault();
        event.stopPropagation();

        var btn = event.currentTarget;
        var inputType = btn.getAttribute('data-input');
        
        console.log('Virtuaalinäppäimistö: Avataan ' + inputType + '-näppäimistö');
        openKeyboard(inputType);
    }

    /**
     * Käsittelee näppäimen painalluksen
     */
    function handleKeyPress(event) {
        event.preventDefault();
        event.stopPropagation();

        var btn = event.currentTarget;
        var key = btn.getAttribute('data-key');
        var mode = btn.getAttribute('data-mode');
        var config = keyboardConfig[mode].specialKeys[key];

        // Käsittele erikoisnäppäimet
        if (config && config.action) {
            handleSpecialKey(config.action);
        } else {
            // Tavallinen merkki
            handleCharacter(key);
        }

        // Visuaalinen palaute
        animateKeyPress(btn);
    }

    /**
     * Käsittelee näppäimistön näppäimet
     */
    function handleKeyDown(event) {
        if (!keyboardState.isVisible) return;

        if (event.key === 'Escape') {
            closeKeyboard();
        } else if (event.key === 'Enter') {
            closeKeyboard();
            validateAndEnableSubmit();
        } else if (event.key === 'Backspace') {
            handleCharacter('backspace');
        } else if (event.key === ' ') {
            handleCharacter(' ');
            event.preventDefault();
        }
    }

    /**
     * Käsittelee overlay-klikkauksen (sulje näppäimistö)
     */
    function handleOverlayClick(event) {
        // Älä sulje jos klikattiin näppäimistöä
        if (event.target.closest('.keyboard-container')) {
            return;
        }
        closeKeyboard();
    }

    /**
     * Käsittelee formin lähetyksen
     */
    function handleFormSubmit(event) {
        event.preventDefault();
    }

    // ============================================
    // NÄPPÄIMISTÖN LOGIIKKA
    // ============================================

    /**
     * Avaa virtuaalinäppäimistön
     */
    function openKeyboard(inputType) {
        if (!elements.overlay) {
            console.error('Virtuaalinäppäimistö: Overlay-elementtiä ei löydy');
            return;
        }

        // Päivitä tila
        keyboardState.activeInput = inputType;
        keyboardState.currentMode = inputType === 'phone' ? 'number' : 'text';
        keyboardState.inputValue = getCurrentInputValue();

        // Piilota molemmat näppäimistöt ensin
        elements.textKeyboard.classList.add('hidden');
        elements.numberKeyboard.classList.add('hidden');

        // Näytä vain oikea näppäimistö
        if (keyboardState.currentMode === 'number') {
            elements.numberKeyboard.classList.remove('hidden');
        } else {
            elements.textKeyboard.classList.remove('hidden');
        }

        // Näytä overlay
        elements.overlay.classList.add('visible');
        keyboardState.isVisible = true;

        // Päivitä caps-lock tila
        updateCapsLockUI();
        
        console.log('Virtuaalinäppäimistö: Näkyvissä, tila = ' + keyboardState.currentMode);
    }

    /**
     * Sulkee virtuaalinäppäimistön
     */
    function closeKeyboard() {
        if (!elements.overlay) return;

        elements.overlay.classList.remove('visible');
        keyboardState.isVisible = false;
        keyboardState.activeInput = null;
        
        console.log('Virtuaalinäppäimistö: Suljettu');
    }

    /**
     * Käsittelee erikoisnäppäimen
     */
    function handleSpecialKey(action) {
        switch (action) {
            case 'backspace':
                handleCharacter('backspace');
                break;
            case 'caps':
                toggleCapsLock();
                break;
            case 'space':
                handleCharacter(' ');
                break;
            case 'enter':
                closeKeyboard();
                validateAndEnableSubmit();
                break;
            case 'clear':
                clearInput();
                break;
        }
    }

    /**
     * Käsittelee merkin syötön
     */
    function handleCharacter(char) {
        var newValue = keyboardState.inputValue;

        switch (char) {
            case 'backspace':
                newValue = newValue.slice(0, -1);
                break;
            case 'space':
                newValue += ' ';
                break;
            default:
                // Lisää merkki - huomioi caps-lock
                var charToAdd = (keyboardState.capsLock && keyboardState.currentMode === 'text')
                    ? char.toUpperCase()
                    : char;
                newValue += charToAdd;

                // Caps-lock kytkeytyy automaattisesti pois yhden merkin jälkeen
                if (keyboardState.capsLock && keyboardState.currentMode === 'text') {
                    keyboardState.capsLock = false;
                    updateCapsLockUI();
                }
                break;
        }

        updateInputValue(newValue);
    }

    /**
     * Tyhjentää syötekentän
     */
    function clearInput() {
        updateInputValue('');
    }

    /**
     * Vaihtaa caps-lock tilaa
     */
    function toggleCapsLock() {
        keyboardState.capsLock = !keyboardState.capsLock;
        updateCapsLockUI();
    }

    /**
     * Päivittää caps-lock indikaattorin
     */
    function updateCapsLockUI() {
        if (!elements.textKeyboard) return;
        
        var capsKey = elements.textKeyboard.querySelector('[data-key="caps"]');
        if (capsKey) {
            if (keyboardState.capsLock) {
                capsKey.style.background = '#0284c7';
                capsKey.style.color = 'white';
            } else {
                capsKey.style.background = '';
                capsKey.style.color = '';
            }
        }
    }

    // ============================================
    // SYÖTTEKENTTÄN LOGIIKKA
    // ============================================

    /**
     * Hakee nykyisen syötekentän arvon
     */
    function getCurrentInputValue() {
        var input = keyboardState.activeInput === 'phone'
            ? elements.inputPhone
            : elements.inputName;
        return input ? input.value : '';
    }

    /**
     * Päivittää syötekentän arvon
     */
    function updateInputValue(value) {
        keyboardState.inputValue = value;

        var input = keyboardState.activeInput === 'phone'
            ? elements.inputPhone
            : elements.inputName;

        if (input) {
            input.value = value;

            // Käynnistä validointi
            validateAndEnableSubmit();
        }
    }

    /**
     * Validoi syötteen ja mahdollistaa submit-napin
     */
    function validateAndEnableSubmit() {
        var nameValue = elements.inputName.value.trim();
        var submitBtn = document.getElementById('submit-score-btn');

        if (submitBtn) {
            submitBtn.disabled = nameValue.length === 0;
        }
    }

    // ============================================
    // NATIIVIN NÄPPÄIMISTÖN ESTÄMINEN
    // ============================================

    /**
     * Estää natiivin näppäimistön avautumisen
     */
    function preventNativeKeyboard() {
        var inputs = document.querySelectorAll('input');
        
        inputs.forEach(function(input) {
            // Aseta input readonly-tyyppiseksi (ei oikeasti readonly, mutta estää näppäimistön)
            input.setAttribute('readonly', 'readonly');
            input.setAttribute('autocomplete', 'off');
            input.setAttribute('autocorrect', 'off');
            input.setAttribute('autocapitalize', 'off');
            input.setAttribute('spellcheck', 'false');

            // Estä focus
            input.addEventListener('focus', function(e) {
                e.preventDefault();
                e.stopPropagation();
                this.blur();
            }, true);

            // Estä click - ohjaa virtuaalinäppäimistöön
            input.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                if (this.id === 'player-name') {
                    openKeyboard('name');
                } else if (this.id === 'player-phone') {
                    openKeyboard('phone');
                }
            }, true);
        });
    }

    // ============================================
    // VISUAALISET EFEKTIT
    // ============================================

    /**
     * Animoi näppäimen painalluksen
     */
    function animateKeyPress(keyElement) {
        keyElement.style.transform = 'scale(0.95)';
        keyElement.style.opacity = '0.8';

        setTimeout(function() {
            keyElement.style.transform = '';
            keyElement.style.opacity = '';
        }, 100);
    }

    // ============================================
    // JULKISET API-FUNKTIOT
    // ============================================

    window.VirtualKeyboard = {
        init: init,
        showTextKeyboard: function() { openKeyboard('name'); },
        showNumberKeyboard: function() { openKeyboard('phone'); },
        hideKeyboard: closeKeyboard,
        isKeyboardVisible: function() { return keyboardState.isVisible; },
        // Testausfunktio - avaa näppäimistö konsolista
        test: function() {
            console.log('Virtuaalinäppäimistö testi:');
            console.log('- Overlay elementti:', !!elements.overlay);
            console.log('- Tekstinäppäimistö:', !!elements.textKeyboard);
            console.log('- Numeronäppäimistö:', !!elements.numberKeyboard);
            console.log('- Nimi-input:', !!elements.inputName);
            console.log('- Puhelin-input:', !!elements.inputPhone);
            console.log('- Trigger-nappeja:', elements.triggerBtns ? elements.triggerBtns.length : 0);
            console.log('- Näkyvissä:', keyboardState.isVisible);
            
            // Testaa avaamista
            openKeyboard('name');
        }
    };

    // ============================================
    // KÄYNNISTÄ ALUSTUS
    // ============================================

    // Käynnistä alustus kun DOM on valmis
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Piilota osoitepalkki iOS Safarissa
window.addEventListener('load', function() {
    setTimeout(function() {
        window.scrollTo(0, 1);
    }, 100);
});

})();
