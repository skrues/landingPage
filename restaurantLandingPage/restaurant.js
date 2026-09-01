const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");


// OPEN / CLOSE MOBILE MENU

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});


// CLOSE MENU WHEN CLICKING A LINK

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });

});