// OLD
// const me = {
//     firstName: 'Pawornwan',
//     lastName: 'Sriprathung',
//     age: 21
// }

// const firstName = me.firstName
// const lastName = me.lastName
// const age = me.age

//-------------------------------------------

// ES6
// const profile = {
//     firstName: 'Pawornwan',
//     lastName: 'Sriprathung',
//     age: 21
// }

// const { firstName, lastName, age} = profile

// console.log(firstName)
// console.log(lastName)
// console.log(age)

//--------------------------------------------

// const profile2 = {
//     firstName: 'Peeranat',
//     lastName: 'Sriprathung',
//     age: 21
// }

// const firstName = 'Pawornwan'
// const { firstName: profileFirstName, lastName, age} = profile2

// console.log('Firstname: ', firstName)
// console.log('Profile Firstname: ', profileFirstName)
// console.log(lastName)
// console.log(age)

//---------------------------------------------


// ***JSON (snake case) -> JS (camel case)***

// const profile2 = {
//     firstName: 'Peeranat',
//     lastName: 'Sriprathung',
//     age: 21
// }

// // OLD
// // const firstName = profile2.first_name
// // const lastName = profile2.last_name
// // const age = profile2.age

// const {
//     first_name : firstName,
//     last_name: lastName,
//     age
// } = profile2


//----------------------------------------------

const profile = {
    name: 'Pawornwan Sriprathung',
    info: {
        age: 21,
        gender: 'female'
    }
}

const { name, info: { age, gender } } = profile

console.log('name: ', name)
console.log('info: ', profile.info)
console.log('age: ', age)
console.log('gender: ', gender)
