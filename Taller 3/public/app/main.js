import "./components/importer.js";
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
        <link rel="stylesheet" href="./src/style/style.css">

        <header-container></header-container> 

        <section class="containerContent">
            <div class="content">

                <div>
                    <storie-container></storie-container>
                    <post-container></post-container>
                </div>

                <div>
                    <profile-container></profile-container>
                    <suggest-container></suggest-container>
                </div>
            </div>
        </section>
        `;
    }
}
customElements.define('app-container', AppContainer);
