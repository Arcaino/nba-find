import GamesController from '../controllers/GamesController.js';
import options from '../environments/environments.js';
import GamesList from '../models/GamesList.js';

class FreenbaAPI{

	#listaGames;
	#game;

	constructor(){

		this.#listaGames = new GamesList();
		this.#game = new GamesController();
	}

	getGames(){

		fetch('https://free-nba.p.rapidapi.com/games?page=0&per_page=25', options)
		.then(response => response.json())
		.then(response => {
			response.data.map(game => {

				this.#listaGames.add(this.#game.add(game));
			});
		})
		.catch(err => console.error(err));
	}
}

export default FreenbaAPI;
