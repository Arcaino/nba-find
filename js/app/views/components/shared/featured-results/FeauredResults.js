import GamesController from "../../../../controllers/GamesController.js";
import GamesResults from "../../../../views/components/shared/games-results/GamesResults.js";
import PaginationComponent from "../pagination-component/PaginationComponent.js";

class FeaturedResults extends HTMLElement{

    #gamesController;
    #gamesResults;    
    #paginationComponent;
    #featuredResults;
    #gameList;
    #shadow;

    constructor(page = 1){

        super();
        this.#gamesController = new GamesController();
        this.#gamesController.getGames(page).then(() => this.render());     
    }

    render(){

        this.#shadow = this.attachShadow({ mode: 'open' })
        this.#shadow.appendChild(this.style());
        this.#shadow.appendChild(this.html(this.#gamesController.gamesList)); 
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

        this.#featuredResults = document.createElement('div');
        this.#featuredResults.classList.add('featured-results');

        this.#featuredResults.innerHTML = `

            <h1 class="featured-results__title">Featured results</h1>
        `;

        this.createGameResultList(model);

        this.#paginationComponent = new PaginationComponent(this.#gamesController.apiResponse.meta);
        this.#featuredResults.appendChild(this.#paginationComponent);  

        this.changePage();

        return this.#featuredResults;
    }

    createGameResultList(model){

        const createGameResultList = (_, index) => {

            this.#featuredResults.appendChild(
                
                this.#gamesResults = new GamesResults(model.gamesList[index]) 
            );
        };

        Array.from({length: model.gamesList.length}, createGameResultList);
    }

    changePage(){

        let pageButtons = this.#featuredResults.querySelector('pagination-component').shadowRoot.querySelectorAll('.pagination-component__pages__button');

        pageButtons.forEach(item => {
            item.addEventListener('click', () => {

                this.#gamesController = new GamesController();
              
                this.#gamesController.getGames(item.innerHTML).then(() => {
                    
                    this.#shadow.querySelector('.featured-results').remove();
                    this.#shadow.appendChild(this.style());
                    this.#shadow.appendChild(this.html(this.#gamesController.gamesList)); 
                });                                 
            });
        });
    }
}

customElements.define('featured-results', FeaturedResults);

export default FeaturedResults;