//Function declaration syntax
function sum(number1, number2) {
    return number1 + number2
}

//Function expression syntax
const sum = function(number1, number2) {
    return number1 + number2
}

//Arrow Function
const sum = (number1, number2) => {
    return number1 + number2
}

const sum = (number1, number2) => number1 + number2

const sum = number => number * 2 //ถ้ารับมาค่าเดียวไม่ต้องใส่วงเล็บได้

const sum = number => ({number: number}) // ถ้า return เป็น obj ต้องใส่วงเล็บ

// การใช้ .this
const obj = {
    text: 'object',
    print() {
        console.log(this.text)
    },
    waitOneSecBeforePrinting() {
        setTimeout(
            function() {
                console.log(this.text) //object
                1000
            }
        )
    }
}