const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let index = 0;
let interval;

function showSlide(i) {
    slides.forEach((slide, i) => {
        slide.classList.remove('slide-active');
        dots[i].classList.remove('dot-active');
    });

    slides[i].classList.add('slide-active');
    dots[i].classList.add('dot-active');
    index = i;
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function goToSlide(i) {
    showSlide(i);
    restartSlide();
}

function startSlide() {
    interval = setInterval(nextSlide, 4000);
}

function restartSlide() {
    clearInterval(interval);
    startSlide();
}

startSlide();