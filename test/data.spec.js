import alldata from '../src/data/harrypotter/data.js';
import {filterbyword, sortZa} from '../src/dataF.js';
import {generatorHTML} from '../src/generatorHTML.js';
import {showInit} from '../src/main.js';

//falta importar la otra funcion de filter si esto funsiona me va a marcar en rojo la linea 9 de esa funcion en dataF.

describe('Testing HArry Potter', () => {
 
  it('should filter characers by hoouses`', () => {
    const datafilter = filterbyword(alldata, "Ravenclaw")
    const houseExpected = datafilter[0]
    expect(houseExpected.house).toEqual("Ravenclaw"); 
  });

  //FUNCION GENERATOR HTML DIV
  it('should create div', () => {
    const div = generatorHTML (alldata.characters[0])
    expect(div.tagName).toBe("DIV");
  });

  it('show data initial',() =>{
    document.body.innerHTML = "<div id='navigation'></div> <div id='characters'> </div> <div id='root'></div></div> <div id='spells'></div> <div id='books'></div> <div id='potions'></div> <div id='fun facts'></div> <div id='seleccion'></div> <div id='az'></div>  <div id='za'></div>"
    showInit()

  });

  /*it('should create H2', () => {
    const h2 = generatorHTML (alldata.characters[0])
    expect(h2.tagName).toBe("h2");
  });*/

});



// FUNCIÓN SORT ORDENAR Z-A
describe('should order Z-A', () => {

  it('is a function', () => {
    expect(typeof sortZa).toBe('function');
  });

  it('returns `order`', () => {
    const names = [{"name": "Zoo director" }, { "name": "Aberforth Dumbledore" }]
    
    expect(sortZa(names)).toStrictEqual([{"name": "Zoo director" }, { "name": "Aberforth Dumbledore" }]);
  });

});

/*it('should order Z-A', () => {
  const dataSort = sortZa(alldata, "Zoo director")
  const charExpected = dataSort[0]
  expect(charExpected.name).toEqual("Zoo director"); 
  
});
*/
  
  


