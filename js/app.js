import Header from "./header.js";
let header = document.querySelector("#myHeader");
let myHeader = new Header("LoGo");
header.innerHTML = myHeader.render();