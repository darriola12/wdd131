// Get current year
const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

// Get last modified date
document.getElementById("lastModified").innerHTML =
"Last Modified: " + document.lastModified;