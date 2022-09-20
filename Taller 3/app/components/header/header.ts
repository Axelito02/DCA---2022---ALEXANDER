enum Atributtes {
    username = "username"
}

class ContainerHeader extends HTMLElement{
    username = '';

    static get observedAtributes(): Atributtes[] {
        return Object.keys(Atributtes) as Atributtes[];
    }

    attributeChangeCallback(prop: Atributtes, _:string, newValue:string):void{
        this[prop] = newValue;
    }

    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    connectedCallback():void {
        this.render();
    }

    render():void {
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/style/style.css">
        
        <div class="header">
            <div class="principal">
                <div>
                    <img src="./src/img/main/name mainv2.png">
                </div>
                <div class="arrowOpt">
                    <img src="./src/img/icons/down-arrow.png">
                </div>
            </div>

            <div class="search">
                <div>
                    <img src="./src/img/icons/search.png">
                </div>
                <div class="barInput">
                    <input type="text" placeholder="Search" id="search">
                </div>
            </div>
            <div class="options">
            <div class="iconOpt">
                <div class="icon1">
                    <img src="./src/img/icons/homepage.png">
                </div>
                <div class="icon">
                    <img src="./src/img/icons/messenger.png">
                </div>
                <div class="icon">
                    <img src="./src/img/icons/add.png">
                </div>
                <div class="icon">
                    <img src="./src/img/icons/explore.png">
                </div>
                <div class="icon">
                    <img src="./src/img/icons/like.png">
                </div>
                <div class="icon2">
                    <img src="./src/img/profile/a_r_v_132.jpg">
                </div>
            </div>
        </div>
    </div>
        `;
    }
}

customElements.define('header-container', ContainerHeader)
export default ContainerHeader;
