let allDropdownElements = document.querySelectorAll(' .open-menu ');
// watch if click outside of drop down elements
function outsideClick(event, notelem)	{
    let clickedOut = true, i, len = notelem.length;
    for (i = 0;i < len;i++)  {
        if (event.target === notelem[i] || notelem[i].contains(event.target)) {
            clickedOut = false;
        }
    }
    if (clickedOut) return true;
    else return false;
}
window.addEventListener('click', function(e) {
    if (outsideClick(e, allDropdownElements)) {
        jQuery(".open-menu").removeClass("active");
        jQuery("header").removeClass("menu");
        jQuery("body").removeClass("hide");
    }
});


function isIphone() {
    return /iPhone/.test(navigator.userAgent);
}

function isIphoneScenario() {
    if (isIphone()) {
        document.querySelector('body').classList.add('is-iphone');
		const videoElement = document.getElementById('banner-video');
		  if (videoElement) {
			videoElement.controls = true;
		  }
    }
}

// Run the function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', isIphoneScenario);


document.addEventListener('DOMContentLoaded', function() {




    jQuery(".open-menu").click(function(){
        jQuery(this).toggleClass("active");
        jQuery("header").toggleClass("menu");
        jQuery("body").toggleClass("hide");
    });



    const charityVideo = new Swiper('.charity-videos', {
        // loop: false,
        spaceBetween: 10,
        speed: 300,
        slidesPerView: 1,
        autoHeight: true,
        centeredSlides: true,
        navigation: {
            nextEl: ".videos-next",
            prevEl: ".videos-prev",
        },
        breakpoints: {
            768: {
                spaceBetween: 30,
                centeredSlides: false,
                autoHeight: false,
                slidesPerView: 2,
            }
        }
    });

    const charityNews = new Swiper('.charity-news', {
        loop: false,
        spaceBetween: 30,
        speed: 300,
        slidesPerView: 1,
        navigation: {
            nextEl: ".news-next",
            prevEl: ".news-prev",
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 2,
            }
        }
    });
    const charityPhoto = new Swiper('.charity-photo-slider', {
        // loop: false,
        spaceBetween: 10,
        speed: 300,
        slidesPerView: 1.2,
        autoHeight: true,
        centeredSlides: true,
        navigation: {
            nextEl: ".photo-next",
            prevEl: ".photo-prev",
        },
        breakpoints: {
            768: {
                spaceBetween: 30,
                centeredSlides: false,
                autoHeight: false,
                slidesPerView: "auto",
            }
        }

    });



    const buttons = document.querySelectorAll('.toggle-button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            let selector = this.getAttribute('data-show');
            let elementToToggle = document.querySelector(selector);
            elementToToggle.classList.toggle('active');
        });
    });

    // const partnersSlider = new Swiper('.partners-slider', {
    //     // loop: true,
    //     //slidesPerView: 3,
    //     spaceBetween: 20,
    //     speed: 2000,
    //     slidesPerView: "auto",
    //     // centeredSlides: true,
    //     breakpoints: {
    //         320: {
    //             slidesPerView: 2,
    //
    //         },
    //         768: {
    //             slidesPerView: 3,
    //
    //         },
    //         1024: {
    //             slidesPerView: 4,
    //
    //         },
    //         1200: {
    //             slidesPerView: 5,
    //
    //         },
    //     }
    // });

    // const partnersSlider = new Swiper('.partners-slider', {
    //     // loop: true,
    //     //slidesPerView: 3,
    //     spaceBetween: 20,
    //     speed: 2000,
    //     slidesPerView: "auto",
    //     // centeredSlides: true,
    //     breakpoints: {
    //         320: {
    //             slidesPerView: 2,
    //
    //         },
    //         768: {
    //             slidesPerView: 3,
    //
    //         },
    //         1024: {
    //             slidesPerView: 4,
    //
    //         },
    //         1200: {
    //             slidesPerView: 5,
    //
    //         },
    //     }
    // });


    // Block the back button on mobile
    window.addEventListener('popstate', function(event) {
        history.pushState(null, null, location.href);
        Fancybox.close();
    });

    // Push a state to the history when the page loads
    history.pushState(null, null, location.href);

    // Initialize Fancybox
    Fancybox.bind('[data-fancybox]', {
        on: {
            init: (instance) => {
                const backdrop = instance.$backdrop && instance.$backdrop[0];
                if (backdrop) {
                    backdrop.addEventListener('click', function() {
                        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                            instance.close();
                        }
                    });
                }
            }
        }
    });



    var controller = new ScrollMagic.Controller();

    var logo = document.querySelector(".logo");
    var logoScene = new ScrollMagic.Scene({
        triggerElement: document.querySelector(".first-section .container"),
        duration: 300,
        triggerHook: "onLeave",
    })
        .setTween(logo, {maxWidth: 120})
        // .addIndicators()
        .addTo(controller);



    let simpleAnimatedBlocks = document.querySelectorAll(".list-item, .sticky-block, .section-title");

    function isElementInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    simpleAnimatedBlocks.forEach((item, key) => {
        if (isElementInViewport(item)) {
            item.classList.add("activate-animation");
        }
        let ctrlSimple = new ScrollMagic.Controller();
        let sceneSimple = new ScrollMagic.Scene({
            triggerElement: item,
            triggerHook: item.getAttribute("data-triggerHook"),
            // reverse: false
        })
            .setClassToggle(item, "activate-animation") // add class toggle
            // .addIndicators()
            .addTo(ctrlSimple);





    });



    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         if (this.pathname !== window.location.pathname) {
    //             return;
    //         }
    //
    //         e.preventDefault();
    //
    //         const targetId = this.getAttribute('href');
    //         const escapedId = CSS.escape(targetId);
    //         const targetElement = document.querySelector(escapedId);
    //         const headerOffset = 120;
    //
    //         if (targetElement) {
    //             const elementPosition = targetElement.getBoundingClientRect().top;
    //             const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    //
    //             window.scrollTo({
    //                 top: offsetPosition,
    //                 behavior: 'smooth'
    //             });
    //         }
    //     });
    // });
});
// window.addEventListener('load', function () {
//     const headerOffset = 120;
//     const hash = window.location.hash;
//
//     if (hash) {
//         const escapedHash = CSS.escape(hash);
//         const targetElement = document.querySelector('#' + escapedHash);
//         console.log(escapedHash);
//
//         if (targetElement) {
//             const elementPosition = targetElement.getBoundingClientRect().top;
//             const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
//
//             window.scrollTo({
//                 top: offsetPosition,
//                 behavior: 'smooth'
//             });
//         }
//     }
// });