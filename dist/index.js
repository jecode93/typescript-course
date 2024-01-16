"use strict";
//------------
// Types guards
//------------
function swapIdType(id) {
    if (typeof id === 'string') {
        // can use string methods
        return parseInt(id);
    }
    else {
        // can use anything specific to numbers
        return id.toString();
    }
}
const idOne = swapIdType(1);
const idTwo = swapIdType('7');
console.log(idOne, idTwo);
function logDetails(value) {
    if (value.type === 'user') {
        console.log(value.email, value.username);
    }
    else {
        console.log(value.firstName, value.age);
    }
}
