/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".card").innerHTML = generateRamdonNumber();
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
  let suit = ["diammond", "heart", "spade", "club"];
  let indexSuits = Math.floor(Math.random() * suit.length);
  return suit[indexSuits];
};
