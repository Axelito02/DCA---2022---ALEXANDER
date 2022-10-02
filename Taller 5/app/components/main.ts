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
        <link rel="stylesheet" href="./src/style/MainStyle.css">
        
        <section>
            <div class = "mainContainer">
                <div>
                    <card-container></card-container>
                </div>
                <div>
                    <card-container></card-container>
                </div>
                    

                <div>
                    desde app container
                </div>
            </div>
        </section>
        `;
    }
}

customElements.define('app-container', AppContainer);
