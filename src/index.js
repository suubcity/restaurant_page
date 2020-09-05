import "./main.css";
import { loadNavBar } from "./nav_bar.js";
import { loadAboutPage } from "./about_page.js";
import { loadContactsPage } from "./contacts_page.js";


loadNavBar();
loadAboutPage();

function queryMainContainer() {
  return document.querySelector("#mainContainer");
}

let mainContainer = queryMainContainer();

function clearDom() {
  mainContainer.innerHTML = "";
}




const ABOUT_BUTTON = document.getElementById("aboutButton");
const CONTACTS_BUTTON = document.getElementById("contactsButton");

ABOUT_BUTTON.addEventListener("click", () => {
  clearDom();
  loadAboutPage();
  const MAIN_CONTAINER = queryMainContainer();
});

CONTACTS_BUTTON.addEventListener("click", () => {
  clearDom();
  loadContactsPage();
  const MAIN_CONTAINER = queryMainContainer();
});
