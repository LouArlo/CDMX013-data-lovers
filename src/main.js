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

/*seleccion de characters*/
document.getElementById("characters").addEventListener("click", function () {
  /*alert("character")*/

  document.getElementById("root").innerHTML = "";

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

}, true);





/* spells grid*/
document.getElementById("spells").addEventListener("click", function () {
  /*alert("spells")*/

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

    /*const imgS = document.createElement('img')
    imgS.setAttribute('src',`${spells.img}`)*/

    /*if (spells.img === undefined) {
        imgS.setAttribute('src','./images/spells.jpg')
    }*/

    div.append(nameSpell, descriptionSpell)


    return div
  }



  spell.forEach(onespell => root.appendChild(generatorHTML(onespell)))

}, true);


/* fun Fact grid*/
document.getElementById("fun facts").addEventListener("click", function () {
  /*alert("funFacts")*/

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


/* Potions grid*/
document.getElementById("potions").addEventListener("click", function () {
   /* alert("Potions")*/
  
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
  
      /*const img = document.createElement('img')
      img.setAttribute('src',`${spells.img}`)
  
      if (spells.img === undefined) {
          img.setAttribute('src','./images/HP_personajes_extra.png')
      }*/
  
      div.append(namePotions, descriptionPotions)
  
  
      return div
    }
  
  
  
    potion.forEach(onepotions=> root.appendChild(generatorHTML(onepotions)))
  
  }, true);
  


/* books grid*/
document.getElementById("books").addEventListener("click", function () {
  /*alert("books")*/

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

})

/*seccion de filter*/
/*let charsHouses = alldata.characters.filter(function(chars) {
     return chars.houses == "Gryffindor"
 });
 console.log (charsHouses);*/
/*characters Grid*/
 /*let filtervar = "character"*/
       /* let elementVar =alldata.characters
        let objectX ="houses"
        let elementY = "Gryffindor"
        let filterX = elementVar.filter(function(elementX) {
        return elementX.objectX == elementY
        });
console.log (filterX);*/
document.getElementById("gr").addEventListener("click", function () {
   alert("escuchando el addEventListener")
  document.getElementById("root").innerHTML = "";

   const root = document.getElementById('root');
   console.log(root)

  root.classList = 'HpDataS-style'

  /*const house = alldata.characters*/
  let charsHouses = alldata.characters.filter(function(chars) {
    (chars.house == "Gryffindor")
   })

   console.log(charsHouses)
  const generatorHTML = (charac) => {


    const div = document.createElement('div')

    const characterHouses = document.createElement('h2')
    characterHouses.textContent = charsHouses.house

    const characterName = document.createElement('h3')
    characterName.textContent = charsHouses.name

     /*let charsHouses = alldata.characters.filter(function(chars) {
      (chars.houses == "Gryffindor")
     })*/

    div.append(characterHouses, characterName)

    console.log(div)

    return div 

}})