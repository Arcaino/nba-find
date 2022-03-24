import GamesResults from '../components/games-results/GamesResults.js'

class GamesPage extends HTMLElement{

    constructor(){
        super();

        this.render();
    }

    render(){

        const shadow = this.attachShadow({ mode: 'open' });                    

        shadow.appendChild(this.html());
    }

    html(){
        
        const gameTab = document.createElement('games-results');

        return gameTab;
    }


}

customElements.define('games-page', GamesPage);