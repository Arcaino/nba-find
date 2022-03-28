import Games from "../models/Games.js";
import GamesList from "../models/GamesList.js";
import FreenbaAPI from "../services/FreenbaAPI.js";

class GamesController{

    #api;

    constructor(){

        this.#api = new FreenbaAPI();
        this.gamesList = new GamesList();   
        this.apiResponse;            
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

    async getGames(page){
        
        try{

            this.apiResponse = await this.#api.getGamesRequest(page);  
            this.apiResponse.data.forEach(game => {
    
                this.gamesList.add(this.add(game));                 
            })       
        }
        catch(error){

            console.log(error);
        }        
    }
}

export default GamesController;