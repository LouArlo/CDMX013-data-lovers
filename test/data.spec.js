
import {filterbyword} from '../src/dataF.js';
//falta importar la otra funcion de filter si esto funsiona me va a marcar en rojo la linea 9 de esa funcion en dataF.

describe('filterbyword', () => {
 const arrayData= [{"house": "Gryffindor"}, {"house":"Ravenclaw"}]
  it('should by filter characers by hoouses', () => {    //esto podria ser para saber si mi funcion es una funcion jeje
    expect(typeof filterbyword).toBe('function'); 
  });

  it('returns `example`', () => {
    expect(filterbyword(arrayData, "Ravenclaw")).toContainEqual([{"house":"Ravenclaw"}]); //probar que pasa con .toContainEqal y  el estricto === .toStrictEqual
  });


});


/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
