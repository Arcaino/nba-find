import GamesController from "../../../../controllers/GamesController.js";
import GamesResults from "../../../../views/components/shared/games-results/GamesResults.js";

class FeaturedResults extends HTMLElement{

    #gamesController;
    #gamesResults;

    constructor(){

        super();
        this.#gamesController = new GamesController();        
        this.#gamesController.getGames().then(() => this.render());     
    }

    render(){

        const shadow = this.attachShadow({ mode: 'open' })
        shadow.appendChild(this.style());
        shadow.appendChild(this.html(this.#gamesController.gamesList));        
    }

    style(){

        const style = document.createElement('style');
        style.textContent = `
            .featured-results{
                width: 50%;
                margin: 0 auto;
            }
        `;
        return style;
    }

    html(model){

        const featuredResults = document.createElement('div');
        featuredResults.classList.add('featured-results');
        const createGameResultList = (_, index) => {

            featuredResults.appendChild(
                
                this.#gamesResults = new GamesResults(model.gamesList[index]) 
            );
        }

        Array.from({length: model.gamesList.length}, createGameResultList)

        return featuredResults;
    }
}

customElements.define('featured-results', FeaturedResults);

export default FeaturedResults;