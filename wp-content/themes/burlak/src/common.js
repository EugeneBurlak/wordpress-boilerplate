import jQuery from './js/jquery/jquery';
import fancybox from './js/fancybox/jquery.fancybox.min.js';
import Swiper from './js/swiper/swiper.min.js';
import iMask from 'imask';
import BurlakNavigation from './js/burlak-navigation.js';
import * as Burlak from 'burlak';
import mapInit from './js/map.js';
import departmentMap from './js/departments.js';

(function($){
	$.fancybox.defaults.hash = false;
	function runCount(item){
		var bool = item.getAttribute('bool'),
			from = item.getAttribute('data-from'),
			to = item.getAttribute('data-to'),
			seconds = item.getAttribute('data-seconds'),
			milliseconds = parseInt(seconds) ? parseInt(seconds) * 1000 : 500;
			from = parseInt(from);
			to = parseInt(to);
		if(!bool){
			item.setAttribute('bool', 1);
			$(item).prop('Counter', from).animate({
				Counter: to
			}, {
				duration: milliseconds,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
		}
	}
		
	function clearCount(item){
		var from = item.getAttribute('data-from');
		item.removeAttribute('bool');
		from = parseInt(from);
		$(item).text(from);
	}
	
	var view = Burlak.InView;
	var request = new Burlak.Request();
	$(document).ready(function(){
		document.addEventListener('wpcf7mailsent', function(event) {
			setTimeout(function () {
				$.fancybox.close();
			}, 3000);			
		});

		function commonFunc(){

			let files = document.querySelectorAll('.form-file');
			files.length && files.forEach((item, index) => {
				item.querySelector('input').addEventListener('change', (e) => {
					if(e.target.files[0]){
						let name = e.target.files[0].name;
						item.querySelector('.form-file-fake').innerHTML = name ? name : 'Прикрепить файл';
					}
					else{
						item.querySelector('.form-file-fake').innerHTML = 'Прикрепить файл';
					}
				})
			});

			document.body.addEventListener('click', () => {
				document.querySelector('.header').classList.remove('search-visible');
				document.querySelector('.header').classList.remove('navigation-visible');
			});
			document.querySelector('.header-search-panel').addEventListener('click', (e) => {
				e.stopPropagation();
			});
			let searchIcon = document.querySelector('.header-search-toggle');
			searchIcon && searchIcon.addEventListener('click', (e) => {
				e.preventDefault();
				e.stopPropagation();
				let header = document.querySelector('.header');
				header && header.classList.toggle('search-visible');
				header && header.classList.remove('navigation-visible');
				document.querySelector('.header-search-panel input').focus();
			});

			var toggleButton = document.querySelector('.nav-toggle');
			if(toggleButton){
				toggleButton.addEventListener('click', function(e){
					e.preventDefault();
					e.stopPropagation();
					let header = document.querySelector('.header');
					header && header.classList.remove('search-visible');
					header && header.classList.toggle('navigation-visible');
				});
			}

			new view('.countdown', {
				in: (item) => {
					runCount(item);
				},
				out: (item) => {
					clearCount(item);
				}
			});
			new view('.scroll-animated', {
				in: (item) => {
					setTimeout(() => {
						item.classList.add('visible')
					}, 300)
				},
				out: (item) => {
					item.classList.remove('visible')
				}
			});

			var slider = document.querySelector('.slider'),
				delay = slider ? slider.getAttribute('data-delay') : false,
				speed = slider ? slider.getAttribute('data-speed') : false;
			if(slider){
		    	new Swiper('.slider', {
					slidesPerView: 1,
					speed: speed ? speed * 1000 : 0,
					autoplay: delay ? {
						delay: delay * 1000
					} : false,
					loop: true,
					pagination: {
						el: '.slider-pagination',
						type: 'progressbar',
					},
					navigation: {
						nextEl: '.slider-arrow__right',
						prevEl: '.slider-arrow__left',
					},
		    	});
			}

			var slider = document.querySelector('.slider-article');
			if(slider){
		    	new Swiper('.slider-article', {
					slidesPerView: 1,
					loop: true,
					navigation: {
						nextEl: '.slider-arrow__right',
						prevEl: '.slider-arrow__left',
					},
					autoHeight: true
		    	});
			}

			var newsSlider = document.querySelector('.slider-horizontal'),
		    	newsSlides = newsSlider ? newsSlider.querySelectorAll('.swiper-slide') : false;
		    if(newsSlider){
		    	new Swiper('.slider-horizontal', {
		    		slidesPerView: 3,
					mousewheel: newsSlides.length > 3,
					loop: newsSlides.length > 3,
					navigation: {
						nextEl: '.news-arrow__right',
						prevEl: '.news-arrow__left',
					},
					autoHeight: true,
					breakpoints: {
						800: {
							slidesPerView: 2,
							mousewheel: newsSlides.length > 2,
							loop: newsSlides.length > 2,
						},
						520: {
							slidesPerView: 1,
							mousewheel: newsSlides.length > 1,
							loop: newsSlides.length > 1,
						}
					}
		    	});
			}
			
			var newsSlider = document.querySelector('.slider-vertical'),
		    	newsSlides = newsSlider ? newsSlider.querySelectorAll('.swiper-slide') : false;
		    if(newsSlider){
		    	new Swiper('.slider-vertical', {
		    		slidesPerView: 3,
					mousewheel: newsSlides.length > 3,
					loop: newsSlides.length > 3,
					direction: 'vertical',
					navigation: {
						nextEl: '.news-arrow__right',
						prevEl: '.news-arrow__left',
					},
					breakpoints: {
						700: {
						}
					}
		    	});
			}

			//project slider
			if($('.projects-slider-view').length && $('.projects-slider-thumbs').length){
				var projectsSlider = new Swiper('.projects-slider-view', {
					on: {
						slideChange: function(){
							$('.projects-slider-thumbs .swiper-slide').removeClass('active');
							$('.projects-slider-thumbs .swiper-slide').eq(this.activeIndex).addClass('active');
							projectsThumbs.slideTo(this.activeIndex);
							var count = $('.projects-slider-thumbs .swiper-slide').length-1;
							if(this.activeIndex <= 0){
								$('.projects-slider-thumbs-prev').addClass('unvisible');
								$('.projects-slider-view-prev').addClass('unvisible');
							}
							if(this.activeIndex >= count){
								$('.projects-slider-thumbs-next').addClass('unvisible');
								$('.projects-slider-view-next').addClass('unvisible');
							}
						}
					}
				});
				var projectsThumbs = new Swiper('.projects-slider-thumbs', {
					slidesPerView: 7,
					slidesPerGroup: 1,
					loopedSlides: $('.projects-slider-thumbs .swiper-slide').length,
					touchRatio: 0.2,
					spaceBetween: 5,
					breakpoints: {
						700: {
							slidesPerView: 5,
						},
						560: {
							slidesPerView: 3,
						},
						400: {
							slidesPerView: 2,
						}
					},
					on: {
						init: function(){
							$('.projects-slider-thumbs .swiper-slide').eq(this.activeIndex).addClass('active');
							var count = $('.projects-slider-thumbs .swiper-slide').length-1;
							if(this.activeIndex <= 0){
								$('.projects-slider-thumbs-prev').addClass('unvisible');
								$('.projects-slider-view-prev').addClass('unvisible');
							}
							if(this.activeIndex >= count){
								$('.projects-slider-thumbs-next').addClass('unvisible');
								$('.projects-slider-view-next').addClass('unvisible');
							}
						},
						slideChange: function(){
							$('.projects-slider-thumbs .swiper-slide').removeClass('active');
							$('.projects-slider-thumbs .swiper-slide').eq(this.activeIndex).addClass('active');
							projectsSlider.slideTo(this.activeIndex);
							var id = this.activeIndex,
								count = $('.projects-slider-thumbs .swiper-slide').length-1;
							if(id >= count){
								$('.projects-slider-thumbs-next').addClass('unvisible');
								$('.projects-slider-view-next').addClass('unvisible');
							}
							else{
								$('.projects-slider-thumbs-next').removeClass('unvisible');
								$('.projects-slider-view-next').removeClass('unvisible');
							}
							if(id <= 0){
								$('.projects-slider-thumbs-prev').addClass('unvisible');
								$('.projects-slider-view-prev').addClass('unvisible');
							}
							else{
								$('.projects-slider-thumbs-prev').removeClass('unvisible');
								$('.projects-slider-view-prev').removeClass('unvisible');
							}
						}
					}
				});

				$('.projects-slider-thumbs .swiper-slide').on('click', function(){
					var id = $(this).data('id'),
						count = $('.projects-slider-thumbs .swiper-slide').length-1;
					$('.projects-slider-thumbs .swiper-slide').removeClass('active');
					$(this).addClass('active');
					projectsSlider.slideTo(id);
					projectsThumbs.slideTo(id);
					if(id >= count){
						$('.projects-slider-thumbs-next').addClass('unvisible');
						$('.projects-slider-view-next').addClass('unvisible');
					}
					else{
						$('.projects-slider-thumbs-next').removeClass('unvisible');
						$('.projects-slider-view-next').removeClass('unvisible');
					}
					if(id <= 0){
						$('.projects-slider-thumbs-prev').addClass('unvisible');
						$('.projects-slider-view-prev').addClass('unvisible');
					}
					else{
						$('.projects-slider-thumbs-prev').removeClass('unvisible');
						$('.projects-slider-view-prev').removeClass('unvisible');
					}
				});

				$('.projects-slider-thumbs-next, .projects-slider-view-next').on('click', function(){
					var activeId = $('.projects-slider-thumbs .swiper-slide.active').data('id'),
						count = $('.projects-slider-thumbs .swiper-slide').length-1;
					if(activeId + 1 <= count){					
						$('.projects-slider-thumbs .swiper-slide').removeClass('active');
						$('.projects-slider-thumbs .swiper-slide').eq(activeId + 1).addClass('active');
						projectsSlider.slideTo(activeId + 1);
						projectsThumbs.slideTo(activeId + 1);
						$('.projects-slider-thumbs-prev').removeClass('unvisible');
						$('.projects-slider-view-prev').removeClass('unvisible');
					}
					if(activeId + 1 == count || activeId > count){
						$('.projects-slider-thumbs-next').addClass('unvisible');
						$('.projects-slider-view-next').addClass('unvisible');
					}
					else{
						$('.projects-slider-thumbs-next').removeClass('unvisible');
						$('.projects-slider-view-next').removeClass('unvisible');
					}
				});

				$('.projects-slider-thumbs-prev, .projects-slider-view-prev').on('click', function(){
					var activeId = $('.projects-slider-thumbs .swiper-slide.active').data('id'),
						count = $('.projects-slider-thumbs .swiper-slide').length-1;
					if(activeId - 1 >= 0){					
						$('.projects-slider-thumbs .swiper-slide').removeClass('active');
						$('.projects-slider-thumbs .swiper-slide').eq(activeId - 1).addClass('active');
						projectsSlider.slideTo(activeId - 1);
						projectsThumbs.slideTo(activeId - 1);
						$('.projects-slider-thumbs-next').removeClass('unvisible');
						$('.projects-slider-view-next').removeClass('unvisible');
					}				
					if(activeId - 1 == 0 || activeId < 0){
						$('.projects-slider-thumbs-prev').addClass('unvisible');
						$('.projects-slider-view-prev').addClass('unvisible');
					}
					else{
						$('.projects-slider-thumbs-prev').removeClass('unvisible');
						$('.projects-slider-view-prev').removeClass('unvisible');
					}
				});
			}

			mapInit();
			departmentMap();

		    var overlaysControls = document.querySelectorAll('.overlay-control');
			for(var i = 0; i <= overlaysControls.length-1; i++){
		    	overlaysControls[i].addEventListener('click', function(e){
		    		var overlays = document.querySelectorAll('[data-overlay="'+ this.dataset.overlayClose+'"],[data-overlay="'+ this.dataset.overlayOpen+'"]');
		    		for(var j = 0; j <= overlays.length-1; j++){
		    			if(this.dataset.overlayClose) overlays[j].classList.add('closed');
		    			if(this.dataset.overlayOpen) overlays[j].classList.remove('closed');
		    		}
		    	});
		    }

		    jQuery('.gallery').each(function() {
	            jQuery(this).find(".gallery-icon a").attr('data-fancybox', 'group-' + jQuery(this).attr('id'));
			});
			let initCalendar = function(dates){
				return new Promise((resolve, reject) => {    
					var calendar = $('#calendar').datetimepicker({
						inline: true,
						sideBySide: true,
						locale: 'ru',
						dayViewHeaderFormat: 'MMMM YYYY',
						format: 'MM/dd',
						tooltips: {
							today: '',
							clear: '',
							close: '',
							selectMonth: '',
							prevMonth: '',
							nextMonth: '',
							selectYear: '',
							prevYear: '',
							nextYear: '',
							selectDecade: '',
							prevDecade: '',
							nextDecade: '',
							prevCentury: '',
							nextCentury: ''
						},
						enabledDates: dates
					});
					resolve(calendar);
				});
			}
			var eventToDates = function(enabledDates){
			   	document.querySelectorAll('#calendar .day').forEach((date, i) => {
				   	if(enabledDates.includes(date.getAttribute('data-day'))){
						date.classList.add('enable');
						date.setAttribute('data-state', 'init');
						var popup = document.createElement('div'),
							popupInner = document.createElement('div'),
							popupLoader = document.createElement('div');
						popup.classList.add('datepicker-popup');
						popupInner.classList.add('datepicker-popup-inner');
						popupLoader.classList.add('datepicker-popup-loader');
						popupInner.appendChild(popupLoader);
						popup.appendChild(popupInner);
						date.appendChild(popup);
						date.addEventListener('mouseenter', (e) => {
							let target = e.currentTarget,
								popup = target.querySelector('.datepicker-popup'),
								currentDate = target.getAttribute('data-day');
							currentDate = currentDate.split('.');
							if(target.getAttribute('data-state') === 'load' || target.getAttribute('data-state') === 'done') return;
							request.get({
								url: '/wp-admin/admin-ajax.php',
								data: {
									action:'get_events', 
									date: (+new Date(currentDate[2]+'-'+currentDate[1]+'-'+currentDate[0]) / 1000)
								},
								start: () => {
									date.setAttribute('data-state', 'load');
								},
								end: () => {
									date.setAttribute('data-state', 'done');
								}
							}).then((DOMString) => {
								var parser = new DOMParser(),
									dom = parser.parseFromString(DOMString.responseText, 'text/html');
								dom = dom.querySelector('body > div');
								popupInner.appendChild(dom);
								router.addLinksEvent();
							}).catch((e) => {
							});
						})
						date.addEventListener('mouseleave', (e) => {
						});
						date.querySelector('span').addEventListener('click', (e) => {
							e.preventDefault();
							let currentDate = e.currentTarget.closest('.day').getAttribute('data-day');
							currentDate = currentDate.split('.');
							window.location = '/events?date='+(+new Date(currentDate[2]+'-'+currentDate[1]+'-'+currentDate[0]) / 1000);
						});
					}
				})
			};
			if($('#calendar').length){
				let data = $('#calendar').data('dates');
				data = data.split(',');
				initCalendar(data).then((calendar) => {
					eventToDates(data);
					calendar.on("dp.update", () => {
						eventToDates(data);
					});
				});
			}

			var phones = document.querySelectorAll('input[type="tel"]');
			if(phones.length && window.IMask){
				for(var i = 0; i < phones.length; i++){
					var item = phones[i],
						mask = '+7(000) 000-00-00',
						maskedField = new IMask(item, {
							mask: mask,
						}),
						masked = maskedField.masked;
					item.addEventListener('blur', function(){
						if(this.value.length != mask.length){
							this.value = '';
							masked.reset();
						}
					});                
				}
			}
		};

		var router = new BurlakNavigation({
			container: '#app',
			navItems: '.ajax, .ajax a',
			preloader: true,
			beforeInit: function(){},
			beforeRendered: function(){
				$.fancybox.close();
			},
			afterRendered: function(appContainer){
				window.scrollTo(0, 0);
				commonFunc();
				var hash = window.location.hash,
					item = null;
				if(hash) item = appContainer.querySelector(hash);
				if(item){
					window.scroll({
						top: item.offsetTop - document.querySelector('.header').clientHeight,
						behavior: 'smooth' 
					});
				};
				let forms = document.querySelectorAll('.wpcf7-form');
				window.wpcf7 && forms.length && forms.forEach((form, index) => {
					window.wpcf7.initForm(form);
				});
			},
			afterInit: function(){}
		});
		router.init();

		$('body').on('click', '.ajax-pagination-more', function(e){
			e.preventDefault();
			var nextLink = document.querySelector('.pagination-links a.next'),
				nextLinkHref = nextLink.href,
				button = e.target;
			if(!nextLinkHref || button.getAttribute('data-enable') === 'false' || button.style.display == 'none') return;
			button.setAttribute('data-scroll-enable', 'true');
			button.setAttribute('data-enable', 'false');
			button.setAttribute('data-load', 'true');
			request.get({
					url: nextLinkHref,
				}).then((DOMString) => {
				var parser = new DOMParser(),
					ajaxListClass = '.ajax-list',
					ajaxItemClass = '.ajax-item',
					dom = parser.parseFromString(DOMString.responseText, 'text/html'),
					appendTo = document.querySelector(ajaxListClass),
					appendFrom = dom.querySelector(ajaxListClass),
					appendFromItems = appendFrom.querySelectorAll(ajaxItemClass),
					issetNextPage = dom.querySelector('.pagination-links a.next');
				if(!issetNextPage){
					button.style.display = 'none';
				}
				else{
					nextLink.href = issetNextPage.href;
				}
				if(!appendFromItems.length){
					return;
				}
				for(var i = 0; i < appendFromItems.length; i++){
					appendTo.appendChild(appendFromItems[i]);
				}
				router.addLinksEvent();
				button.setAttribute('data-load', 'false');
				button.setAttribute('data-enable', 'true');
			}).catch((e) => {
				window.location = nextLink;
				button.setAttribute('data-load', 'false');
				button.setAttribute('data-enable', 'true');
			});
		});
	
		function ajaxClickOnScroll(){
			var buttons = document.querySelectorAll('.ajax-pagination-more[data-scroll-enable="true"]'),
				scrollTop,
				windowHeight;
			if(!buttons) return;
			
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			windowHeight = window.innerHeight;
			for(var i = 0; i < buttons.length; i++){
				if(buttons[i].getBoundingClientRect().top <= windowHeight && buttons[i].getAttribute('data-load') !== 'true'){
					buttons[i].click();
				}
			}
		};
		window.addEventListener('scroll', function(){
			//ajaxClickOnScroll();
		});

		window.eventRegistration = function(name){
			$.fancybox.open({
				src: '#modal-registration',
				type: 'inline',
				opts : {
					afterShow: function(){
						$('input.registration-place').val(name ? name : '');
					},
					afterClose: function(){
						$('input.registration-place').val('');
					}
				}
			});
		}
	});

	window.addEventListener('load', function(){
		var preloader = document.querySelector('.preloader');
		if(preloader){
			preloader.classList.remove('preloader__visible');
			setTimeout(function () {
				preloader.parentNode.removeChild(preloader);			
			}, 400);
		}		
	});

})(jQuery);