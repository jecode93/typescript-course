"use strict";
//------
// Arrays
//------
let names = ['John', 'Doe', 'Nene', 'Mario'];
let ages = [25, 26, 27];
names.push('Mido');
ages.push(28);
//------------------------------------
// Type inference with Arrays
//------------------------------------
let fruits = ['Apple', 'Mangos', 'Bananas'];
let people = [10, 11, 12, 13];
fruits.push('Peaches');
people.push(14);
//---------------
// Object literals
//---------------
let user = {
    id: 1,
    firstName: 'Mario',
    age: 25
};
user.firstName = 'John';
user.age = 27;
user.id = 2;
//------------------------------------
// Type inference with object literals
//------------------------------------
let person = {
    name: 'Manno',
    score: 25
};
person.name = 'Johnny';
person.score = 26;
