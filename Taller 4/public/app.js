import './components/import.js';
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `        
            <card-container></card-container>
            hduiaduia

        `;
    }
}
customElements.define('app-container', AppContainer);
