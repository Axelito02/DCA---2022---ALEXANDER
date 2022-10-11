class RegContainer extends HTMLElement {
    constructor() {
        super();
        this.name = "";
        this.username = "";
        this.email = "";
        this.password = "";
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        var _a, _b, _c, _d, _e;
        this.render();
        const btn = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('button');
        if (btn) {
            btn.addEventListener('click', () => {
                const event = new CustomEvent('new-user', {
                    detail: { name: this.name, username: this.username, email: this.email, password: this.password },
                    composed: true
                });
                this.dispatchEvent(event);
            });
            const NameContInput = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.getElementById('NameContInput');
            const UsernameContInput = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.getElementById('UsernameContInput');
            const EmailContInput = (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.getElementById('EmailContInput');
            const PasswordContInput = (_e = this.shadowRoot) === null || _e === void 0 ? void 0 : _e.getElementById('PasswordContInput');
            NameContInput === null || NameContInput === void 0 ? void 0 : NameContInput.addEventListener('change', (evt) => {
                var _a;
                const value = ((_a = evt.target) === null || _a === void 0 ? void 0 : _a.value) || "";
                this.name = value;
            });
            UsernameContInput === null || UsernameContInput === void 0 ? void 0 : UsernameContInput.addEventListener('change', (evt) => {
                var _a;
                const value = ((_a = evt.target) === null || _a === void 0 ? void 0 : _a.value) || "";
                this.username = value;
            });
            EmailContInput === null || EmailContInput === void 0 ? void 0 : EmailContInput.addEventListener('change', (evt) => {
                var _a;
                const value = ((_a = evt.target) === null || _a === void 0 ? void 0 : _a.value) || "";
                this.email = value;
            });
            PasswordContInput === null || PasswordContInput === void 0 ? void 0 : PasswordContInput.addEventListener('change', (evt) => {
                var _a;
                const value = ((_a = evt.target) === null || _a === void 0 ? void 0 : _a.value) || "";
                this.password = value;
            });
        }
    }
    render() {
        if (!this.shadowRoot)
            return;
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
