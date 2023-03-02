document.querySelector('.header__burger').onclick = function() {
	document.querySelector('.header-left__menu').classList.toggle('header-left__menu-active')
	document.querySelector('.header__burger').classList.toggle('active')
   $('body').toggleClass('lock')
}
