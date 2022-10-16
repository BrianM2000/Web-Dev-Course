console.log("Hello, world!");

let div = document.querySelector(".container");

let newNode = document.createElement("p");
newNode.innerHTML = "DOM manipulation is <strong>super cool</strong>!";

div.appendChild(newNode);

let p2 = div.getElementsByTagName("p")[1];
div.removeChild(p2);