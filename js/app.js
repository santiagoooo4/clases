import Header from "./header.js";
import Animal from "./animal.js";
import Gato from "./gato.js";
import Perro from "./perro.js";
import CardAnimal from "./card.js";
import Card from "./card.js"

let header = document.querySelector("#myHeader");
let myHeader = new Header("LoGo");
header.innerHTML = myHeader.render();

// let insertCard1 = document.querySelector(".cards");
let card1 = new CardAnimal("./img/tomas.jpg", "Tomás", 12, "Perro");
// insertCard1.innerHTML = card1.newCard();

let card2 = new CardAnimal("./img/koshka.jpg", "Koshka", 3, "Gato");

card1.newCardMejorada();
card2.newCardMejorada();
card1.newCardMejorada();
card2.newCardMejorada();
card1.newCardMejorada();
card2.newCardMejorada();


// let insertCard2 = document.querySelector(".cards");
// insertCard2.innerHTML = card2.newCard();

let gato1 = new Gato("koshca", 3, "mix", "hembra");
gato1.miau();
console.log(gato1.eat());

let perro1 = new Perro("tomás", 12, "maltese", "macho");
console.log(perro1.ladrar());
console.log(perro1.speak());