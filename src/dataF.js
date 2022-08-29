export function filterbyword(alldata, wordfilter) {
  return alldata.characters.filter(function (chars) {
    return chars.house == wordfilter
  })
}

export function filterbyword2(alldata, wordfilter) {
  return alldata.spells.filter(function (chars) {
    return chars.spell_type == wordfilter
  })
}


export const sortAz = (x) =>
  x.sort((a, b) => {
    const nombreA = a.name.toLowerCase()
    const nombreB = b.name.toLowerCase()

    if (nombreA < nombreB) {
      return -1;
    }
    if (nombreA > nombreB) {
      return 1;
    }
    return 0;
  }) 



export const sortZa = (x) =>
  x.sort((a, b) => {
    const nombreA = a.name.toLowerCase()
    const nombreB = b.name.toLowerCase()

    if (nombreB < nombreA) {
      return -1;
    }
    if (nombreB > nombreA) {
      return 1;
    }
    return 0;
  });

  export function searCh (x,input) {
    return x.filter(
    (character) => character.name === input
          )
  }
