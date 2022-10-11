import { addUser, queryUser } from "./DataBase/DataBase.js"
import "./import.js"

class AppContainer extends HTMLElement {
    registered:boolean = false;

    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.render()
        const log = this.shadowRoot?.querySelector('log-container');
        log?.addEventListener('log-user', (log) => {
            const email = log.detail.email;
            const password = log.detail.password;
            queryUser({email, password})
            })

        const reg = this.shadowRoot?.querySelector('reg-container');
        reg?.addEventListener('new-user', (add) => {
            const name = add.detail.name;
            const username = add.detail.username;
            const email = add.detail.email;
            const password = add.detail.password;
            addUser({ name, username, email, password }).then ( () => {
                this.registered = true;
                this.render();
            })
            
        })
    }

    render() {
        if (!this.shadowRoot) return

        if(this.registered) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./styles/class/Clases.css">
            <link rel="stylesheet" href="./styles/register/reg.css">

            <section class="Main">
                <log-container></log-container>
            </section>`
                 
        } else {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./styles/class/Clases.css">
            <link rel="stylesheet" href="./styles/register/reg.css">

                <section class="Main">
                    <reg-container></reg-container>
                </section>
            `;
        }

    }
}
customElements.define('app-container', AppContainer);
