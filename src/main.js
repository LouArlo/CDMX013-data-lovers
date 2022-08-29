import alldata from './data/harrypotter/data.js';
import { generatorHTMLSearch, generatorHTMLfilter, generatorHTML, generatorHTMLdescribe, generatorHTMLff, generatorHTMLbook} from './generatorHTML.js'
import { filterbyword, filterbyword2,  sortAz, sortZa, searCh } from './dataF.js'


// ------------navbar-----------------------
window.onscroll = function () { moveSticky() };

window.addEventListener("load", showInit);

function moveSticky() {

  let navbar = document.getElementById("navigation");
  let sticky = navbar.offsetTop;

  /*function myFunction() {*/
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

//---------------Carga de data-historia 1----------------
  export function showInit() {
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

    //-----------------------search -----------

    document.getElementById("searchBtn").addEventListener("click", function (e) {
      e.preventDefault()
      //seleccionSearch.addEventListener("click", function () {

      document.getElementById("root2").innerHTML = "";
      //document.getElementById(SearchDataInput)
      const input = document.getElementById("SearchDataInput").value;

      const root2 = document.getElementById('root2')
      root2.classList = 'HpDataSearch-style'
      
      searCh(alldata.characters, input).forEach(onecharacters => root2.appendChild(generatorHTMLSearch(onecharacters)))
      
      }, true)

  }

  /*function graphics (alldata) {
  //  src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.8.0/chart.min.js"
  const contGryffindor = 0;
  const contRavenclaw = 0;
  const contSlytherin = 0;
  const contHufflepuff = 0;

  const character=alldata.characters;
  
    for (let i = 0; i<character.lenght; i++) {
      if (character[i].house=="Gryffindor") {
        contGryffindor =+ contGryffindor+1
      };

      if (character[i].house=="Ravenclaw") {
        contRavenclaw =+ contRavenclaw+1
      };

      if (character[i].house =="Slytherin") {
        contSlytherin =+ contSlytherin + 1
      };

      if (character[i].house == "Hufflepuff") {
        contHufflepuff =+ contHufflepuff + 1
      };

    }
    return contGryffindor,contHufflepuff,contRavenclaw,contSlytherin

    let Canvas = document.getElementById("graphics").getContext("2d")

     const chart = new Chart(Canvas, {
      type:"bar",
      data:{
        labels:["Gryffindor","ravenclaw","Slytherin","Hufflepuff"],
        datasets:[
          {
            label:"Representación Gráfica de Personajes por Casa",
            data:[contGryffindor,contRavenclaw,contSlytherin,contHufflepuff]
          }
        ]
      }
     });
}*/
  
  