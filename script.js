function changeContentToHome() {
    var home1 = document.getElementById("home1");
    var home2 = document.getElementById("home2");
    var about = document.getElementById("about");
    var contact = document.getElementById("contact");
    home1.style.display = "block";
    home2.style.display = "block";
    about.style.display = "none";
    contact.style.display = "none";
}

function changeContentToAbout() {
    var home1 = document.getElementById("home1");
    var home2 = document.getElementById("home2");
    var about = document.getElementById("about");
    var contact = document.getElementById("contact");
    home1.style.display = "none";
    home2.style.display = "none";
    about.style.display = "block";
    contact.style.display = "none";
}

function changeContentToContact() {
    var home1 = document.getElementById("home1");
    var home2 = document.getElementById("home2");
    var about = document.getElementById("about");
    var contact = document.getElementById("contact");
    home1.style.display = "none";
    home2.style.display = "none";
    about.style.display = "none";
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