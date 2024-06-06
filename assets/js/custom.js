$(document).ready(function(){
    //aos js
    AOS.init();
    // complete project slider JS
		$('.banner-slider').owlCarousel({
			loop:true,
			margin:true,
			nav:true,
			autoplay:true,
			autoplayTimeout:4500,
			dots:false,
			items:1,
				responsive:{
				0:{
					items:1
				},
				575:{
					items:1
				},
				767:{
					items:1
				},
				992:{
					items:1
				},
				1200:{
					items:1
				}
			}
		})
});




		




