// Auto Slide Images
const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slide');
const textTitle = slider.querySelector('.title');
let currentSlide = 0;

setInterval(() => {
        
        slides[currentSlide].classList.remove('current');

        if (currentSlide == (slides.length-1)){
            currentSlide = 0;
        } else {
            currentSlide++;
        } 

        slides[currentSlide].classList.add('current');

}, 3000);

    // Trigger Testimonials Section Owl Carousel
    $('#test-carousel').owlCarousel({
        autoplay: true,
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });

    $('.owl-carousel').owlCarousel({
        autoplay: true,
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });
    AOS.init();
