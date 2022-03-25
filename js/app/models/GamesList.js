class GamesList{

    #gamesList;

    constructor(){

        this.#gamesList = [];
    }

    add(game){

        this.#gamesList.push(game);
    }

    get gamesList(){

        return this.#gamesList;
    }
}

export default GamesList;