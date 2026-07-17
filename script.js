// Wait until the entire HTML DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Hero Button Logic
    const heroBtn = document.getElementById("heroBtn");
    if (heroBtn) {
        heroBtn.addEventListener("click", () => {
            alert("Thank you for your interest! The Projects showcase section is launching on Day 8.");
        });
    }

    // 2. Scroll to Top Logic
    const scrollTopBtn = document.getElementById("scrollToTopBtn");

    if (scrollTopBtn) {
        // Monitor page scrolling
        window.onscroll = function() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                scrollTopBtn.style.display = "block";
            } else {
                scrollTopBtn.style.display = "none";
            }
        };

        // Click handler to scroll smoothly back to the top
        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            // Fallback rules for older engines
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    } else {
        console.error("Error: Could not find an element with id='scrollToTopBtn' inside the HTML file.");
    }
});