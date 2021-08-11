const number = [1, 2, 3, 4]

const newNumber = [...number, 5] // copy array

console.log('newNumber: ', newNumber)

//----------------------------------------------

const array_number = [1, 2, 3, 4, 5]
const new_array_number = array_number // same address

new_array_number.push(8)

console.log('array_number: ', array_number) //[ 1, 2, 3, 4, 5, 8 ] 
console.log('new_array_number: ', new_array_number) //[ 1, 2, 3, 4, 5, 8 ] 