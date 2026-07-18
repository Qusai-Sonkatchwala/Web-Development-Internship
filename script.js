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

// ==========================================
    // 3. FORM VALIDATION LOGIC
    // ==========================================
    const form = document.getElementById("portfolioForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // Stop form from reloading page instantly
            
            if (validateInputs()) {
                alert("Success! Your message validation passed perfectly.");
                form.reset();
                // Clear any leftover styling flags
                document.querySelectorAll('.form-control').forEach(div => div.className = 'form-control');
            }
        });
    }

    function validateInputs() {
        let isValid = true;
        
        // Clean up inputs by removing blank outer spacing strings
        const nameVal = nameInput.value.trim();
        const emailVal = emailInput.value.trim();
        const messageVal = messageInput.value.trim();

        // 1. Name Check
        if (nameVal === "") {
            setError(nameInput, "Name string cannot be left empty.");
            isValid = false;
        } else {
            setSuccess(nameInput);
        }

        // 2. Email Check (Regex validation formula match)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailVal === "") {
            setError(emailInput, "Email target required.");
            isValid = false;
        } else if (!emailPattern.test(emailVal)) {
            setError(emailInput, "Please provide a valid formatting layout (e.g. name@domain.com).");
            isValid = false;
        } else {
            setSuccess(emailInput);
        }

        // 3. Message Check
        if (messageVal === "") {
            setError(messageInput, "Please type a message before submitting.");
            isValid = false;
        } else {
            setSuccess(messageInput);
        }

        return isValid;
    }

    function setError(input, message) {
        const formControl = input.parentElement;
        formControl.className = "form-control error";
        const small = formControl.querySelector("small");
        small.innerText = message;
    }

    function setSuccess(input) {
        const formControl = input.parentElement;
        formControl.className = "form-control success";
    }