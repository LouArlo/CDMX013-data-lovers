    window.onscroll = function() {myFunction()};
      
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

const root = document.getElementById('root')

root.classList='HpData-style'

/*seleccion de characters*/

const character=alldata.characters 


const generatorHTML=(characters)=>{


    const div = document.createElement('div')

    const nameCharacter = document.createElement('h2')
    nameCharacter.textContent=characters.name

    const img = document.createElement('img')
    img.setAttribute('src',`${characters.img}`)

    if (characters.img === undefined) {
        img.setAttribute('src','./images/HP_personajes_extra.png')
    }

    div.append (img,nameCharacter)
    
    
    return div 
}

character.forEach(onecharacters=>root.appendChild(generatorHTML(onecharacters)))


document.getElementById("characters").addEventListener("click",function(){
    alert("character")
}, true);
    




document.getElementById("spells").addEventListener("click",function(){
    alert("spells")

document.getElementById("root").innerHTML= "";

const root = document.getElementById('root')

root.classList='HpData-style'

/*seleccion de characters*/

const spell=alldata.spells 

const generatorHTML=(spells)=>{


    const div = document.createElement('div')

    const nameSpell = document.createElement('h2')
    nameSpell.textContent=spells.name

    const descriptionSpell = document.createElement('h2')
    descriptionSpell.textContent=spells.description

    /*const img = document.createElement('img')
    img.setAttribute('src',`${spells.img}`)

    if (spells.img === undefined) {
        img.setAttribute('src','./images/HP_personajes_extra.png')
    }*/

    div.append (nameSpell,descriptionSpell)
    
    
    return div 
}



spell.forEach(onespell=>root.appendChild(generatorHTML(onespell)))

},true);


