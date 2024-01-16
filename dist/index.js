"use strict";
//-------------
// Type aliases
//-------------
function getRamdomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRamdomColor();
const colorTwo = getRamdomColor();
console.log(colorOne, colorTwo);
const userOne = {
    name: 'John',
    score: 10
};
function formatUser(user) {
    console.log(`${user.name} has a score of ${user.score}`);
}
formatUser(userOne);
formatUser({ name: 'Yahoo', score: 7 });
