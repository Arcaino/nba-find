import GamesController from '../../controllers/GamesController.js';
import FeaturedResults from '../components/shared/featured-results/FeauredResults.js';
import PaginationComponent from "../components/shared/pagination-component/PaginationComponent.js";

class GamesPage extends HTMLElement{

    #paginationComponent;
    #gamesController;
    #featuredResult;
    #gameTab;

    constructor(){
        super();
    
        this.#gamesController = new GamesController();
        this.render();
        
    }

    render(){

        const shadow = this.attachShadow({ mode: 'open' });                    

        shadow.appendChild(this.html());
    }

    html(){
        
        this.#gameTab = document.createElement('div');
        this.#gameTab.classList.add('games-page');   
        this.#gameTab.appendChild(this.#featuredResult = new FeaturedResults());

        return this.#gameTab;
    }


}

customElements.define('games-page', GamesPage);