const sections = document.querySelectorAll('.home, .about, .findMe');

const changeURLSection = (section) => {
    history.pushState(null, null, `/index.html#${section.id}`);
}

const centerJourney = () => {
    const journey = document.querySelector('.journey');
    const heightJourney = journey.offsetHeight;
    journey.style.top = `calc(50% - ${heightJourney / 2}px)`;
}

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPos >= sectionTop - sectionHeight / 2 && scrollPos < sectionTop + sectionHeight / 2) {
            changeURLSection(section)

        }
    });
});

centerJourney();
window.addEventListener('resize', centerJourney);