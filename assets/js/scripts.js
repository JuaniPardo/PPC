document.addEventListener("DOMContentLoaded", function() {
    const spinnerContainer = document.getElementById("spinner-container");
    spinnerContainer.classList.add("show");

    window.addEventListener("load", function() {
        spinnerContainer.classList.remove("show");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const hero = document.querySelector(".hero");
    window.addEventListener("scroll", function() {
        let scrollPosition = window.scrollY;
        hero.style.backgroundPositionY = -scrollPosition * 0.5 + "px";
    });
});