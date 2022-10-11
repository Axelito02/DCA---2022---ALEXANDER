enum Atributtes {
    username = "username",
    name = "name",
}

class ContainerProfile extends HTMLElement{
    username: string = '';
    name: string = "";

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
        <div class="profile">
            <div class="contentProfile">
                <div class="imgProfileMin">
                    <img src="./src/img/profile/a_r_v_132.jpg">
                </div>
                <div class="nameProfileMin">
                    <div class="username">
                        <h5>${this.username}</h5>
                    </div>
                    <div class="name">
                        <h5>${this.name}</h5>
                    </div>
                </div>
                <div class="btnProfileMin">
                    <h6>Change</h6>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('profile-container', ContainerProfile)
export default ContainerProfile;
