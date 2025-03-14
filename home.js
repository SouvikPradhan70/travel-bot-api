//code for refresh to get back to home page
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};



document.getElementById("startJourney").addEventListener("click", function () {
    // Enable scrolling
    document.body.style.overflow = "auto";

    // Scroll smoothly to the next section
    document.getElementById("extraContent").scrollIntoView({ behavior: "smooth" });
});

const scrollContainer = document.querySelector('.scroll-wrapper');
scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY; // Enables smooth horizontal scroll with the mouse wheel
});

