var Atributtes;
(function (Atributtes) {
    Atributtes["username"] = "username";
})(Atributtes || (Atributtes = {}));
class ContainerStories extends HTMLElement {
    constructor() {
        super();
        this.username = '';
        this.attachShadow({ mode: 'open' });
    }
    static get observedAtributes() {
        return Object.keys(Atributtes);
    }
    attributeChangeCallback(prop, _, newValue) {
        this[prop] = newValue;
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/style/style.css">
        
            <div>
                <div class="stories">
                    <div class="storiesContent">
                        <div class="storieProf">
                            <img src="./src/img/profile/bienestaru_icesi.jpg">
                            <div>
                                ${this.username}
                            </div>
                        </div>
                        
                        <div class="storieProf">
                            <img src="./src/img/profile//disneychannel_la.jpg">
                            <div>
                                ${this.username}
                            </div>
                        </div>
                        <div class="storieProf">
                            <img src="./src/img/profile/isa_salazar0910.jpg">
                            <div>
                                ${this.username}
                            </div>
                        </div>
                        <div class="storieProf">
                            <img src="./src/img/profile/luzu.jpg">
                            <div>
                                ${this.username}
                            </div>
                        </div>
                        <div class="storieProf">
                            <img src="./src/img/profile/yanin_cc.jpg">
                            <div>
                                ${this.username}
                            </div>
                        </div>
                    </div>
                </div>
        `;
    }
}
customElements.define('storie-container', ContainerStories);
export default ContainerStories;
