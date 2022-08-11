import alldata from './data/harrypotter/data2.js'

const root = document.getElementById('root')

root.classList='HpData-style'

/*seleccion de characters*/

const character=alldata.characters 


const generatorHTML=(characters)=>{


    const div = document.createElement('div')

    const nameCharacter = document.createElement('h2')
    nameCharacter.textContent=characters.name

    const img = document.createElement('img')
    img.setAttribute('src',characters.img)

    if (characters.img === undefined) {
        img.setAttribute('src','/images/HP_personajes_extra.png')
    }

    div.append (img,nameCharacter)
    
    
    return div 
}



character.forEach(onecharacters=>root.appendChild(generatorHTML(onecharacters)))




/*info.addEvenListener('click', function() {
alert('estoy escuchando el click')*/

    

