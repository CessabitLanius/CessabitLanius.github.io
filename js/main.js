window.addEventListener('DOMContentLoaded', () => {
	$(function () {
		$('.questions__item--title').on('click', function () {
			$('.questions__item').removeClass('questions__item--active');
			$(this).parent().addClass('questions__item--active');
		});
	});

	window.addEventListener('scroll', function () {
		let header = document.querySelector('header');
		let windowPos = window.scrollY > 0;
		header.classList.toggle('header--active', windowPos);
	});
});