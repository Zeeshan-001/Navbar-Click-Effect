'use strict';

const navItems = document.querySelectorAll('.nav__item');

const indicator = document.querySelector('.indicator');

const removeActiveClass = function () {
	navItems.forEach((item) => item.classList.remove('active'));
};

navItems.forEach((navItem) =>
	navItem.addEventListener('click', function (e) {
		// Remove Add Active Class

		removeActiveClass();

		navItem.classList.add('active');

		// Move Indicator
		const itemSelect = +e.target.closest('.nav__item').dataset.item;

		indicator.style.transform = `translateX(${itemSelect * 6.4}rem)`;
	})
);
