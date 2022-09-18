import './src/components/index.js'
import data from './data.js'

class MainContainer extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
        console.log(data.length);
    }
    connectedCallback(){
        this.render()
    }

    render(){
        const compts = data.map(({ username, comment_count, likes, date, img}) => `<post-container username=${username} comment_count=${comment_count} likes=${likes} date=${date} img=${img}></post-container>`)
        console.log(compts);
        this.shadowRoot.innerHTML = compts.join("")
    }
}

customElements.define("main-container", MainContainer)
