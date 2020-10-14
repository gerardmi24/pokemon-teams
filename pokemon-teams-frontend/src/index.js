const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers/`
const POKEMONS_URL = `${BASE_URL}/pokemons/`

document.addEventListener('DOMContentLoaded', e => {
    //console.log("DOMContentLoaded")

const getTrainers = () => {
    fetch(TRAINERS_URL)
    .then(response => response.json())
    .then(trainers => addTrainers(trainers))
}

const addTrainers = (trainers) => {
    for(const trainer of trainers){
       addTrainerToDom(trainer) 
    }
}

const addTrainerToDom = (trainer) =>{
    let main = document.querySelector('main')
    
    let pokeDiv = document.createElement('div')
    let ul = document.querySelector('.pokeUl')
    pokeDiv.classList.add('card')
    pokeDiv.dataset.id = trainer.id
    pokeDiv.innerHTML = `
    <p>${trainer.name}</p>
    <button class="add" data-trainer-id="${trainer.id}">Add Pokemon</button>
    <ul class="pokeUl">
      
    </ul>
    `
    


    for(const pokemon of trainer.pokemons){
       addPokemonToUl(pokemon, pokeDiv)

    }
    main.appendChild(pokeDiv)
}

const addPokemonToUl = (pokemon, pokeDiv) =>{
    const ul = pokeDiv.querySelector('.pokeUl')
    const li = document.createElement('li')
    li.innerHTML = `
    ${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button>
    `
    ul.appendChild(li)
    
} 

const clickEventHandler = () =>{
    document.addEventListener('click', e =>{
        if(e.target.matches('.add')){
           let addButton = e.target 
           const trainerId = addButton.dataset.trainerId
           let pokeDiv = addButton.parentNode
           const options = {
               method: "POST",
               headers: {
                'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                   "trainer_id": trainerId
               })
           }

           fetch(POKEMONS_URL, options)
           .then(resp => resp.json())
           .then(pokemon => addPokemonToUl(pokemon, pokeDiv))
        }
        else if (e.target.matches('.release')){
                let deleteButton = e.target
                const pokeID = deleteButton.dataset.pokemonId

                const options = {
                    method: "DELETE"
                }
                fetch(POKEMONS_URL + pokeID, options)
                .then(resp => resp.json())
                .then(pokemon => {
                    const pokeLi = document.querySelector(`[data-pokemon-id="${pokemon.id}"]`).parentElement
                    pokeLi.remove()
                })
    
            }
    
 })
}
    clickEventHandler();
    getTrainers();



})