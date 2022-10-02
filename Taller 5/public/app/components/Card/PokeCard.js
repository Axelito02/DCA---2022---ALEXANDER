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
        const Pokemap = pokedex.map(({ abilities, id, name, types, sprites }) => `

        <div class="containerPokecard">
        <div class="imgPoke">
            <img src="${sprites}">
        </div>

        <div class="namePoke">
            <div class="name">
                <h2>
                    ${name}
                </h2>
            </div>
            <div class="id">
                <h2>
                    N.º ${id}
                </h2>
            </div>
        </div>

        <div class="typePoke">
            <div class="type">${types}</div>
        </div>

        <div class="statsPoke">
            <div class="titleStatsPoke">
                <h3>
                    Abilities
                </h3>
            </div>
            <div class="statsPokeInfo">
                <p>
                    ${abilities}
                </p>
            </div>
        </div>
    </div>`);
        this.shadowRoot.innerHTML = `
            ${Pokemap.join("")}
        `;
    }
}
customElements.define('card-container', CardContainer);
export default CardContainer;
