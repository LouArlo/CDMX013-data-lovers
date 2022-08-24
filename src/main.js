import alldata from './data/harrypotter/data.js';
import { generatorHTMLfilter, generatorHTML, generatorHTMLdescribe, generatorHTMLff, generatorHTMLbook} from './generatorHTML.js'
import { filterbyword, filterbyword2, sortAz, sortZa } from './dataF.js'


// ------------navbar-----------------------
window.onscroll = function () { moveSticky() };

window.addEventListener("load", showInit);



function moveSticky() {
    let navbar = document.getElementById("navigation");
    let sticky = navbar.offsetTop;

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

//---------------Carga de data-historia 1----------------
export function showInit(){
    const root = document.getElementById('root')
    root.classList = 'HpData-style'

    const character = alldata.characters

    character.forEach(onecharacters => root.appendChild(generatorHTML(onecharacters))) 

    //-------filtrado por objeto(characters) ------------------
    document.getElementById("characters").addEventListener("click", function () {
    document.getElementById("root").innerHTML = "";
  
    const root = document.getElementById('root')
    root.classList = 'HpData-style'
  
    const character = alldata.characters
  
    character.forEach(onecharacters => root.appendChild(generatorHTML(onecharacters)))
  
  }, true);
  //-------filtrado por objeto(characters) ------------------
document.getElementById("characters").addEventListener("click", function () {
    document.getElementById("root").innerHTML = "";
  
    const root = document.getElementById('root')
    root.classList = 'HpData-style'
  
    const character = alldata.characters
  
    character.forEach(onecharacters => root.appendChild(generatorHTML(onecharacters)))
  
  }, true);
  
  //-------filtrado por objeto(spells) ----------------
  document.getElementById("spells").addEventListener("click", function () {
    document.getElementById("root").innerHTML = "";
  
    const root = document.getElementById('root')
    root.classList = 'HpDataS-style'
  
    const spell = alldata.spells
  
    spell.forEach(onespell => root.appendChild(generatorHTMLdescribe(onespell)))
  
  }, true);
  
  // ------filtrado por objeto (fun Fact)----------------
  document.getElementById("fun facts").addEventListener("click", function () {
    document.getElementById("root").innerHTML = "";
  
    const root = document.getElementById('root')
    root.classList = 'HpDataS-style'
  
    const funFact = alldata.funFacts
  
    funFact.forEach(onefunFact => root.appendChild(generatorHTMLff(onefunFact)))
  
  }, true);
  
  // -------filtrado por objeto (Potions)-----------------
  document.getElementById("potions").addEventListener("click", function () {
    document.getElementById("root").innerHTML = "";
  
    const root = document.getElementById('root')
    root.classList = 'HpDataS-style'
  
    const potion = alldata.potions
  
    potion.forEach(onepotions => root.appendChild(generatorHTMLdescribe(onepotions)))
  
  }, true);
  
  //---------filtrado pot objeto (books)---------------
  document.getElementById("books").addEventListener("click", function () {
    document.getElementById("root").innerHTML = "";
  
    const root = document.getElementById('root')
    root.classList = 'HpDataS-style'
  
    const book = alldata.books
  
    book.forEach(onebook => root.appendChild(generatorHTMLbook(onebook)))
  
  }, true);
  
  //---------uso de función Filter para clasificación por clase----------
  const seleccion = document.getElementById("seleccion")
  seleccion.addEventListener("click", function () {
    document.getElementById("root").innerHTML = "";
  
    const root = document.getElementById('root')
    root.classList = 'HpDataF-style'
  
    const wordfilter = seleccion.value
  
    if (wordfilter == "Gryffindor" || wordfilter == "Ravenclaw" || wordfilter == "Slytherin" || wordfilter == "Hufflepuff") {
      filterbyword(alldata, wordfilter).forEach(onecharacters => root.appendChild(generatorHTMLfilter(onecharacters)))
    } else {
      filterbyword2(alldata, wordfilter).forEach(onecharacters => root.appendChild(generatorHTMLfilter(onecharacters)))
    }
  
  }, true)
  
  //------------use de sortData(data, sortBy, sortOrder) ------------------
  document.getElementById("az").addEventListener("click", function () {
    document.getElementById("root").innerHTML = "";
  
    const arrayAz = alldata.characters
  
    sortAz(arrayAz)
  
    const root = document.getElementById('root')
    root.classList = 'HpData-style'
  
    const character = arrayAz
  
    character.forEach(onecharacters => root.appendChild(generatorHTML(onecharacters)))
  
  }, true);
  
  //------------use de sortData(data, sortBy, sortOrder) de z a a------------------
  document.getElementById("za").addEventListener("click", function () {
    document.getElementById("root").innerHTML = "";
  
    const arrayZa = alldata.characters
  
    sortZa(arrayZa)
  
    const root = document.getElementById('root')
    root.classList = 'HpData-style'
  
    const character = arrayZa
  
    character.forEach(onecharacters => root.appendChild(generatorHTML(onecharacters)))
  
  }, true);
  
  
}





