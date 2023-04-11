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


var animateButton = function(e) {

    e.preventDefault;
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }