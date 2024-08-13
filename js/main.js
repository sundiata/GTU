(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow');
            } else {
                $('.fixed-top').removeClass('bg-white shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
			0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });




    $(document).ready(function() {
        $(window).scroll(function() {
          if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('navbar-scrolled');
          } else {
            $('.navbar').removeClass('navbar-scrolled');
          }
        });
      });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
			576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
})(jQuery);



$(document).ready(function(){
    $('.testimonial-carousells').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1
            },
            768:{
                items: 2
            },
            992:{
                items: 3
            }
        }
    });
});


// (function() {
//     emailjs.init("service_rrvovzs");
// })();




// function sendEmail(event) {
//     event.preventDefault(); // Prevent default form submission

//     // Get form data
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('mail').value;
//     const mobile = document.getElementById('mobile').value;
//     const subject = document.getElementById('subject').value;
//     const message = document.getElementById('message').value;

//     // Prepare email parameters
//     const params = {
//         to_email: 'keitajato30@gmail.com', // Receiver's email address
//         from_name: name,
//         from_email: email,
//         from_mobile: mobile,
//         subject: subject,
//         message: message
//     };

//     // Send email using email.js
//     emailjs.send("service_rrvovzs", "template_3hjisgx", params) // Replace with your actual Service ID and Template ID
//         .then(function(response) {
//             console.log('Email sent successfully!', response);
//             // Optionally, show a success message using SweetAlert2 or other method
//             Swal.fire({
//                 icon: 'success',
//                 title: 'Success!',
//                 text: 'Your message has been sent.',
//             });
//             // Clear form fields
//             document.getElementById('contactForm').reset();
//         }, function(error) {
//             console.error('Error sending email:', error);
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Oops...',
//                 text: 'Something went wrong! Please try again later.',
//             });
//         });
// }



document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        },
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.testimonial-swiper', {
        loop: true,
        speed: 600,
        autoplay: {
            delay: 5000,
        },
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});






$(document).ready(function(){
    $('.partners-slider-s3').slick({
        slidesToShow: 4, // Adjust the number of images shown per slide as needed
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        dots: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
});



document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    var swiper = new Swiper('.team-swiper', {
        loop: true,
        speed: 600,
        autoplay: {
            delay: 5000,
        },
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // Modal handling for biographies
    $('#bioModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        var name = button.data('name');
        var position = button.data('position');
        var bio = button.data('bio');

        var modal = $(this);
        modal.find('.modal-title').text(name);
        modal.find('#modal-name').text(name);
        modal.find('#modal-position').text(position);
        modal.find('#modal-bio').text(bio);
    });
});
