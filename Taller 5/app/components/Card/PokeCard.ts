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

    connectedCallback(): void {
        this.render();
    }

    render(): void {
        if (!this.shadowRoot) return
        this.shadowRoot.innerHTML = `
        
        desde la pokecard
        <div>
        </div>
        `
    }

}

customElements.define('card-container', CardContainer)
export default CardContainer;
