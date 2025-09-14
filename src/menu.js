export const menuDiv = document.createElement('div');
menuDiv.id = 'menu';

const menuHeader = document.createElement('h1');
menuHeader.id = 'menu-header';
menuHeader.textContent = 'Safe Haven Menu';
menuDiv.appendChild(menuHeader);

const drinkHeader = document.createElement('h2');
drinkHeader.classList.add('menu-item-header');
drinkHeader.textContent = "Drinks"
menuDiv.appendChild(drinkHeader);

const drinksDiv = document.createElement('div');
drinksDiv.classList.add('menu-group')
menuDiv.appendChild(drinksDiv);

const cuppaCoffee = document.createElement('div');
cuppaCoffee.classList.add('menu-item');
const coffeeHeader = document.createElement('h3');
coffeeHeader.textContent = "Cuppa' Coffee";
cuppaCoffee.appendChild(coffeeHeader);
const coffeeDescription = document.createElement('p');
coffeeDescription.textContent = "This is some of the most delicious coffee\nyou could ever taste. Made with all natural\ncoffee beans with a hint of milk and honey,\nyou can't find a better coffee."
coffeeDescription.style.whiteSpace = 'pre-line';
cuppaCoffee.appendChild(coffeeDescription);
drinksDiv.appendChild(cuppaCoffee);

const cuppaTea = document.createElement('div');
cuppaTea.classList.add('menu-item');
const teaHeader = document.createElement('h3');
teaHeader.textContent = "Cuppa' Tea";
cuppaTea.appendChild(teaHeader);
const teaDescription = document.createElement('p');
teaDescription.textContent = "Tea made from all-natural tea leaves imported\nfrom exotic foreign locations. This tea will\nmake your body feel at ease and calm your\nnervous system while you enjoy your\nrestful time at our establishment."
teaDescription.style.whiteSpace = 'pre-line';
cuppaTea.appendChild(teaDescription);
drinksDiv.appendChild(cuppaTea);

const goodOlCola = document.createElement('div');
goodOlCola.classList.add('menu-item');
const colaHeader = document.createElement('h3');
colaHeader.textContent = "Good Ol' Cola";
goodOlCola.appendChild(colaHeader);
const colaDescription = document.createElement('p');
colaDescription.textContent = "Made with real cane sugar and concocted using\nour own secret recipe, you will not find a sweeter,\nmore flavorful cola than ours."
colaDescription.style.whiteSpace = 'pre-line';
goodOlCola.appendChild(colaDescription);
drinksDiv.appendChild(goodOlCola);



const appsHeader = document.createElement('h2');
appsHeader.classList.add('menu-item-header');
appsHeader.textContent = "Appetizers"
menuDiv.appendChild(appsHeader);

const appsDiv = document.createElement('div');
appsDiv.classList.add('menu-group')
menuDiv.appendChild(appsDiv);

const brusselSprouts = document.createElement('div');
brusselSprouts.classList.add('menu-item');
const sproutsHeader = document.createElement('h3');
sproutsHeader.textContent = "Brussel Sprouts of Perfection";
brusselSprouts.appendChild(sproutsHeader);
const sproutsDescription = document.createElement('p');
sproutsDescription.textContent = "Baked to perfection, these brussel sprouts are\nto die for.  Perfectly seasoned and light enough\nto still have room for our delicious entrees,\nyou won't find better brussel sprouts\nanywhere else."
sproutsDescription.style.whiteSpace = 'pre-line';
brusselSprouts.appendChild(sproutsDescription);
appsDiv.appendChild(brusselSprouts);

const chipDip = document.createElement('div');
chipDip.classList.add('menu-item');
const dipHeader = document.createElement('h3');
dipHeader.textContent = "Chips with Spinach and Artichoke Dip";
chipDip.appendChild(dipHeader);
const dipDescription = document.createElement('p');
dipDescription.textContent = "Creamy spinach and artichoke dip served with a\nheaping portion of chips. It may be a classic but it\nis still an appetizing choice."
dipDescription.style.whiteSpace = 'pre-line';
chipDip.appendChild(dipDescription);
appsDiv.appendChild(chipDip);

const crackerPlate = document.createElement('div');
crackerPlate.classList.add('menu-item');
const crackerHeader = document.createElement('h3');
crackerHeader.textContent = "Toast, Burrata, and Shallots";
crackerPlate.appendChild(crackerHeader);
const crackerDescription = document.createElement('p');
crackerDescription.textContent = "This delectable appetizer can't be found anywhere\nelse. It comes with small pieces of toast baked\nto be perfectly blanced between cripsy and\nsoft, a generous amount of burrata, and\ncooked shallots. These are all combined\nto make the ideal, bit-sized starter."
crackerDescription.style.whiteSpace = 'pre-line';
crackerPlate.appendChild(crackerDescription);
appsDiv.appendChild(crackerPlate);



const entreesHeader = document.createElement('h2');
entreesHeader.classList.add('menu-item-header');
entreesHeader.textContent = "Entrees"
menuDiv.appendChild(entreesHeader);

const entreesDiv = document.createElement('div');
entreesDiv.classList.add('menu-group')
menuDiv.appendChild(entreesDiv);

const soupNSalad = document.createElement('div');
soupNSalad.classList.add('menu-item');
const soupHeader = document.createElement('h3');
soupHeader.textContent = "Classic Soup and Salad";
soupNSalad.appendChild(soupHeader);
const soupDescription = document.createElement('p');
soupDescription.textContent = "Choose either the house or caesar salad as well as\none of our soups.  We have brocolli and cheddar,\nbacked potato, and chicken tortilla."
soupDescription.style.whiteSpace = 'pre-line';
soupNSalad.appendChild(soupDescription);
entreesDiv.appendChild(soupNSalad);

const ribeye = document.createElement('div');
ribeye.classList.add('menu-item');
const ribeyeHeader = document.createElement('h3');
ribeyeHeader.textContent = "Ribeye to Die For";
ribeye.appendChild(ribeyeHeader);
const ribeyeDescription = document.createElement('p');
ribeyeDescription.textContent = "Ribeye cooked to your preference.  This juicy,\nsavory option is our personal favorite.  Procured\nfrom a local ranch that raises grass-fed animals,\nyou will not find a better ribeye than ours...\n it's to die for."
ribeyeDescription.style.whiteSpace = 'pre-line';
ribeye.appendChild(ribeyeDescription);
entreesDiv.appendChild(ribeye);

const alfredo = document.createElement('div');
alfredo.classList.add('menu-item');
const alfredoHeader = document.createElement('h3');
alfredoHeader.textContent = "I Know It Was You, Alfredo";
alfredo.appendChild(alfredoHeader);
const alfredoDescription = document.createElement('p');
alfredoDescription.textContent = "Classic alfredo pasta. Delicious and creamy,\nyou can't go wrong with this choice.  Can add\nchicken or shrimp upon request."
alfredoDescription.style.whiteSpace = 'pre-line';
alfredo.appendChild(alfredoDescription);
entreesDiv.appendChild(alfredo);




const dessertHeader = document.createElement('h2');
dessertHeader.classList.add('menu-item-header');
dessertHeader.textContent = "Dessert"
menuDiv.appendChild(dessertHeader);

const dessertDiv = document.createElement('div');
dessertDiv.classList.add('menu-group')
menuDiv.appendChild(dessertDiv);

const brownieSunday = document.createElement('div');
brownieSunday.classList.add('menu-item');
const sundayHeader = document.createElement('h3');
sundayHeader.textContent = "Brownie Sunday";
brownieSunday.appendChild(sundayHeader);
const sundayDescription = document.createElement('p');
sundayDescription.textContent = "We don't have much to say about this one, it's our\nonly dessert for a reason.  There isn't any better.\nGo ahead, try it."
sundayDescription.style.whiteSpace = 'pre-line';
brownieSunday.appendChild(sundayDescription);
dessertDiv.appendChild(brownieSunday);