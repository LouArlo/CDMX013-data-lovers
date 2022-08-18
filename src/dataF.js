export function filterbygrifindor(alldata){
 return alldata.characters.filter(function(chars){
    return chars.house == "Gryffindor"
  })
}

export function filterbyslytherin(alldata){
  return alldata.characters.filter(function(chars){
     return chars.house == "Slytherin"
   })
 }