
// Get the current URL path
let path = window.location.pathname;

// Check if the current URL path is the About page
if (path == "/index.html") {
    console.log("yes");
    let myElement = document.getElementById("highlight");
    myElement.style.display = "block";  
}
