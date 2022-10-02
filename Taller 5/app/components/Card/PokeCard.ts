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

        const Pokemap = pokedex.map(({id, height, abilities, location_area_encounters, name, species, stats, types, weight, sprites}) => `<article>
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
        </article>`)
        this.shadowRoot.innerHTML = `
            ${Pokemap.join("")}
        `
    }

}

customElements.define('card-container', CardContainer)
export default CardContainer;
