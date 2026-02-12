let translations = {};

async function initLanguage() {
    try {
        // Load both language files
        const [enData, ruData] = await Promise.all([
            fetch('/lang/en.json').then(response => response.json()),
            fetch('/lang/ru.json').then(response => response.json())
        ]);
        
        translations = {
            en: enData,
            ru: ruData
        };
        
        // Determine language to use
        const savedLanguage = localStorage.getItem('language');
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        const browserLang = navigator.language.startsWith('ru') ? 'ru' : 'en';
        
        let languageToUse = 'en'; // Default to English
        
        if (urlLang && ['en', 'ru'].includes(urlLang)) {
            languageToUse = urlLang;
        } else if (savedLanguage && ['en', 'ru'].includes(savedLanguage)) {
            languageToUse = savedLanguage;
        } else if (browserLang && ['en', 'ru'].includes(browserLang)) {
            languageToUse = browserLang;
        }
        
        // Update the language switcher display
        const langSwitcher = document.getElementById('language-switcher');
        if (langSwitcher) {
            langSwitcher.querySelector('.current-lang').textContent = languageToUse.toUpperCase();
        }
        
        // Apply the selected language
        applyTranslations(languageToUse);
        
    } catch (error) {
        console.error('Error loading language files:', error);
    }
}

function applyTranslations(lang) {
    if (!translations[lang]) {
        console.error(`Translations for ${lang} not loaded`);
        return;
    }
    
    // Update all translatable elements
    const translatableElements = document.querySelectorAll('[data-i18n]');
    
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(translations[lang], key);
        
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update page title
    const titleTranslation = getNestedTranslation(translations[lang], 'pageTitle');
    if (titleTranslation) {
        document.title = titleTranslation;
    }
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    const descriptionTranslation = getNestedTranslation(translations[lang], 'pageDescription');
    if (metaDescription && descriptionTranslation) {
        metaDescription.setAttribute('content', descriptionTranslation);
    }
}

function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => {
        return current && current[key] !== undefined ? current[key] : null;
    }, obj);
}

// Add event listener for language switcher
document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById('language-switcher');
    
    if (languageSwitcher) {
        languageSwitcher.addEventListener('click', () => {
            const currentLang = localStorage.getItem('language') || 'en';
            const newLang = currentLang === 'en' ? 'ru' : 'en';
            
            localStorage.setItem('language', newLang);
            
            // Update the displayed language
            languageSwitcher.querySelector('.current-lang').textContent = newLang.toUpperCase();
            
            // Apply translations
            applyTranslations(newLang);
        });
    }
});

// Export functions for main.js
window.initLanguage = initLanguage;
window.applyTranslations = applyTranslations;