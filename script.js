document.addEventListener("DOMContentLoaded", function () {
    // Button Click to Go to Next Page
    document.getElementById("seeMessage").addEventListener("click", function () {
        window.location.href = "willyouseethis.html";
    });

    // Play Music After First Click (Autoplay Fix)
    document.addEventListener("click", function () {
        document.getElementById("bgMusic").play();
    }, { once: true });
});
