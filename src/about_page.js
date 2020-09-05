export function loadAboutPage() {
const CONTENT_DIV = document.querySelector('#content');

const MAIN_CONTAINER = document.getElementById('mainContainer');


const ARTICLE = document.createElement('article');
ARTICLE.textContent = 'At simply food we always present to you a delicous menu full of locally and ethically sourced ingredients.';

const ARTICLE_TITLE = document.createElement('h1');
ARTICLE_TITLE.classList = 'articleTitle';
ARTICLE_TITLE.textContent = 'Welcome';


MAIN_CONTAINER.appendChild(ARTICLE);
ARTICLE.prepend(ARTICLE_TITLE);
}

