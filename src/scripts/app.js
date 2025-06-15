import Menu from "./plugins/responsive-menu.js";

document.addEventListener("DOMContentLoaded", () => {
    const menu = new Menu({
        buttonSelector: '[data-menu-toggler]',
        menuSelector: '[data-menu-overlay]',
        htmlElementSelector: 'html',
        animationDuration: 500,
        breakpoint: 1300,
    })
});