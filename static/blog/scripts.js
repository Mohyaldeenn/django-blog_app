document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav ul');
    const leftIndicator = document.querySelector('.scroll-indicator.left');
    const rightIndicator = document.querySelector('.scroll-indicator.right');

    const checkScroll = () => {
        if (nav.scrollWidth > nav.clientWidth) {
            rightIndicator.style.display = 'block';
        } else {
            rightIndicator.style.display = 'none';
        }

        if (nav.scrollLeft > 0) {
            leftIndicator.style.display = 'block';
        } else {
            leftIndicator.style.display = 'none';
        }
    };

    rightIndicator.addEventListener('click', () => {
        nav.scrollBy({ left: 200, behavior: 'smooth' });
    });

    leftIndicator.addEventListener('click', () => {
        nav.scrollBy({ left: -200, behavior: 'smooth' });
    });

    nav.addEventListener('scroll', checkScroll);

    checkScroll();
});