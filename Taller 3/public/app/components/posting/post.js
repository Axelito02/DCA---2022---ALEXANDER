var Atributtes;
(function (Atributtes) {
    Atributtes["username"] = "username";
    Atributtes["like"] = "like";
    Atributtes["comment"] = "comment";
})(Atributtes || (Atributtes = {}));
class ContainerPost extends HTMLElement {
    constructor() {
        super();
        this.username = '';
        this.like = '';
        this.comment = '';
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
        
        <!-- content posting cards-->
        <div class="posting">
            <div class="mainCard">
                <div class="top">
                    <div class="top1">
                        <div class="imgProfile">
                            <img src="./src/img/profile/bienestaru_icesi.jpg">
                        </div>
                        <div class="username">
                            <h4>
                                ${this.username}
                            </h4>
                        </div>
                    </div>

                    <div class="points">
                        <img src="./src/img/icons/more.png">
                    </div>
                </div>

                <div class="imgPost">
                    <img src="./src/img/post/1.jpg">
                </div>

                <div class="containerBtnActions">
                    <div class="btnaction">
                        <div class="btn1">
                            <img src="./src/img/icons/like.png">
                        </div>
                        <div class="btn">
                            <img src="./src/img/icons/chat.png">
                        </div>
                        <div class="btn">
                            <img src="./src/img/icons/send.png">
                        </div>
                    </div>
                    <div class="btnSave">
                        <div class="btn">
                            <img src="./src/img/icons/save.png">
                        </div>
                    </div>
                </div>
                <div class="ContLike">
                    <div>
                        <h4>${this.like}likes</h4>
                    </div>
                    <div>
                        <h4>${this.username}</h4>
                    </div>
                    <div>
                        <h4>see the ${this.comment} comments</h4>
                    </div>
                    <div>
                        <h4>1 on hour ago</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
    }
}
customElements.define('post-container', ContainerPost);
export default ContainerPost;
