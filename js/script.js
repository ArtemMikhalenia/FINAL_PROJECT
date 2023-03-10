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


//PLACEHOLDER

const popupForm = document.forms.popup;
const contactForm = document.forms.contact;

const inputAll = document.querySelectorAll('input');
const placeholder = document.querySelectorAll('[placeholder]');

const nameInputPopup = popupForm.names;
const namePlaceholderPopup = nameInputPopup.placeholder;
const phoneInputPopup = popupForm.phone;
const phonePlaceholderPopup = phoneInputPopup.placeholder;
const emailInputPopup = popupForm.email;
const emailPlaceholderPopup = emailInputPopup.placeholder;
const textInputPopup = popupForm.textarea;
const textPlaceholderPopup = textInputPopup.placeholder;
const emailInputContact = contactForm.email;
const emailPlaceholderContact = emailInputContact.placeholder;

placeholder.forEach(el =>
	el.addEventListener("focus", function (element) {
		el.placeholder = "";
	})
);
placeholder.forEach(el =>
	el.addEventListener("blur", function (element) {
		nameInputPopup.placeholder = placeholder.value = "Имя";
		phoneInputPopup.placeholder = placeholder.value = "Телефон";
		emailInputPopup.placeholder = placeholder.value = "Email";
		textInputPopup.placeholder = placeholder.value = "Текст сообщения";
		emailInputContact.placeholder = placeholder.value = "Введите свой email";
	}));

//<IBG>

// function ibg() {
// 	let ibg = document.querySelectorAll(".ibg");
// 	for (var i = 0; i < ibg.length; i++) {
// 		if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
// 			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
// 		}
// 	}
// }
// ibg();


//POPUP
const popupLinks = document.querySelectorAll('.popup-link');
const bodyScroll = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

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
	if (currentPopup && unlock) {
		const popupActive = document.querySelector('.popup__contact.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
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
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	bodyScroll.style.paddingRight = lockPaddingValue;
	bodyScroll.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		bodyScroll.style.paddingRight = '0px';
		bodyScroll.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup__contact.open');
		popupClose(popupActive);
	}
});

// (function () {
// 	// проверяем поддержку
// 	if (!Element.prototype.closest) {
// 		// реализуем
// 		Element.prototype.closest = function (css) {
// 			var node = this;
// 			while (node) {
// 				if (node.matches(css)) return node;
// 				else node = node.parentElement;
// 			}
// 			return null;
// 		};
// 	}
// })();
// (function () {
// 	// проверяем поддержку
// 	if (!Element.prototype.matches) {
// 		// определяем свойство
// 		Element.prototype.matches = Element.prototype.matchesSelector ||
// 			Element.prototype.webkitMatchesSelector ||
// 			Element.prototype.mozMatchesSelector ||
// 			Element.prototype.msMatchesSelector;
// 	}
// })();


//<SWIPER>

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