const sections = document.querySelectorAll('.home, .about, .findMe, .technologies');

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

var animateButton = function (e) {

    e.preventDefault;
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
        e.target.classList.remove('animate');
    }, 700);
};

document.getElementById("bubbly-button").addEventListener('mouseenter', animateButton, false)

document.getElementById('change-language').addEventListener('click', function() {
    let currentLang = this.src.includes('Brasil.webp') ? 'en' : 'pt';
    switchLanguage(currentLang);
    this.src = currentLang === 'en' ? './img/USA.webp' : './img/Brasil.webp';
});

function switchLanguage(lang) {
    document.querySelectorAll("[data-key]").forEach(elem => {
        let key = elem.getAttribute("data-key");
        if (languages[lang][key]) {
            console.log(elem.textContent)
            elem.textContent = languages[lang][key];
        }
    });
}