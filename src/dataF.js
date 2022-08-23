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

//prueba search 1
/*export const searchItems = (alldata, input) =>{
  return alldata.characters.filter((items)=>(items.name.toLowareCase()).slice(0,(input.toLowareCase()).length)===input.toLowareCase());
}*/


