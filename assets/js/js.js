const menu = document.querySelector('.cabecalho__navbar-hamburguer')
const nav = document.querySelector('.cabecalho__navbar__nav-alternativo-ul')

const arrayDeEventos = ['touchstart', 'click']

menu.addEventListener('click', () => {
    nav.classList.toggle('displayMenu')
})