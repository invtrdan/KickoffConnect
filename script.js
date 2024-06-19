document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});

function toggleMenu() {
    var menu = document.querySelector('.menu');
    var overlay = document.querySelector('.overlay');
    menu.classList.toggle('active'); // Toggle the 'active' class on the navigation menu
    overlay.classList.toggle('active'); // Toggle the 'active' class on the overlay
}

// Get the send button element
var sendButton = document.getElementById("sendButton");

// Add a click event listener to the send button
sendButton.addEventListener("click", function () {
    // Add the 'clicked' class to the button when clicked
    sendButton.classList.add("clicked");
});