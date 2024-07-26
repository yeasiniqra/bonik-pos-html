$(document).ready(function(){
    //aos js
    AOS.init();

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
        },

        ]
      });

    //partner JS
    // $('.slide-track').slick({
    //   speed: 5000,
    //   autoplay: true,
    //   autoplaySpeed: 0,
    //   centerMode: true,
    //   cssEase: 'linear',
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   variableWidth: true,
    //   infinite: true,
    //   initialSlide: 1,
    //   arrows: false,
    //   buttons: false,
    //   pauseOnHover: true,
    // });  

      $('.slide-track').slick({
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false,
        pauseOnHover: false, // Set to false to handle hover manually     
      });
    
      $('.slide-track').on('mouseenter', function() {
        $(this).slick('slickPause');
      });
    
      $('.slide-track').on('mouseleave', function() {
        $(this).slick('slickPlay');
      });
  
    

    //bottom partner slider js
    $('.slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 3000,
        cssEase: 'linear',
        variableWidth: true,
        arrows: false
    });
    
	
});




		




