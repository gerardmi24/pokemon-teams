const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
//const mainselect = document.getElementsByTagName('#main')
//const COMBO = [TRAINERS_URL + POKEMONS_URL]

window.addEventListener('DOMContentLoaded', (event) => {
  

    fetchTrainers();

});

const fetchTrainers = () => {
fetch("http://localhost:3000/trainers")
    .then(response => response.json())
    .then(trainers => addTrainers(trainers))

}

const addTrainers = (trainers) => {
    for(const trainer of trainers){
        addTrainerToDom(trainer)
    }
}

const addTrainerToDom = (trainer) => {
    const mainselect = document.querySelector('main')
    let span = document.createElement('span')
    span.dataset.id = trainer.id
    span.classList.add('trainerspan')
    span.textContent = `${trainer.name}`
    console.log(mainselect)
    mainselect.appendChild(span);

}
  
const addTrainerInfoToDom = (trainer) => {
    const trainerInfo = document.getElementsById(`${trainer.id}`)
console.log(trainerInfo)
    trainerInfo.dataset.id = trainer.id

    //    trainerinfo.innerHTML = ''


}

//fetch("http://localhost:3000/pokemons")
//    .then(response => response.json())
//    .then(poke => console.log(poke))

    
//<div class="card">
//<h2>"${trainers.name}"</h2>
//<button class="add-pkmn">Add Pokemon</button>
//</div>





