//-------------
// Type aliases
//-------------


// example 1 - tuple

type Rgb = [number, number, number]

function getRamdomColor(): Rgb {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255);
  
  return [r, g, b]
}

const colorOne = getRamdomColor()
const colorTwo = getRamdomColor()
console.log(colorOne, colorTwo);

// example 2 - object literals

interface User {
  name: string
  score: number
}

const userOne: User = {
  name: 'John',
  score: 10
} 

function formatUser(user: User): void {
  console.log(`${user.name} has a score of ${user.score}`);
}

formatUser(userOne)
formatUser({ name: 'Yahoo', score: 7})