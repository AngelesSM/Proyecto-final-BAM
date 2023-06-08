// *********** nav links ***********

const navbar = document.querySelector(".navbar");
navbar.querySelector(".toggle").addEventListener("click", () => {
    navbar.classList.toggle("collapsed");
});
window.addEventListener("scroll", () => {
    let windowY = window.pageYOffset;
    let navbarHeight = document.querySelector(".navbar").offsetHeight;
    if (windowY > navbarHeight) navbar.classList.add("sticky");
    else navbar.classList.remove("sticky");
});


// *********** nav links ***********
//const menu = document.querySelector(".hamburger-menu");
//const navbarLinks = document.querySelector(".nav-links");

// EventListener
//menu.addEventListener("click", () => {
//	navbarLinks.classList.toggle("open");
//});


