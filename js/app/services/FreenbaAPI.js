import options from '../environments/environments.js';

class FreenbaAPI{

	async getGamesRequest(page){

		return fetch(`https://free-nba.p.rapidapi.com/games?page=${page}&per_page=25`, options)
		.then(response => response.json())
		.then(response => response)
		.catch(err => console.error(err));
	}
}

export default FreenbaAPI;
