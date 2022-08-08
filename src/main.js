import data from "./data/harrypotter/data.js";
/*import { example } from './data.js';*/
// import data from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(data, data);
const showBiography = document.getElementById("name");

showBiography.addEventListener('click', function() {
    const name = document.getElementById('name').ariaValueText;

    document.getElementById("name").innerHTML = (data.showBiography(name));
})
