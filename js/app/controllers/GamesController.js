import Games from "../models/Games.js";
import GamesList from "../models/GamesList.js";
import FreenbaAPI from "../services/FreenbaAPI.js";
import GamesResults from "../views/components/games-results/GamesResults.js";

class GamesController{

    #api;
    #gamesResults;

    constructor(){

        this.#api = new FreenbaAPI();
        this.gamesList = new GamesList();               
    }

    add(game){

        return new Games(
            game.id,
            game.date,
            game.home_team,
            game.home_team_score,
            game.period,
            game.postseason,
            game.season,
            game.status,
            game.time,
            game.visitor_team,
            game.visitor_team_score
        )
    }

    async getGames(){
        
        try{

            const games = await this.#api.getGamesRequest();  
            games.data.forEach(game => {
    
                this.gamesList.add(this.add(game));                    
            })            
        }
        catch(error){

            console.log(error);
        }        
    }
}

export default GamesController;