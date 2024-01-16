//----------
// Functions
//----------

function addTwoNumbers(a: any, b: any): number {
  return a + b;
}

const substractTwoNmbers = (a: number, b: number): number => {
  return a - b;
}

addTwoNumbers(5, 4)
substractTwoNmbers(10, 20)

function addAllNumbers(items: number[]) {
  const total = items.reduce((a, c) => a + c, 0)
  console.log(total);
}

addAllNumbers([5, 6, 7, 8, 9])

//----------------------
// Return type inference
//----------------------

function formatGreating(name: string, greating: string) {
  return `${greating}, ${name}.`;
}

const result = formatGreating('John', 'Hello');
console.log(result);
