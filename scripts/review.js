document.addEventListener("DOMContentLoaded", () => {
    let count = localStorage.getItem("reviewCount");
    count = count ? parseInt(count) + 1 : 1;
    localStorage.setItem("reviewCount", count);

    const display = document.getElementById("reviewCount");
    if (display) {
        display.textContent = count;
    }
});