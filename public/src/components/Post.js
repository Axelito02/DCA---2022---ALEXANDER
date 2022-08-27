class Post extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
        this.render()
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel ="stylesheet" href="/src/styles/style.css">
        <div id="main">
        <div id="card">
            <div id="top">
                <div class="userName">
                    <div class="profile">
                        <a href="https://www.instagram.com/avogado6_jp/" target="_blank">
                            <img src="./src/imgs/Profile.jpg" class="PfImg">
                    </div>
                    <h4>avogado_6jp</h4>
                        </a>
                    </div>
                <div>
                    <img src="./src/imgs/dot.png" class="PfImg2">
                </div>
            </div>
            <div class="ImgPost">
                    <img src="./src/imgs/avogado.jfif" class="PfImg">
            </div>
            <div class="actionBtn">
                <div class="left">
                    <img src="./src/imgs/heart.png" class="likeBtn" id="likeBtn">
                    <img src="./src/imgs/comment.png">
                    <img src="./src/imgs/share.png">
                </div>
                <div class="right">
                    <img src="./src/imgs/bookmark.png">
                </div>
            </div>
            <h3 class="like">84,590 Me gusta</h3>
            <h3 class="userCm">avogado_6jp</h3>
        </div>
    </div>
        `
    }
}

customElements.define("main-container", Post)
