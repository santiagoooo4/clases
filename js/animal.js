export default class Animal {
    constructor (name, age, specie){
        this.name = name;
        this.age = age;
        this.specie = specie;
    }
    move(){
        return `${this.name} se mueve`;
    }
    speak(){
        return `${this.name} hace un ruido`;
    }
    eat(){
        return `${this.name} está comiendo`;
    }
}