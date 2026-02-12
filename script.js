// AO Tochka Corporate Website - Advanced JavaScript

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');
const statNumbers = document.querySelectorAll('.stat-number');
const solutionCards = document.querySelectorAll('.solution-card');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeLanguage();
    initializeAnimations();
    initializeCounters();
    initializeEventListeners();
    initializeGSAPAnimations();
});

// Theme Toggle Functionality
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        themeToggle.textContent = '🌙';
    }
    
    themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    if (isDarkMode) {
        document.body.classList.remove('dark-mode');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
}

// Language Toggle Functionality
function initializeLanguage() {
    const savedLang = localStorage.getItem('language') || 'ru';
    
    if (savedLang === 'en') {
        langToggle.textContent = 'EN';
    } else {
        langToggle.textContent = 'RU';
    }
    
    langToggle.addEventListener('click', toggleLanguage);
}

function toggleLanguage() {
    const isEnglish = langToggle.textContent === 'EN';
    
    if (isEnglish) {
        langToggle.textContent = 'RU';
        localStorage.setItem('language', 'ru');
        // In a real implementation, we would swap the content here
    } else {
        langToggle.textContent = 'EN';
        localStorage.setItem('language', 'en');
        // In a real implementation, we would swap the content here
    }
}

// Mobile Menu Toggle
function initializeEventListeners() {
    menuToggle.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Add scroll effect to header
    window.addEventListener('scroll', handleHeaderOnScroll);
}

function toggleMobileMenu() {
    navMenu.classList.toggle('active');
}

function handleHeaderOnScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
    
    // Update for dark mode
    if (document.body.classList.contains('dark-mode')) {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    }
}

// Initialize Animation Effects
function initializeAnimations() {
    // Add hover effects to solution cards
    solutionCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe various sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Counter Animation for Statistics
function initializeCounters() {
    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // ms
        const stepTime = Math.abs(Math.floor(duration / target));
        
        let current = 0;
        const increment = target > 0 ? 1 : -1;
        const timer = setInterval(() => {
            current += increment;
            element.textContent = current.toLocaleString();
            
            if (current === target) {
                clearInterval(timer);
            }
        }, stepTime);
    };
    
    // Only start counters when they come into view
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    });
    
    statNumbers.forEach(number => {
        counterObserver.observe(number);
    });
}

// GSAP Animations
function initializeGSAPAnimations() {
    // Register GSAP plugins if available
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        // Animate hero section on load
        gsap.from('.hero-title', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        });
        
        gsap.from('.hero-subtitle', {
            duration: 1,
            y: 30,
            opacity: 0,
            delay: 0.2,
            ease: 'power3.out'
        });
        
        gsap.from('.cta-buttons', {
            duration: 1,
            y: 30,
            opacity: 0,
            delay: 0.4,
            ease: 'power3.out'
        });
        
        // Animate sections on scroll
        gsap.utils.toArray('section').forEach(section => {
            gsap.from(section, {
                duration: 1,
                y: 50,
                opacity: 0,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%'
                }
            });
        });
        
        // Animate solution cards individually
        gsap.utils.toArray('.solution-card').forEach((card, i) => {
            gsap.from(card, {
                duration: 0.8,
                y: 30,
                opacity: 0,
                delay: i * 0.1,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%'
                }
            });
        });
        
        // Ecosystem diagram animation
        gsap.from('.ecosystem-center', {
            duration: 1.5,
            scale: 0,
            rotation: 180,
            ease: 'elastic.out(1, 0.3)',
            scrollTrigger: {
                trigger: '.ecosystem',
                start: 'top 70%'
            }
        });
        
        gsap.from('.branch', {
            duration: 1,
            y: 50,
            opacity: 0,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.ecosystem',
                start: 'top 70%'
            }
        });
        
        // Flow animations
        gsap.to('.flow-1', {
            duration: 3,
            x: '100%',
            repeat: -1,
            ease: 'none',
            scrollTrigger: {
                trigger: '.ecosystem',
                start: 'top 80%'
            }
        });
        
        gsap.to('.flow-2', {
            duration: 3,
            x: '100%',
            repeat: -1,
            ease: 'none',
            delay: 1,
            scrollTrigger: {
                trigger: '.ecosystem',
                start: 'top 80%'
            }
        });
        
        gsap.to('.flow-3', {
            duration: 3,
            x: '100%',
            repeat: -1,
            ease: 'none',
            delay: 2,
            scrollTrigger: {
                trigger: '.ecosystem',
                start: 'top 80%'
            }
        });
    }
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Account for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Form Validation (if any forms are added later)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Performance Optimization: Lazy Loading Images
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = [].slice.call(document.querySelectorAll('img[data-src]'));
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.setAttribute('src', img.getAttribute('data-src'));
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(function(img) {
            imageObserver.observe(img);
        });
    }
});

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// Service Worker Registration for Offline Capability
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registered with scope:', registration.scope);
            })
            .catch(function(error) {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}

// Additional utility functions
const Utils = {
    // Debounce function for performance
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Throttle function
    throttle: (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    // Check if element is in viewport
    isInViewport: (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

// Enhanced scroll handling with throttling
const throttledScrollHandler = Utils.throttle(handleHeaderOnScroll, 100);
window.addEventListener('scroll', throttledScrollHandler);

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Utils };
}