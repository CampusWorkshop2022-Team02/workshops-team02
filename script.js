// script contact

let requestURL = 'https://campusworkshop2022-team02.github.io/workshops-team02/workshop.json';
let request = new XMLHttpRequest();

let pageLanguage = "french"; // implémenter un bouton pour changer de langue

let nameField = document.querySelector('.name-field');
let mailField = document.querySelector('.mail-field');
let messageField = document.querySelector('.message-field');
let contactButton = document.getElementById('contact-button');

request.open('GET', requestURL);
request.responseType = 'text';
request.send();

request.onload = function () {
    let contactJsonText = request.response;
    let contactJson = JSON.parse(contactJsonText);
    console.log(contactJson);
    displayPageText();

    function displayPageText() {
        let languageIndex;

        if (pageLanguage === "french") {
            languageIndex = 0;
        } else if (pageLanguage === "english") {
            languageIndex = 1;
        }

        nameField.textContent = contactJson[0].languages[languageIndex].nameFieldContent;
        mailField.textContent = contactJson[0].languages[languageIndex].mailFieldContent;
        messageField.textContent = contactJson[0].languages[languageIndex].messageFieldContent;
        contactButton.textContent = contactJson[0].languages[languageIndex].buttonFieldContent;
    }
}

// script

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