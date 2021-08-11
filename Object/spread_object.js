const profile= {
    name: 'Pawornwan',
    music: 'Classic'
}

const newProfile = {
    ...profile,
    age: 21,
    music: 'Pop'
}

console.log('newProfile: ', newProfile)

//--------------------------------------

const profile2= {
    name: 'Pawornwan',
    music: 'Classic'
}

// const newProfile2 = profile2 // same addres
const newProfile2 = { ...profile2 }

newProfile2.age = 21

console.log('newProfile2: ', newProfile2)
console.log('profile2: ', profile2)