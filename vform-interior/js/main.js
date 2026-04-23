// ===== MOBILE MENU TOGGLE =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// ===== PORTFOLIO FILTER =====
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        // Filter cards
        portfolioCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.classList.remove('hidden');
                card.style.animation = 'fadeInUp 0.6s ease';
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// ===== CONTACT FORM TOGGLE =====
const contactFormBtn = document.getElementById('contactFormBtn');
const contactFormWrapper = document.getElementById('contactFormWrapper');
const contactForm = document.getElementById('contactForm');

contactFormBtn.addEventListener('click', () => {
    if (contactFormWrapper.style.display === 'none') {
        contactFormWrapper.style.display = 'block';
        contactFormBtn.textContent = 'Hide Form';
    } else {
        contactFormWrapper.style.display = 'none';
        contactFormBtn.textContent = 'Send Message';
    }
});

// Handle form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = contactForm.querySelector('input[type="text"]').value;
    const phone = contactForm.querySelector('input[type="tel"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Create WhatsApp message
    const whatsappMessage = `Hello V Form Interior,%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AMessage: ${encodeURIComponent(message)}`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/60123456789?text=${whatsappMessage}`, '_blank');
    
    // Reset form
    contactForm.reset();
    contactFormWrapper.style.display = 'none';
    contactFormBtn.textContent = 'Send Message';
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const elementsToObserve = document.querySelectorAll(
        '.section-title, .service-card, .process-step, .testimonial-content, .about-text'
    );
    
    elementsToObserve.forEach(element => {
        observer.observe(element);
    });
});

// ===== SMOOTH SCROLL FOR CTA BUTTONS =====
const ctaButtons = document.querySelectorAll('a[href^="#"]');

ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const href = button.getAttribute('href');
        if (href.startsWith('#') && href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// ===== HERO BUTTONS FUNCTIONALITY =====
const heroButtons = document.querySelectorAll('.hero-buttons .btn');

heroButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const text = btn.textContent;
        
        if (text.includes('View Our Work')) {
            const portfolioSection = document.getElementById('portfolio');
            portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (text.includes('Free Consultation')) {
            window.open('https://wa.me/60123456789', '_blank');
        }
    });
});

// ===== START YOUR JOURNEY BUTTON =====
const ctaButton = document.querySelector('.cta-button');

ctaButton.addEventListener('click', () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// ===== LAZY LOAD IMAGES (if needed in future) =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ===== ACTIVE NAV LINK ON SCROLL =====
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===== INITIALIZE =====
console.log('V Form Interior website loaded successfully!');
