export function filterbyword(alldata, wordfilter) {
  return alldata.characters.filter(function (chars) {
    return chars.house == wordfilter
  })
}

export function filterbyword2(alldata, wordfilter) {
  return alldata.spells.filter(function (chars) {
    return chars.spell_type == wordfilter
    console.log()
  })
}
