import { addUser } from "../../DataBase/DataBase.js"

class LogContainer extends HTMLElement {
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

                const event: CustomEvent<{ email: string, password: string }> = new CustomEvent('log-user', {
                    detail: { email: this.email, password: this.password },
                    composed: true
                });

                this.dispatchEvent(event);
            });

            const EmailContInput = this.shadowRoot?.getElementById('EmailContInput')
            const PasswordContInput = this.shadowRoot?.getElementById('PasswordContInput')

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
                    <h2> Sing in </h2>
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

customElements.define('log-container', LogContainer);
export default LogContainer;
