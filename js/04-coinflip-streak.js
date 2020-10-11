"use strict";

var coinFlip;

do {
    coinFlip = Math.random();
    window.console.log("coinflip value " + coinFlip);
    if (coinFlip > 0.5) {
        coinFlip = Math.ceil(coinFlip);
    } else {
        coinFlip = Math.floor(coinFlip);
    }
    //window.console.log("<br>");
    if (coinFlip === 0) {
        coinFlip = "Heads";
    } else if (coinFlip === 1) {
        coinFlip = "Tails";
    }
    window.console.log(coinFlip);
} while (coinFlip !== "Tails");