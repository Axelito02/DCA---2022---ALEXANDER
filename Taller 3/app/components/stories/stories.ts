enum Atributtes {
    username = "username",
    comment = "comment",
    like = "like",
}

class ContainerStories extends HTMLElement{
    username = '';
    comment = '';
    like = '';

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
        
        <div class="containerContent">
        <div class="content">
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

            <div>
                <div class="profile">
                    <div class="contentProfile">
                        <div class="imgProfileMin">
                            <img src="./src/img/profile/a_r_v_132.jpg">
                        </div>
                        <div class="nameProfileMin">
                            <div class="username">
                                <h5>a_r_v_132</h5>
                            </div>
                            <div class="name">
                                <h5>Alexander Rueda Venegas</h5>
                            </div>
                        </div>
                        <div class="btnProfileMin">
                            <h6>Change</h6>
                        </div>
                    </div>
                </div>

                <div class="suggestion">
                    <div class="contentSuggestion">
                        <div class="titleSuggestion">
                            <h6>
                                suggestions for you
                            </h6>
                        </div>

                        <div class="contentmainSuggestProfile">
                            <div class="profileSuggestMin">
                                <div class="contentProfile">
                                    <div class="imgProfileMin">
                                        <img src="./src/img/profile/a_r_v_132.jpg" id="test">
                                    </div>
                                    <div class="nameProfileMin">
                                        <div class="username">
                                            <h5>a_r_v_132</h5>
                                        </div>
                                        <div class="name">
                                            <h5>Alexander Rueda Venegas</h5>
                                        </div>
                                    </div>
                                    <div class="btnProfileMin">
                                        <h6>Change</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('storie-container', ContainerStories)
export default ContainerStories;
