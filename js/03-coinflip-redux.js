/*jslint node: true */
"use strict";

var coinFlip;
var i;

for (i = 1; i <= 10; i += 1) {
    coinFlip = Math.random();
    if (coinFlip > 0.5) {
        coinFlip = Math.ceil(coinFlip);
    } else {
        coinFlip = Math.floor(coinFlip);
    }
    if (coinFlip === 0) {
        window.console.log("Heads" + "<br>");
    } else if (coinFlip === 1) {
        window.console.log("Tails" + "<br>");
    }
}

