"use strict";

var coinFlip;
var choice;

coinFlip = Math.floor(Math.random() * 20);
window.console.log("coinFlip value is : " + coinFlip);

choice = window.prompt("Select either Heads or Tails");
choice = choice.toLowerCase();
window.console.log("User choice : " + choice);

if ((coinFlip < 10) === true) {
    coinFlip = "heads";
} else {
    coinFlip = "tails";
}
window.console.log("coinFlip(Heads/Tails) : " + coinFlip);
if ((coinFlip === "heads" && choice === "heads") === true) {
    window.alert("The flip was heads and you chose heads...you win!");
} else if ((coinFlip === "heads" && choice === "tails") === true) {
    window.alert("The flip was heads but you chose tails...you lose!");
} else if ((coinFlip === "tails" && choice === "heads") === true) {
    window.alert("The flip was tails but you chose heads...you lose!");
} else {
    window.alert("The flip was tails and you chose tails...you win!");
}

