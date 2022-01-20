// JSON

let requestURL = 'https://campusworkshop2022-team02.github.io/workshops-team02/workshop.json';
let request = new XMLHttpRequest();

let pageLanguage = "French"; // implémenter un bouton pour changer de langue

// contact page selectors
let nameField = document.querySelector('.name-field');
let mailField = document.querySelector('.mail-field');
let messageField = document.querySelector('.message-field');
let contactButton = document.getElementById('contact-button');

// navbar selectors
let aboutFieldNav = document.querySelectorAll('.about-us-navbar');
let portfolioFieldNav = document.querySelectorAll('.portfolio-navbar');
let offersFieldNav = document.querySelectorAll('.offers-navbar');
let blogFieldNav = document.querySelectorAll('.blog-navbar');
let contactFieldNav = document.querySelectorAll('.contact-navbar');
let CGUFieldNav = document.querySelectorAll('.cgu-navbar');

// desktop selectors
let firstCircle = document.querySelector('.desktop-circle');
let secondCircle = document.querySelector('.desktop-circle2');
let thirdCircle = document.querySelector('.desktop-circle3');
let firstImageScreen = document.querySelector('.image-screen');
let secondImageScreen = document.querySelector('.image-screen2');
let thirdImageScreen = document.querySelector('.image-screen3');


// about selectors
let aboutUsTitle = document.querySelector('.about-us-title');
let aboutUsFirstPara = document.querySelector('.text1-about-us');
let aboutUsSecondPara = document.querySelector('.text2-about-us');
let ourPartners = document.querySelector('.partenaire-title');

// portfolio selectors
let portfolioTitle = document.querySelector('.portfolio-title');

// offers selectors (text)
let ourOffers = document.querySelector('.title-nos-offres');
let ourOffersFirstPara = document.querySelector('.text-identity');
let ourOffersSecondPara = document.querySelector('.text-ear');
let ourOffersThirdPara = document.querySelector('.text-hand');
let textConseil = document.querySelector('.text-conseil');
let textLaptop = document.querySelector('.text-laptop');
let textDollar = document.querySelector('.text-dollar');
let nextButton = document.querySelector('.suivant-button');
// offers selectors (divs)
let auditDiv = document.querySelector('.div-phase-audit');
let adviceDiv = document.querySelector('.div-phase-conseil');
let conceptionDiv = document.querySelector('.div-phase-conseption');


//language selectors
let iconFr = document.querySelectorAll('.icon-fr');
let iconEn = document.querySelectorAll('.icon-en');

// iconFr[0].addEventListener('click', changeLanguage.bind("fr"));
// iconEn[0].addEventListener('click', changeLanguage.bind("en"));


let logoNavImage = document.querySelectorAll('.logo-nav-image');
let logoImage = document.querySelectorAll('.logo-image');

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

        // contact page display
        try {
            nameField.textContent = contactJson[0].languages[languageIndex].nameFieldContent;
            mailField.textContent = contactJson[0].languages[languageIndex].mailFieldContent;
            messageField.textContent = contactJson[0].languages[languageIndex].messageFieldContent;
            contactButton.textContent = contactJson[0].languages[languageIndex].buttonFieldContent;
        } catch (error) {
            console.log('script ignoré, car pas sur la page de contact');
        }

        // navbar display
        aboutFieldNav[0].textContent = contactJson[0].languages[languageIndex].aboutFieldContent;
        portfolioFieldNav[0].textContent = contactJson[0].languages[languageIndex].portfolioFieldContent;
        offersFieldNav[0].textContent = contactJson[0].languages[languageIndex].offersFieldContent;
        blogFieldNav[0].textContent = contactJson[0].languages[languageIndex].blogFieldContent;
        contactFieldNav[0].textContent = contactJson[0].languages[languageIndex].contactFieldContent;
        CGUFieldNav[0].textContent = contactJson[0].languages[languageIndex].CGUFieldContent;

        // about, portfolio, offers display
        try {
            aboutUsTitle.textContent = contactJson[0].languages[languageIndex].aboutUsTitle;
            aboutUsFirstPara.textContent = contactJson[0].languages[languageIndex].aboutUsFirstPara;
            aboutUsSecondPara.textContent = contactJson[0].languages[languageIndex].aboutUsSecondPara;
            ourPartners.textContent = contactJson[0].languages[languageIndex].ourPartners;
            portfolioTitle.textContent = contactJson[0].languages[languageIndex].portfolioFieldContent;
            ourOffers.textContent = contactJson[0].languages[languageIndex].offersFieldContent;
            ourOffersFirstPara.textContent = contactJson[0].languages[languageIndex].ourOffersFirstPara;
            ourOffersSecondPara.textContent = contactJson[0].languages[languageIndex].ourOffersSecondPara;
            ourOffersThirdPara.textContent = contactJson[0].languages[languageIndex].ourOffersThirdPara;
            textConseil.textContent = contactJson[0].languages[languageIndex].textConseil;
            textLaptop.textContent = contactJson[0].languages[languageIndex].textLaptop;
            textDollar.textContent = contactJson[0].languages[languageIndex].textDollar;
            nextButton.textContent = contactJson[0].languages[languageIndex].nextButton;

        } catch (error) {
            console.log("script ignoré, car par sur la page d'index");
        }
    }

    function displayPageImages() {
        logoImage[0].setAttribute("src", contactJson[1].images[0].logoWithText);
        logoNavImage[0].setAttribute("src", contactJson[1].images[0].logoWithoutText);

        if (page === "contact.html") {
            document.body.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, .5), rgba(255, 255, 255, .5))," + contactJson[1].images[0].contactBackgroundImage;
        }
    }
}

// nav bar

let path = window.location.pathname;
let page = path.split("/").pop();

let indexHamburger = document.querySelector('.index-hamburger');
let indexCross = document.querySelector('.index-cross');

let navBar = document.querySelector('.bar-de-nav');

indexHamburger.addEventListener('click', toggleNavBar);
indexCross.addEventListener('click', toggleNavBar);

function toggleNavBar() {
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

firstCircle.addEventListener('click', FirstDesktopImage);
secondCircle.addEventListener('click', SecondDesktopImage);
thirdCircle.addEventListener('click', ThirdDesktopImage);

function FirstDesktopImage() {
    if (firstImageScreen.style.display = 'none') {
        firstImageScreen.style.display = 'block';
        secondImageScreen.style.display = 'none';
        thirdImageScreen.style.display = 'none';
    }
}

function SecondDesktopImage() {
    if (secondImageScreen.style.display = 'none') {
        secondImageScreen.style.display = 'block';
        thirdImageScreen.style.display = 'none';
        firstImageScreen.style.display = 'none';
    }
}

function ThirdDesktopImage() {
    if (thirdImageScreen.style.display = 'none') {
        thirdImageScreen.style.display = 'block';
        firstImageScreen.style.display = 'none';
        secondImageScreen.style.display = 'none';
    }
}



// offers text
nextButton.addEventListener('click', changeOffersText);

function changeOffersText() {
    if (auditDiv.style.display !== 'none') {
        auditDiv.style.display = 'none';
        conceptionDiv.style.display = 'none';
        adviceDiv.style.display = 'block';
    } else if (adviceDiv.style.display !== 'none') {
        adviceDiv.style.display = 'none';
        auditDiv.style.display = 'none';
        conceptionDiv.style.display = 'block';
    } else {
        adviceDiv.style.display = 'none';
        conceptionDiv.style.display = 'none';
        auditDiv.style.display = 'block';
    }
}




// language code (doesn't work)
function changeLanguage(selectedLanguage) {
    console.log('egg');
    if (selectedLanguage === "fr") {
        pageLanguage = "French";
        console.log('fr');
    } else if (selectedLanguage === "en") {
        pageLanguage = "English";
        console.log('en');
    }
}



// image landing screen


// let imageScreen = document.querySelector('.image-screen');
// let imageScreen2 = document.querySelector('.image-screen2');
// let imageScreen3 = document.querySelector('.image-screen3');

// let desktopCircle = document.querySelector('.desktop-circle');
// let desktopCircle2 = document.querySelector('.desktop-circle2');
// let desktopCircle3 = document.querySelector('.desktop-circle3');

// try {
//     desktopCircle.addEventListener('click', changeToImage1);
//     desktopCircle2.addEventListener('click', changeToImage2);
//     desktopCircle3.addEventListener('click', changeToImage3);
// } catch (error) {
//     console.log("script ignoré, car par sur la page d'index");
// }

// function changeToImage1 () {
//     if (imageScreen.style.display === 'none') {
//         imageScreen2.style.display = 'none';
//         imageScreen3.style.display ='none';
//         imageScreen.style.display = 'block';
//     }
        
// }

// function changeToImage2 () {
//     if (imageScreen2.style.display === 'none') {
       
//         imageScreen3.style.display ='none';
//         imageScreen.style.display = 'none';
//         imageScreen2.style.display = 'block';
//     }
        
// }

// function changeToImage3 () {
//     if (imageScreen3.style.display === 'none') {
//         imageScreen2.style.display = 'none';
//         imageScreen.style.display = 'none';
//         imageScreen3.style.display ='block';
        
//     }
        
// }






//google ajouter supprimer class (activate) Tu donnes la class activate sur le bouton ou tu appuies
//Tu récupère la liste de class de ce bouton et tu regardes si c'est desktop-circle1 2 ou 3
//si par exemple le bouton activé c'est le bouton2, tu enleve le display none de l'image avec la class image-screen3*//
