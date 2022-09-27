var Atributtes;
(function (Atributtes) {
    Atributtes["username"] = "username";
    Atributtes["name"] = "name";
})(Atributtes || (Atributtes = {}));
class ContainerCard extends HTMLElement {
    constructor() {
        super();
        this.username = '';
        this.name = '';
        this.attachShadow({ mode: 'open' });
    }
    static get observedAtributes() {
        return Object.keys(Atributtes);
    }
    attributesChangeCallback(prop, _, newValue) {
        this[prop] = newValue;
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
            <section>
                <h4>${this.title}</h4>
                <button>Seleccionar</button>
            </section>
        `;
    }
}
customElements.define('card-container', ContainerCard);
export default ContainerCard;
