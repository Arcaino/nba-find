import options from '../environments/environments.js';

class FreenbaAPI{

	getGamesRequest(){

		return fetch('https://free-nba.p.rapidapi.com/games?page=0&per_page=25', options)
		.then(response => response.json())
		.then(response => response)
		.catch(err => console.error(err));
	}
}

export default FreenbaAPI;
