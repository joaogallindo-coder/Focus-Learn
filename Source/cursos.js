document.addEventListener('DOMContentLoaded', function () {
    const slidesWrapper = document.querySelector('.slides-wrapper');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const prevButton = document.querySelector('.carousel .prev');
    const nextButton = document.querySelector('.carousel .next');
    const dots = document.querySelectorAll('.carousel .dot');

    let currentSlide = 0;

    function updateCarousel() {
        const offset = -currentSlide * 100;
        slidesWrapper.style.transform = `translateX(${offset}%)`;

        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === currentSlide) {
                dot.classList.add('active');
            }
        });
    }

    nextButton.addEventListener('click', function () {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
        updateCarousel();
    });

    prevButton.addEventListener('click', function () {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = totalSlides - 1;
        }
        updateCarousel();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            currentSlide = index;
            updateCarousel();
        });
    });

    updateCarousel();

    const destinationURL = 'paginaEmBuild.html';
    const courseCards = document.querySelectorAll('.ck-card');

    courseCards.forEach(card => {
        card.addEventListener('click', function () {
            window.location.href = destinationURL;
        });
    });

    const verTodosLink = document.querySelector('.card.see-all');
    if (verTodosLink) {
        verTodosLink.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = 'cursos.html';
        });
    }

    function checkScreenSize() {
        if (window.innerWidth <= 1500) {
            currentSlide = 0;
            updateCarousel();
        }





    }

    window.addEventListener('resize', checkScreenSize);
    window.addEventListener('load', checkScreenSize);

    


});












