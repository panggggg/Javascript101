const firstName = 'Pawornwan'
const lastName = 'Sriprathung'
const age = 21

// ถ้า key กับ value เหมือนกันสามารถลดให้เหลือแค่ key ได้
const profile = {
    firstName,
    lastName,
    age
}

// const profile = {
//     firstName: firstName,
//     lastName: lastName,
//     age: age
// }

console.log('Profile', profile)

console.log('Name: ' ,profile.firstName)
console.log('Name: ' ,profile['firstName'])

//----------------------------------------------
// one -> 1
// two -> 2
// three -> 3
// four -> 4

const text = 'two'

const convertNumber = text => {
const convert = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4
}

return convert[text]

}

// old
// const convertNumber = text => {
//     
//     if(text === 'one'){
//         return 1
//     }
//     if(text === 'two'){
//         return 2
//     }
//     if(text === 'three'){
//         return 3
//     }
//     if(text === 'four'){
//         return 4
//     }
//     return undefined
// }

const result = convertNumber(text)
console.log('Result: ', result)