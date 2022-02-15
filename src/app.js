/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let randomWho = Math.random() * 4;
  randomWho = Math.floor(randomWho);

  let action = ["eat", "pissed", "crushed", "broked"];
  let randomAction = Math.random() * 4;
  randomAction = Math.floor(randomAction);

  let what = ["My homework", "the keys", "the car"];
  let randomWhat = Math.random() * 3;
  randomWhat = Math.floor(randomWhat);

  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let randomWhen = Math.random() * 5;
  randomWhen = Math.floor(randomWhen);

  let excusa =
    who[randomWho] +
    " " +
    action[randomAction] +
    " " +
    what[randomWhat] +
    " " +
    when[randomWhen];

  console.log(excusa);

  document.getElementById("excuse").InnerHTML = excusa;
};
