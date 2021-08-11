const number = [1, 2, 3, 4]

const [number1, number2, number3 , number4] = number

console.log("number 1", number1)
console.log("number 2", number2)
console.log("number 3", number3)
console.log("number 4", number4)

//-------------------------------------------------

const display = ([num1, num2, num3, num4]) => {
    console.log("number 1", num1)
    console.log("number 2", num2)
    console.log("number 3", num3)
    console.log("number 4", num4)
}

display([1, 2, 3, 4])

//-------------------------------------------------

const fetchapi = (endpoint) => {
    return [
        {name: 'Pawornwan'},
        200
    ]
}

const [result, statusCode] = fetchapi('https:google.co.th')
console.log('Name: ', result)
console.log('StatusCode: ', statusCode)

// old
// const response = fetchapi('https://google.co.th')
// const result = response[0]
// const statusCode = response[1]
// console.log('Name: ', result)
// console.log('StatusCode: ', statusCode)