// RK6 Youth in Action - Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Dark Mode Toggle Functionality
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    const html = document.documentElement;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme
    if (savedTheme) {
        html.classList.toggle('dark', savedTheme === 'dark');
    } else {
        html.classList.toggle('dark', prefersDark);
    }
    
    // Theme toggle function
    function toggleTheme() {
        const isDark = html.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Update logo visibility
        updateLogo();
    }
    
    // Update logo based on theme
    function updateLogo() {
        const logoLight = document.getElementById('logo-light');
        const logoDark = document.getElementById('logo-dark');
        const isDark = html.classList.contains('dark');
        
        if (logoLight && logoDark) {
            logoLight.classList.toggle('hidden', isDark);
            logoLight.classList.toggle('dark:hidden', !isDark);
            logoDark.classList.toggle('hidden', !isDark);
            logoDark.classList.toggle('dark:block', isDark);
        }
    }
    
    // Add event listeners for theme toggles
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', toggleTheme);
    }
    
    // Initial logo update
    updateLogo();
    
    
    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            const isOpen = !mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden', isOpen);
            
            // Update button icon
            const icon = mobileMenuToggle.querySelector('svg');
            if (icon) {
                if (isOpen) {
                    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
                } else {
                    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
                }
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuToggle.querySelector('svg');
                if (icon) {
                    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
                }
            }
        });
        
        // Close mobile menu when clicking on links
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuToggle.querySelector('svg');
                if (icon) {
                    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
                }
            });
        });
    }
    
    
    // Smooth Scrolling for Anchor Links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    
    // Scroll Reveal Animation
    function reveal() {
        const reveals = document.querySelectorAll('.card-glow, .btn-primary, .btn-secondary');
        
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initialize elements for scroll reveal
    const revealElements = document.querySelectorAll('.card-glow, .btn-primary, .btn-secondary');
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', reveal);
    reveal(); // Initial check
    
    
    // Sparkle Animation System
    function createSparkle() {
        const sparklesContainer = document.getElementById('sparkles-container');
        if (!sparklesContainer) return;
        
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle fixed pointer-events-none z-40';
        
        // Random position
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = Math.random() * window.innerHeight + 'px';
        
        // Random delay
        sparkle.style.animationDelay = Math.random() * 3 + 's';
        
        // Random color from brand palette
        const colors = ['#E8B923', '#8B5CF6', '#4CB4B1', '#F15BB5'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        sparkle.style.background = `radial-gradient(circle, ${randomColor}, transparent)`;
        
        sparklesContainer.appendChild(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 3000);
    }
    
    // Create sparkles periodically (only on larger screens)
    if (window.innerWidth > 768) {
        setInterval(createSparkle, 2000);
    }
    
    
    // Navbar Background on Scroll
    const navbar = document.querySelector('nav');
    if (navbar) {
        function updateNavbar() {
            if (window.scrollY > 100) {
                navbar.classList.add('bg-white/95', 'dark:bg-bg-dark/95');
                navbar.classList.remove('bg-white/90', 'dark:bg-bg-dark/90');
            } else {
                navbar.classList.remove('bg-white/95', 'dark:bg-bg-dark/95');
                navbar.classList.add('bg-white/90', 'dark:bg-bg-dark/90');
            }
        }
        
        window.addEventListener('scroll', updateNavbar);
        updateNavbar(); // Initial check
    }
    
    
    // Form Enhancement
    const forms = document.querySelectorAll('form[data-netlify="true"]');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const submitButton = form.querySelector('button[type="submit"]');
            if (submitButton) {
                const originalText = submitButton.textContent;
                submitButton.textContent = 'Sending...';
                submitButton.disabled = true;
                
                // Reset button after 3 seconds (in case of errors)
                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                }, 3000);
            }
        });
        
        // Real-time validation feedback
        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.value.trim() === '') {
                    this.classList.add('border-red-300', 'focus:ring-red-500');
                    this.classList.remove('border-gray-300', 'focus:ring-royal-purple');
                } else {
                    this.classList.remove('border-red-300', 'focus:ring-red-500');
                    this.classList.add('border-gray-300', 'focus:ring-royal-purple');
                }
            });
            
            input.addEventListener('input', function() {
                if (this.value.trim() !== '') {
                    this.classList.remove('border-red-300', 'focus:ring-red-500');
                    this.classList.add('border-gray-300', 'focus:ring-royal-purple');
                }
            });
        });
    });
    
    
    // Intersection Observer for Animation Triggers
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.card-glow, h1, h2, h3');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    
    // Typing Effect for Hero Headlines (if on home page)
    const typingElement = document.querySelector('.font-display');
    if (typingElement && window.location.pathname === '/' || window.location.pathname === '/index.html') {
        const text = typingElement.textContent;
        typingElement.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                typingElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 1000);
    }
    
    
    // Parallax Effect for Hero Sections
    const heroSections = document.querySelectorAll('section[class*="gradient"]');
    heroSections.forEach(section => {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = section.querySelector('.relative');
            if (parallax) {
                const speed = 0.5;
                parallax.style.transform = `translateY(${scrolled * speed}px)`;
            }
        });
    });
    
    
    // Accessibility Enhancements
    // Keyboard navigation for custom elements
    const customButtons = document.querySelectorAll('[role="button"]');
    customButtons.forEach(button => {
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Focus management for modals and dropdowns
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close mobile menu if open
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
    
    
    // Performance: Lazy load images when they come into view
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    
    // Social Media Feed Placeholder (ready for integration)
    const socialFeedContainer = document.querySelector('#social-feed');
    if (socialFeedContainer) {
        // Placeholder for social media API integration
        console.log('Social media feed container found. Ready for API integration.');
    }
    
    
    // Analytics Event Tracking (ready for Google Analytics/other services)
    function trackEvent(category, action, label) {
        // Placeholder for analytics tracking
        console.log(`Event tracked: ${category} - ${action} - ${label}`);
        
        // Example for Google Analytics 4
        // gtag('event', action, {
        //     event_category: category,
        //     event_label: label
        // });
    }
    
    // Track important interactions
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
        button.addEventListener('click', function() {
            const text = this.textContent.trim();
            trackEvent('Button Click', 'Primary Action', text);
        });
    });
    
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function() {
            const formName = this.getAttribute('name') || 'Unknown Form';
            trackEvent('Form Submission', 'Submit', formName);
        });
    });
    
});

// Utility Functions

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Format phone numbers
function formatPhoneNumber(phoneNumberString) {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return phoneNumberString;
}

// Validate email addresses
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Export functions for use in other scripts
window.RK6Utils = {
    debounce,
    throttle,
    formatPhoneNumber,
    isValidEmail
};
