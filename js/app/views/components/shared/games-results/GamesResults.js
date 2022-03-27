import DateConverter from '../../../../helpers/DateConverter.js'

class GamesResults extends HTMLElement{

    #shadow;
    #game;

    constructor(game){
        super();        

        this.#game = game;
        this.render();
    }

    render(){
                
        this.#shadow = this.attachShadow({ mode: 'open' });
        this.#shadow.appendChild(this.styles());

        this.#shadow.appendChild(this.html(this.#game));     
        this.colorScore();   
    }

    styles(){

        const style = document.createElement('style');
        style.textContent = `

            .games-results{

                background-color: #f6f6f6;
                box-shadow: 0 1px 2px 0 rgba(50,50,50,.4);
                padding: .7rem;
                border-radius: .3rem;
                font-family: 'Roboto', sans-serif;
                font-size: 12px;
                margin: .5rem 0;
            }

            .results__table__info__homeTeam{
                text-align: right;
            }

            .results__table__info__score__homeTeamScore, .results__table__info__score__visitorTeamScore{
                
                font-weight: 700;
            }

            .results__table{
                width: 100%;
            }

            .results__table__info__score{
                padding: 0 1rem;
                width: 4rem;
            }

            .results__table__info__date{
                text-align: end;
                width: 30%;
            }

            .results__table__info__season{
                text-align: end;
                width: 10%;
            }
        `

        return style;
    }

    html(model){

        const gameTab = document.createElement('div');
        gameTab.classList.add('games-results');
        gameTab.innerHTML = `

            <table class="results__table">
                <tr class="results__table__info">
                    <td class="results__table__info__homeTeam">${model.home_team.full_name}</td>
                    <td class="results__table__info__score">
                        <span class="results__table__info__score__homeTeamScore">${model.home_team_score}</span>
                        <span class="results__table__info__score__separator">-</span>
                        <span class="results__table__info__score__visitorTeamScore">${model.visitor_team_score}</span>
                    </td>
                    <td class="results__table__info__visitorTeam">${model.visitor_team.full_name}</td>
                    <td class="results__table__info__season">${model.season}</td>
                    <td class="results__table__info__date">${DateConverter.dateStringToDateShortString(model.date)}</td>
                </tr>
            </table>
        `

        return gameTab;
    }

    colorScore(){

        let homeTeamScore = this.#shadow.querySelector('.results__table__info__score__homeTeamScore');
        let visitorTeamScore = this.#shadow.querySelector('.results__table__info__score__visitorTeamScore');

        if(parseInt(homeTeamScore.innerHTML) >= parseInt(visitorTeamScore.innerHTML)){

            homeTeamScore.style.color="#08a500";
            this.#shadow.querySelector('.results__table__info__homeTeam').style.fontWeight = "700";
            visitorTeamScore.style.color="#e40a0a";
        }else{

            homeTeamScore.style.color="#e40a0a";
            this.#shadow.querySelector('.results__table__info__visitorTeam').style.fontWeight = "700";
            visitorTeamScore.style.color="#08a500";
        }
    }
}

customElements.define('games-results', GamesResults);

export default GamesResults;