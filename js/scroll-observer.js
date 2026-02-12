function initScrollObserver() {
    // Initialize Intersection Observer for various elements
    setupScrollAnimations();
    setupProgressiveLoading();
}

function setupScrollAnimations() {
    // Define elements that should animate when scrolled into view
    const animatedElements = [
        { selector: '.card', offset: '0 0 0 0' },
        { selector: '.section', offset: '0 0 -100px 0' },
        { selector: '.btn', offset: '0 0 0 0' }
    ];
    
    animatedElements.forEach(elementConfig => {
        const elements = document.querySelectorAll(elementConfig.selector);
        
        elements.forEach(element => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Add animation class when element comes into view
                        entry.target.classList.add('fade-in-slide-up');
                        
                        // Unobserve after animation is triggered
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: elementConfig.offset
            });
            
            observer.observe(element);
        });
    });
}

function setupProgressiveLoading() {
    // Set up lazy loading for images
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                // Only load if it has a data-src attribute
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    
                    // Remove the observer after loading
                    imageObserver.unobserve(img);
                }
                
                // Also handle background images
                if (img.dataset.bgSrc) {
                    img.style.backgroundImage = `url(${img.dataset.bgSrc})`;
                    img.removeAttribute('data-bgSrc');
                    
                    imageObserver.unobserve(img);
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px 0px 50px 0px'
    });
    
    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
    
    // Observe all elements with background images to lazy load
    document.querySelectorAll('[data-bg-src]').forEach(el => {
        imageObserver.observe(el);
    });
}

// Debounced scroll handler for performance
let scrollTimeout;
function debouncedScrollHandler() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        // Update any scroll-dependent UI elements
        updateScrollIndicator();
    }, 10);
}

function updateScrollIndicator() {
    // Update scroll progress indicator if it exists
    const progressIndicator = document.getElementById('scroll-progress');
    if (progressIndicator) {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressIndicator.style.width = `${scrollPercent}%`;
    }
}

// Add scroll event listener with passive option for performance
window.addEventListener('scroll', debouncedScrollHandler, { passive: true });

// Export function for main.js
window.initScrollObserver = initScrollObserver;