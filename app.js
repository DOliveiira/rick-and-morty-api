const charsConteiner = document.querySelector('.chars-container');
const speciesFielter = document.querySelector('#species')

const API = 'https://rickandmortyapi.com/api'
const defaultFilters = {
    name: '',
    species: '',
    gender: '',
    status: '',
    page: 1
}

async function getCharacters({ name, species, gender, status, page = 1 }) {
    const response = await fetch(`${API}/character?name=${name}&species=${species}&gender=${gender}&status=${status}&page=${page}`)

    const characters = await response.json()
    return characters.results
}

async function render(characters){
    characters.forEach((character) => {
        return charsConteiner.innerHTML += `
        <div class="char">
            <img src="${character.image}" alt="">
            <div class="char-info">
                <h3>${character.name}</h3>
                <span>${character.species}</span>
            </div>
         </div>
        `
    })
}

speciesFielter.addEventListener('change', async (event) => {
    defaultFilters.species = event.target.value
    charsConteiner.innerHTML = ''
    const characters = await getCharacters(defaultFilters)
    render(characters)
})

async function main(){
    const characters = await getCharacters(defaultFilters)
    render(characters)
}

main()