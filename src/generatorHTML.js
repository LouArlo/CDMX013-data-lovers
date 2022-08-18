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

  export default generatorHTML;