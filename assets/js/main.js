(function ($) {
	"use strict";

	/*=========================
	PRELOADER JS
	===========================*/
	$(window).on('load', function (event) {
		$('.preloader').delay(500).fadeOut(500);
	});

	/*=========================
	HERO SLIDER JS
	===========================*/
	function heroSlider() {
		var BasicSlider = $('.hero-slider');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.hero-slide:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.hero-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: false,
			autoplaySpeed: 10000,
			dots: false,
			fade: true,
			arrows: true,
			prevArrow : '.hero-prev',
			nextArrow : '.hero-next',
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	heroSlider();


	/*=========================
	offer-slider
	===========================*/
	$('.offer-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		prevArrow : '.offer-prev',
		nextArrow : '.offer-next',

		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	/*=========================
	product-slider
	===========================*/
	$('.product-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		prevArrow : '.product-prev',
		nextArrow : '.product-next',

		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
			}
		}
	]
	});


	
	/*=========================
	testimony-slider
	===========================*/
	$('.testimony-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.testimony-links'
	 });
	 
	 $('.testimony-links').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.testimony-slider',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		arrows: true,
		prevArrow : '.testimony-prev',
		nextArrow : '.testimony-next',
		centerPadding: '0px',
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				arrows: true,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				arrows: true,
			}
		}
	]
	});

	
	// ANOTHER-SERVICE-JS
	$('.feature-content > .row > div:nth-child(even), .work-time-box ul li:nth-child(even)').addClass('reverse-item');


	// CUSTOM TAB
	const serveTabLink = document.querySelectorAll('.serve-tab-link')
	const serveTabContent = document.querySelectorAll('.service-tab-content')

	serveTabLink.forEach((link, index) => {
		link.addEventListener('click', ()=>{
			for (let i = 0; i < serveTabLink.length; i++) {
				serveTabLink[i].classList.remove('active')
				serveTabContent[i].classList.remove('active')
			}
			link.classList.add('active')
			serveTabContent[index].classList.add('active')
		})
	});
	























	/*=========================
	magnificPopup image JS
	===========================*/
	$('.video-btn').magnificPopup({
		type: 'iframe'
	});

	$('.pop-img-btn').magnificPopup({
		type: 'image'
	});

	// reponsive menu
	const resBar = document.querySelectorAll('.humberger-bar, .resonsive-slide, .resonsive-slide-overlay')
	resBar.forEach(btn => {
		btn.addEventListener('click', ()=>{
			for (let i = 0; i < resBar.length; i++) {
				resBar[i].classList.toggle('active')
			}
		})
	});

	// sticky
	var wind = $(window);
	var sticky = $('.header-content-wrap');
	wind.on('load', function () {
		sticky.prev().height(sticky.outerHeight())
	})
	wind.on('resize', function () {
		sticky.prev().height(sticky.outerHeight())
	})
	wind.on('scroll', function () {
		var scroll = wind.scrollTop();
		if (scroll < 150) {
			sticky.removeClass('sticky');
		} else {
			sticky.addClass('sticky');
		}
	});

	/*=========================
	SCROLL-UP JS
	===========================*/
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

	

	// One Page Nav
	var top_offset = $('.header-area').height() - 170;
	$('.mainmenu ul').onePageNav({
		scrollOffset: top_offset,
	});

	// skrollr activation
	var s = skrollr.init();
	if (s.isMobile()) {
			s.destroy();
	}
	
})(jQuery);

