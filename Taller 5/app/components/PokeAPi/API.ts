// Datos que quiero obtener de la API pokemon/pidgey
const pokemones = "https://pokeapi.co/api/v2/pokemon"
const abilities = "https://pokeapi.co/api/v2/ability"
const nature = "https://pokeapi.co/api/v2/nature"
const habitat = "https://pokeapi.co/api/v2/pokemon-habitat"
const type = "https://pokeapi.co/api/v2/type"

async function Apifuntion() {
    let response = await fetch(pokemones);
    let pokemons = await response.json();
    console.log(pokemons.results);

    for (let i = 0; i < pokemons; i++) {
        console.log(pokemons[i]);
    }
}
Apifuntion();

export default pokemones;
