(function () {
	const header__burger = document.querySelector('.header__burger');
	header__burger.addEventListener('click', () => {
		header__burger.classList.toggle('active')
	});
}());