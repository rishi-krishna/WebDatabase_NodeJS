const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    // Toggle Nav
    navLinks.classList.toggle("show__navLinks");

    // Hamburger Animation
    hamburger.classList.toggle("toggle");
});
