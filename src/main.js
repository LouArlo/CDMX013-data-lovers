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

import alldata from './data/harrypotter/data.js'

/* All Data*/
const root = document.getElementById('root')
root.classList = 'HpData-style'
/*seleccion de characters*/
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
/*2*/

 /* const root = document.getElementById('root')

  root.classList = 'HpDataS-style'*/

 
  /*const spell = alldata.spells

  const generatorHTML = (spells) => {


    const div = document.createElement('div')

    const nameSpell = document.createElement('h2')
    nameSpell.textContent = spells.name

    const descriptionSpell = document.createElement('h3')
    descriptionSpell.textContent = spells.description

    /*const img = document.createElement('img')
    img.setAttribute('src',`${spells.img}`)

    if (spells.img === undefined) {
        img.setAttribute('src','./images/HP_personajes_extra.png')
    }*/

   /* div.append(nameSpell, descriptionSpell)


    return div
  }


  spell.forEach(onespell => root.appendChild(generatorHTML(onespell)))

/* fin2*/


/* fun Fact grid*/
/*document.getElementById("funFacts").addEventListener("click", function () {
  alert("funFacts")

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

    /*const img = document.createElement('img')
    img.setAttribute('src',`${spells.img}`)

    if (spells.img === undefined) {
        img.setAttribute('src','./images/HP_personajes_extra.png')
    }*/

   /* div.append(typeFunFact, contentFunFact)


    return div
  }



  funFact.forEach(onefunFact=> root.appendChild(generatorHTML(onefunFact)))

}, true);*/
/* fin 3*/
  

/*characters Grid*/
document.getElementById("characters").addEventListener("click", function () {
  alert("character")

  document.getElementById("root").innerHTML = "";

  const root = document.getElementById('root')

  root.classList = 'HpData-style'

  /*seleccion de characters*/

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

}, true);




/* spells grid*/
document.getElementById("spells").addEventListener("click", function () {
  alert("spells")

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

    const imgS = document.createElement('img')
    imgS.setAttribute('src',`${spells.img}`)

    /*if (spells.img === undefined) {
        imgS.setAttribute('src','./images/spells.jpg')
    }*/

    div.append(nameSpell, descriptionSpell)


    return div
  }



  spell.forEach(onespell => root.appendChild(generatorHTML(onespell)))

}, true);


/* fun Fact grid*/
document.getElementById("funFacts").addEventListener("click", function () {
  alert("funFacts")

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

    /*const img = document.createElement('img')
    img.setAttribute('src',`${spells.img}`)

    if (spells.img === undefined) {
        img.setAttribute('src','./images/HP_personajes_extra.png')
    }*/

    div.append(typeFunFact, contentFunFact)


    return div
  }



  funFact.forEach(onefunFact=> root.appendChild(generatorHTML(onefunFact)))

}, true);


/* books grid*/
document.getElementById("books").addEventListener("click", function () {
  alert("books")

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

    /*const img = document.createElement('img')
    img.setAttribute('src',`${spells.img}`)

    if (spells.img === undefined) {
        img.setAttribute('src','./images/HP_personajes_extra.png')
    }*/

    div.append(titleBook, descriptionBook)


    return div
  }



   book.forEach(onebook => root.appendChild(generatorHTML(onebook)))

}, true);