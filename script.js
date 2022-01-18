let indexHamburger = document.querySelector('.index-hamburger');
let indexCross = document.querySelector('.index-cross');

let navBar = document.querySelector('.bar-de-nav');

indexHamburger.addEventListener('click', openNavBar);
indexCross.addEventListener('click', closeNavBar);

function openNavBar() {
    if (navBar.style.display === 'none') {
        navBar.style.display = 'block';
        indexHamburger.style.display = 'none';
    } else {
        navBar.style.display = 'none';
        indexHamburger.style.display = 'block';
    }
}

function closeNavBar() {
    if (navBar.style.display === 'block') {
        navBar.style.display = 'none';
        indexHamburger.style.display = 'block';
    } else {
        navBar.style.display = 'block';
        indexHamburger.style.display = 'none';
    }
}