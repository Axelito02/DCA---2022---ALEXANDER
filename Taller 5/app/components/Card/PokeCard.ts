import {getPokedex} from '../PokeAPi/API.js';
import { PokeData } from '../TypeData/typedata.js';

enum DatesApi {
    pokemones = 'pokemones',
    abilities = 'abilities',
    nature = 'nature',
    habitat = 'habitat',
    type = 'type',
}

class CardContainer extends HTMLElement {
    pokemones = '';
    abilities = '';
    nature = '';
    habitat = '';
    type = '';

    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }
    attributesChangeCallback(prop: DatesApi, _: string, newVAlue: string): void {
        this[prop] = newVAlue;
    }

    async connectedCallback() {
        const pokedex = await getPokedex();
        this.render(pokedex);
    }

    render(pokedex:Array<PokeData>): void {
        if (!this.shadowRoot) return

        const Pokemap = pokedex.map(({abilities, id, name, types, sprites}) => `

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
    </div>`)
        this.shadowRoot.innerHTML = `
            ${Pokemap.join("")}
        `
    }
}

customElements.define('card-container', CardContainer)
export default CardContainer;
