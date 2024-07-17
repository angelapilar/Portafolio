// validacion.js

document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.menu');
    const toggleMenu = document.createElement('button');
    toggleMenu.innerText = 'Menu';
    toggleMenu.classList.add('menu__toggle');
    menu.insertBefore(toggleMenu, menu.firstChild);

    toggleMenu.addEventListener('click', function() {
        menu.classList.toggle('menu--open');
    });
});
