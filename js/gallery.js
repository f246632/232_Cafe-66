/* ===================================
   Cafe 66 - Gallery JavaScript
   Image Gallery with Modal & Navigation
   =================================== */

(function() {
    'use strict';

    // ===================================
    // Gallery Modal Functionality
    // ===================================

    const modal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('modalImage');
    const modalClose = document.querySelector('.modal-close');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');
    const galleryItems = document.querySelectorAll('.gallery-item');

    let currentImageIndex = 0;
    const images = Array.from(galleryItems).map(item => ({
        src: item.getAttribute('data-src'),
        alt: item.querySelector('img').getAttribute('alt')
    }));

    // ===================================
    // Open Modal
    // ===================================

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            openModal(index);
        });

        // Keyboard accessibility
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.setAttribute('aria-label', `View image ${index + 1} of ${images.length}`);

        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(index);
            }
        });
    });

    function openModal(index) {
        currentImageIndex = index;
        updateModalImage();
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        modalImage.focus();

        // Announce to screen readers
        announceToScreenReader(`Viewing image ${currentImageIndex + 1} of ${images.length}`);
    }

    // ===================================
    // Close Modal
    // ===================================

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';

        // Return focus to the gallery item
        galleryItems[currentImageIndex].focus();
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // ===================================
    // Navigation
    // ===================================

    function showPreviousImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateModalImage();
        announceToScreenReader(`Image ${currentImageIndex + 1} of ${images.length}`);
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateModalImage();
        announceToScreenReader(`Image ${currentImageIndex + 1} of ${images.length}`);
    }

    if (modalPrev) {
        modalPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            showPreviousImage();
        });
    }

    if (modalNext) {
        modalNext.addEventListener('click', (e) => {
            e.stopPropagation();
            showNextImage();
        });
    }

    // ===================================
    // Keyboard Navigation
    // ===================================

    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'block') {
            switch(e.key) {
                case 'Escape':
                    closeModal();
                    break;
                case 'ArrowLeft':
                    showPreviousImage();
                    break;
                case 'ArrowRight':
                    showNextImage();
                    break;
            }
        }
    });

    // ===================================
    // Update Modal Image
    // ===================================

    function updateModalImage() {
        const image = images[currentImageIndex];

        // Add loading state
        modalImage.style.opacity = '0';

        // Preload image
        const img = new Image();
        img.onload = () => {
            modalImage.src = image.src;
            modalImage.alt = image.alt;
            modalImage.style.opacity = '1';
        };
        img.src = image.src;

        // Update navigation button states
        updateNavigationButtons();
    }

    function updateNavigationButtons() {
        // Update aria-labels for accessibility
        if (modalPrev) {
            modalPrev.setAttribute('aria-label', `Previous image (${currentImageIndex} of ${images.length})`);
        }
        if (modalNext) {
            modalNext.setAttribute('aria-label', `Next image (${currentImageIndex + 2} of ${images.length})`);
        }
    }

    // ===================================
    // Touch/Swipe Support
    // ===================================

    let touchStartX = 0;
    let touchEndX = 0;

    modal.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    modal.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next image
                showNextImage();
            } else {
                // Swipe right - previous image
                showPreviousImage();
            }
        }
    }

    // ===================================
    // Image Preloading
    // ===================================

    function preloadImages() {
        images.forEach(image => {
            const img = new Image();
            img.src = image.src;
        });
    }

    // Preload images after page load
    window.addEventListener('load', () => {
        setTimeout(preloadImages, 1000);
    });

    // ===================================
    // Accessibility Announcements
    // ===================================

    function announceToScreenReader(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.style.cssText = `
            position: absolute;
            left: -10000px;
            width: 1px;
            height: 1px;
            overflow: hidden;
        `;
        announcement.textContent = message;
        document.body.appendChild(announcement);

        setTimeout(() => announcement.remove(), 1000);
    }

    // ===================================
    // Gallery Grid Animation
    // ===================================

    function animateGalleryItems() {
        galleryItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            item.style.transition = 'all 0.5s ease';

            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, index * 100);
        });
    }

    // Intersection Observer for gallery animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const galleryObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateGalleryItems();
                galleryObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const gallerySection = document.querySelector('.gallery');
    if (gallerySection) {
        galleryObserver.observe(gallerySection);
    }

    // ===================================
    // Image Zoom Effect on Hover
    // ===================================

    galleryItems.forEach(item => {
        const img = item.querySelector('img');

        item.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.1)';
        });

        item.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });

    // ===================================
    // Error Handling for Images
    // ===================================

    document.querySelectorAll('.gallery-item img, #modalImage').forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage not available%3C/text%3E%3C/svg%3E';
            this.alt = 'Image could not be loaded';
        });
    });

    // ===================================
    // Performance Optimization
    // ===================================

    // Lazy load gallery images
    const lazyLoadGalleryImages = () => {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const src = img.getAttribute('data-src') || img.src;

                        if (src && img.src !== src) {
                            img.src = src;
                            img.classList.add('loaded');
                        }

                        imageObserver.unobserve(img);
                    }
                });
            });

            galleryItems.forEach(item => {
                const img = item.querySelector('img');
                if (img) {
                    imageObserver.observe(img);
                }
            });
        }
    };

    lazyLoadGalleryImages();

    // ===================================
    // Console Log
    // ===================================

    console.log(`%c📸 Gallery initialized with ${images.length} images`, 'color: #8B4513; font-weight: bold;');

})();
