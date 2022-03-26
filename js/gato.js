import Animal from "./animal.js";
export default class Gato extends Animal{
    constructor(name, age, race, sex){
        super(name, age);
        this.raza = race;
        this.sexo = sex;
    }
    miau(){
        return `${this.name} hace miauww`;
        // console.log(`${this.name} hace miauww`);
    }
}