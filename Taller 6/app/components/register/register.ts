import { addUser } from "../../DataBase/DataBase.js"

class RegContainer extends HTMLElement {
    name = ""
    username = ""
    email = ""
    password = ""

    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.render()
        const btn = this.shadowRoot?.querySelector('button');
        if (btn) {
            btn.addEventListener('click', () => {

                const event: CustomEvent<{ name: string, username: string, email: string, password: string }> = new CustomEvent('new-user', {
                    detail: { name: this.name, username: this.username, email: this.email, password: this.password },
                    composed: true
                });

                this.dispatchEvent(event);
            });

            const NameContInput = this.shadowRoot?.getElementById('NameContInput')
            const UsernameContInput = this.shadowRoot?.getElementById('UsernameContInput')
            const EmailContInput = this.shadowRoot?.getElementById('EmailContInput')
            const PasswordContInput = this.shadowRoot?.getElementById('PasswordContInput')

            NameContInput?.addEventListener('change', (evt) => {
                const value = evt.target?.value || "";
                this.name = value;
            })

            UsernameContInput?.addEventListener('change', (evt) => {
                const value = evt.target?.value || "";
                this.username = value;
            })

            EmailContInput?.addEventListener('change', (evt) => {
                const value = evt.target?.value || "";
                this.email = value;
            })

            PasswordContInput?.addEventListener('change', (evt) => {
                const value = evt.target?.value || "";
                this.password = value;
            })
        }
    }

    render() {
        if (!this.shadowRoot) return
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./styles/class/Clases.css">
            <link rel="stylesheet" href="./styles/register/reg.css">

            <div class="containerCards">
            
                <div class = "title">
                    <h2> Register </h2>
                </div>
                
                <div class="inputs">
                    <input id= "NameContInput" class = "InputBar" type="text" placeholder="Name">
                </div>
                
                <div class="inputs">
                    <input id= "UsernameContInput" class = "InputBar" type="text" placeholder="Username">
                </div>
                
                <div class="inputs">
                    <input id= "EmailContInput" class = "InputBar" type="email" placeholder="Email">
                </div>
                
                <div class="inputs">
                    <input id= "PasswordContInput" class = "InputBar" type="password" placeholder="Password">
                </div>
                
                <div class="inputs">
                    <button class ="InputBtn" type="submit">Send</button>
                </div>
                
            </div>
            `;
    }
}

customElements.define('reg-container', RegContainer);
export default RegContainer;
