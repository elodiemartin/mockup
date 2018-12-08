//Variables sections
const home = document.querySelector('#home').offsetTop;
const section1 = document.querySelector('#presentation').offsetTop;
const section2 = document.querySelector('#produit').offsetTop;
const section3 = document.querySelector('#contact').offsetTop;

//Variables navbar
const navbar = document.querySelector('.navbar');
const itemHome = document.querySelector('.home');
const itemPresentation = document.querySelector('.presentation');
const itemProduit = document.querySelector('.produit');
const itemContact = document.querySelector('.contact');
const logo = document.querySelector('.logo');

//Couleurs navbar
itemHome.classList.add("itemRose");
itemPresentation.classList.add("itemWhite");
itemProduit.classList.add("itemWhite");
itemContact.classList.add("itemWhite");

//Changement au scroll
document.addEventListener('scroll', function() {
let scrollPosition = window.scrollY;

    if (scrollPosition >= home && scrollPosition < section1) {
        navbar.style.backgroundColor = 'transparent';
        itemHome.classList.remove("itemWhite");
        itemHome.classList.add("itemRose");
        itemPresentation.classList.add("itemWhite");
        itemProduit.classList.add("itemWhite");
        itemContact.classList.add("itemWhite");
        logo.style.width = '85px';

    } else if (scrollPosition >= section1 && scrollPosition < section2) {
        navbar.style.backgroundColor = '#111111';
        itemHome.classList.remove("itemRose");
        itemHome.classList.add("itemWhite");
        itemPresentation.classList.remove("itemWhite");
        itemPresentation.classList.add("itemRose");
        itemProduit.classList.add("itemWhite");
        itemContact.classList.add("itemWhite");
        logo.style.width = '60px';

    } else if (scrollPosition >= section2 && scrollPosition < section3) {
        navbar.style.backgroundColor = '#111111';
        itemHome.classList.add("itemWhite");
        itemPresentation.classList.remove("itemRose");
        itemPresentation.classList.add("itemWhite");
        itemProduit.classList.remove("itemWhite");
        itemProduit.classList.add("itemRose");
        itemContact.classList.add("itemWhite");
        logo.style.width = '60px';

    } else if (scrollPosition >= section3) {
        navbar.style.backgroundColor = '#111111';
        itemHome.classList.add("itemWhite");
        itemProduit.classList.remove("itemRose");
        itemProduit.classList.add("itemWhite");
        itemContact.classList.remove("itemWhite");
        itemContact.classList.add("itemRose");
        logo.style.width = '60px';
    }
});