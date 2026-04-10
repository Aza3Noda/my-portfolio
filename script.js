// Scroll Reveal Logic
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", () => {
    reveal();
    handleScrollTopButton();
});

// Scroll to Top Button Visibility
function handleScrollTopButton() {
    const scrollTopBtn = document.querySelector(".iconbutton");
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
}

// Add Recommendation Functionality
function addRecommendation() {
    const recommendationInput = document.getElementById("new_recommendation");
    const nameInput = document.getElementById("user_name");
    const recommendationsContainer = document.getElementById("all_recommendations");

    if (recommendationInput.value.trim() !== "") {
        // Create new recommendation card
        const newCard = document.createElement("div");
        newCard.className = "recommendation reveal fade-bottom active"; // Active so it shows up immediately
        
        const openQuote = document.createElement("span");
        openQuote.innerHTML = "&#8220;";
        
        const text = document.createTextNode(recommendationInput.value);
        
        const closeQuote = document.createElement("span");
        closeQuote.innerHTML = "&#8221;";
        
        newCard.appendChild(openQuote);
        newCard.appendChild(text);
        if (nameInput.value.trim() !== "") {
            const namePara = document.createElement("p");
            namePara.style.fontStyle = "normal";
            namePara.style.fontWeight = "600";
            namePara.style.marginTop = "1rem";
            namePara.style.fontSize = "0.9rem";
            namePara.style.color = "var(--primary)";
            namePara.innerText = "- " + nameInput.value;
            newCard.appendChild(namePara);
        }
        newCard.appendChild(closeQuote);
        
        recommendationsContainer.appendChild(newCard);
        
        // Show success popup
        showPopup(true);
        
        // Clear inputs
        recommendationInput.value = "";
        nameInput.value = "";
    }
}

function showPopup(bool) {
    const popup = document.getElementById("popup");
    if (bool) {
        popup.style.visibility = "visible";
        popup.style.opacity = "1";
    } else {
        popup.style.visibility = "hidden";
        popup.style.opacity = "0";
    }
}

// Initial Checks
document.addEventListener("DOMContentLoaded", () => {
    reveal();
    handleScrollTopButton();
});
