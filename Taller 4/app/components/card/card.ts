enum Atributtes {
    username = 'username',
    name = 'name',
}

class ContainerCard extends HTMLElement {
    username = '';
    name = '';

    static get observedAtributes(): Atributtes[] {
        return Object.keys(Atributtes) as Atributtes[];
    }

    attributesChangeCallback(prop: Atributtes, _: string, newValue: string): void {
        this[prop] = newValue;
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback(): void {
        this.render();
    }

    render(): void {
        if (!this.shadowRoot) return;
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
