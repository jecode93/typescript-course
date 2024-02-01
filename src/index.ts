//------------
// Union types
//------------

let someId: number | string

someId = 1
someId = 'Hello'

let email: string | null = null

email = 'jhon@doe.dev'
email = null

type Id = number | string
let anotherId: Id

anotherId = 'Good'
anotherId = 7

