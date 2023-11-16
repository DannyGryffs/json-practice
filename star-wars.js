import axios from './node_modules/axios/dist/esm/axios.min.js'

const episodeNum = Math.ceil(Math.random() * 6)

axios.get(`https://swapi.dev/api/films/${episodeNum}`).then((response) => {
    // console.log(response.data)
    console.log(response.data.title)
    document.getElementById('star-wars-movie').innerHTML = response.data.title
})

.catch((error) => {

})

document.getElementById('star-wars-movie').innerHTML = "It's working! It's working!"