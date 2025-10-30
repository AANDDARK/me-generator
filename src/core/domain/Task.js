import generator from "../../scripts/generator-questions/main";

export default class Task{
    #text;
    /**
     * 
     * @param {function} canable 
     */
    constructor(canable){
        this.#text = generator();
        if(!canable()){
            throw new Error("this is not canable")
        }
    }
}