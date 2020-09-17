console.log("Hello there,")
// let student = {
//     firstName: "Omar",
//     lastName: "Leon",
//     course: "Javascript"
// }

// let {firstName,lastName} = student

// console.log(firstName)

// objects are separated by curly braces {} arrays are separated by square brackets [] Destructring an object to let each key become its own variable ^

let fruits = ["apple", "banana", "grape"]

let student = [{
    firstName: "Omar",
    lastName: "Leon",
    course: "Javascript"
},
{   firstName: "Pat",
    lastName: "Belcher",
    course: "Javascript"
}]

console.log(student[1].firstName)


let subtotal = '13.23'
let taxRate = 0.07

let taxAmount = Number(subtotal) * Number(taxRate)
let total = Number(subtotal) + taxAmount

console.log(total.toFixed(2))

// 7%5 = 2 Modulus (remainder)
// += addition assignment x += 5   x=x+5
// -=
// ++ incriment  3++  = 4
// -- decrement 3--   = 2
// Comparisons
// <   ==  >   <=  >=  ==(comparison)  ===(exactly equal to)   !=(not equal)  !==(not exactly equal)    &&(and) ||(or)
// 2==3 is false
