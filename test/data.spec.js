import alldata from '../src/data/harrypotter/data.js';
import {filterbyword} from '../src/dataF.js';
import {generatorHTML} from '../src/generatorHTML.js';
//falta importar la otra funcion de filter si esto funsiona me va a marcar en rojo la linea 9 de esa funcion en dataF.

describe('filterbyword', () => {
 
  it('should filterbyword is a function', () => {    //esto es para saber si mi funcion es una funcion jeje
    expect(typeof filterbyword).toBe('function'); 
  });

  it('should filter characers by hoouses`', () => {
    const datafilter = filterbyword(alldata, "Ravenclaw")
    const houseExpected = datafilter[0]
    expect(houseExpected.house).toEqual("Ravenclaw"); 
  });
  it('should create div', () => {
    const div = generatorHTML (alldata.characters[0])
    expect(div.tagName).toBe("DIV");
  });
  

});



