class LogContainer extends HTMLElement {
    constructor() {
        super();
        this.email = "";
        this.password = "";
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        var _a, _b, _c;
        this.render();
        const btn = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('button');
        if (btn) {
            btn.addEventListener('click', () => {
                const event = new CustomEvent('log-user', {
                    detail: { email: this.email, password: this.password },
                    composed: true
                });
                this.dispatchEvent(event);
            });
            const EmailContInput = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.getElementById('EmailContInput');
            const PasswordContInput = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.getElementById('PasswordContInput');
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
