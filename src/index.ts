//------------
// Types guards
//------------

type Id = number | string

function swapIdType(id: Id) {
  if (typeof id === 'string') {
    // can use string methods
    return parseInt(id)
  } else {
    // can use anything specific to numbers
    return id.toString()
  }
}

const idOne = swapIdType(1)
const idTwo = swapIdType('7')

console.log(idOne, idTwo);

//------------------
// Tagged interfaces
//------------------

interface User {
  type: 'user'
  username: string
  email: string
  id: Id
}

interface Person {
  type: 'person'
  firstName: string
  age: number
  id: Id
}

function logDetails(value: User | Person): void {
  if (value.type === 'user') {
    console.log(value.email, value.username);
  } else {
    console.log(value.firstName, value.age)
  }
}
