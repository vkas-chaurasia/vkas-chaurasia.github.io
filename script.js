// =========================================
// Navigation
// =========================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

// Scroll effect on navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// =========================================
// Active nav link on scroll
// =========================================
const sections = document.querySelectorAll('.section, .hero');
const navAnchors = document.querySelectorAll('.nav-links a');

function updateActiveNav() {
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
            navAnchors.forEach(a => {
                a.classList.remove('active');
                if (a.getAttribute('href') === `#${id}`) {
                    a.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// =========================================
// Scroll Reveal Animation
// =========================================
const revealElements = document.querySelectorAll(
    '.section-title, .about-grid, .timeline-item, .project-card, .skill-category, .edu-card, .contact-content'
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Stagger the animation for sibling elements
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 80);
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => observer.observe(el));

// =========================================
// Smooth scroll for anchor links
// =========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
