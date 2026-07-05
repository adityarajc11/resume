document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. CUSTOM CURSOR GLOW
       ========================================================================== */
    const cursorGlow = document.getElementById('cursorGlow');
    
    if (cursorGlow) {
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = `${e.clientX}px`;
            cursorGlow.style.top = `${e.clientY}px`;
            cursorGlow.style.opacity = '1';
        });

        document.addEventListener('mouseleave', () => {
            cursorGlow.style.opacity = '0';
        });
    }

    /* ==========================================================================
       2. SCROLL HEADER TRANSITION
       ========================================================================== */
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* ==========================================================================
       3. MOBILE NAVIGATION MENU
       ========================================================================== */
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = navToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.replace('fa-bars', 'fa-xmark');
            } else {
                icon.classList.replace('fa-xmark', 'fa-bars');
            }
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                icon.classList.replace('fa-xmark', 'fa-bars');
            });
        });
    }

    /* ==========================================================================
       4. FLOATING SPARKLES BACKGROUND
       ========================================================================== */
    const sparklesBg = document.getElementById('sparklesBg');
    const maxSparkles = 20;

    function createSparkle(x, y, isClick = false) {
        if (!sparklesBg) return;
        
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle-particle');
        
        // Size variation
        const size = Math.random() * (isClick ? 14 : 10) + 6;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        
        // Location
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        
        // Colors: Gold, Pink, Lavender
        const colors = ['#E5C158', '#FF80AB', '#B388FF', '#FFF8F3'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        sparkle.style.backgroundColor = randomColor;
        
        // Apply clip path for sparkle shape
        sparkle.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
        
        // Random drift speed and scale
        const duration = Math.random() * 3 + 2; // 2s to 5s
        sparkle.style.animation = `sparkleFloat ${duration}s ease-in-out forwards`;
        
        sparklesBg.appendChild(sparkle);
        
        // Remove after animation finishes
        setTimeout(() => {
            sparkle.remove();
        }, duration * 1000);
    }

    // Auto-generate sparkles periodically
    if (sparklesBg) {
        setInterval(() => {
            const currentSparkles = sparklesBg.querySelectorAll('.sparkle-particle').length;
            if (currentSparkles < maxSparkles) {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * (document.documentElement.scrollHeight - 100);
                createSparkle(x, y);
            }
        }, 1200);

        // Click burst effect
        document.addEventListener('click', (e) => {
            for (let i = 0; i < 6; i++) {
                const angle = Math.random() * Math.PI * 2;
                const radius = Math.random() * 40 + 10;
                const x = e.pageX + Math.cos(angle) * radius;
                const y = e.pageY + Math.sin(angle) * radius;
                createSparkle(x, y, true);
            }
        });
    }

    /* ==========================================================================
       5. COUNTER ANIMATION (INTERSECTION OBSERVER)
       ========================================================================== */
    const statsSection = document.querySelector('.experience-section');
    const statNumbers = document.querySelectorAll('.stat-number');
    let countersAnimated = false;

    function formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1);
        } else if (num >= 1000) {
            // For values like 17500 -> 17.5, 6500 -> 6.5
            return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1);
        }
        return num;
    }

    function animateCounters() {
        statNumbers.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'), 10);
            const duration = 2000; // 2 seconds
            const startTime = performance.now();

            function updateCounter(currentTime) {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                
                // Ease out quad
                const easeProgress = progress * (2 - progress);
                const currentValue = Math.floor(easeProgress * target);
                
                counter.textContent = formatNumber(currentValue);

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = formatNumber(target);
                }
            }

            requestAnimationFrame(updateCounter);
        });
    }

    if (statsSection && statNumbers.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersAnimated) {
                    animateCounters();
                    countersAnimated = true;
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        observer.observe(statsSection);
    }

    /* ==========================================================================
       6. SCROLL REVEAL ANIMATION
       ========================================================================== */
    const scrollRevealElements = document.querySelectorAll(
        '.strength-card, .stat-card, .timeline-card, .skill-pill, .project-card, .why-card, .testimonial-card, .info-link-card, .contact-form-wrapper'
    );

    // Set initial transition styles
    scrollRevealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    scrollRevealElements.forEach(el => {
        revealObserver.observe(el);
    });

    /* ==========================================================================
       7. CONTACT FORM SUBMISSION
       ========================================================================== */
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');
    const submitBtn = document.getElementById('submitBtn');

    if (contactForm && formResponse) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Disable button during submission
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending Message... 💖';
            
            // Simulate API Request
            setTimeout(() => {
                const name = document.getElementById('name').value;
                
                // Show success message
                formResponse.textContent = `Thank you, ${name}! Your message has been sent successfully. Aditi will reach out soon! 💕`;
                formResponse.className = 'form-response-msg success';
                
                // Reset Form
                contactForm.reset();
                
                // Enable Button
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message ✨';
                
                // Clear message after 5 seconds
                setTimeout(() => {
                    formResponse.textContent = '';
                    formResponse.className = 'form-response-msg';
                }, 6000);
                
            }, 1200);
        });
    }
});
