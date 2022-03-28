import GamesController from "../../../../controllers/GamesController.js";
import GamesResults from "../../../../views/components/shared/games-results/GamesResults.js";
import PaginationComponent from "../pagination-component/PaginationComponent.js";

class FeaturedResults extends HTMLElement{

    #gamesController;
    #gamesResults;
    #paginationComponent;

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
            
            .featured-results__title{

                font-family: 'Roboto', sans-serif;
                font-size: 1.5rem;
                margin: .5rem 0;
            }
        `;
        return style;
    }

    html(model){

        const featuredResults = document.createElement('div');
        featuredResults.classList.add('featured-results');

        featuredResults.innerHTML = `

            <h1 class="featured-results__title">Featured results</h1>
        `;

        const createGameResultList = (_, index) => {

            featuredResults.appendChild(
                
                this.#gamesResults = new GamesResults(model.gamesList[index]) 
            );
        };

        Array.from({length: model.gamesList.length}, createGameResultList);

        featuredResults.appendChild(this.#paginationComponent = new PaginationComponent(this.#gamesController.apiResponse.meta));

        return featuredResults;
    }
}

customElements.define('featured-results', FeaturedResults);

export default FeaturedResults;