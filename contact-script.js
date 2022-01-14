
// je comprends pas le code mais ça marche :/
fetch("./contact.json")
.then(response => {
    return response.json();
})
.then(jsondata => console.log(jsondata));

let pageLanguage = "english";

let nameField = document.querySelector('.name-field');
let emailField = document.querySelector('email-field');
let messageField = document.querySelector('.message-field');
let contactButton = document.getElementById('contact-button')

function displayPageText() {
    let languageIndex = 0;

    if (pageLanguage === "english") {
        languageIndex = 0;
    } else if (pageLanguage === "french") {
        languageIndex = 1;
    }

    

    // nameField.textContent = 

    // nameField.textContent = languages[languageIndex]['nameFieldContent'];
    // emailField.textContent = languages[languageIndex]['emailFieldContent'];
    // messageField.textContent = languages[languageIndex]['messageFieldContent'];
    // contactButton.textContent = languages[languageIndex]['buttonFieldContent'];
}

displayPageText();