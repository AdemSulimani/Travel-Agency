const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", () => {
    preloader.classList.add("remove")
})

/**
 * Navbar
 */

const navbar = document.querySelector('[data-navbar]');
const navTogglers = document.querySelectorAll('[data-nav-toggler]');
const overlay = document.querySelector('[data-overlay]');

// Function to close the navbar
const closeNav = function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("nav-active");
}

// Toggle navbar function
const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

// Add event listeners to toggler buttons
navTogglers.forEach(toggler => {
    toggler.addEventListener("click", toggleNav);
});

// Add event listener to navbar links to close the navbar when clicked
const navbarLinks = document.querySelectorAll('.navbar-link');
navbarLinks.forEach(link => {
    link.addEventListener('click', closeNav);
});


/**
 header
 **/

 const header = document.querySelector('[data-header]');

 window.addEventListener("scroll", function () {

header.classList[window.scrollY > 100 ? "add" : "remove"] ("active");

})