const headerBurger = document.querySelector('.header-burger')
const mobileMenu = document.querySelector('.mobile-menu')


headerBurger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active')
})