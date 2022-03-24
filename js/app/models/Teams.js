class Teams{

    #id;
    #abbreviation;
    #city;
    #conference;
    #division;
    #full_name;
    #name;

    constructor(id, abbreviation, city, conference, division, full_name, name){

        this.#id = id;
        this.#abbreviation = abbreviation;
        this.#city = city;
        this.#conference = conference;
        this.#division = division;
        this.#full_name = full_name;
        this.#name = name;
    }
}