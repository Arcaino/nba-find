import GamesController from '../../controllers/GamesController.js';
import FeaturedResults from '../core/FeauredResults.js';

class GamesPage extends HTMLElement{

    #gamesController;

    constructor(){
        super();

        this.render();
        this.#gamesController = new GamesController();
        this.#gamesController.getGames();
    }

    render(){

        const shadow = this.attachShadow({ mode: 'open' });                    

        shadow.appendChild(this.html());
    }

    html(){
        
        const gameTab = document.createElement('featured-results');

        return gameTab;
    }


}

customElements.define('games-page', GamesPage);