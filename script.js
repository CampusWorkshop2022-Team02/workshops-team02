// JSON

let requestURL = 'https://campusworkshop2022-team02.github.io/workshops-team02/workshop.json';
let request = new XMLHttpRequest();

let pageLanguage = "French"; // implémenter un bouton pour changer de langue

let nameField = document.querySelector('.name-field');
let mailField = document.querySelector('.mail-field');
let messageField = document.querySelector('.message-field');
let contactButton = document.getElementById('contact-button');

let logoNavImage = document.querySelector('.logo-nav-image');

request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function () {
    let contactJsonText = request.response;
    let contactJson = JSON.parse(contactJsonText);
    console.log(contactJson);
    displayPageText();
    displayPageImages();

    function displayPageText() {
        let languageIndex;

        if (pageLanguage === "French") {
            languageIndex = 0;
        } else if (pageLanguage === "English") {
            languageIndex = 1;
        }

        nameField.textContent = contactJson[0].languages[languageIndex].nameFieldContent;
        mailField.textContent = contactJson[0].languages[languageIndex].mailFieldContent;
        messageField.textContent = contactJson[0].languages[languageIndex].messageFieldContent;
        contactButton.textContent = contactJson[0].languages[languageIndex].buttonFieldContent;
    }

    function displayPageImages() {
        if (page === "contact.html") {
            document.body.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, .5), rgba(255, 255, 255, .5))," + contactJson[1].images[0].contactBackgroundImage;
        }

        logoImage.src = contactJson[1].images[0].logoWithoutText;
        logoNavImage.src = contactJson[1].images[0].logoWithoutText;
    }
}

// nav bar

let path = window.location.pathname;
let page = path.split("/").pop();

let indexHamburger = document.querySelector('.index-hamburger');
let indexCross = document.querySelector('.index-cross');

let navBar = document.querySelector('.bar-de-nav');

indexHamburger.addEventListener('click', openNavBar);
indexCross.addEventListener('click', closeNavBar);

function openNavBar() {
    if (navBar.style.display === 'none') {
        navBar.style.display = 'block';
        if (page === "contact.html") {
            indexHamburger.style.visibility = 'hidden';
        } else {
            indexHamburger.style.display = 'none';
        }
    } else {
        navBar.style.display = 'none';
        if (page === "contact.html") {
            indexHamburger.style.visibility = 'visible';
        } else {
            indexHamburger.style.display = 'block';
        }
    }
}

function closeNavBar() {
    if (navBar.style.display === 'block') {
        navBar.style.display = 'none';
        if (page === "contact.html") {
            indexHamburger.style.visibility = 'visible';
        }
        indexHamburger.style.display = 'block';
    } else {
        navBar.style.display = 'block';
        if (page === "contact.html") {
            indexHamburger.style.visibility = 'hidden';
        } else {
            indexHamburger.style.display = 'none';
        }
    }
}

// image landing screen


let imageScreen = document.querySelector('.image-screen');
let imageScreen2 = document.querySelector('.image-screen2');
let imageScreen3 = document.querySelector('.image-screen3');

let desktopCircle = document.querySelector('.desktop-circle');
let desktopCircle2 = document.querySelector('.desktop-circle2');
let desktopCircle3 = document.querySelector('.desktop-circle3');

desktopCircle.addEventListener('click', changeToImage1);
desktopCircle2.addEventListener('click', changeToImage2);
desktopCircle3.addEventListener('click', changeToImage3);

function changeToImage1 () {
    if (imageScreen.style.display === 'none') {
        imageScreen2.style.display = 'none';
        imageScreen3.style.display ='none';
        imageScreen.style.display = 'block';
    }
        
}

function changeToImage2 () {
    if (imageScreen2.style.display === 'none') {
       
        imageScreen3.style.display ='none';
        imageScreen.style.display = 'none';
        imageScreen2.style.display = 'block';
    }
        
}

function changeToImage3 () {
    if (imageScreen3.style.display === 'none') {
        imageScreen2.style.display = 'none';
        imageScreen.style.display = 'none';
        imageScreen3.style.display ='block';
        
    }
        
}






//google ajouter supprimer class (activate) Tu donnes la class activate sur le bouton ou tu appuies
//Tu récupère la liste de class de ce bouton et tu regardes si c'est desktop-circle1 2 ou 3
//si par exemple le bouton activé c'est le bouton2, tu enleve le display none de l'image avec la class image-screen3*//
