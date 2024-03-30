const charsConteiner = document.querySelector('.chars-container');

const API = 'https://rickandmortyapi.com/api'

async function getCharacters({ name, specuies, gender, statys, page = 1 }) {
    const response = await fetch(`${API}/character?name=${name}`)

}