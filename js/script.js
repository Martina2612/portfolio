// Animaciones al hacer scroll
const animElements = document.querySelectorAll('.fade-in, .slide-up');

const showOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    animElements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;
        if (elTop < triggerBottom) {
            el.classList.add('show');
        }
    });
};

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);
