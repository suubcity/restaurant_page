export function loadNavBar() {
const CONTENT_DIV = document.querySelector('#content');

const NAV_BAR = document.createElement('nav');
NAV_BAR.id = "navBar";

const H1 = document.createElement('h1');
H1.id = "title";
H1.textContent = "Simply Food";

const UL = document.createElement('ul');

const NAV_BAR_ABOUT = document.createElement('li');
NAV_BAR_ABOUT.classList = 'navBarItem';
NAV_BAR_ABOUT.id = 'aboutButton';
NAV_BAR_ABOUT.textContent = 'About';


// const NAV_BAR_MENU = document.createElement('li');
// NAV_BAR_MENU.classList = 'navBarItem';
// NAV_BAR_MENU.textContent = 'Menu';

const NAV_BAR_CONTACTS = document.createElement('li');
NAV_BAR_CONTACTS.classList = 'navBarItem';
NAV_BAR_CONTACTS.id = 'contactsButton';
NAV_BAR_CONTACTS.textContent = 'Contacts';

CONTENT_DIV.appendChild(NAV_BAR);

NAV_BAR.appendChild(H1);

NAV_BAR.appendChild(UL);

const MAIN_CONTAINER = document.createElement('div');
MAIN_CONTAINER.id = 'mainContainer';

UL.appendChild(NAV_BAR_ABOUT);
// UL.appendChild(NAV_BAR_MENU);
UL.appendChild(NAV_BAR_CONTACTS);

CONTENT_DIV.appendChild(MAIN_CONTAINER);

}

