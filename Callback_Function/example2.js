function greeting(name) {
    console.log(`Hello ${name}, welcome to Pug Land!`)
}

function introduction(firstName, lastName, callback) {
    const fullName = `${firstName} ${lastName}`;

    callback(fullName); //จะไม่ทำงานจนกว่าเราจะเรียก introduction()
}

introduction('Pawornwan', 'Sriprathung', greeting);