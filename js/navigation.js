let isScrolling = false;

function initNavigation() {
    // Set up anchor link navigation
    setupAnchorLinks();
    
    // Set up active section detection
    setupActiveSectionDetection();
    
    // Set up resize handler for menu adjustments
    setupResizeHandler();
}

function setupAnchorLinks() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                const mobileMenuPanel = document.getElementById('mobile-menu-panel');
                if (mobileMenuPanel.classList.contains('active')) {
                    mobileMenuPanel.classList.remove('active');
                    document.body.style.overflow = '';
                }
                
                // Scroll to target element
                scrollToElement(targetElement);
                
                // Update active menu item
                updateActiveMenuItem(targetId.substring(1));
            }
        });
    });
}

function scrollToElement(element) {
    // Calculate offset considering fixed header/menu
    const offsetTop = element.offsetTop - 120; // Adjust for menu height
    
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
    
    // Prevent multiple scrolls from happening simultaneously
    isScrolling = true;
    setTimeout(() => {
        isScrolling = false;
    }, 1000);
}

function updateActiveMenuItem(activeSectionId) {
    // Remove active class from all menu items
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to current section's menu item
    const activeLink = document.querySelector(`a[data-section="${activeSectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

function setupActiveSectionDetection() {
    // Create intersection observer to detect which section is active
    const sections = document.querySelectorAll('.section[id]');
    
    const observer = new IntersectionObserver((entries) => {
        if (isScrolling) return; // Skip if we're currently scrolling programmatically
        
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                updateActiveMenuItem(sectionId);
            }
        });
    }, {
        threshold: 0.5, // Trigger when half of the section is visible
        rootMargin: '-120px 0px -50% 0px' // Adjust for header height
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

function setupResizeHandler() {
    let resizeTimer;
    
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Re-initialize navigation components after resize
            setupActiveSectionDetection();
        }, 250);
    });
}

// Export function for main.js
window.initNavigation = initNavigation;