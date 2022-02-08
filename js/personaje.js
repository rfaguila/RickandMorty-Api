// establecemos nuestroas primeras constantyes // 
const nameCharacter = document.querySelector('h5');
const imgCard = document.querySelector('img');
const footerCard = document.querySelector('.card-footer');
const cardText = document.querySelector('.card-text');
const parrafoGenero = document.querySelector('.genero');
const parrafoLocation = document.querySelector('.location');

// establecemos un parametro para nuestro personaje //
const parametro = window.location.search;

const urlParams = new URLSearchParams(parametro);
let id = urlParams.get('id');

const getCharacterById = async(id) => {
   const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
   const data = response.json();

   return data;
}

getCharacterById(id).then( data => {
    nameCharacter.innerText = data.name
    imgCard.src = data.image;
    footerCard.innertext = data.status;
    if (data.status==='Alive'){
        footerCard.classList.add('blue');
    } else if(data.status === 'Dead') {
        footerCard.classList.add('black');
    } else {
        footerCard.classList.add('yellow');
    }
    cardText.innerText ="Specie: " + data.species;
    parrafoGenero.innerText = "Gender: " + data.gender;
    parrafoLocation.innerText = "Location= " + data.location.name;

}).catch(err => err);