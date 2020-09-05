export function loadContactsPage() {
const CONTENT_DIV = document.querySelector('#content');

const MAIN_CONTAINER = document.getElementById('mainContainer');

const ARTICLE = document.createElement('article');
ARTICLE.innerHTML = '<br> <br>Phone: +52 664 664 8896<br>Email: simply@food.com<br> <br>Address:<br> <br>Simply Food<br>Mayfair Street<br>London W1J 8AJ';

const ARTICLE_TITLE = document.createElement('h1');
ARTICLE_TITLE.classList = 'articleTitle';
ARTICLE_TITLE.textContent = 'Contacts';

MAIN_CONTAINER.appendChild(ARTICLE);
ARTICLE.prepend(ARTICLE_TITLE);
}

