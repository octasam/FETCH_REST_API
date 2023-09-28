// FETCH
// La API Fetch proporciona una interfaz JavaScript para acceder y manipular 
// partes del canal HTTP, tales como peticiones y respuestas. También provee un 
// método global fetch() (en-US) que proporciona una forma fácil y lógica de obtener 
// recursos de forma asíncrona por la red.
// POST

// URL global
const BASE_URL = 'https://pokeapi.co/api/v2/';

/**
 * // Lleva 2 parametros basicos, la URL y los headers(opcionales)
    
    fetch(BASE_URL + 'pokemon/ditto')
    // Obtenemos una respuesta que se va a formatear a tipo 
    // JSON para que sea legible para nosotros, el usuario, 
    // aplicacion, que lo podamos manipular, si lo quitamos trae 
    // la respuesta como tal pero no es legible
    .then(res => res.json())
    .then(data => console.log(data));
*/

// FETCH ASYNC
// Intente hacer algo
// Vamos a guardar la respuesta, una vez que obtengamos 
// el resultado lo vamos a parsear ("formatear")
// const response = await fetch(BASE_URL + 'pokemon/ditto');
const fetchPokemon = async (pokemon) => {
    try {
        const response = await fetch(`${BASE_URL}pokemon/${pokemon}`);
        const parsedResponse = await response.json();
        return parsedResponse;
    } catch (err) {
        // Si no lo logra, entonces cacha el error y muestra en consola
        console.error(err);
    }
}

// Obtener pokemon
document.getElementById('profileBtn')
    .addEventListener('click', async () => {
        const text = document.getElementById('poke-name').value.toLowerCase();
        const pokemon = await fetchPokemon(text);
        /**
         * La propiedad de sólo lectura localStorage te permite acceder al objeto 
         * local Storage; los datos persisten almacenados entre de las diferentes 
         * sesiones de navegación. localStorage es similar a sessionStorage (en-US). 
         * La única diferencia es que, mientras los datos almacenados en localStorage 
         * no tienen fecha de expiración, los datos almacenados en sessionStorage son 
         * eliminados cuando finaliza la sesion de navegación - lo cual ocurre cuando 
         * se cierra la página.
         */
        localStorage.setItem('currentPokeId', pokemon.id);

        console.log(pokemon.name.toUpperCase());
        // console.log(pokemon.id);
        // console.log(pokemon.name);
        // console.log(pokemon.type);
    })

/** EVENTO
 * para el DOM
 */

document.addEventListener('DOMContentLoaded', async () => {
    const storedId = localStorage.getItem('currentPokeId');
    const initialId = storedId ? parseInt(storedId) : 1;
    const pokemon = await fetchPokemon(initialId);
    console.log(pokemon.name);
    // const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    // const color = colors[type];
})

// Obtener el anterior
//
//
//Obtener el siguiente

document.getElementById('previous-btn')
.addEventListener('click',async () => { //Cuando escuchamos el click ejecutamos la sigueinte funcion
   let currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
   let newId = Math.max(1, currentPokeId -1);
   let pokemon = await fetchPokemon(newId); // Cuando tenemos el await nuestro funcion debe ser async
   if (currentPokeId !== newId) {
    currentPokeId = newId;
    localStorage.setItem('currentPokeId', currentPokeId);}
   console.log(pokemon.name);
}) 

document.getElementById('next-btn')
    .addEventListener('click', async () =>{
        let currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
        let newId = currentPokeId + 1;
        let pokemon = await fetchPokemon(newId);
        if (currentPokeId !== newId){
            currentPokeId = newId;
            localStorage.setItem('currentPokeId', currentPokeId);
        }
        console.log(pokemon.name);
    })

    const CARD_SECTION = document.getElementById('profiles');

//////POST
//

fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    boyd: JSON.stringify({
        title: 'title1',
        body: 'lorem ipsum dolor sit amet',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
}).then(res => res.json())
    .then(json => console.log(json))

/**
 * ////////////////// POST - Codigo Zab
//

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'title1',
        body: 'Lorem ipsum dolor sit amet',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
}).then(res => res.json())
    .then(json => console.log(json))
 */

/////////////////// EJERCICIOS
//- Arreglar el pokemon en localStorage
// - Manipular el DOM y agregar una tarjeta del pokemon.
// - El tamaño e info de la tarjeta es a consideración personal.
// - La tarjeta debe mantenerse en la pantalla.
// - La info -> LocalStorage -> Fetch

// let inputName = document.getElementById('poke-name');
// let pokeName = document.getElementById('poke-name');
// let inputId = document.getElementById('poke-id');
// let pokeId = document.getElementById('poke-id');


// const profileBtn = document.getElementById('profileBtn');
// profileBtn.addEventListener('click',() => {
//     pokeName.textContent = pokeName;
//     pokeId.textContent = pokeId;
// })

// const pokemones = [];

// const CARD_SECTION = document.getElementById('profiles');

// const createCard = () => {
//     const card = document.createElement('div'); //creamos un div
//     card.classList.add('profile', 'container'); //le damos una clase a ese div para que quede con la misma sintaxis que en el div de HTML
//     return card;
// }

// const createDescription = () => {
//     const pokeElements = {
//         name: document.createElement('h2'),
//         id: document.createElement('h3')
//     }
//     return pokeElements;
// }
// const populateElements = (pokemon, pokeElements) => {
//     pokeElements.name.textContent = pokemon.name;
//     pokeElements.id.textContent = pokemon.id;

//     return pokeElements;
// }

// const renderElements = (card, pokeElements) => {
//     card.append(pokeElements.name, pokeElements.id)
// }


// const createPokeCard = (fetchPokemon, pokeElements) => {
//     pokeElements.name.textContent = pokeName.name;
//     pokeElements.id.textContent = fetchPokemon.id;
    
//     return pokeElements;
// }

// profileBtn.addEventListener('click', () => {
//     const newPoke = {
//         name: pokeName.name,
//         id: pokeId.id,
//     }
//     pokemones.push(newPoke)
//     const card = createCard();
//     const pokeElements = createDescription();
//     const elementsWithData = createPokeCard(newPoke, pokeElements);
//     renderElements(card, elementsWithData);
//     CARD_SECTION.append(card);
// })
let pokemones = [];

// Obtener pokemon
document.getElementById('profileBtn')
    .addEventListener('click', async () => {
        const text = document.getElementById('poke-name').value.toLowerCase();
        const pokemon = await fetchPokemon(text);
        localStorage.setItem('currentPokeId', pokemon.id);
        localStorage.setItem('weightPoke', pokemon.weight);
        localStorage.setItem('abilityPoke', pokemon.ability);

        const newPokemon ={
            id: pokemon.id,
            name: pokemon.name,
            weight: pokemon.weight,
            height: pokemon.height,
        }
        pokemones.push(newPokemon);
        const card = displayPokemonCard(pokemon);
        CARD_SECTION.append(card);
})

document.addEventListener('DOMContentLoaded', async () => {
    const storedId = localStorage.getItem('currentPokeId');
    const initialId = storedId ? parseInt(storedId) : 1;
    const pokemon = await fetchPokemon(initialId);
    displayPokemonCard(pokemon);
})

document.getElementById('previous-btn').addEventListener('click', async () => {
    const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
    const newId = Math.max(1, currentPokeId - 1);
    const pokemon = await fetchPokemon(newId);
    localStorage.setItem('currentPokeId', pokemon.id);
    // if (currentPokeId !== newId) {
    //     currentPokeId = newId;
    //     localStorage.setItem('currentPokeId', currentPokeId);}
    //    console.log(pokemon.name);
    displayPokemonCard(pokemon);
})

document.getElementById('next-btn').addEventListener('click', async () => {
    const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
    const newId = currentPokeId + 1;
    const pokemon = await fetchPokemon(newId);
    localStorage.setItem('currentPokeId', pokemon.id);
    // if (currentPokeId !== newId){
    //     currentPokeId = newId;
    //     localStorage.setItem('currentPokeId', currentPokeId);
    // }
    displayPokemonCard(pokemon);
})

// Función para mostrar la tarjeta del Pokémon
const displayPokemonCard = (pokemon) => {
    const cardContainer = document.querySelector('.card--container');
    const card = document.createElement('div');
    card.classList.add('card');

    const name = document.createElement('p');
    name.textContent = `Name: ${pokemon.name.toUpperCase()}`;

    const id = document.createElement('p');
    id.textContent = `ID: ${pokemon.id}`;

    const weight = document.createElement('p');
    weight.textContent = `Weight: ${pokemon.weight}`;

    const height = document.createElement('p');
    height.textContent = `Height: ${pokemon.height}`;

    card.appendChild(name);
    card.appendChild(id);
    card.appendChild(weight);
    card.appendChild(height);
    cardContainer.innerHTML = ''; // Limpia cualquier tarjeta previa.
    //cardContainer.push(card);
    cardContainer.appendChild(card);
}
