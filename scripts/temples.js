// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu');
    const navMenu = document.getElementById('nav-menu');

    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!menuButton.contains(event.target) && !navMenu.contains(event.target)) {
            menuButton.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Close menu when clicking a nav link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuButton.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});