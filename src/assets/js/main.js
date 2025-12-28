// RK6 Youth in Action - Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Dark Mode Toggle Functionality
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    const languageToggle = document.getElementById('language-toggle');
    const mobileLanguageToggle = document.getElementById('mobile-language-toggle');
    const mobileLanguageToggleLabel = document.getElementById('mobile-language-toggle-label');
    const html = document.documentElement;
    const pageKey = document.body.dataset.page || 'home';
    let navTheme = 'nav-dark';
    let currentLang = localStorage.getItem('lang') || 'en';

    // Translation strings
    const translations = {
        en: {
            common: {
                'nav.home': 'Home',
                'nav.about': 'About',
                'nav.programs': 'Programs',
                'nav.getInvolved': 'Get Involved',
                'nav.contact': 'Contact',
                'nav.themeToggle': 'Toggle Theme'
            },
            home: {
                'hero.title': 'RK6 Youth in Action',
                'hero.subtitle': 'Empower. Inspire. Transform.',
                'hero.copy': 'Empowering young individuals to become proactive leaders and compassionate citizens in their communities.',
                'hero.location': 'Serving the CSRA and surrounding area.',
                'hero.ctaPrimary': 'Get Involved',
                'hero.ctaSecondary': 'Donate Now',
                'mission.title': 'Our Mission',
                'mission.copy': 'Our mission is to empower and inspire young individuals to become proactive leaders and compassionate citizens in their communities. We strive to provide a nurturing platform for youth to develop their skills, explore their passions, and engage in meaningful projects that promote social responsibility, innovation, and positive change.',
                'leadership.title': 'Our Leadership',
                'leadership.copy': 'Meet the passionate leaders driving our mission forward',
                'leadership.kenya.name': 'Kenya Washington',
                'leadership.kenya.role': 'President & Founder',
                'leadership.kenya.copy': 'Visionary leader dedicated to empowering youth and creating positive change in communities across the nation.',
                'leadership.roy.name': 'Roy Washington',
                'leadership.roy.role': 'Vice President | CFO | Founder',
                'leadership.roy.copy': 'Strategic thinker and financial steward ensuring sustainable growth and impactful resource allocation.',
                'leadership.shamarion.name': 'Shamarion Washington',
                'leadership.shamarion.role': 'Chief Operating Officer',
                'leadership.shamarion.copy': 'Operations expert ensuring seamless program delivery and exceptional youth experiences.',
                'programs.title': 'Our Programs',
                'programs.copy': "Discover the ways we're making a difference in young lives",
                'programs.mentorship.title': 'Mentorship Program',
                'programs.mentorship.copy': 'Connecting youth with inspiring mentors for guidance and growth.',
                'programs.skill.title': 'Skill Building',
                'programs.skill.copy': 'Developing essential life and professional skills for success.',
                'programs.service.title': 'Community Service',
                'programs.service.copy': 'Making a positive impact through meaningful community projects.',
                'programs.recreation.title': 'Recreation',
                'programs.recreation.copy': 'Fun activities that build friendships and create lasting memories.'
            },
            about: {
                'hero.title': 'About RK6',
                'hero.copy': 'Empowering the next generation of leaders, innovators, and change-makers',
                'mission.title': 'Our Mission'
            },
            programs: {
                'hero.title': 'Our Programs',
                'hero.copy': 'Transformative experiences that build leaders, inspire change, and create lasting impact',
                'overview.title': 'Empowering Through Action',
                'overview.copy': 'Our comprehensive programs are designed to meet young people where they are and help them grow into the leaders our communities need. Each program combines hands-on learning, mentorship, and real-world application to create meaningful, lasting change.'
            },
            'get-involved': {
                'hero.title': 'Get Involved',
                'hero.copy': 'Join our movement and help create lasting change in the lives of young people',
                'overview.title': 'Ways to Make a Difference',
                'overview.copy': 'Whether you have time to volunteer, resources to share, or skills to teach, there are many ways to support our mission and impact young lives in your community.'
            },
            contact: {
                'hero.title': 'Contact Us',
                'hero.copy': "Ready to connect? We'd love to hear from you and answer any questions about our programs"
            },
            'thank-you': {
                'hero.title': 'Thank You!',
                'hero.copy': "We've received your message and we're excited to connect with you.",
                'hero.followup': 'Our team will review your submission and get back to you within 24-48 hours. We appreciate your interest in RK6 Youth in Action!'
            }
        },
        es: {
            common: {
                'nav.home': 'Inicio',
                'nav.about': 'Acerca de',
                'nav.programs': 'Programas',
                'nav.getInvolved': 'Involúcrate',
                'nav.contact': 'Contacto',
                'nav.themeToggle': 'Cambiar tema'
            },
            home: {
                'hero.title': 'RK6 Juventud en Acción',
                'hero.subtitle': 'Empoderar. Inspirar. Transformar.',
                'hero.copy': 'Empoderamos a los jóvenes para que se conviertan en líderes proactivos y ciudadanos compasivos en sus comunidades.',
                'hero.location': 'Sirviendo a la zona CSRA y alrededores.',
                'hero.ctaPrimary': 'Participa',
                'hero.ctaSecondary': 'Donar Ahora',
                'mission.title': 'Nuestra Misión',
                'mission.copy': 'Nuestra misión es empoderar e inspirar a los jóvenes para que sean líderes proactivos y ciudadanos compasivos en sus comunidades. Buscamos ofrecer una plataforma de apoyo para que desarrollen sus habilidades, exploren sus pasiones y participen en proyectos significativos que promuevan la responsabilidad social, la innovación y el cambio positivo.',
                'leadership.title': 'Nuestro Liderazgo',
                'leadership.copy': 'Conoce a las personas apasionadas que impulsan nuestra misión',
                'leadership.kenya.name': 'Kenya Washington',
                'leadership.kenya.role': 'Presidenta y Fundadora',
                'leadership.kenya.copy': 'Líder visionaria dedicada a empoderar a la juventud y crear un cambio positivo en las comunidades de todo el país.',
                'leadership.roy.name': 'Roy Washington',
                'leadership.roy.role': 'Vicepresidente | CFO | Fundador',
                'leadership.roy.copy': 'Pensador estratégico y administrador financiero que asegura un crecimiento sostenible y un uso impactante de los recursos.',
                'leadership.shamarion.name': 'Shamarion Washington',
                'leadership.shamarion.role': 'Directora de Operaciones',
                'leadership.shamarion.copy': 'Experta en operaciones que garantiza una entrega impecable de programas y experiencias excepcionales para los jóvenes.',
                'programs.title': 'Nuestros Programas',
                'programs.copy': 'Descubre cómo marcamos la diferencia en la vida de los jóvenes',
                'programs.mentorship.title': 'Programa de Mentoría',
                'programs.mentorship.copy': 'Conectando a los jóvenes con mentores inspiradores para brindar guía y crecimiento.',
                'programs.skill.title': 'Desarrollo de Habilidades',
                'programs.skill.copy': 'Desarrollando habilidades esenciales de vida y profesionales para el éxito.',
                'programs.service.title': 'Servicio Comunitario',
                'programs.service.copy': 'Generando un impacto positivo a través de proyectos comunitarios significativos.',
                'programs.recreation.title': 'Recreación',
                'programs.recreation.copy': 'Actividades divertidas que construyen amistades y crean recuerdos duraderos.'
            },
            about: {
                'hero.title': 'Sobre RK6',
                'hero.copy': 'Empoderando a la próxima generación de líderes, innovadores y agentes de cambio',
                'mission.title': 'Nuestra Misión'
            },
            programs: {
                'hero.title': 'Nuestros Programas',
                'hero.copy': 'Experiencias transformadoras que forman líderes, inspiran el cambio y crean impacto duradero',
                'overview.title': 'Empoderar a través de la acción',
                'overview.copy': 'Nuestros programas integrales están diseñados para acompañar a los jóvenes donde se encuentren y ayudarlos a crecer como líderes que nuestras comunidades necesitan. Cada programa combina aprendizaje práctico, mentoría y aplicación en el mundo real para generar cambios significativos y duraderos.'
            },
            'get-involved': {
                'hero.title': 'Involúcrate',
                'hero.copy': 'Únete a nuestro movimiento y ayuda a crear un cambio duradero en la vida de los jóvenes',
                'overview.title': 'Formas de marcar la diferencia',
                'overview.copy': 'Ya sea que tengas tiempo para ser voluntario, recursos para compartir o habilidades para enseñar, hay muchas maneras de apoyar nuestra misión e impactar la vida de los jóvenes en tu comunidad.'
            },
            contact: {
                'hero.title': 'Contáctanos',
                'hero.copy': '¿Listo para conectar? Nos encantaría saber de ti y responder cualquier pregunta sobre nuestros programas'
            },
            'thank-you': {
                'hero.title': '¡Gracias!',
                'hero.copy': 'Hemos recibido tu mensaje y estamos emocionados de conectarnos contigo.',
                'hero.followup': 'Nuestro equipo revisará tu solicitud y se pondrá en contacto en 24-48 horas. ¡Agradecemos tu interés en RK6 Youth in Action!'
            }
        }
    };
    
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
        // Prefer the nav theme if present; otherwise fall back to global dark mode
        const isDark = navTheme === 'nav-dark' ? true : (navTheme === 'nav-light' ? false : html.classList.contains('dark'));
        
        if (logoLight && logoDark) {
            logoLight.classList.toggle('hidden', isDark);
            logoLight.classList.toggle('dark:hidden', !isDark);
            logoDark.classList.toggle('hidden', !isDark);
            logoDark.classList.toggle('dark:block', isDark);
        }
    }

    // Translation helpers
    function updateLanguageButtons() {
        const label = currentLang === 'en' ? 'ES' : 'EN';
        if (languageToggle) languageToggle.textContent = label;
        if (mobileLanguageToggleLabel) mobileLanguageToggleLabel.textContent = label;
    }

    function getTranslation(key) {
        const pageTranslations = translations[currentLang]?.[pageKey] || {};
        const commonTranslations = translations[currentLang]?.common || {};
        return pageTranslations[key] || commonTranslations[key] || null;
    }

    function applyTranslations(lang) {
        if (lang) {
            currentLang = lang;
            localStorage.setItem('lang', lang);
        }
        html.setAttribute('lang', currentLang);

        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.dataset.i18n;
            const value = getTranslation(key);
            if (value) {
                element.innerHTML = value;
            }
        });

        updateLanguageButtons();
    }

    function toggleLanguage() {
        const nextLang = currentLang === 'en' ? 'es' : 'en';
        applyTranslations(nextLang);
    }
    
    // Add event listeners for theme toggles
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', toggleTheme);
    }
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
    }
    if (mobileLanguageToggle) {
        mobileLanguageToggle.addEventListener('click', toggleLanguage);
    }
    
    // Initial logo update and translations
    updateLogo();
    applyTranslations(currentLang);
    
    
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
    const navbar = document.querySelector('nav.site-nav');
    if (navbar) {
        navTheme = navbar.dataset.navTheme || 'nav-dark';

        function applyNavTheme() {
            navbar.classList.remove('nav-dark', 'nav-light');
            navbar.classList.add(navTheme);
            updateLogo();
        }

        applyNavTheme();
    }
    
    
    // Simple Carousel (services/flyers)
    const carousels = document.querySelectorAll('[data-carousel]');
    carousels.forEach(carousel => {
        const track = carousel.querySelector('[data-carousel-track]');
        if (!track) return;

        const slides = Array.from(track.children);
        const dots = carousel.querySelectorAll('[data-carousel-dot]');
        const prev = carousel.querySelector('[data-carousel-prev]');
        const next = carousel.querySelector('[data-carousel-next]');
        let index = 0;

        function update() {
            track.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach((dot, i) => {
                dot.classList.toggle('bg-royal-purple/70', i === index);
                dot.classList.toggle('bg-gray-300', i !== index);
                dot.classList.toggle('dark:bg-gray-600', i !== index);
            });
        }

        function goTo(newIndex) {
            const total = slides.length;
            index = (newIndex + total) % total;
            update();
        }

        if (prev) prev.addEventListener('click', () => goTo(index - 1));
        if (next) next.addEventListener('click', () => goTo(index + 1));

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => goTo(i));
        });

        // Auto-play with pause on hover for accessibility
        let autoPlay = setInterval(() => goTo(index + 1), 7000);
        carousel.addEventListener('mouseenter', () => clearInterval(autoPlay));
        carousel.addEventListener('mouseleave', () => {
            autoPlay = setInterval(() => goTo(index + 1), 7000);
        });

        update();
    });
    
    
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
