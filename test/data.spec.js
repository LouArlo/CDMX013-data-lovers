import alldata from '../src/data/harrypotter/data.js';
import {filterbyword, filterbyword2, searCh, sortAz, sortZa} from '../src/dataF.js';
import {generatorHTML} from '../src/generatorHTML.js';
import {showInit} from '../src/main.js';

//falta importar la otra funcion de filter si esto funsiona me va a marcar en rojo la linea 9 de esa funcion en dataF.

describe('Testing HArry Potter', () => {
 
  it('should filter characers by houses`', () => {
    const datafilter = filterbyword(alldata, "Ravenclaw")
    const houseExpected = datafilter[0]
    expect(houseExpected.house).toEqual("Ravenclaw"); 
  });

  it('should filter spells by spell_type`', () => {
    const datafilter2 = filterbyword2(alldata, "Charm")
    const spell_typeExpected = datafilter2[0]
    expect(spell_typeExpected.spell_type).toEqual("Charm"); 
  });

  //FUNCION GENERATOR HTML DIV
  it('should create div', () => {
    const div = generatorHTML (alldata.characters[0])
    expect(div.tagName).toBe("DIV");
  });

  it('show data initial',() =>{
    document.body.innerHTML = "<div id='navigation'></div> <div id='characters'> </div> <div id='root'></div></div> <div id='spells'></div> <div id='books'></div> <div id='potions'></div> <div id='fun facts'></div> <div id='seleccion'></div> <div id='az'></div>  <div id='za'></div> <div id='searchBtn'></div>"
    showInit()

  });

});


 //FUNCIÓN SORT ORDENAR 
describe('should order AZ, Z-A and Filter', () => {

  it('is a function', () => {
    expect(typeof sortZa).toBe('function');
  });

  it('returns `order`', () => {
    const names = [{"name": "Zoo director" }, { "name": "Aberforth Dumbledore" }]
    
    expect(sortZa(names)).toStrictEqual([{"name": "Zoo director" }, { "name": "Aberforth Dumbledore" }]);
  });
  it('is a function', () => {
    expect(typeof sortAz).toBe('function');
  });

  it('returns `order`', () => {
    const names = [{"name": "Aberforth Dumbledore" }, { "name": "Zoo director" }]
    
    expect(sortAz(names)).toStrictEqual([{"name": "Aberforth Dumbledore" }, {"name": "Zoo director" }]);
  });

  it('returns `search`', () => {
    const namesSearch = [{"name": "Wendelin the Weird"}, {"id": "25"}]
    
    expect(searCh(namesSearch, "Wendelin the Weird")).toEqual([{"name": "Wendelin the Weird" }]);
  });
 

});

//FUNCIÓN SORT ORDENAR A-Z
/*describe('should order Z-A', () => {

  it('is a function', () => {
    expect(typeof sortZa).toBe('function');
  });

  it('returns `order`', () => {
    const names = [{"name": "Zoo director" }, { "name": "Aberforth Dumbledore" }]
    
    expect(sortZa(names)).toStrictEqual([{"name": "Zoo director" }, { "name": "Aberforth Dumbledore" }]);
  });

});*/
/*it('should order Z-A', () => {
  const dataSort = sortZa(alldata, "Zoo director")
  const charExpected = dataSort[0]
  expect(charExpected.name).toEqual("Zoo director"); 
  
});





import alldata from '../src/data/harrypotter/data.js';
import {filterbyword, sortZa} from '../src/dataF.js';
import {generatorHTML} from '../src/generatorHTML.js';
//falta importar la otra funcion de filter si esto funsiona me va a marcar en rojo la linea 9 de esa funcion en dataF.

describe('Testing HArry Potter', () => {
 
  it('should filterbyword is a function', () => {    //esto es para saber si mi funcion es una funcion jeje
    expect(typeof filterbyword).toBe('function'); 
  });

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

  /*it('should create H2', () => {
    const h2 = generatorHTML (alldata.characters[0])
    expect(h2.tagName).toBe("h2");
  });

});



// FUNCIÓN SORT ORDENAR Z-A
describe('should order Z-A', () => {

  it('is a function', () => {
    expect(typeof sortZa).toBe('function');
  });

  it('returns `order`', () => {
    expect.anything(sortZa(alldata.name)).toStrictEqual([{"name": "Zoo director" }, { "name": "Aberforth Dumbledore" }]);
  });

});
/*it('should order Z-A', () => {
  const dataSort = sortZa(alldata, "Zoo director")
  const charExpected = dataSort[0]
  expect(charExpected.name).toEqual("Zoo director"); 
  
});
*/
  
  



/*import {filterbyword} from '../src/dataF.js';


describe('example', () => {
  it('is a function', () => {
    expect(typeof filterbyword).toBe('function');
  });

  it('returns `example`', () => {
    expect(filterbyword()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
*/