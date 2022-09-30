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
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        
        desde la pokecard
        <div>
        </div>
        `;
    }
}
customElements.define('card-container', CardContainer);
export default CardContainer;
