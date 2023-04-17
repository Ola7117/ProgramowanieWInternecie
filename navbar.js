function toggleMenu(icon) {
    icon.classList.toggle("switch");
    var navbar = document.getElementById("navbar");
    if (navbar.className === "navbar") {
        navbar.className += " open";
    }
    else {
        navbar.className = "navbar";
    }
}