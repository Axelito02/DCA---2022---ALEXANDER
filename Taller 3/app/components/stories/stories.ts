enum Atributtes {
    username = "username",
}

class ContainerStories extends HTMLElement{
    username: string = '';

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

customElements.define('storie-container', ContainerStories)
export default ContainerStories;
