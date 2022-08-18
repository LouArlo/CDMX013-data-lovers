import alldata from './data/harrypotter/data.js';
import generatorCharacter from './generatorHTML.js'
import {filterbygrifindor} from './dataF.js'
import {filterbyslytherin} from './dataF.js'

window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navigation");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


/*----------------Pantalla inicial----------------*/

const root = document.getElementById('root')
root.classList = 'HpData-style'

const character = alldata.characters
const generatorHTML = (characters) => {
  const div = document.createElement('div')
  const nameCharacter = document.createElement('h2')
  nameCharacter.textContent = characters.name
  const img = document.createElement('img')
  img.setAttribute('src', `${characters.img}`)
 
  if (characters.img === undefined) {
    img.setAttribute('src', './images/HP_personajes_extra.png')
  }

  div.append(img, nameCharacter)
  return div
} 

character.forEach(onecharacters => root.appendChild(generatorHTML(onecharacters)))



/*-------characters    grid------------------*/
document.getElementById("characters").addEventListener("click", function () {
  document.getElementById("root").innerHTML = "";

  const root = document.getElementById('root')
        root.classList = 'HpData-style'
  
  const character = alldata.characters

  

  character.forEach(onecharacters => root.appendChild(generatorCharacter(onecharacters)))

}, true);



/*------------------ spells grid----------------*/
document.getElementById("spells").addEventListener("click", function () {
  document.getElementById("root").innerHTML = "";

  const root = document.getElementById('root')
        root.classList = 'HpDataS-style'
 
  const spell = alldata.spells

  const generatorHTML = (spells) => {
    const div = document.createElement('div')
    const nameSpell = document.createElement('h2')
    nameSpell.textContent = spells.name
    const descriptionSpell = document.createElement('h3')
    descriptionSpell.textContent = spells.description

    div.append(nameSpell, descriptionSpell)

    return div
  }

  spell.forEach(onespell => root.appendChild(generatorHTML(onespell)))

}, true);



/* ------------------fun Fact grid----------------*/
document.getElementById("fun facts").addEventListener("click", function () {
  document.getElementById("root").innerHTML = "";

  const root = document.getElementById('root')
        root.classList = 'HpDataS-style'

  const funFact = alldata.funFacts

  const generatorHTML = (funFacts) => {
    const div = document.createElement('div')
    const typeFunFact = document.createElement('h2')
    typeFunFact.textContent = funFacts.type
    const contentFunFact = document.createElement('h3')
    contentFunFact.textContent = funFacts.content

    div.append(typeFunFact, contentFunFact)

    return div
  }

  funFact.forEach(onefunFact=> root.appendChild(generatorHTML(onefunFact)))

}, true);



/* -----------------Potions grid------------------*/
document.getElementById("potions").addEventListener("click", function () {
  document.getElementById("root").innerHTML = "";
  
  const root = document.getElementById('root')
        root.classList = 'HpDataS-style'
    
  const potion = alldata.potions
  
  const generatorHTML = (potions) => {
    const div = document.createElement('div')
    const namePotions = document.createElement('h2')
    namePotions.textContent = potions.name
    const descriptionPotions = document.createElement('h3')
     descriptionPotions.textContent = potions.description
  
    div.append(namePotions, descriptionPotions)
    
    return div
    }
    
    potion.forEach(onepotions=> root.appendChild(generatorHTML(onepotions)))
  
  }, true);
  


/*------------------ books grid---------------*/
document.getElementById("books").addEventListener("click", function () {
  document.getElementById("root").innerHTML = "";

  const root = document.getElementById('root')
        root.classList = 'HpDataS-style'
 
  const book = alldata.books

  const generatorHTML = (books) => {
  const div = document.createElement('div')
  const titleBook = document.createElement('h2')
  titleBook.textContent = books.title
  const descriptionBook = document.createElement('h3')
  descriptionBook.textContent = books.description

  div.append(titleBook, descriptionBook)

  return div
  }

   book.forEach(onebook => root.appendChild(generatorHTML(onebook)))

}, true);


/*----------Filter functions-------------*/
/*-------------------------gryffindor------------*/
document.getElementById("select").addEventListener("click", function () {
  document.getElementById("root").innerHTML = "";
  console.log(seleccion.value);
  

  const root = document.getElementById('root')
        root.classList = 'HpData-style'
  
  const character = alldata.characters
   

    filterbygrifindor(alldata).forEach(onecharacters => root.appendChild(generatorHTML(onecharacters)))

}, true);

//-----------------------slyfherin

document.getElementById("sl").addEventListener("click", function () {
  document.getElementById("root").innerHTML = "";
  console.log(seleccion.value);
  

  const root = document.getElementById('root')
        root.classList = 'HpData-style'
  
  const character = alldata.characters

  filterbyslytherin(alldata).forEach(onecharacters => root.appendChild(generatorHTML(onecharacters)))

}, true);
 