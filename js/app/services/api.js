const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
		'X-RapidAPI-Key': '60ba8bdcf3msh3dc0cf9fd323af6p1759f3jsn6b4c864283c9'
	}
};

fetch('https://free-nba.p.rapidapi.com/games?page=0&per_page=25', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));