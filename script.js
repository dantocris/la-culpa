document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { title: 'LA CLÁSICA' },
        { title: 'AURA' },
        { title: 'SIX SEVEN' }
    ];

    let currentIndex = 0;

    const burgerWrappers = document.querySelectorAll('.hero-stage .burger-wrapper');
    const burgerTitle = document.getElementById('burgerTitle');
    const dots = document.querySelectorAll('.indicators .dot');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateCarousel(index) {
        burgerWrappers.forEach((wrapper, i) => {
            if (i === index) {
                wrapper.classList.add('active');
            } else {
                wrapper.classList.remove('active');
            }
        });

        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });

        burgerTitle.style.opacity = '0';
        setTimeout(() => {
            burgerTitle.textContent = products[index].title;
            burgerTitle.style.opacity = '1';
        }, 150);

        currentIndex = index;
    }

    burgerTitle.style.transition = 'opacity 0.15s ease';

    prevBtn.addEventListener('click', () => {
        let newIndex = currentIndex - 1;
        if (newIndex < 0) {
            newIndex = products.length - 1;
        }
        updateCarousel(newIndex);
    });

    nextBtn.addEventListener('click', () => {
        let newIndex = currentIndex + 1;
        if (newIndex >= products.length) {
            newIndex = 0;
        }
        updateCarousel(newIndex);
    });

    dots.forEach((dot) => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'));
            if (!isNaN(index) && index !== currentIndex) {
                updateCarousel(index);
            }
        });
    });

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('open');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('open');
            navMenu.classList.remove('active');
        });
    });
});