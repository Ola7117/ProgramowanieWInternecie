function changeContentToHome() {
    var home = document.getElementById("home");
    var species = document.getElementById("species");
    var contact = document.getElementById("contact");
    home.style.display = "block";
    species.style.display = "none";
    contact.style.display = "none";
}

function changeContentToSpecies() {
    var home = document.getElementById("home");
    var species = document.getElementById("species");
    var contact = document.getElementById("contact");
    home.style.display = "none";
    species.style.display = "block";
    contact.style.display = "none";
}

function changeContentToContact() {
    var home = document.getElementById("home");
    var species = document.getElementById("species");
    var contact = document.getElementById("contact");
    home.style.display = "none";
    species.style.display = "none";
    contact.style.display = "block";
}

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