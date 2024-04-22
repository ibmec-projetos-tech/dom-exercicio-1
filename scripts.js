// Ex 1
const demo = document.getElementById("demo");
demo.innerHTML = "Olá Mundo!"

// Ex 2
const red = document.getElementsByClassName("box")[0];
console.log(red)
red.style.backgroundColor = "#FF0000";

// Ex 3
const image = document.getElementsByTagName("img")[0];
image.src = "nova-imagem.png"

// Ex 4
const parent = document.getElementById("lista");
const newChild = document.createElement("li");
newChild.innerHTML = "Novo Item";
parent.appendChild(newChild)