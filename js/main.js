document.addEventListener('DOMContentLoaded', function() {
    console.log('AO Tochka website initialized');
    
    // Initialize all components
    initTheme();
    initLanguage();
    initNavigation();
    initScrollObserver();
    initGsapAnimations();
    
    // Set up scroll progress bar
    updateScrollProgress();
    window.addEventListener('scroll', updateScrollProgress);
    
    // Set up back to top button
    setupBackToTop();
    
    // Set up mobile menu toggle
    setupMobileMenu();
    
    // Set up theme toggle
    setupThemeToggle();
    
    // Set up language switcher
    setupLanguageSwitcher();
});

function updateScrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('scroll-progress').style.width = scrolled + '%';
}

function setupBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 600) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function setupMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenuPanel = document.getElementById('mobile-menu-panel');
    const closeMobileMenu = document.getElementById('close-mobile-menu');
    const mobileMenuButtons = document.querySelectorAll('.mobile-menu-button');
    
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuPanel.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeMobileMenu.addEventListener('click', () => {
        mobileMenuPanel.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Close menu when clicking outside
    mobileMenuPanel.addEventListener('click', (e) => {
        if (e.target === mobileMenuPanel) {
            mobileMenuPanel.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when selecting a section
    mobileMenuButtons.forEach(button => {
        button.addEventListener('click', () => {
            mobileMenuPanel.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update theme toggle visuals
        updateThemeToggleVisuals(newTheme);
    });
}

function updateThemeToggleVisuals(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    if (theme === 'dark') {
        themeToggle.style.setProperty('--show-sun', 'none');
        themeToggle.style.setProperty('--show-moon', 'block');
    } else {
        themeToggle.style.setProperty('--show-sun', 'block');
        themeToggle.style.setProperty('--show-moon', 'none');
    }
}

function setupLanguageSwitcher() {
    const languageSwitcher = document.getElementById('language-switcher');
    const currentLang = localStorage.getItem('language') || 'en';
    
    languageSwitcher.querySelector('.current-lang').textContent = currentLang.toUpperCase();
    
    languageSwitcher.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'ru' : 'en';
        localStorage.setItem('language', newLang);
        
        // Update the displayed language
        languageSwitcher.querySelector('.current-lang').textContent = newLang.toUpperCase();
        
        // Apply translations
        applyTranslations(newLang);
    });
}

// Placeholder functions that will be implemented in other files
function initTheme() {}
function initLanguage() {}
function initNavigation() {}
function initScrollObserver() {}
function initGsapAnimations() {}
function applyTranslations(lang) {}