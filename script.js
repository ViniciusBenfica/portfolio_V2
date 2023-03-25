const sections = document.querySelectorAll('.home, .about, .findMe');

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

        }
    });
});