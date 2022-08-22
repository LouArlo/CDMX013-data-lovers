import {filterbyword} from '../src/dataF.js';


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
