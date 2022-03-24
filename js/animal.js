class Animal {
    constuctor(name, edad, specie) {
        this.name = name;
        this.edad = edad;
        this.specie = specie;
    }
    move(){
        console.log(`${this.animal} se mueve`);
        console.log(`${this.animal} hace un ruido`)
    }

}