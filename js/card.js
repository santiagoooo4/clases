import Animal from "./animal.js";

export default class CardAnimal extends Animal {
    constructor(imagen, name, age, specie) {
        super(name, age);
        this.imagen = imagen;
        this.specie = specie;
    }
    newCard(){
        return `
        <div class="cardAnimal">
            
            <h3>
                ${this.name}
            </h3>
            <img src="${this.imagen}">
            
            <p>
                soy un ${this.specie} y tengo ${this.age} años
            </p>
            <button class="buttonHambre">tengo hambre</button>
        </div>
        `
    }
}