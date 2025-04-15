document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const messageBox = document.getElementById("form-message");

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
        form.reset();
    });

    function showMessage(text, type) {
        messageBox.textContent = text;
        messageBox.className = `form-response ${type}`;
    }
});

