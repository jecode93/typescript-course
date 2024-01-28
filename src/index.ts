//----------
// Any type
//----------

let age: any
let title

age = 29
age = 'John'
age = false

title = 25
title = {
  hello: 'World'
}

//----------
// Any type in arrays
//----------

const things: any[] = ['John', 25, true, null]

things.push({id: 123})

//---------------
// Function & any
//---------------

function addTogether(value: any): any {
  return value + value
}

const resultOne = addTogether('Hello')
const resultTwo = addTogether(7)

console.log(resultOne);
console.log(resultTwo);
