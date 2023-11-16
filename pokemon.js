import axios from './node_modules/axios/dist/esm/axios.min.js'

let pokemonButton = document.getElementById('get-pokemon')
let pokemonList = document.getElementById('pokemon-list')
let number = document.getElementById('num-pokemon')

function getPokemon(){

    let n = number.value

    pokemonList.innerHTML = ''

    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${n}`)
    .then((response) => {
        // console.log(response.data.results)

        for(let i = 0; i < response.data.results.length; i++) {
            let pokemonName = response.data.results[i].name //gets the name pf the pokemon from my data

            let newP = document.createElement('p') //makes a new p element
            newP.innerHTML = pokemonName //gives that p element some text (the pokemon name)

            pokemonList.appendChild(newP) //puts the p element in the dom as the last child of the ul
        }
    })
    .catch((error) => {

    })
}

pokemonButton.addEventListener('click', getPokemon)

