const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`


// When a user loads the page, they should see all trainers, with their current team of Pokemon.
// Whenever a user hits Add Pokemon and they have space on their team, they should get a new Pokemon.
// Whenever a user hits Release Pokemon on a specific Pokemon team, that specific Pokemon should be released from the team.

function renderTrainers(trainersData) { 
    trainersData.forEach(renderTrainer)
}

function renderTrainer(trainer) {
    console.log("render single trainer",trainer)
}

function initialize() {
    fetch(TRAINERS_URL)
        .then(rspec => rspec.json())
        .then(trainersData => {
            renderTrainers(trainersData)
        })
}

initialize()

//ideal pokemond trainer card
/* <div class="card" data-id="1"><p>Prince</p>
  <button data-trainer-id="1">Add Pokemon</button>
  <ul>
    <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
    <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
    <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
    <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
    <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
  </ul>
</div> */
