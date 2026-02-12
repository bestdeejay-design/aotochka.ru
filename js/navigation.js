// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Desktop menu click handlers
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all items
            menuItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                if (window.innerWidth < 1024) {
                    closeMobileMenu();
                }
                
                // Scroll to section
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Mobile menu functionality
    const hamburger = document.getElementById('hamburgerBtn');
    const menuPanel = document.getElementById('mobileMenuPanel');
    const closeBtn = document.getElementById('mobileMenuClose');
    const mobileMenuButtons = document.querySelectorAll('.mobile-menu-btn');
    
    if (hamburger && menuPanel && closeBtn) {
        // Open menu
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            menuPanel.style.display = 'block';
            setTimeout(() => {
                menuPanel.classList.add('active');
            }, 10);
            document.body.style.overflow = 'hidden'; // prevent background scroll
        });
        
        // Close menu
        function closeMobileMenu() {
            menuPanel.classList.remove('active');
            setTimeout(() => {
                menuPanel.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 400);
        }
        
        closeBtn.addEventListener('click', closeMobileMenu);
        
        // Close when clicking outside panel
        menuPanel.addEventListener('click', function(e) {
            if (e.target === menuPanel) {
                closeMobileMenu();
            }
        });
        
        // Close when clicking a link
        mobileMenuButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                // Get target from data attribute
                const targetId = this.getAttribute('data-target');
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    closeMobileMenu();
                    
                    // Update active desktop menu item
                    menuItems.forEach(i => i.classList.remove('active'));
                    const desktopMenuItem = document.querySelector(`.menu-item[data-target="${targetId}"]`);
                    if (desktopMenuItem) {
                        desktopMenuItem.classList.add('active');
                    }
                    
                    setTimeout(() => {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 400);
                }
            });
        });
    }
    
    // Active section detection on scroll
    const sections = document.querySelectorAll('.section');
    
    window.addEventListener('scroll', function() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Offset for fixed elements
            if (pageYOffset >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });
        
        // Update desktop menu
        menuItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-target') === currentSection) {
                item.classList.add('active');
            }
        });
        
        // Update mobile menu if needed
        mobileMenuButtons.forEach(button => {
            button.classList.remove('active');
            if (button.getAttribute('data-target') === currentSection) {
                button.classList.add('active');
            }
        });
    });
});