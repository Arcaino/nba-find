import Games from "../models/Games.js";

class GamesController{

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
}

export default GamesController;