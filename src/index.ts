//----------
// Tuples
//----------

let person: [string, number, boolean] = ['John', 20, true]

//---------------
// Tuples exapmle
//---------------

let hsla: [number, string, string, number]
hsla = [200, '100%', '100%', 1]

let xy: [number, number]
xy = [20, 20]

function useCoords(): [number, number] {
  const lat = 100
  const long = 50
  
  return [lat, long]
}

const [lat, long] = useCoords()

//---------------
// Named tuples
//---------------

let user: [name: string, age: number]

user = ['John', 20]
