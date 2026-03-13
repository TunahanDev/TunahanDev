const MenuOpenBtn=document.querySelector("#menu-open-button");
const MenuCloseBtn=document.querySelector("#menu-close-button");

MenuOpenBtn.addEventListener("click", ()=> {
        document.body.classList.toggle("show-mobile-menu")
    });

MenuCloseBtn.addEventListener("click", ()=> MenuOpenBtn.click());


const swiper=new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    }

    ,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }

    ,

    breakpoints: {
        0: {
            slidesPerView: 1
        }

        ,

        768: {
            slidesPerView: 2
        }

        ,

        1024: {
            slidesPerView: 3
        }
    }
});