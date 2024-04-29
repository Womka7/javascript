// Karina Pineda Parra
// Clan Dell
// 21/04/2024

// Verifica si un número es positivo.
// console.groupCollapsed("Ejercicio 1")
// let number = Number(prompt("Ingresa un número \n para saber si es positivo:"));
// if (number > 0) {
//     console.log(` ${number} Es positivo`)
// } else if (number < 0){
//     console.log(` ${number} Es negativo`)
// }else if(number == 0){
//     console.log(` ${number} Es cero`)
// }else{
//     console.log(` ${number} No es una entrada válida`)
// }
// console.groupEnd()

// // Verifica si un número es negativo.
// console.groupCollapsed(" Ejercicio 2")
// let numberN = Number(prompt("Ingresa un número \n para saber si negativo:"));
// if (numberN < 0) {
//     console.log(` ${numberN} Es negativo`)
// } else if (numberN > 0){
//     console.log(` ${numberN} Es positivo`)
// }else if(number == 0){
//     console.log(` ${number} Es cero`)
// }else{
//     console.log(` ${number} No es una entrada válida`)
// }
// console.groupEnd()

// // Comprueba si un número es par.
// console.groupCollapsed(" Ejercicio 3")
// let numeroPar = Number(prompt("Ingresa un número \n para saber si es par:"));
// if (numeroPar % 2 === 0) {
//     console.log(` ${numeroPar} Es par`)
// } else if(numeroPar % 2 !== 0) {
//     console.log(` ${numeroPar} Es impar`)
// }else{
//     console.log(` ${numeroPar} No es una entrada válida`)
// }
// console.groupEnd()

// // Comprueba si un número es impar.
// console.groupCollapsed(" Ejercicio 4")
// let numeroImpar = parseInt(prompt("Ingresa un número \n para saber si es impar:"));
// if (numeroImpar % 2 !== 0) {
//     console.log(` ${numeroImpar} Es impar`)
// } else if(numeroPar % 2 === 0) {
//     console.log(` ${numeroImpar} Es par`)
// }else{
//     console.log(` ${numeroPar} No es una entrada válida`)
// }
// console.groupEnd()

// // Determina si un número es múltiplo de 5.
// console.groupCollapsed("Ejercicio 5")
// let numeroMultiplo = parseInt(prompt("Ingresa un número para \n saber si es multiplo de 5:"));
// if (numeroMultiplo % 5 === 0) {
//     console.log(`${numeroMultiplo} es múltiplo de 5`)
// } else {
//     console.log(` ${numeroMultiplo}No es múltiplo de 5`)
// }
// console.groupEnd()

// // Verifica si un número es divisible entre 3.
// console.groupCollapsed("Ejercicio 6")
// let numeroDivisible = parseInt(prompt("Ingresa un número para  \n determinar si es divisible por 3:"));
// if (numeroDivisible % 3 === 0) {
//     console.log(`${numeroDivisible} es divisible entre 3`)
// } else {
//     console.log(`${numeroDivisible} No es divisible entre 3`)
// }
// console.groupEnd()

// // Ejercicio 7
// console.groupCollapsed("Ejercicio 7")
// let numeroMayor = parseInt(prompt("Ingresa un número:"));
// if (numeroMayor > 100) {
//     console.log(`${numeroMayor} es mayor que 100`)
// } else {
//     console.log(`${numeroMayor} es menor que 100`)
// }
// console.groupEnd()

// // Ejercicio 8
// console.groupCollapsed("Ejercicio 8")
// let numeroMenor = parseInt(prompt("Ingresa un número:"));
// if (numeroMenor < -50) {
//     console.log(` ${numeroMenor} es menor que -50`)
// } else {
//     console.log(` ${numeroMenor} es mayor que -50`)
// }
// console.groupEnd()

// // Ejercicio 9
// console.groupCollapsed("Ejercicio 9")
// let numeroRango = parseInt(prompt("Ingresa un número:"));
// if (numeroRango >= 20 && numeroRango <= 50) {
//     console.log(`${numeroRango} está en el rango de 20 a 50`)
// } else {
//     console.log(`${numeroRango} No está en el rango de 20 a 50`)
// }
// console.groupEnd()

// // Ejercicio 10
// console.groupCollapsed("Ejercicio 10")
// let numeroCero =parseInt(prompt("Ingresa un número:"));
// if (numeroCero === 0) {
//     console.log(`${numeroCero}es igual a 0`)
// } else {
//     console.log(`${numeroCero} No es igual a 0`)
// }
// console.groupEnd()

// // Ejercicio 11
// console.groupCollapsed("Ejercicio 11")
// let numeroRange = parseInt(prompt("Ingresa un número:"));
// if (numeroRange > -10 && numeroRange < 10) {
//     console.log(`${numeroRange} es mayor de -10 y menor de 10`)
// } else {
//     console.log(`${numeroRange} No es mayor de -10 y menor de 10`)
// }
// console.groupEnd()

// // Ejercicio 12
// console.groupCollapsed("Ejercicio 12")
// let añoBiciesto = parseInt(prompt("Ingresa un año:"));
// if (añoBiciesto % 4 === 0 && (añoBiciesto % 100 !== 0 || añoBiciesto % 400 === 0)) {
//     console.log(`${añoBiciesto} es bisiesto`)
// } else {
//     console.log(`${añoBiciesto} No es bisiesto`)
// }
// console.groupEnd()

// // Ejercicio 13
// console.groupCollapsed("Ejercicio 13")
// let edadPersona = parseInt(prompt("Ingresa un número:"));
// if (edadPersona >= 18) {
//     console.log(`Es mayor de edad`)
// } else {
//     console.log(`Es menor de edad`)
// }
// console.groupEnd()

// // Ejercicio 14
// console.groupCollapsed("Ejercicio 14")

// console.groupEnd()

// // Ejercicio 15
// console.groupCollapsed("Ejercicio 15")
// let numeroCuadradoP = parseInt(prompt("Ingresa un número:"));
// if (Math.sqrt(numeroCuadradoP) % 1 === 0) {
//     console.log(`${numeroCuadradoP} es un cuadrado perfecto`);
// }
// else {
//     console.log(`${numeroCuadradoP} No es un cuadrado perfecto`)
// }
// console.groupEnd()

// // Ejercicio 16
// console.groupCollapsed("Ejercicio 16")

// function fibonacci(numeroFib){
//     let a =1
//     let b=1
//     while (a<=numeroFib){
//         if (a===numeroFib){
//             return (true, `El ${numeroFib} Es un numero de fibonacci`) //Es fibonacci
//         }
//         let c=a+b
//         a=b
//         b=c
//     }
//     return (false, `El ${numeroFib} No es un numero de fibonacci`)//No es fibonacci
// }
// console.log(fibonacci(parseInt(prompt("Ingresa un número:"))))
// console.groupEnd()

// // Ejercicio 17
// console.groupCollapsed("Ejercicio 17")
// let numeroPotencia= parseInt(prompt("Ingresa un número:"));
// if(Number.isInteger(Math.log2(numeroPotencia))){
//     console.log(`${numeroPotencia} es potencia de 2`)
// }else{
//     console.log(`${numeroPotencia} No es* potencia de 2`)
// }
// console.groupEnd()

// // Ejercicio 18
// console.groupCollapsed("Ejercicio 18")
// function esPalindromo(numero) {
//     const stringNumero = numero.toString();
//     const stringInvertido = stringNumero.split('').reverse().join('');
//     return stringNumero === stringInvertido;
// }
// console.log(esPalindromo(parseInt(prompt("Ingresa un número:"))))
// console.groupEnd()

// // Ejercicio 19
// console.groupCollapsed("Ejercicio 19")
let cadenaT = "JavaScript es un lenguaje de la web"
// function contieneJavaScript(cadena) {
//     return cadena.toLowerCase().includes('javascript');
// }
// console.log(contieneJavaScript((cadenaT)))
// console.groupEnd()

// // Ejercicio 20
// console.groupCollapsed("Ejercicio 20")
// function tieneMasDe10Caracteres(cadena) {
//     return cadena.length > 10;
// }
// console.log(tieneMasDe10Caracteres(String(prompt("Ingresa una cadena de texto:"))))
// console.groupEnd()

// Ejercicio 21
console.groupCollapsed("Ejercicio 21")
if (cadenaT === cadenaT.toLocaleLowerCase()) {
    console.log(`El texto de la cadena de texto ${cadenaT} todo es minuscula`);
} else {
    console.log(`La cadena ${cadenaT} tiene al menos 1 letra mayuscula`)
}
console.groupEnd()

// Ejercicio 22
console.groupCollapsed("Ejercicio 22")
let cadeNumero = "Hola usuario3, feliz dia!."
let contieneN = /\d/.test(cadeNumero)
if (contieneN) {
    console.log("la cadena contine numeros");
} else {
    console.log(`En la cadena ${cadeNumero} no hay numeros`);
}
console.groupEnd()

// Ejercicio 23
console.groupCollapsed("Ejercicio 23")
if (cadeNumero.slice(-1) === '.') {
    console.info(`la cadena ${cadeNumero} finaliza con .`)
} else {
    console.log("Esta cadena no finaliza con .");
}
console.groupEnd()

// Ejercicio 24
console.groupCollapsed("Ejercicio 24")
function esPangrama(phrasePangrama){

    const alphabe = "abcdefghijklmnñopqrstuvwxy"
    phrasePangrama=phrasePangrama.toLocaleLowerCase()
    
    let letraCade=""
    for (let caracter of phrasePangrama){
        if (/[a-z]/.test(caracter)){
            letraCade.padEnd(caracter)
        }
    }return letraCade.size===alphabe.size 
}
let phrasePangrama = "El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja."
if(esPangrama(phrasePangrama)){
    console.log("la cadena es pangrama");
}else{
    console.log("no es pangrama");
}

console.groupEnd()

// Ejercicio 25
console.groupCollapsed("Ejercicio 25")

console.groupEnd()

// Ejercicio 26
console.groupCollapsed("Ejercicio 26")

console.groupEnd()

// Ejercicio 27
console.groupCollapsed("Ejercicio 27")

console.groupEnd()

// Ejercicio 28
console.groupCollapsed("Ejercicio 28")

console.groupEnd()

// Ejercicio 29
console.groupCollapsed("Ejercicio 29")

console.groupEnd()

// Ejercicio 30
console.groupCollapsed("Ejercicio 30")

console.groupEnd()

// Ejercicio 31
console.groupCollapsed("Ejercicio 31")

console.groupEnd()

// Ejercicio 32
console.groupCollapsed("Ejercicio 32")

console.groupEnd()

// Ejercicio 33
console.groupCollapsed("Ejercicio 33")

console.groupEnd()

// Ejercicio 34
console.groupCollapsed("Ejercicio 34")

console.groupEnd()

// Ejercicio 35
console.groupCollapsed("Ejercicio 35")

console.groupEnd()

// Ejercicio 36
console.groupCollapsed("Ejercicio 36")

console.groupEnd()

// Ejercicio 37
console.groupCollapsed("Ejercicio 37")

console.groupEnd()

// Ejercicio 38
console.groupCollapsed("Ejercicio 38")

console.groupEnd()

// Ejercicio 39
console.groupCollapsed("Ejercicio 39")

console.groupEnd()

// Ejercicio 40
console.groupCollapsed("Ejercicio 40")

console.groupEnd()