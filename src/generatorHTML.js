export const generatorHTMLbook = (books) => {
  const div = document.createElement('div')
  const title= document.createElement('h2')
  title.textContent = books.title
  const contentBook = document.createElement('h3')
  contentBook.textContent = books.description

  div.append(title, contentBook)

  return div
}

export const generatorHTMLff = (funFacts) => {
  const div = document.createElement('div')
  const typeFunFact = document.createElement('h2')
  typeFunFact.textContent = funFacts.type
  const contentFunFact = document.createElement('h3')
  contentFunFact.textContent = funFacts.content

  div.append(typeFunFact, contentFunFact)

  return div
}

export const generatorHTMLdescribe = (spells) => {
  const div = document.createElement('div')
  const nameSpell = document.createElement('h2')
  nameSpell.textContent = spells.name
  const descriptionSpell = document.createElement('h3')
  descriptionSpell.textContent = spells.description

  div.append(nameSpell, descriptionSpell)

  return div
}

const generatorHTML = (characters) => {
  const div = document.createElement('div')
  const nameCharacter = document.createElement('h2')
  nameCharacter.textContent = characters.name
  const img = document.createElement('img')
  img.setAttribute('src', `${characters.img}`)

  if (characters.img === undefined) {
    img.setAttribute('src', './images/HP_personajes_extra.png')
  }

  div.append(img, nameCharacter)
  return div
}

const generatorHTMLfilter = (characters) => {
  const div = document.createElement('div')
  const nameCharacter = document.createElement('h2')
  nameCharacter.textContent = characters.name
  
  div.append(nameCharacter)

  return div
}


export const generatorHTMLSearch = (characters) => {
  const div = document.createElement('div')
  const nameCharacter = document.createElement('h2')
  nameCharacter.textContent = characters.name
  const birthCharacter = document.createElement('h3')
  birthCharacter.textContent = characters.birth
  const deathCharacter = document.createElement('h3')
  deathCharacter.textContent = characters.death
  const speciesCharacter = document.createElement('h3')
  speciesCharacter.textContent = characters.species
  const ancestryCharacter = document.createElement('h3')
  ancestryCharacter.textContent = characters.ancestry
  const genderCharacter = document.createElement('h3')
  genderCharacter.textContent = characters.gender
  const hair_colorCharacter = document.createElement('h3')
  hair_colorCharacter.textContent = characters.hair_color
  const eye_colorCharacter = document.createElement('h3')
  eye_colorCharacter.textContent = characters.eye_color
  const wandCharacter = document.createElement('h3')
  wandCharacter.textContent = characters.wand
  const patronusCharacter = document.createElement('h3')
  patronusCharacter.textContent = characters.patronus
  const houseCharacter = document.createElement('h3')
  houseCharacter.textContent = characters.house
  const associated_groupsCharacter = document.createElement('h3')
  associated_groupsCharacter.textContent = characters.associated_groups

  div.append(nameCharacter,birthCharacter,deathCharacter,speciesCharacter, ancestryCharacter, genderCharacter, hair_colorCharacter, eye_colorCharacter, wandCharacter, patronusCharacter, houseCharacter, associated_groupsCharacter)

  return div
}


export { generatorHTMLfilter };
export { generatorHTML };
