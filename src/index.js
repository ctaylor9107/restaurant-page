import './styles.css';
import {homeDiv} from './home.js';
import {menuDiv} from './menu.js';

const home = homeDiv
let content = document.querySelector('#content');
content.appendChild(home);

const homeButton = document.querySelector("#home-button");
homeButton.addEventListener("click", function clickHomeButton() {
    const contentChild = content.firstChild;
    contentChild.replaceWith(homeDiv);
});

const menuButton = document.querySelector('#menu-button');
menuButton.addEventListener('click', function clickMenuButton() {
    const contentChild = content.firstChild;
    contentChild.replaceWith(menuDiv);
})