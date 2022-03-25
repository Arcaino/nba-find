import FeaturedResults from '../core/FeauredResults.js';

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
        
        const gameTab = document.createElement('featured-results');

        return gameTab;
    }


}

customElements.define('games-page', GamesPage);