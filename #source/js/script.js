//<MENU BURGER>
let iconMenu = document.querySelector(".icon-menu");
let body = document.querySelector("body");
let menuBody = document.querySelector(".menu__body");
let mainblockShadow = document.querySelector(".mainblock__shadow");
if (iconMenu) {
	iconMenu.addEventListener("click", function () {
		iconMenu.classList.toggle("active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("active");
		mainblockShadow.classList.toggle("active");
	});
}

//POPUP
const popupLinks = document.querySelectorAll('.popup-link');

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const currentPopup = document.getElementById(popupName);
			popupOpen(currentPopup);
			e.preventDefault();
		});
	}
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup__contact'));
			e.preventDefault();
		});
	}
}

function popupOpen(currentPopup) {
	if (currentPopup) {
		const popupActive = document.querySelector('.popup__contact.open');
		if (popupActive) {
			popupClose(popupActive, false);
		}
		currentPopup.classList.add('open');
		currentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup__contact'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	popupActive.classList.remove('open');
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup__contact.open');
		popupClose(popupActive);
	}
});

//<WOW>

const wow = new WOW({
	boxClass: 'wow',
	animateClass: 'animate__animated',
	offset: 50,
	mobile: true,
	live: true,
})
wow.init();

//<SWIPER>

const slider = document.querySelectorAll('.main-swiper');
const rentSlider = document.querySelector('.rent-swiper');
const objectSlider = document.querySelector('.object-swiper');

if (slider.length > 0) {
	const swiper = new Swiper('.main-swiper', {
		slideClass: 'main-swiper__slide',
		wrapperClass: 'main-swiper__wrapper',
		slidesPerView: 'auto',
		autoHeight: true,
		spaceBetween: 100,
		centeredSlides: true,
		initialSlide: 1,
		grabCursor: true,
		loop: true,
		speed: 300,
		effect: 'coverflow',
		coverflowEffect: {
			rotate: 0,
			scale: 0.85,
			slideShadows: false,
		},
		autoplay: {
			delay: 4000,
			pauseOnMouseEnter: true,
		},
		navigation: {
			nextEl: '.main-button__next',
			prevEl: '.main-button__prev',
		},
		breakpoints: {
			320: {
				spaceBetween: 0
			},
			480: {
				spaceBetween: 20
			},

			991.98: {
				spaceBetween: 100
			},
		},
	});
}

if (rentSlider) {
	const swiper = new Swiper('.rent-swiper', {
		slideClass: 'rent-swiper__slide',
		wrapperClass: 'rent-swiper__wrapper',
		slidesPerView: 'auto',
		autoHeight: true,
		spaceBetween: 220,
		centeredSlides: true,
		initialSlide: 1,
		grabCursor: true,
		loop: true,
		speed: 300,
		effect: 'coverflow',
		coverflowEffect: {
			rotate: 0,
			scale: 1.16,
			slideShadows: false,
		},
		autoplay: {
			delay: 4000,
			pauseOnMouseEnter: true,
		},
		navigation: {
			nextEl: '.main-button__next',
			prevEl: '.main-button__prev',
		},
		breakpoints: {
			320: {
				spaceBetween: 50
			},
			480: {
				spaceBetween: 100
			},

			991.98: {
				spaceBetween: 220
			},
		},
	});
}

if (objectSlider) {
	const swiper = new Swiper('.object-swiper', {
		slideClass: 'object-swiper__slide',
		wrapperClass: 'object-swiper__wrapper',
		slidesPerView: 'auto',
		spaceBetween: 0,
		grabCursor: true,
		loop: true,
		speed: 300,
		navigation: {
			nextEl: '.object-swiper__button-next',
			prevEl: '.object-swiper__button-prev',
		},
	});
}

//<TABS>======================================================

const tabsBtn = document.querySelectorAll('.tab-buttons__item');
const tabsItems = document.querySelectorAll('.benefits-block');

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
	item.addEventListener("click", function () {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute("data-tab");
		let currentTab = document.querySelector(tabId);

		if (!currentBtn.classList.contains('active')) {
			tabsBtn.forEach(function (item) {
				item.classList.remove('active');
			});

			tabsItems.forEach(function (item) {
				item.classList.remove('active');
			});

			currentBtn.classList.add('active');
			currentTab.classList.add('active');
		}
	});
};

document.querySelector('.tab-buttons__item1').click();
