$(document).ready(function(){
	//mobile menu customize
	$('.menu__wrap .menu__main li.item ').click(function(){
		$(this).toggleClass('show');

	});

	$('.header__area .menu-toggle').click(function(){
		$('.mobile-wrap').toggleClass('active');

	});
	
	$('.header__area .menu-thamble').click(function(){
		$('.mobile-wrap').removeClass('active');

	});

	$('.menu__sub .item a.links').click(function(){
		$('.mobile-wrap').toggleClass('active');

	});

	
	//header banner close
	$('.banner-close').click(function(){
		$('.header__banner__item').slideUp(1000);
	});
	
	//minicart__wrap slide
	$('.expand-btn-inner .card__inner .card__inner__link').click(function(){
		$('.expand-btn-inner .minicart__wrap').slideToggle(400);
	});
	$('.expand-btn-inner .minicart__wrap').slideUp(1);

	//vertical menu slide
	$('.vertical-menu .vertical-menu__wrap .vertical-menu__content').slideUp(800);

	$('.vertical-menu .cate-button').click(function(){
		$('.vertical-menu .vertical-menu__wrap .vertical-menu__content').slideToggle(800);
	});


	//hero slide
	var swiper = new Swiper(".hero-active", {
		loop: true,
        loopFillGroupWithBlank: true,
		fadeEffect: {
		  crossFade: true
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},


	});
   
	//product slide

	var swiper = new Swiper(".product-active", {
        navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		slidesPerView: 4,
		spaceBetween: 30,

		breakpoints: {
			
			200: {
				slidesPerView: 1,
				spaceBetween: 0,
		
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 30,
		 
			},
			992: {
				slidesPerView: 3,

			},
			1199: {
				slidesPerView: 4,

			},
		  },

	});
	//product-list-active
	var swiper = new Swiper(".product-list-active", {
        navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		slidesPerView: 3,
		spaceBetween: 30,

		breakpoints: {
			
			200: {
				slidesPerView: 1,
				spaceBetween: 0,
		
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 30,
		 
			},
			992: {
				slidesPerView: 2,

			},
			1199: {
				slidesPerView: 3,

			},
		  },

	});
	//product-best-active
	var swiper = new Swiper(".product-best-active", {
        navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		slidesPerView: 2,
        grid: {
          rows: 2,
        },
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
		breakpoints: {
			200: {
				slidesPerView: 1,
				grid: {
					rows: 2,
				  },
			},
			992: {
				slidesPerView: 2,
				grid: {
					rows: 2,
				  },
			},
		  },
	});


	//product-top-active
	var swiper = new Swiper(".product-top-active", {
		slidesPerView: 3,
        grid: {
          rows: 2,
        },
        spaceBetween: 30,
		breakpoints: {
			
			200: {
				slidesPerView: 1,
				spaceBetween: 30,
		
			},
			768: {
				slidesPerView: 2,
				grid: {
					rows: 2,
				},
			},
			992: {
				slidesPerView: 3,
				grid: {
					rows: 2,
				},
			},
		  },
	});

	//brand-active
	var swiper = new Swiper(".brand-active", {
		slidesPerView: 6,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
        spaceBetween: 0,
		breakpoints: {
			
			200: {
				slidesPerView: 1,
		
			},
			477: {
				slidesPerView: 2,
		
			},
			578: {
				slidesPerView: 3,
		
			},
			992: {
				slidesPerView: 4,
	
			},
			1199: {
				slidesPerView: 6,
				
			},
		  },
	});
//tolltipe
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});
//modal

//incriment decriment

var quantitiy=0;
   $('.quantity-right-plus').click(function(e){
        
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());
        
        // If is not undefined
            
            $('#quantity').val(quantity + 1);

          
            // Increment
        
    });

     $('.quantity-left-minus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());
        
        // If is not undefined
      
            // Increment
            if(quantity>0){
				$('#quantity').val(quantity - 1);
				};
    		});
//footer customaze


$('#widget-box1').click(function(){
	$(this).toggleClass('active')
	$('#widget-box1-body').slideToggle();
})
$('#widget-box2').click(function(){
	$(this).toggleClass('active')
	$('#widget-box2-body').slideToggle();
})
$('#widget-box3').click(function(){
	$(this).toggleClass('active')
	$('#widget-box3-body').slideToggle();
});
   

    // scroll-top
	$(window).scroll(function(){
		if($(this).scrollTop() > 200 ) {
			$('#scroll').addClass('show');
		} else {
			$('#scroll').removeClass('show');
		}
	});

	$('#scroll').click(function(){
		$('html, body').animate({
			scrollTop:0
		},300);
	});
  


    /*
	//menu-stacky

	$(window).on('scroll', function(){
		if($(window).scrollTop() > 300){
			$('.header-area').addClass('stacky');
		}
		else{
			$('.header-area').removeClass('stacky');
		}
	})

	//mobile-menu
	$(window).on('scroll', function(){
		if($(window).scrollTop() > 200){
			$('.slicknav_menu').addClass('stacky');
		}
		else{
			$('.slicknav_menu').removeClass('stacky');
		}
	})
    */


});
/*
//preload-active
$(window).on('load', function(){
	$('.preload-area').fadeOut()
});
*/

	
