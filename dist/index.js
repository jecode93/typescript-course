"use strict";
//----------
// Functions
//----------
function addTwoNumbers(a, b) {
    return a + b;
}
const substractTwoNmbers = (a, b) => {
    return a - b;
};
addTwoNumbers(5, 4);
substractTwoNmbers(10, 20);
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
addAllNumbers([5, 6, 7, 8, 9]);
//----------------------
// Return type inference
//----------------------
function formatGreating(name, greating) {
    return `${greating}, ${name}.`;
}
const result = formatGreating('John', 'Hello');
console.log(result);
