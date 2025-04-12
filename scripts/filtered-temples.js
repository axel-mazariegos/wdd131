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

    // Function to create and display temple cards
    function displayTemples(filteredTemples = temples) {
        const gallery = document.querySelector('.gallery');
        const templeCards = filteredTemples.map(temple => `
            <figure>
                <img 
                    src="${temple.imageUrl}" 
                    alt="${temple.templeName} Temple" 
                    loading="lazy"
                >
                <figcaption>
                    <h3>${temple.templeName}</h3>
                    <p><strong>Location:</strong> ${temple.location}</p>
                    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
                </figcaption>
            </figure>
        `).join('');

        gallery.innerHTML = templeCards;
    }

    // Filter functions
    function filterOldTemples() {
        const oldTemples = temples.filter(temple => {
            const year = parseInt(temple.dedicated.split(',')[0]);
            return year < 1900;
        });
        displayTemples(oldTemples);
    }

    function filterNewTemples() {
        const newTemples = temples.filter(temple => {
            const year = parseInt(temple.dedicated.split(',')[0]);
            return year > 2000;
        });
        displayTemples(newTemples);
    }

    function filterLargeTemples() {
        const largeTemples = temples.filter(temple => temple.area > 90000);
        displayTemples(largeTemples);
    }

    function filterSmallTemples() {
        const smallTemples = temples.filter(temple => temple.area < 10000);
        displayTemples(smallTemples);
    }

    function showAllTemples() {
        displayTemples();
    }

    // Add click event listeners to navigation items
    document.getElementById('home').addEventListener('click', showAllTemples);
    document.getElementById('old').addEventListener('click', filterOldTemples);
    document.getElementById('new').addEventListener('click', filterNewTemples);
    document.getElementById('large').addEventListener('click', filterLargeTemples);
    document.getElementById('small').addEventListener('click', filterSmallTemples);

    // Display all temples when the page loads
    displayTemples();
});

// Temple data
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Los Angeles California",
        location: "Los Angeles, California, United States",
        dedicated: "1956, March, 11",
        area: 190614,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/los-angeles-california/400x250/los-angeles-california-temple-1079458-wallpaper.jpg"
    },
    {
        templeName: "San Jose Costa Rica",
        location: "Heredia, Costa Rica",
        dedicated: "2000, June, 4",
        area: 10700,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-jose-costa-rica/400x250/san-jose-costa-rica-temple-1162688-wallpaper.jpg"
    },
    {
        templeName: "Guatemala City Guatemala",
        location: "Guatemala City, Guatemala",
        dedicated: "1984, December, 14",
        area: 11610,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/guatemala-city-guatemala/400x250/guatemala-city-temple-lds-829605-wallpaper.jpg"
    },
];