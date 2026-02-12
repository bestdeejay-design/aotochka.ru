// Language switcher functionality
document.addEventListener('DOMContentLoaded', function() {
    // Load translations
    let translations = {};
    let currentLang = localStorage.getItem('language') || 'ru';
    
    async function loadTranslations() {
        try {
            const response = await fetch(`/lang/${currentLang}.json`);
            if (!response.ok) {
                throw new Error(`Failed to load ${currentLang}.json`);
            }
            translations = await response.json();
            applyTranslations();
        } catch (error) {
            console.error('Error loading translations:', error);
            // Fallback to English if Russian file is not found
            if (currentLang === 'ru') {
                currentLang = 'en';
                localStorage.setItem('language', 'en');
                updateLanguageButtons();
                loadTranslations();
            }
        }
    }
    
    function applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[key];
                } else {
                    element.textContent = translations[key];
                }
            }
        });
    }
    
    // Update language buttons UI
    function updateLanguageButtons() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === currentLang) {
                btn.classList.add('active');
            }
        });
    }
    
    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const newLang = this.getAttribute('data-lang');
            
            if (newLang !== currentLang) {
                currentLang = newLang;
                localStorage.setItem('language', newLang);
                
                // Update button states
                updateLanguageButtons();
                
                // Reload translations
                loadTranslations();
            }
        });
    });
    
    // Initialize
    updateLanguageButtons();
    loadTranslations();
});