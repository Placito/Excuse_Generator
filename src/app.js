/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  let randomNumber = Math.random() * 10;
  document.querySelector('^#theExcuse').innerHTML = randomNumber;
};
