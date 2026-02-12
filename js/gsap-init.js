function initGsapAnimations() {
    // Create a timeline for the initial page load animations
    const introTimeline = gsap.timeline();
    
    // Animate the hero section first
    introTimeline.from('.hero-title, .hero-subtitle', {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    // Then animate the rest of the sections with a stagger
    gsap.utils.toArray('.section:not(#hero)').forEach((section, i) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.6,
            y: 30,
            opacity: 0,
            delay: i * 0.1,
            ease: 'power2.out'
        });
    });
    
    // Animate cards when they come into view
    gsap.utils.toArray('.card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.5,
            y: 20,
            opacity: 0,
            ease: 'power2.out'
        });
    });
    
    // Add hover effects to cards using GSAP
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.3,
                y: -4,
                boxShadow: '0 15px 50px rgba(0, 0, 0, 0.12)',
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.3,
                y: 0,
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                ease: 'power2.out'
            });
        });
    });
    
    // Add hover effects to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                duration: 0.2,
                y: -2,
                boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
                ease: 'power2.out'
            });
        });
        
        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                duration: 0.2,
                y: 0,
                boxShadow: 'none',
                ease: 'power2.out'
            });
        });
    });
    
    // Animate the menu items on hover (for desktop)
    if (window.innerWidth >= 1024) {
        document.querySelectorAll('.menu-card').forEach(menuItem => {
            menuItem.addEventListener('mouseenter', () => {
                gsap.to(menuItem, {
                    duration: 0.2,
                    backgroundColor: 'var(--bg-secondary)',
                    ease: 'power2.out'
                });
            });
            
            menuItem.addEventListener('mouseleave', () => {
                gsap.to(menuItem, {
                    duration: 0.2,
                    backgroundColor: 'transparent',
                    ease: 'power2.out'
                });
            });
        });
    }
    
    // Parallax effect for background elements
    gsap.to('.background-blob', {
        x: window.innerWidth * 0.2,
        y: window.innerHeight * 0.1,
        rotation: 360,
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true
        },
        ease: 'none'
    });
}

// Export function for main.js
window.initGsapAnimations = initGsapAnimations;