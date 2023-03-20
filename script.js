const sections = document.querySelectorAll('.home, .about');
const journey = document.querySelector('.journey');
const teste = document.querySelector('.about');

const changeURLSection = (section) => {
    history.pushState(null, null, `/index.html#${section.id}`);
}

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPos >= sectionTop - sectionHeight / 2 && scrollPos < sectionTop + sectionHeight / 2) {
            changeURLSection(section)

          /*   if (section.id === "about") {
                journey.style.transform = `translateY(${normalizedScrollPos / containerHeight * 100}%)`;
            } else {
                journey.style.transform = `translateY(${0}px)`;
            } */

        }
    });
});