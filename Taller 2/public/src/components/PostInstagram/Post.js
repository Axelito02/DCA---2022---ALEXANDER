class Post extends HTMLElement {
    static get observedAttributes(){
        return["username", "comment_count", "likes", "date", "img"]
    }
    constructor(){
        super()
        this.attachShadow({mode: 'open'})

        // agregar la funcion que creamos abajo
        this.traerDatos();
    }

// funcion creado para traer los datos de la base de datos
    traerDatos() {
        //todo lo de firebase

        // snapshop.data siempre va porque es un  propiedad de la base de datos
        // this.datos = snapshot.data()

        // otra maneera de traer los datos
        // return datos = snapshot.data()

    }

    attributeChangedCallback(prop, oldValue, newValue){
        this[prop] = newValue;
        this.render()
    }

    connectedCallback(){
        this.render()
        const likeF= this.shadowRoot.getElementById("likeBtn")
        likeF.addEventListener('click',() => {
            console.log('likes por fin')
            if (likeF.src= "./src/imgs/heart.png") {
                likeF.src = "./src/imgs/heart_red.png"
            }
        })
        
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
                        <h4>${this.username}</h4>
                            </a>
                        </div>
                    <div>
                        <img src="./src/imgs/dot.png" class="PfImg2">
                    </div>
                </div>
                <div class="ImgPost">
                        <img src="${this.img}" class="PfImg">
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
                <h3 class="like">${this.likes} Likes</h3>
                <h3 class="userCM">${this.username}</h3>
                <h3 class="CmLike"> View all ${this.comment_count} comments</h3>
                <h3 class="date">${this.date} DAYS AGO</h3>
                 
            </div>
         </div>
        `
    }
}

customElements.define("post-container", Post)

export default Post
