class Players{

    #id;
    #first_name;
    #height_feet;
    #height_inches;
    #last_name;
    #position;
    #team;
    #weight_pounds;

    constructor(id, first_name, height_feet, height_inches, last_name, position, team, weight_pounds){

        this.#id = id;
        this.#first_name = first_name;
        this.#height_feet = height_feet;
        this.#height_inches = height_inches;
        this.#last_name = last_name;
        this.#position = position;
        this.#team = team;
        this.#weight_pounds = weight_pounds;
    }
}