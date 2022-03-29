import GamesController from '../../controllers/GamesController.js';
import FeaturedResults from '../components/shared/featured-results/FeauredResults.js';
import SeasonFilter from '../components/shared/season-filter/SeasonFilter.js';

class GamesPage extends HTMLElement{

    #gamesController;
    #featuredResult;
    #seasonFilter;

    constructor(){
        super();
    
        this.#gamesController = new GamesController();
        this.render();
        
    }

    render(){

        const shadow = this.attachShadow({ mode: 'open' });                    

        shadow.appendChild(this.style());
        shadow.appendChild(this.html());
    }

    style(){

        const style = document.createElement('style');
        style.textContent = `
            .games-page{

                width: 100%;
                position: absolute;
                right: 0;
                top: 0;
            }
        `;

        return style;
    }

    html(){
        
        const gameTab = document.createElement('div');
        gameTab.classList.add('games-page');   
        gameTab.appendChild(this.#featuredResult = new FeaturedResults());
        gameTab.appendChild(this.#seasonFilter = new SeasonFilter());

        return gameTab;
    }


}

customElements.define('games-page', GamesPage);