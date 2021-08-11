class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

const result = new Person('Pawornwan', 'Sriprathung');
const name = result.getFullName();

console.log(name)