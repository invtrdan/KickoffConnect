document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    const overlay = document.querySelector('.overlay');

    // Toggle menu and overlay by clicking hamburger
    hamburger.addEventListener("click", () => {
        toggleMenu();
    });

    // Also allow the overlay to close the menu
    overlay.addEventListener("click", () => {
        toggleMenu();
    });
});

function toggleMenu() {
    const menu = document.querySelector('.menu');
    const overlay = document.querySelector('.overlay');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
}
