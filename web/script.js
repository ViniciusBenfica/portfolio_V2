const sections = document.querySelectorAll(
	".home, .about, .findMe, .technologies",
);

const changeURLSection = (section) => {
	history.pushState(null, null, `/index.html#${section.id}`);
};

const centerJourney = () => {
	const journey = document.querySelector(".journey");
	const heightJourney = journey.offsetHeight;
	journey.style.top = `calc(50% - ${heightJourney / 2}px)`;
};

window.addEventListener("scroll", () => {
	const scrollPos = window.scrollY;

	for (const section of sections) {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.offsetHeight;

		if (
			scrollPos >= sectionTop - sectionHeight / 2 &&
			scrollPos < sectionTop + sectionHeight / 2
		) {
			changeURLSection(section);
		}
	}
});

centerJourney();
window.addEventListener("resize", centerJourney);

const animateButton = (e) => {
	e.preventDefault;
	e.target.classList.remove("animate");

	e.target.classList.add("animate");
	setTimeout(() => {
		e.target.classList.remove("animate");
	}, 700);
};

document
	.getElementById("bubbly-button")
	.addEventListener("mouseenter", animateButton, false);

document
	.getElementById("change-language")
	.addEventListener("click", function () {
		const currentLang = this.src.includes("Brasil.webp") ? "en" : "pt";
		switchLanguage(currentLang);
		this.src = currentLang === "en" ? "./img/USA.webp" : "./img/Brasil.webp";
	});

function switchLanguage(lang) {
	const elements = document.querySelectorAll("[data-key]");
	for (const elem of elements) {
		const key = elem.getAttribute("data-key");
		if (languages[lang][key]) {
			elem.textContent = languages[lang][key];
		}
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const firstChild = document.querySelector(".code-first");
	const lastChild = document.querySelector(".code-second");

	firstChild.addEventListener("animationend", () => {
		firstChild.style.animation = "none";
		firstChild.style.opacity = "1";
	});

	lastChild.addEventListener("animationend", () => {
		lastChild.style.animation = "none";
		lastChild.style.opacity = "1";
	});
});
