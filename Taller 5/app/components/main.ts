import './import.js';

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (!this.shadowRoot) return
        this.shadowRoot.innerHTML = `
        <card-container></card-container>
        desde app container
        `;
    }
}

customElements.define('app-container', AppContainer);
