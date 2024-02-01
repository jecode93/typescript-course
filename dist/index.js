"use strict";
//----------
// Tuples
//----------
let person = ['John', 20, true];
//---------------
// Tuples exapmle
//---------------
let hsla;
hsla = [200, '100%', '100%', 1];
let xy;
xy = [20, 20];
function useCoords() {
    const lat = 100;
    const long = 50;
    return [lat, long];
}
const [lat, long] = useCoords();
//---------------
// Named tuples
//---------------
let user;
user = ['John', 20];
