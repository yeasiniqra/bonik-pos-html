$(document).ready(function(){
    //aos js
    AOS.init();

    // complete project slider JS
	// $('.test_images').owlCarousel({
	// 		loop:true,
	// 		margin:true,
	// 		nav:true,
	// 		autoplay:true,
	// 		autoplayTimeout:4500,
	// 		dots:false,
	// 		items:1,
	// 			responsive:{
	// 			0:{
	// 				items:1
	// 			},
	// 			575:{
	// 				items:1
	// 			},
	// 			767:{
	// 				items:1
	// 			},
	// 			992:{
	// 				items:1
	// 			},
	// 			1200:{
	// 				items:1
	// 			}
	// 		}
	// })

	//slick slider js
	var $customSlide = $(".custom-slide")
        .slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            speed: 5000,
            autoplaySpeed: 8500,
            autoplay: true
        })
        .on({
            beforeChange: function(event, slick, currentSlide, nextSlide) {
                $(".slick-slide", this).eq(currentSlide).addClass("custom-preve-slide");
                $(".slick-slide", this).eq(nextSlide).addClass("custom-slide-animation");
            },
            afterChange: function() {
                $(".custom-preve-slide", this).removeClass("custom-preve-slide custom-slide-animation");
            }
        });
    $customSlide.find(".slick-slide").eq(0).addClass("custom-slide-animation");

	//testmonail JS
	$('.swiper-wrapper').slick({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
		autoplay: true,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

        ]
      });
	
});




		




