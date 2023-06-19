const translations = {
    pl: {
        americanBlackBearHeader: "Niedźwiedź czarny",
        americanBlackBearText: "Inne nazwy: baribal, niedźwiedź amerykański.",
        asianBlackBearHeader: "Niedźwiedź himlajaski",
        asianBlackBearText: "Inne nazwy: niedźwiedź himalajski, niedźwiedź księżycowy, niedźwiedź obrożny.",
        brownBearHeader: "Niedźwiedź brunatny",
        brownBearText: "Inne nazwy: -",
        contactNav: "Kontakt",
        contactStart: "Kontakt",
        contactText: "Jeśli masz jakąś sugestię co do strony, możesz wysłać mi wiadomość na adres: <a href='mailto:bearlyknowledgeable@example.com'>bearlyknowledgeable@example.com</a>.",
        cookiesText: "Ta strona używa plików cookie. Korzystanie z witryny bez zmiany ustawień Twojej przeglądarki oznacza, że będą one umieszczane w urządzeniu końcowym.",
        homeText: "Strona główna",
        pandaBearHeader: "Panda wielka",
        pandaBearText: "Inne nazwy: niedźwiedź bambusowy.",
        polarBearHeader: "Niedźwiedź polarny",
        polarBearText: "Inne nazwy: niedźwiedź biały.",
        slothBearHeader: "Wargacz leniwy",
        slothBearText: "Inne nazwy: wargacz, aswal.",
        speciesNav: "Gatunki",
        speciesStart: "Gatunki",
        spectacledBearHeader: "Andoniedźwiedź okularowy",
        spectacledBearText: "Inne nazwy: niedźwiedź andyski, niedźwiedź peruwiański, niedźwiedź okularowy.",
        sunBearHeader: "Biruang malajski",
        sunBearText: "Inne nazwy: niedźwiedź malajski.",
        welcomeHeader: "Witaj na mojej stronie!",
        welcomeText: "Jest ona poświęcona niedźwiedziom. Niedźwiedziowate to rodzina ssaków zawierająca osiem występujących współcześnie gatunków - andoniedźwiedzia okularowego, biruanga malajskiego, niedźwiedzia brunatnego, niedźwiedzia czarnego, niedźwiedzia himalajskiego, niedźwiedzia polarnego, pandę wielką oraz wargacza leniwego. Znajdziesz tutaj ich zdjęcia oraz kilka informacji. Mam nadzieję, że dowiesz się czegoś ciekawego :)",
    },

    en: {
        americanBlackBearHeader: "American black bear",
        americanBlackBearText: "Other names: black bear.",
        asianBlackBearHeader: "Asian black bear",
        asianBlackBearText: "Other names: Asiatic black bear, moon bear, white-chested bear.",
        brownBearHeader: "Brown bear",
        brownBearText: "Other names: -",
        contactNav: "Contact",
        contactStart: "Contact",
        contactText: "If you have a suggestion regarding the website, you can send mail it to me: <a href='mailto:bearlyknowledgeable@example.com'>bearlyknowledgeable@example.com</a>.",
        cookiesText: "This website uses cookies. By staying on the website without changing your browser settings, you consent to the use of cookies on your device.",
        homeText: "Home",
        pandaBearHeader: "Giant panda",
        pandaBearText: "Other names: panda bear, panda.",
        polarBearHeader: "Polar bear",
        polarBearText: "Inne nazwy: white bear.",
        slothBearHeader: "Sloth bear",
        slothBearText: "Other names: Indian bear, labiated bear.",
        speciesNav: "Species",
        speciesStart: "Species",
        spectacledBearHeader: "Spectacled Bear",
        spectacledBearText: "Other names: South American bear, Andean bear, Andean short-faced bear, mountain bear.",
        sunBearHeader: "Sun bear",
        sunBearText: "Other names: honey bear.",
        welcomeHeader: "Welcome to my website!",
        welcomeText: "It is dedicated to bears. Ursidae is a family of mammals which includes eight extant species - the spectacled bear, sun bear, brown bear, American black bear, Asian black bear, polar bear, giant panda and sloth bear. Here you will find their photos and some information about them. I hope that you will find out something interesting :)"
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const defaultLanguage = "pl";
    changeLanguage(defaultLanguage);

    const americanBlackBearHeader = document.getElementById("americanBlackBearHeader");
    const americanBlackBearText = document.getElementById("americanBlackBearText");
    const asianBlackBearHeader = document.getElementById("asianBlackBearHeader");
    const asianBlackBearText = document.getElementById("asianBlackBearText");
    const brownBearHeader = document.getElementById("brownBearHeader");
    const brownBearText = document.getElementById("brownBearText");
    const contactNav = document.getElementById("contactNav");
    const contactStart = document.getElementById("contactStart");
    const contactText = document.getElementById("contactText");
    const cookiesText = document.getElementById("cookiesText");
    const homeText = document.getElementById("homeText");
    const pandaBearHeader = document.getElementById("pandaBearHeader");
    const pandaBearText = document.getElementById("pandaBearText");
    const polarBearHeader = document.getElementById("polarBearHeader");
    const polarBearText = document.getElementById("polarBearText");
    const slothBearHeader = document.getElementById("slothBearHeader");
    const slothBearText = document.getElementById("slothBearText");
    const speciesNav = document.getElementById("speciesNav");
    const speciesStart = document.getElementById("speciesStart");
    const spectacledBearHeader = document.getElementById("spectacledBearHeader");
    const spectacledBearText = document.getElementById("spectacledBearText");
    const sunBearHeader = document.getElementById("sunBearHeader");
    const sunBearText = document.getElementById("sunBearText");
    const welcomeHeader = document.getElementById("welcomeHeader");
    const welcomeText = document.getElementById("welcomeText");


});

function changeLanguage(language) {
    americanBlackBearHeader.textContent = translations[language]["americanBlackBearHeader"];
    americanBlackBearText.textContent = translations[language]["americanBlackBearText"];
    asianBlackBearHeader.textContent = translations[language]["asianBlackBearHeader"];
    asianBlackBearText.textContent = translations[language]["asianBlackBearText"];
    brownBearHeader.textContent = translations[language]["brownBearHeader"];
    brownBearText.textContent = translations[language]["brownBearText"];
    contactNav.textContent = translations[language]["contactNav"];
    contactStart.textContent = translations[language]["contactStart"];
    contactText.innerHTML = translations[language]["contactText"];
    cookiesText.innerHTML = translations[language]["cookiesText"];
    homeText.textContent = translations[language]["homeText"];
    pandaBearHeader.textContent = translations[language]["pandaBearHeader"];
    pandaBearText.textContent = translations[language]["pandaBearText"];
    polarBearHeader.textContent = translations[language]["polarBearHeader"];
    polarBearText.textContent = translations[language]["polarBearText"];
    slothBearHeader.textContent = translations[language]["slothBearHeader"];
    slothBearText.textContent = translations[language]["slothBearText"];
    speciesNav.textContent = translations[language]["speciesNav"];
    speciesStart.textContent = translations[language]["speciesStart"];
    spectacledBearHeader.textContent = translations[language]["spectacledBearHeader"];
    spectacledBearText.textContent = translations[language]["spectacledBearText"];
    sunBearHeader.textContent = translations[language]["sunBearHeader"];
    sunBearText.textContent = translations[language]["sunBearText"];
    welcomeHeader.textContent = translations[language]["welcomeHeader"];
    welcomeText.textContent = translations[language]["welcomeText"];
}

