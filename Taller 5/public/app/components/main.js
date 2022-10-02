import './import.js';
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
        <link rel="stylesheet" href="./src/style/MainStyle.css">

            <div class = "mainContainer">
                <div class= "containerCards">
                    <card-container></card-container>
                </div>
            </div>

        `;
    }
}
customElements.define('app-container', AppContainer);
