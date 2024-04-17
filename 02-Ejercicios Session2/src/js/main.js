// 1. Declara dos variables, num1 y num2, asignándoles valores 
// numéricos diferentes y muestra en consola el resultado de sumarlos.

let num1 = 1
let num2 = 5
suma = num1 + num2
console.info(suma)

// 2. Define dos variables de tipo string, simpleString1 y simpleString2,
//  con valores "Hola" y "Mundo" respectivamente. Muestra en consola 
//  la longitud total de ambas cadenas.

let simpleString1="Hola"
let simpleString2="Mundo"

console.info(simpleString1.length, simpleString2.length)

// 3. Crea dos variables de tipo string usando la función String(): 
// stringUsingString1 con el valor "JavaScript" y stringUsingString2 
// con el valor "Ejercicios".

let stringUsingString1=String("JavaScript")
let stringUsingString2=String("Ejercicios")

// 4. Utiliza el operador new para crear dos variables de tipo string: 
// stringUsingNewString1 con el valor "Concatenar" y stringUsingNewString2 
// con el valor "Strings".

let stringUsingNewString1 = new String("Concatenar")
let stringUsingNewString2 = new String( "Strings")     

// 5. Calcula e imprime en consola la posición del substring "la" en la variable 
// simpleString1.

console.info(simpleString1.search("la"))
     
// 6. Comprueba si la variable simpleString2 contiene el substring "ndo" 
// e imprime el resultado en consola.

console.info(simpleString2.includes("ndo"))

// 7. Concatena las variables simpleString1 y simpleString2 utilizando el método 
// concat() y muestra el resultado en consola.

console.info(simpleString1.concat(" ", simpleString2))
     
// 8. Concatena las variables simpleString1 y simpleString2 utilizando el operador + 
// y muestra el resultado en consola.

console.info( simpleString1+ " " +simpleString2)

// 9. Utiliza template strings para concatenar las variables simpleString1 y 
// simpleString2 e imprime el resultado en consola.

console.info(`${simpleString1} ${simpleString2}`)
     
// 10. Declara una variable stringWithSpaces1 con el valor " TrimStart" y otra
//  variable stringWithSpaces2 con el valor "TrimEnd ". Elimina los espacios en 
//  blanco al principio y al final de ambas cadenas e imprime el resultado en consola.

let stringWithSpaces1 =" TrimStart"
let stringWithSpaces2 ="TrimEnd "

console.info(stringWithSpaces1.trimStart(), stringWithSpaces2.trimEnd())

     
// 11. Reemplaza la letra 'o' por la letra 'i' en la variable simpleString1 e 
// imprime el resultado en consola.

console.info(simpleString1.replaceAll("o","i"))

// 12. Utiliza el método slice() para obtener los primeros tres caracteres de 
// la variable simpleString2 e imprime el resultado en consola.

console.info(simpleString2.slice(0,3))
     
// 13. Utiliza el método substring() para obtener una subcadena de la variable 
// simpleString2 que comience en el índice 2 e imprime el resultado en consola.

console.info(simpleString2.substring(2))

// 14. Repite la variable simpleString1 dos veces utilizando el método repeat()
//  e imprime el resultado en consola.

console.info(simpleString1.repeat(2))
     
// 15. Divide la cadena "Esto es una oración de ejemplo" en un array de palabras 
// y muestra el resultado en consola.

let word ="Esto es una oración de ejemplo"

console.info(word.split(" "))

// 16. Convierte la variable simpleString2 a mayúsculas utilizando el método 
// toUpperCase() e imprime el resultado en consola.

console.info(simpleString2.toUpperCase())

// 17. Convierte la variable simpleString1 a minúsculas utilizando el método 
// toLowerCase() e imprime el resultado en consola.

console.info(simpleString1.toLowerCase())