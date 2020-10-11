"use strict";

var number1;
var number2;

number1 = parseInt(window.prompt("Enter the first integer"), 10);
number2 = parseInt(window.prompt("Enter the second integer"), 10);

if (number1 > number2) 
    {
    window.document.write("The larger integer is " + number1);
    } 
else if (number2 > number1) 
    {
    window.document.write("The larger integer is " + number2);
    } 
else 
    {
    window.document.write("Both integers are equal.");
    }