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
  /*const img = document.createElement('img')
  img.setAttribute('src', `${characters.img}`)

  if (characters.img === undefined) {
    img.setAttribute('src', './images/HP_personajes_extra.png')
  }*/

  div.append(nameCharacter)

  return div
}
export { generatorHTMLfilter };
export { generatorHTML };
