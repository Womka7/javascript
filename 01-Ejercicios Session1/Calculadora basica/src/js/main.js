// Se realiza una calculadora de operaciones básicas 

// Se solicitan los datos por consola
let numberOne = Number(prompt("Enter the first number"))
let numberTwo = Number(prompt("Enter the second number"))

// Se realizan las operaciones y la division se redondea a dos cifras o general
const suma = numberOne + numberTwo
const resta = numberOne - numberTwo
const multiplicacion = numberOne * numberTwo
// const division = Math.round( numberOne / numberTwo)
const division = (numberOne / numberTwo).toFixed(2)

// Se imprimen los valores solicitados
console.group("Suma")
console.info(suma)
console.groupEnd()

console.group("Resta")
console.info(resta)
console.groupEnd()

console.group("Multiplicacion")
console.info(multiplicacion)
console.groupEnd()

console.group("Division")
console.info(division)
console.groupEnd()