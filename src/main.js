import alldata from './data/harrypotter/data.js'


const root = document.getElementById('root')
root.classList='HpData-style'
const character=alldata.characters 

const generatorHTML=(characters)=>{
    const div = document.createElement('div')

    const nameCharacter = document.createElement('h2')
    nameCharacter.textContent=characters.name

    const img = document.createElement('img')
    img.setAttribute('src',characters.img)

    div.append(img,nameCharacter)


    return div 

}
character.forEach(onecharacters=>root.appendChild(generatorHTML(onecharacters)));


const accio = document.getElementById('spell')
accio.classList='accioSpells-style'
const spell=alldata.spells

const generatorDivSpellHTML=(spells)=>{
    const divSpells = document.createElement('div')

    const nameSpell = document.createElement('h2')
    nameSpell.textContent=spells.name

    const img = document.createElement('img')
    img.setAttribute('src',characters.img)

    divSpells.append(img,nameSpell)


    return divSpells

}
spell.forEach(onespells=>divSpells.appendChild(generatorDivSpellHTML(onespells)))


/*if (img === undefined) {
        img.src = '/images/HP_personajes_extra.png'
        console.log(img)
    }*/

/*for (let i=0; i<character.lenght; i++ ) {
    console.log("aqui anda el for")
   //onecharacter = root.appendChild(generatorHTML(onecharacters))
    $(character).ready(function() {
        $('#root').append(
            $(document.createElement('input')).prop({
                type: 'button',
                id: 'submit',
                value: 'submit',
                className: 'btn',

            })
        );
    });
}*/




   /* let characterButton = div.cloneNode(true);
    characterButton.children[1].src = characters.img;
    characterButton.children[0].innerHTML = characters.name;
    characterButton.id = characters.id;

    characterButton.addEventListener('click',function(){dataWindow(characterButton.id); });
    document.getElementById('info_characters').appendChild(characterButton);
    characterButton.style.display = 'block';
   */
   

/* 
const x = document.addEventListener(click)
characters

*/
