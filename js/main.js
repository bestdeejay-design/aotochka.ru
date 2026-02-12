// Main application initialization
document.addEventListener('DOMContentLoaded', function() {
    console.log('AO Tochka website initialized');
    
    // Initialize all components
    initializeSidebarHover();
});

// Initialize sidebar hover expand/collapse functionality
function initializeSidebarHover() {
    const sidebar = document.getElementById('desktopSidebar');
    
    if (!sidebar) return;
    
    // Expand sidebar on hover
    sidebar.addEventListener('mouseenter', function() {
        this.classList.add('expanded');
    });
    
    // Collapse sidebar when mouse leaves
    sidebar.addEventListener('mouseleave', function() {
        // Only collapse if not on mobile
        if (window.innerWidth >= 1024) {
            this.classList.remove('expanded');
        }
    });
}

// Utility function to check if we're on mobile
function isMobile() {
    return window.innerWidth < 1024;
}