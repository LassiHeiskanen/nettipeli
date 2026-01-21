/**
 * Kylmätekniikkapeli - Virtuaalinäppäimistö
 * Yksinkertainen ja toimiva versio
 */

(function() {
    'use strict';

    // ============================================
    // NÄPPÄIMISTÖN TILA
    // ============================================

    var keyboardState = {
        isVisible: false,
        currentMode: 'text',
        activeInput: null,
        capsLock: false
    };

    // ============================================
    // DOM-ELEMENTIT
    // ============================================

    var elements = {};

    // ============================================
    // ALUSTUS
    // ============================================

    function init() {
        console.log('Virtuaalinäppäimistö: Alustetaan...');
        cacheElements();
        bindEvents();
        console.log('Virtuaalinäppäimistö: Alustus valmis');
    }

    function cacheElements() {
        elements.overlay = document.getElementById('keyboard-overlay');
        elements.textKeyboard = document.getElementById('text-keyboard');
        elements.numberKeyboard = document.getElementById('number-keyboard');
        elements.inputName = document.getElementById('player-name');
        elements.inputPhone = document.getElementById('player-phone');
        elements.triggerBtns = document.querySelectorAll('.input-trigger-btn');
    }

    function bindEvents() {
        // Trigger-napit
        elements.triggerBtns.forEach(function(btn) {
            btn.addEventListener('click', handleTriggerClick, false);
        });

        // Sulje näppäimistö kun klikataan overlayta
        if (elements.overlay) {
            elements.overlay.addEventListener('click', handleOverlayClick, false);
            
            // Näppäimistön näppäimet - event delegation
            elements.overlay.addEventListener('click', function(e) {
                var keyBtn = e.target.closest('.key');
                if (keyBtn) {
                    e.preventDefault();
                    e.stopPropagation();
                    var key = keyBtn.getAttribute('data-key');
                    var mode = keyBtn.getAttribute('data-mode');
                    handleKeyPress(key, mode);
                }
            }, false);
        }

        // Sulje ESC-näppäimellä
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeKeyboard();
            }
        }, false);
    }

    // ============================================
    // TAPAHTUMAKÄSITTELIJÄT
    // ============================================

    function handleTriggerClick(e) {
        e.preventDefault();
        e.stopPropagation();

        var btn = e.currentTarget;
        var inputType = btn.getAttribute('data-input');
        openKeyboard(inputType);
    }

    function handleOverlayClick(e) {
        // Älä sulje jos klikattiin näppäimistöä
        if (e.target.closest('.keyboard-container')) {
            return;
        }
        closeKeyboard();
    }

    // ============================================
    // NÄPPÄIMISTÖN LOGIIKKA
    // ============================================

    function openKeyboard(inputType) {
        if (!elements.overlay) {
            console.error('Virtuaalinäppäimistö: Overlay-elementtiä ei löydy');
            return;
        }

        // Päivitä tila
        keyboardState.activeInput = inputType;
        keyboardState.currentMode = inputType === 'phone' ? 'number' : 'text';
        keyboardState.capsLock = false;

        // Piilota molemmat näppäimistöt
        elements.textKeyboard.style.display = 'none';
        elements.numberKeyboard.style.display = 'none';

        // Näytä vain oikea näppäimistö
        if (keyboardState.currentMode === 'number') {
            elements.numberKeyboard.style.display = 'flex';
        } else {
            elements.textKeyboard.style.display = 'flex';
        }

        // Näytä overlay
        elements.overlay.style.display = 'block';
        elements.overlay.classList.add('visible');
        keyboardState.isVisible = true;

        console.log('Virtuaalinäppäimistö: Näkyvissä, tila = ' + keyboardState.currentMode);
    }

    function closeKeyboard() {
        if (!elements.overlay) return;

        elements.overlay.classList.remove('visible');
        keyboardState.isVisible = false;
        keyboardState.activeInput = null;

        // Piilota overlay animaation jälkeen
        setTimeout(function() {
            if (!keyboardState.isVisible) {
                elements.overlay.style.display = 'none';
            }
        }, 300);

        console.log('Virtuaalinäppäimistö: Suljettu');
    }

    // ============================================
    // NÄPPÄIMISTÖN TOIMINNOT
    // ============================================

    function handleKeyPress(key, mode) {
        var input = keyboardState.activeInput === 'phone' ? elements.inputPhone : elements.inputName;
        if (!input) return;

        var currentValue = input.value;

        switch (key) {
            case 'backspace':
                input.value = currentValue.slice(0, -1);
                break;
            case 'space':
                input.value = currentValue + ' ';
                break;
            case 'caps':
                keyboardState.capsLock = !keyboardState.capsLock;
                updateCapsLockUI();
                break;
            case 'enter':
                closeKeyboard();
                validateSubmit();
                break;
            case 'clear':
                input.value = '';
                break;
            default:
                // Lisää merkki
                var charToAdd = keyboardState.capsLock && mode === 'text'
                    ? key.toUpperCase()
                    : key;
                input.value = currentValue + charToAdd;

                // Caps-lock pois yhden merkin jälkeen
                if (keyboardState.capsLock && mode === 'text') {
                    keyboardState.capsLock = false;
                    updateCapsLockUI();
                }
                break;
        }

        // Visuaalinen palaute
        validateSubmit();
    }

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

    function validateSubmit() {
        var submitBtn = document.getElementById('submit-score-btn');
        var nameValue = elements.inputName ? elements.inputName.value.trim() : '';
        if (submitBtn) {
            submitBtn.disabled = nameValue.length === 0;
        }
    }

    // ============================================
    // JULKISET FUNKTIOT
    // ============================================

    window.VirtualKeyboard = {
        init: init,
        showTextKeyboard: function() { openKeyboard('name'); },
        showNumberKeyboard: function() { openKeyboard('phone'); },
        hideKeyboard: closeKeyboard
    };

    // ============================================
    // KÄYNNISTYS
    // ============================================

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
