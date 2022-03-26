import Header from "./header.js";
import Animal from "./animal.js";
import Gato from "./gato.js";
import Perro from "./perro.js";

let header = document.querySelector("#myHeader");
let myHeader = new Header("LoGo");
header.innerHTML = myHeader.render();

let gato1 = new Gato("koshca", 3, "mix", "hembra");
gato1.miau();
console.log(gato1.eat());

let perro1 = new Perro("tomás", 12, "maltese", "macho");
console.log(perro1.ladrar());
console.log(perro1.speak());