document.addEventListener("DOMContentLoaded", function() {
    const spinnerContainer = document.getElementById("spinner-container");
    spinnerContainer.classList.add("show");

    window.addEventListener("load", function() {
        spinnerContainer.classList.remove("show");
    });
});