export const homeDiv = document.createElement('div');
homeDiv.id = 'home';

const homeDivHeader = document.createElement('h1');
homeDivHeader.id = 'homeHeader'
homeDivHeader.textContent = "Safe Haven Restaurant";
homeDiv.appendChild(homeDivHeader);

const homeDivP1 = document.createElement('p');
homeDivP1.textContent = "Safe Haven Restaurant exists to give you a quiet place\nto slow down and get away from the chaos of the world.";
homeDivP1.style.whiteSpace = 'pre-line';
homeDiv.appendChild(homeDivP1);

const homeDivP2 = document.createElement('p');
homeDivP2.textContent = "Please come, feel free to relax, and enjoy our calm atmosphere\nwhere you can enjoy delicious food and drinks.";
homeDivP2.style.whiteSpace = 'pre-line';
homeDiv.appendChild(homeDivP2);