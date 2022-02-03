// slider

const swiper = new Swiper('.header__section--middle', {
    loop: true,
    slidesPerView: 4,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 5,
            spaceBetween: 1
        },
        1220: {
            slidesPerView: 8,
            spaceBetween: 1
        },
        1440: {
            slidesPerView: 10,
            spaceBetween: 1
        },
        1920: {
            slidesPerView: 10,
            spaceBetween: 1
        },
        2020: {
            slidesPerView: 13,
            spaceBetween: 1
        },
    }
});

//menu 
const button = document.querySelector('.profile__list__button');

button.addEventListener('click', () => {
    document.querySelector('.profile__list').classList.toggle('active');
})

