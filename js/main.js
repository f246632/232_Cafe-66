/* ===================================
   Cafe 66 - Main JavaScript
   Interactive Features & Animations
   =================================== */

(function() {
    'use strict';

    // ===================================
    // Utility Functions
    // ===================================

    const $ = (selector) => document.querySelector(selector);
    const $$ = (selector) => document.querySelectorAll(selector);

    const debounce = (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    // ===================================
    // Navigation
    // ===================================

    const navbar = $('#navbar');
    const navToggle = $('#navToggle');
    const navMenu = $('#navMenu');
    const navLinks = $$('.nav-link');

    // Sticky Navigation on Scroll
    const handleScroll = () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', debounce(handleScroll, 10));

    // Mobile Navigation Toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Smooth Scrolling for Navigation Links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = $(targetId);

            if (targetSection) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // Active Navigation Link Highlight
    // ===================================

    const sections = $$('section[id]');

    const highlightNavigation = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - navbar.offsetHeight - 50;
            const sectionId = section.getAttribute('id');
            const navLink = $(`.nav-link[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    };

    window.addEventListener('scroll', debounce(highlightNavigation, 50));

    // ===================================
    // Scroll Reveal Animation
    // ===================================

    const revealElements = () => {
        const reveals = $$('.reveal');

        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    // Add reveal class to sections
    const addRevealClass = () => {
        const elementsToReveal = [
            ...$$('.about-grid > *'),
            ...$$('.menu-category'),
            ...$$('.gallery-item'),
            ...$$('.info-block'),
            ...$$('.contact-item')
        ];

        elementsToReveal.forEach(el => {
            if (!el.classList.contains('reveal')) {
                el.classList.add('reveal');
            }
        });
    };

    // Initialize reveal animations
    addRevealClass();
    window.addEventListener('scroll', debounce(revealElements, 50));
    window.addEventListener('load', revealElements);

    // ===================================
    // Contact Form Handling
    // ===================================

    const contactForm = $('#contactForm');
    const formMessage = $('#formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Get form data
            const formData = {
                name: $('#name').value.trim(),
                email: $('#email').value.trim(),
                phone: $('#phone').value.trim(),
                message: $('#message').value.trim()
            };

            // Basic validation
            if (!formData.name || !formData.email || !formData.message) {
                showFormMessage('Bitte füllen Sie alle erforderlichen Felder aus.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                showFormMessage('Bitte geben Sie eine gültige E-Mail-Adresse ein.', 'error');
                return;
            }

            // Simulate form submission (replace with actual API call)
            try {
                // In a real implementation, you would send this to a server
                // const response = await fetch('/api/contact', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify(formData)
                // });

                // Simulate success
                await new Promise(resolve => setTimeout(resolve, 1000));

                showFormMessage('Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.', 'success');
                contactForm.reset();

                // Hide success message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);

            } catch (error) {
                showFormMessage('Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.', 'error');
            }
        });
    }

    function showFormMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';

        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // ===================================
    // Lazy Loading Images
    // ===================================

    const lazyLoadImages = () => {
        const images = $$('img[loading="lazy"]');

        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.src; // Trigger load
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        }
    };

    lazyLoadImages();

    // ===================================
    // Back to Top Button (Optional)
    // ===================================

    const createBackToTop = () => {
        const button = document.createElement('button');
        button.innerHTML = '↑';
        button.className = 'back-to-top';
        button.setAttribute('aria-label', 'Back to top');
        button.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 50px;
            height: 50px;
            background-color: var(--primary-color);
            color: white;
            border: none;
            border-radius: 50%;
            font-size: 1.5rem;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        `;

        button.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        document.body.appendChild(button);

        window.addEventListener('scroll', debounce(() => {
            if (window.scrollY > 300) {
                button.style.opacity = '1';
                button.style.visibility = 'visible';
            } else {
                button.style.opacity = '0';
                button.style.visibility = 'hidden';
            }
        }, 100));
    };

    createBackToTop();

    // ===================================
    // Parallax Effect for Hero Section
    // ===================================

    const hero = $('.hero');

    if (hero && window.innerWidth > 768) {
        window.addEventListener('scroll', debounce(() => {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            hero.style.backgroundPositionY = `${scrolled * parallaxSpeed}px`;
        }, 10));
    }

    // ===================================
    // Opening Hours Dynamic Highlight
    // ===================================

    const highlightCurrentDay = () => {
        const daysOfWeek = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
        const today = daysOfWeek[new Date().getDay()];
        const hoursList = $$('.hours-list li');

        hoursList.forEach(item => {
            const dayText = item.querySelector('span:first-child').textContent;
            if (dayText.includes(today)) {
                item.style.backgroundColor = 'var(--background-cream)';
                item.style.fontWeight = '600';
                item.style.color = 'var(--primary-color)';
            }
        });
    };

    highlightCurrentDay();

    // ===================================
    // Performance Monitoring
    // ===================================

    window.addEventListener('load', () => {
        // Log page load time
        if (window.performance && window.performance.timing) {
            const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
            console.log(`Page loaded in ${loadTime}ms`);
        }

        // Trigger initial animations
        revealElements();
    });

    // ===================================
    // Accessibility Enhancements
    // ===================================

    // Keyboard navigation for mobile menu
    if (navToggle) {
        navToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                navToggle.click();
            }
        });
    }

    // Announce page section changes to screen readers
    const announceSection = debounce(() => {
        const currentSection = Array.from(sections).find(section => {
            const rect = section.getBoundingClientRect();
            return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        });

        if (currentSection) {
            const announcement = document.createElement('div');
            announcement.setAttribute('role', 'status');
            announcement.setAttribute('aria-live', 'polite');
            announcement.className = 'sr-only';
            announcement.textContent = `Now viewing: ${currentSection.querySelector('h2')?.textContent || 'section'}`;
            document.body.appendChild(announcement);

            setTimeout(() => announcement.remove(), 1000);
        }
    }, 1000);

    window.addEventListener('scroll', announceSection);

    // ===================================
    // Console Message
    // ===================================

    console.log('%c🎨 Cafe 66 Website', 'font-size: 20px; color: #8B4513; font-weight: bold;');
    console.log('%cWillkommen im Cafe 66!', 'font-size: 14px; color: #2C1810;');

})();
