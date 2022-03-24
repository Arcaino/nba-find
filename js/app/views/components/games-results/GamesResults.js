class GamesResults extends HTMLElement{

    constructor(){

        super();
        this.render();
    }

    render(){
        const shadow = this.attachShadow({ mode: 'open' })

        shadow.appendChild(this.styles());
        shadow.appendChild(this.html());
    }

    styles(){

        const style = document.createElement('style');
        style.textContent = `
            .games-results{
                background-color: #f00;
            }
        `

        return style;
    }

    html(){

        const gameTab = document.createElement('div');
        gameTab.classList.add('games-results');
        gameTab.innerHTML = `<div>bloco de jogo</div>`

        return gameTab;
    }

    createElement(){

        return document.createElement('games-results');
    }
}

customElements.define('games-results', GamesResults);

export default GamesResults