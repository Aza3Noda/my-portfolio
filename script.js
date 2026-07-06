// Internationalization
const translations = {
    en: {
        meta: {
            title: "Ariel Noda | Full-Stack Developer",
            description: "Portfolio of Ariel Noda, a full-stack developer specialized in modern, efficient web applications using Java, React, and Node.js."
        },
        nav: {
            about: "About",
            skills: "Skills",
            projects: "Projects",
            testimonials: "Testimonials",
            contact: "Contact"
        },
        hero: {
            title: `Hola, I'm Ariel <span class="wave">👋</span>`,
            description: "I am a full-stack software developer focused on building modern, efficient web applications that help startups grow.",
            cta: "View My Work"
        },
        about: {
            title: "About Me",
            p1: "I help startups and small businesses create fast, scalable, and user-friendly digital products. My work covers both front-end and back-end development, ensuring complete and reliable solutions.",
            p2: "With expertise in Java, React, and Node.js, I focus on clean code, performance, and clear communication. Whether it's building responsive web apps or developing robust APIs, I'm committed to delivering quality results."
        },
        skills: {
            title: "Technical Skills",
            html: "Foundation & SEO",
            js: "Modern ES6+",
            java: "Backend Logic",
            node: "Server-side JS",
            react: "Frontend Apps"
        },
        projects: {
            title: "Selected Projects",
            taskflow: {
                subtitle: "Project Management Web App",
                li1: "Responsive task management platform for real-time tracking.",
                li2: "Implemented drag-and-drop organization in React."
            },
            fittrack: {
                subtitle: "Fitness & Nutrition Tracker",
                li1: "Mobile-first app with interactive progress charts.",
                li2: "Designed high-fidelity UI/UX flows in Figma."
            },
            localshop: {
                subtitle: "E-commerce Solution",
                li1: "Full-stack platform with secure payment integration.",
                li2: "Modern interface with smooth micro-animations."
            }
        },
        testimonials: {
            title: "Testimonials",
            "1": "A highly skilled full-stack developer with a rare eye for UX. Transforms ideas into polished, user-friendly products.",
            "2": "Combines technical expertise with strong design sensibilities. Always delivers on time and exceeds expectations.",
            "3": "Reliable, creative, and detail-oriented. A valuable asset to any development team."
        },
        contact: {
            title: "Let's Work Together",
            namePlaceholder: "Your Name (Optional)",
            messagePlaceholder: "Leave a recommendation or message...",
            submit: "Submit Message"
        },
        footer: {
            text: "© 2026 Ariel Noda. All rights reserved. Built with passion & phthalo green."
        },
        popup: {
            title: "Thank you!",
            message: "Your recommendation has been submitted successfully.",
            button: "Excellent"
        }
    },
    de: {
        meta: {
            title: "Ariel Noda | Full-Stack-Entwickler",
            description: "Portfolio von Ariel Noda, Full-Stack-Entwickler für moderne, effiziente Webanwendungen mit Java, React und Node.js."
        },
        nav: {
            about: "Über mich",
            skills: "Fähigkeiten",
            projects: "Projekte",
            testimonials: "Referenzen",
            contact: "Kontakt"
        },
        hero: {
            title: `Hallo, ich bin Ariel <span class="wave">👋</span>`,
            description: "Ich bin Full-Stack-Softwareentwickler und entwickle moderne, effiziente Webanwendungen, die Start-ups beim Wachstum unterstützen.",
            cta: "Meine Projekte ansehen"
        },
        about: {
            title: "Über mich",
            p1: "Ich helfe Start-ups und kleinen Unternehmen dabei, schnelle, skalierbare und benutzerfreundliche digitale Produkte zu entwickeln. Meine Arbeit umfasst Front-end- und Back-end-Entwicklung für vollständige und zuverlässige Lösungen.",
            p2: "Mit Expertise in Java, React und Node.js lege ich Wert auf sauberen Code, Performance und klare Kommunikation. Ob responsive Web-Apps oder robuste APIs – ich liefere Ergebnisse in hoher Qualität."
        },
        skills: {
            title: "Technische Fähigkeiten",
            html: "Grundlagen & SEO",
            js: "Modernes ES6+",
            java: "Backend-Logik",
            node: "Serverseitiges JS",
            react: "Frontend-Anwendungen"
        },
        projects: {
            title: "Ausgewählte Projekte",
            taskflow: {
                subtitle: "Projektmanagement-Web-App",
                li1: "Responsive Plattform für Aufgabenverwaltung mit Echtzeit-Tracking.",
                li2: "Drag-and-Drop-Organisation in React implementiert."
            },
            fittrack: {
                subtitle: "Fitness- & Ernährungstracker",
                li1: "Mobile-first App mit interaktiven Fortschrittsdiagrammen.",
                li2: "High-Fidelity UI/UX-Flows in Figma entworfen."
            },
            localshop: {
                subtitle: "E-Commerce-Lösung",
                li1: "Full-Stack-Plattform mit sicherer Zahlungsintegration.",
                li2: "Moderne Oberfläche mit flüssigen Micro-Animationen."
            }
        },
        testimonials: {
            title: "Referenzen",
            "1": "Ein hochqualifizierter Full-Stack-Entwickler mit einem seltenen Gespür für UX. Verwandelt Ideen in ausgereifte, benutzerfreundliche Produkte.",
            "2": "Verbindet technisches Know-how mit starkem Designverständnis. Liefert stets pünktlich und übertrifft Erwartungen.",
            "3": "Zuverlässig, kreativ und detailorientiert. Eine wertvolle Bereicherung für jedes Entwicklungsteam."
        },
        contact: {
            title: "Lass uns zusammenarbeiten",
            namePlaceholder: "Dein Name (optional)",
            messagePlaceholder: "Hinterlasse eine Empfehlung oder Nachricht...",
            submit: "Nachricht senden"
        },
        footer: {
            text: "© 2026 Ariel Noda. Alle Rechte vorbehalten. Mit Leidenschaft & Phthalogrün gebaut."
        },
        popup: {
            title: "Vielen Dank!",
            message: "Deine Empfehlung wurde erfolgreich übermittelt.",
            button: "Ausgezeichnet"
        }
    }
};

let currentLang = "en";

function getNestedTranslation(lang, key) {
    return key.split(".").reduce((obj, part) => obj && obj[part], translations[lang]);
}

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem("portfolio-lang", lang);

    document.documentElement.lang = lang;

    const meta = translations[lang].meta;
    document.title = meta.title;
    document.querySelector('meta[name="description"]').setAttribute("content", meta.description);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const text = getNestedTranslation(lang, el.dataset.i18n);
        if (text == null) return;
        if (el.hasAttribute("data-i18n-html")) {
            el.innerHTML = text;
        } else {
            el.textContent = text;
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
        const text = getNestedTranslation(lang, el.dataset.i18nPlaceholder);
        if (text != null) el.placeholder = text;
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
        const isActive = btn.dataset.lang === lang;
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-pressed", isActive);
    });

    const langSwitcher = document.querySelector(".lang-switcher");
    if (langSwitcher) {
        langSwitcher.setAttribute("aria-label", lang === "de" ? "Sprache" : "Language");
    }
}

function initLanguage() {
    const saved = localStorage.getItem("portfolio-lang");
    const browserLang = navigator.language.startsWith("de") ? "de" : "en";
    setLanguage(saved || browserLang);

    document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
    });
}

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
    initLanguage();
    reveal();
    handleScrollTopButton();
});
