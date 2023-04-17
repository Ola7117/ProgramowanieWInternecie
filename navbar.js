function toggleMenu(icon) {
    icon.classList.toggle("switch");
    var element = document.getElementById("navbar");
    if (element.className === "navbar") {
        element.className += " open";
    }
    else {
        element.className = "navbar";
    }
}