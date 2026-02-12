// GSAP animations initialization
document.addEventListener('DOMContentLoaded', function() {
    // Check if GSAP is loaded
    if (typeof gsap !== 'undefined') {
        // Animate hero section elements on page load
        gsap.from(".hero-title", {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power3.out"
        });
        
        gsap.from(".hero-subtitle", {
            duration: 1,
            y: 30,
            opacity: 0,
            delay: 0.2,
            ease: "power3.out"
        });
        
        // Animate cards when they come into view
        gsap.utils.toArray('.ecosystem-card, .solution-card, .partner-logo, .news-item').forEach(card => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                duration: 0.8,
                y: 50,
                opacity: 0,
                ease: "power2.out"
            });
        });
        
        // Animate technology badges
        gsap.utils.toArray('.tech-badge').forEach((badge, index) => {
            gsap.from(badge, {
                scrollTrigger: {
                    trigger: badge,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                duration: 0.5,
                scale: 0,
                delay: index * 0.1,
                ease: "back.out(1.7)"
            });
        });
        
        // Create a simple animation for the logo in the sidebar
        gsap.to(".logo-image", {
            rotation: 360,
            duration: 20,
            repeat: -1,
            ease: "none",
            paused: !window.matchMedia("(prefers-reduced-motion: no-preference)").matches
        });
    } else {
        console.warn('GSAP library not loaded');
    }
});