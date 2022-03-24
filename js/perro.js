import Animal from "./animal.js";
export default class Perro extends Animal{
    constructor(name, age, race, sex){
        super(name, age);
        this.race = race;
        this.sex = sex;
    }
    ladrar(){
        return `${this.name} está ladrando`;
    }

}