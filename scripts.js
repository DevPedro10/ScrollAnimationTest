let currentSection = 0;
const sections = document.querySelectorAll('.section');
let isScrolling = false;

document.addEventListener('wheel', function(e) {
    if (!isScrolling) {
        if (e.deltaY > 0) {
            scrollToNextSection();
        } else {
            scrollToPreviousSection();
        }
    }
}, { passive: false });

function scrollToNextSection() {
    if (currentSection < sections.length - 1) {
        currentSection++;
        scrollToSection(currentSection);
    }
}

function scrollToPreviousSection() {
    if (currentSection > 0) {
        currentSection--;
        scrollToSection(currentSection);
    }
}

function scrollToSection(sectionIndex) {
    isScrolling = true;
    sections[sectionIndex].scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
        isScrolling = false;
    }, 1000); // Tempo de espera antes de permitir outra rolagem
}
