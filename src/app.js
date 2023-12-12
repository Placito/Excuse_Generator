/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#theExcuse").innerHTML = generateExcuse();
  });
};

//function for the excuses
let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["jogger", "racoon", "dog", " driver", "comedian", "pincone"];
  let action = ["took my", "yelled at my", "stole my", "eat my"];
  let possetion = ["homework", "toe", "car", "shoe"];
  let where = ["on the street", "in my house", "in my drive way"];

  // varibles with the random parts of the excuse, you use Math.floor for have an integer number and Math.random() to have mixed index's
  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subIndex = Math.floor(Math.random() * subject.length);
  let acIndex = Math.floor(Math.random() * action.length);
  let posIndex = Math.floor(Math.random() * possetion.length);
  let wheIndex = Math.floor(Math.random() * where.length);

  let excuse = `${pronoun[proIndex]} ${subject[subIndex]} ${action[acIndex]} ${possetion[posIndex]} ${where[wheIndex]}`;
  return excuse;
};
