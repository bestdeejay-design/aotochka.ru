function initTheme() {
    // Check for saved theme preference or respect OS preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    let themeToApply = 'light';
    
    if (savedTheme) {
        themeToApply = savedTheme;
    } else if (prefersDarkScheme.matches) {
        themeToApply = 'dark';
    }
    
    // Apply the theme
    document.documentElement.setAttribute('data-theme', themeToApply);
    
    // Update theme toggle visuals
    updateThemeToggleVisuals(themeToApply);
}

function updateThemeToggleVisuals(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    if (theme === 'dark') {
        themeToggle.style.setProperty('--show-sun', 'none');
        themeToggle.style.setProperty('--show-moon', 'block');
    } else {
        themeToggle.style.setProperty('--show-sun', 'block');
        themeToggle.style.setProperty('--show-moon', 'none');
    }
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        updateThemeToggleVisuals(newTheme);
    }
});

// Export function for main.js
window.initTheme = initTheme;