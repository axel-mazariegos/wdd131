
// Select the span element by its ID
const year = document.getElementById("currentyear");

// Create a Date object
const today = new Date();

// Update the inner HTML with the current year
year.innerHTML = today.getFullYear();

// Select the paragraph where the last modified date will be displayed
const lastModified = document.getElementById("lastModified");

// Set the innerHTML to the lastModified date from the document object
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;