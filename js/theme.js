// Theme switcher functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-toggle');
    let currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Set initial icon based on theme
    if (themeToggle) {
        const icon = themeToggle.querySelector('span');
        if (icon) {
            icon.textContent = currentTheme === 'light' ? '🌙' : '☀️';
        }
    }
    
    // Toggle theme
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            currentTheme = currentTheme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', currentTheme);
            localStorage.setItem('theme', currentTheme);
            
            // Update icon
            const icon = this.querySelector('span');
            if (icon) {
                icon.textContent = currentTheme === 'light' ? '🌙' : '☀️';
            }
        });
    }
});