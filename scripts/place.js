// Static values
const temperature = 37; // °C
const windSpeed = 13;    // km/h

// Wind chill calculation (valid only if temp ≤ 10°C and windSpeed > 4.8 km/h)
function calculateWindChill(temp, speed) {
    return (temp <= 10 && speed > 4.8)
        ? (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1)
        : "N/A";
}

const windChill = calculateWindChill(temperature, windSpeed);

// Display on page
document.addEventListener("DOMContentLoaded", () => {
    const weatherSection = document.querySelector(".weather-section");

    // Optional: Replace this with specific element if needed
    const wcElement = document.createElement("p");
    wcElement.innerHTML = `<strong>Wind Chill:</strong> ${windChill} °C`;
    weatherSection.appendChild(wcElement);
});