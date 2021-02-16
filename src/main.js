/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document
    .querySelector(".card")
    .classList.add("aqui va la funcion q retorna los tipos de carta");
  document.querySelector(".card").innerHTML =
    "aqui va la funcion q retorna el numero de carta";
};

//funcion para obtener numero carta

let generateRamdonNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};
//funcion para obtener tipos de carta

let generateRandomSuit = () => {
    let suit = ["diammon","heart","spade","club"]
}