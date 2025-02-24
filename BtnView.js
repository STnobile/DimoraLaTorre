function showDetails() {
    const detailsSection = document.getElementById("detailsSection");
    detailsSection.style.display = "block"; // Shows the details section
    window.scrollTo({
        top: detailsSection.offsetTop,
        behavior: "smooth" // Scrolls smoothly to the revealed section
    });
}