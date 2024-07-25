$(document).ready(function () {

    // Sticky Header
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 50) {
            $('.header').addClass('is-sticky');
        } else {
            $('.header').removeClass('is-sticky');
        }
    });

    // announcement Slider
    if ($('.announcement').length) {
        var announcement_bar = new Swiper(".announcement-bar", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            // effect: "fade",
            speed: 2500,
            autoplay: {
                speed: 2500,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }

    $('.navbar-toggler').click(function (e) {
        e.preventDefault();
        $('.navbar').slideToggle();
        $('.navbar').toggleClass('open');

    });

    // Search box
    $(".btn-search").click(function () {
        $(".search-bar").toggleClass("active");
    });
    $(".btn-close-search").click(function () {
        $(".search-bar").removeClass("active");
    });


    //banner-slider 
    if ($('.banner-wrapper').length) {
        var banner_swiper = new Swiper(".banner-swiper", {
            slidesPerView: 1,
            spaceBetween: 40,
            loop: false,
            // effect: "fade",
            // autoplay: {
            //     delay: 2500,
            // },
            speed: 2500,
            fadeEffect: {
                crossFade: true
            },
        });
    }
    //product-slider
    if ($('.product-wrapper').length) {
        var product_slider = new Swiper(".product-slider", {
            slidesPerView: 4,
            spaceBetween: 10,
            loop: false,
            speed: 2000,
            grabCursor: true,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },

                576: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },

                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,

                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                1440: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                }
            },

        });
    }

});

const anim_text = gsap.utils.toArray('.fadeText');
gsap.registerPlugin(ScrollTrigger);
anim_text.forEach((leng, i) => {
    const anim = gsap.fromTo(leng.children, { y: 50, autoAlpha: 0 }, { y: 0, duration: 0.90, autoAlpha: 1, stagger: 0.5, delay: 0.90 });
    ScrollTrigger.create({
        trigger: leng,
        ease: "power2.in",
        animation: anim,
        toggleActions: 'play none none none',
    });
});

const reveal_left = gsap.utils.toArray('.reveal_anim.left span.anim');
gsap.registerPlugin(ScrollTrigger);
reveal_left.forEach((leng, i) => {
  const anim = gsap.fromTo(leng, { left:0,right:0 }, { left:"100%",right:0,duration:2.5,delay:0.50 });
  ScrollTrigger.create({
      trigger: leng,
      ease: "power3.in",
      animation: anim,
      toggleActions: 'play none none none',
  });
});
