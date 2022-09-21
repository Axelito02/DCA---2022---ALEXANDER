import "./components/importer.js";

class AppContainer extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: 'open'})

    }

    connectedCallback(){
        this.render();
    }

    render() {
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `        
            <header-container></header-container>
            <storie-container></storie-container>

        `;
    }
}

customElements.define('app-container', AppContainer)
