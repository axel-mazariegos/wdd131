document.addEventListener("DOMContentLoaded", () => {
    const greetingTarget = document.getElementById("welcome-user");
    const storedName = localStorage.getItem("bcardUser");
    if (greetingTarget && storedName) {
        greetingTarget.textContent = `Welcome back, ${storedName}!`;
        greetingTarget.classList.add("welcome-message");
    }

    const form = document.getElementById("contactForm");
    const messageBox = document.getElementById("form-message");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const message = form.message.value.trim();

            if (!name || !email || !message) {
                showMessage("Please fill out all fields.", "error");
                return;
            }

            showMessage(`Thanks, ${name}! We'll contact you soon.`, "success");
            localStorage.setItem("bcardUser", name);
            form.reset();
        });
    }

    function showMessage(text, type) {
        messageBox.textContent = text;
        messageBox.className = `form-response ${type} show`;
    }

    const faqs = [
        {
            question: "What are NFC business cards?",
            answer: "NFC business cards are physical cards embedded with a small chip that can wirelessly transfer contact information or links when tapped on a compatible smartphone."
        },
        {
            question: "How do NFC business cards work?",
            answer: "When you tap an NFC card on a compatible phone, it transmits a digital link—usually a contact card or a webpage—that opens automatically in the browser."
        },
        {
            question: "Will this work with all phones?",
            answer: "Most modern smartphones support NFC. Android phones typically have it enabled by default. iPhones (from iPhone 7 and newer) support it as well."
        }
    ];

    const faqContainer = document.getElementById("faq-container");

    if (faqContainer) {
        faqs.forEach(faq => {
            const details = document.createElement("details");
            const summary = document.createElement("summary");
            const p = document.createElement("p");

            summary.textContent = faq.question;
            p.textContent = faq.answer;

            details.appendChild(summary);
            details.appendChild(p);
            faqContainer.appendChild(details);
        });
    }
});
