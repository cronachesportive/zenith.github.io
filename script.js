const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".card, .section-title, .hero h1, .hero h2, .subtitle"
).forEach((element) => {

    element.classList.add("hidden");
    observer.observe(element);

});

document.querySelectorAll(".hotspot").forEach((hotspot) => {

    hotspot.addEventListener("mouseenter", () => {
        hotspot.style.transform = "scale(1.2)";
    });

    hotspot.addEventListener("mouseleave", () => {
        hotspot.style.transform = "scale(1)";
    });

});