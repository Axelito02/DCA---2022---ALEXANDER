var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getPokedex } from '../PokeAPi/API.js';
var DatesApi;
(function (DatesApi) {
    DatesApi["pokemones"] = "pokemones";
    DatesApi["abilities"] = "abilities";
    DatesApi["nature"] = "nature";
    DatesApi["habitat"] = "habitat";
    DatesApi["type"] = "type";
})(DatesApi || (DatesApi = {}));
class CardContainer extends HTMLElement {
    constructor() {
        super();
        this.pokemones = '';
        this.abilities = '';
        this.nature = '';
        this.habitat = '';
        this.type = '';
        this.attachShadow({ mode: 'open' });
    }
    attributesChangeCallback(prop, _, newVAlue) {
        this[prop] = newVAlue;
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const pokedex = yield getPokedex();
            this.render(pokedex);
        });
    }
    render(pokedex) {
        if (!this.shadowRoot)
            return;
        const Pokemap = pokedex.map(({ id, height, abilities, location_area_encounters, name, species, stats, types, weight, sprites }) => `<article>
            <h4>${id}</h4>
            <h4>${name}</h4>
            <h4>${types}</h4>
            <h4>${species}</h4>
            <img src="${sprites}">
            <h4>${abilities}</h4>
            <h4>${location_area_encounters}</h4>
            <h4>${stats}</h4>
            <h4>${height}</h4>
            <h4>${weight}</h4>
        </article>`);
        this.shadowRoot.innerHTML = `
            ${Pokemap.join("")}
        `;
    }
}
customElements.define('card-container', CardContainer);
export default CardContainer;
