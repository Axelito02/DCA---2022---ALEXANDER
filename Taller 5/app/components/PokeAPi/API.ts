// Datos que quiero obtener de la API pokemon/pidgey
import {PokeData} from '../TypeData/typedata'

export const getPokedex = async (): Promise <Array<PokeData>> => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const DataApi = await response.json();
    console.log(DataApi.results);
    return [DataApi.results] 
}
