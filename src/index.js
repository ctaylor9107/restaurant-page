import './styles.css';
import {homeDiv} from './home.js';

console.log("Hello!!");

const home = homeDiv
let content = document.querySelector('#content');
content.appendChild(home);