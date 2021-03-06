class Games{

    #id;
    #date;
    #home_team;
    #home_team_score;
    #period;
    #postseason;
    #season;
    #status;
    #time;
    #visitor_team;
    #visitor_team_score;

    constructor(id, date, home_team, home_team_score, period, postseason, season, status, time, visitor_team, visitor_team_score){

        this.#id = id;
        this.#date = date;
        this.#home_team = home_team;
        this.#home_team_score = home_team_score;
        this.#period = period;
        this.#postseason = postseason;
        this.#season = season;
        this.#status = status;
        this.#time = time;
        this.#visitor_team = visitor_team;
        this.#visitor_team_score = visitor_team_score;
    }

    get date(){

        return this.#date;
    }

    get home_team(){

        return this.#home_team;
    }

    get home_team_score(){

        return this.#home_team_score;
    }

    get season(){

        return this.#season;
    }

    get visitor_team(){

        return this.#visitor_team;
    }

    get visitor_team_score(){

        return this.#visitor_team_score;
    }
}

export default Games;