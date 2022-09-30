var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const pokemones = "https://pokeapi.co/api/v2/pokemon";
const abilities = "https://pokeapi.co/api/v2/ability";
const nature = "https://pokeapi.co/api/v2/nature";
const habitat = "https://pokeapi.co/api/v2/pokemon-habitat";
const type = "https://pokeapi.co/api/v2/type";
function Apifuntion() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch(pokemones);
        let pokemons = yield response.json();
        console.log(pokemons.results);
        for (let i = 0; i < pokemons; i++) {
            console.log(pokemons[i]);
        }
    });
}
Apifuntion();
export default pokemones;
