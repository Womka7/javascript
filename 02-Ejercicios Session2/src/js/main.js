// Karina Pineda Parra
// Clan Dell
// 21/04/2024

// 1. Declara dos variables, num1 y num2, asignándoles valores 
// numéricos diferentes y muestra en consola el resultado de sumarlos.

console.groupCollapsed("Ejercicio 1")
let num1 =parseInt( 1)
let num2 = 5
suma = num1 + num2
console.info(suma)
console.groupEnd()

// 2. Define dos variables de tipo string, simpleString1 y simpleString2,
//  con valores "Hola" y "Mundo" respectivamente. Muestra en consola 
//  la longitud total de ambas cadenas.

console.groupCollapsed("Ejercicio 2")
let simpleString1 = "Hola"
let simpleString2 = "Mundo"
console.info(simpleString1.length, simpleString2.length)
console.groupEnd()

// 3. Crea dos variables de tipo string usando la función String(): 
// stringUsingString1 con el valor "JavaScript" y stringUsingString2 
// con el valor "Ejercicios".

console.groupCollapsed("Ejercicio 3")
let stringUsingString1 = String("JavaScript")
let stringUsingString2 = String("Ejercicios")
console.groupEnd()

// 4. Utiliza el operador new para crear dos variables de tipo string: 
// stringUsingNewString1 con el valor "Concatenar" y stringUsingNewString2 
// con el valor "Strings".

console.groupCollapsed("Ejercicio 4")
let stringUsingNewString1 = new String("Concatenar")
let stringUsingNewString2 = new String("Strings")
console.groupEnd()

// 5. Calcula e imprime en consola la posición del substring "la" en la variable 
// simpleString1.

console.groupCollapsed("Ejercicio 5")
console.info(simpleString1.search("la"))
console.groupEnd()

// 6. Comprueba si la variable simpleString2 contiene el substring "ndo" 
// e imprime el resultado en consola.

console.groupCollapsed("Ejercicio 6")
console.info(simpleString2.includes("ndo"))
console.groupEnd()

// 7. Concatena las variables simpleString1 y simpleString2 utilizando el método 
// concat() y muestra el resultado en consola.

console.groupCollapsed("Ejercicio 7")
console.info(simpleString1.concat(" ", simpleString2))
console.groupEnd()

// 8. Concatena las variables simpleString1 y simpleString2 utilizando el operador + 
// y muestra el resultado en consola.

console.groupCollapsed("Ejercicio 8")
console.info(simpleString1 + " " + simpleString2)
console.groupEnd()

// 9. Utiliza template strings para concatenar las variables simpleString1 y 
// simpleString2 e imprime el resultado en consola.

console.groupCollapsed("Ejercicio 9")
console.info(`${simpleString1} ${simpleString2}`)
console.groupEnd()

// 10. Declara una variable stringWithSpaces1 con el valor " TrimStart" y otra
//  variable stringWithSpaces2 con el valor "TrimEnd ". Elimina los espacios en 
//  blanco al principio y al final de ambas cadenas e imprime el resultado en consola.

console.groupCollapsed("Ejercicio 10")
let stringWithSpaces1 = " TrimStart"
let stringWithSpaces2 = "TrimEnd "
console.info(stringWithSpaces1.trimStart(), stringWithSpaces2.trimEnd())
console.groupEnd()

// 11. Reemplaza la letra 'o' por la letra 'i' en la variable simpleString1 e 
// imprime el resultado en consola.

console.groupCollapsed("Ejercicio 11")
console.info(simpleString1.replaceAll("o", "i"))
console.groupEnd()

// 12. Utiliza el método slice() para obtener los primeros tres caracteres de 
// la variable simpleString2 e imprime el resultado en consola.

console.groupCollapsed("Ejercicio 12")
console.info(simpleString2.slice(0, 3))
console.groupEnd()

// 13. Utiliza el método substring() para obtener una subcadena de la variable 
// simpleString2 que comience en el índice 2 e imprime el resultado en consola.

console.groupCollapsed("Ejercicio 13")
console.info(simpleString2.substring(2))
console.groupEnd()

// 14. Repite la variable simpleString1 dos veces utilizando el método repeat()
//  e imprime el resultado en consola.

console.groupCollapsed("Ejercicio 14")
console.info(simpleString1.repeat(2))
console.groupEnd()

// 15. Divide la cadena "Esto es una oración de ejemplo" en un array de palabras 
// y muestra el resultado en consola.

console.groupCollapsed("Ejercicio 15")
let word = "Esto es una oración de ejemplo"
console.info(word.split(" "))
console.groupEnd()

// 16. Convierte la variable simpleString2 a mayúsculas utilizando el método 
// toUpperCase() e imprime el resultado en consola.

console.groupCollapsed("Ejercicio 16")
console.info(simpleString2.toUpperCase())
console.groupEnd()

// 17. Convierte la variable simpleString1 a minúsculas utilizando el método 
// toLowerCase() e imprime el resultado en consola.

console.groupCollapsed("Ejercicio 17")
console.info(simpleString1.toLowerCase())
console.groupEnd()

// 18.	Declara una variable booleana y asígnale un valor booleano.
//  Muestra en consola su tipo de dato utilizando el operador typeof().

console.groupCollapsed("Ejercicio 18")
let varBool=Boolean( false)
console.log(typeof(varBool))
console.groupEnd()

// 19.	Declara una variable arreglo y asígnale un array con al menos 
// tres elementos. Muestra en consola la longitud del array.

console.groupCollapsed("Ejercicio 19")
let varArreglo=["vaca",15,"Carro"]
console.log(varArreglo.length)
console.groupEnd()

// 20.	Declara una variable objeto y asígnale un objeto con al menos
//  tres propiedades. Muestra en consola una de las propiedades del objeto.

console.groupCollapsed("Ejercicio 20")
let varObjeto=Object( {
    propNombre:"Karina",
    propAge:27,
    propTrabaja:false
})
console.log(varObjeto.propAge)
console.groupEnd()

// 21.	Declara una variable nulo y asígnale el valor null. Muestra en
//  consola su tipo de dato utilizando el operador typeof().

console.groupCollapsed("Ejercicio 21")
let varNulo=null
console.log(typeof(varNulo))
console.groupEnd()

// 22.	Declara una variable indefinido y no le asignes ningún valor.
//  Muestra en consola su tipo de dato utilizando el operador typeof().

console.groupCollapsed("Ejercicio 22")
let varUndefined
console.log(typeof(varUndefined))
console.groupEnd()

// 23.	Declara una variable decimal y asígnale un número decimal. 
// Muestra en consola su tipo de dato utilizando el operador typeof().

console.groupCollapsed("Ejercicio 23")
let varDecimal=parseFloat(1.8)
console.log(typeof(varDecimal))
console.groupEnd()

// 24.	Declara una variable negativo y asígnale un número negativo.
//  Muestra en consola su tipo de dato utilizando el operador typeof().

console.groupCollapsed("Ejercicio 24")
let varNegativo=-25
console.log(typeof(varNegativo))
console.groupEnd()

// 25.	Utiliza el método indexOf() para encontrar la posición del 
// carácter 'a' en la cadena "Casa" e imprime el resultado en consola.

console.groupCollapsed("Ejercicio 25")
let cadena1="Casa"
console.log(cadena1.indexOf("a"))
console.groupEnd()

// 26.	Comprueba si la cadena "Javascript" incluye el substring
//  "Script" utilizando el método includes() e imprime el resultado en consola.

console.groupCollapsed("Ejercicio 26")
console.log(stringUsingString1.includes("Script"))
console.groupEnd()

// 27.	Concatena las cadenas "Hola" y "Mundo" utilizando el método 
// concat() y muestra el resultado en consola.

console.groupCollapsed("Ejercicio 27")
console.log(simpleString1.concat( " ",simpleString2))
console.groupEnd()

// 28.	Concatena las cadenas "Hola" y "Mundo" utilizando 
// el operador + y muestra el resultado en consola.

console.groupCollapsed("Ejercicio 28")
console.log(simpleString1+" "+ simpleString2)
console.groupEnd()

// 29.	Utiliza template strings para concatenar las cadenas
//  "Hola" y "Mundo" e imprime el resultado en consola.

console.groupCollapsed("Ejercicio 29")
console.log(`${simpleString1} ${simpleString2}`)
console.groupEnd()

// 30.	Declara una variable cadenaConEspacios con el valor " Ejemplo con espacios ".
//  Utiliza el método trimStart() y trimEnd() para eliminar los espacios en blanco al
//  principio y al final, respectivamente, e imprime el resultado en consola.

console.groupCollapsed("Ejercicio 30")
let varEjemplo=" Ejemplo con espacios "
console.log(varEjemplo.trimStart(),"\n", varEjemplo.trimEnd())
console.groupEnd()

// 31.	Reemplaza la palabra "azul" por "rojo" en la cadena
//  "El cielo es azul" utilizando el método replace() e imprime el resultado en consola.

console.groupCollapsed("Ejercicio 31")
let varCadena=("El cielo es azul")
console.log(varCadena.replace("azul","rojo"))
console.groupEnd()

// 32.	Utiliza el método slice() para obtener los últimos cuatro caracteres de la cadena
//  "Programación" e imprime el resultado en consola.

console.groupCollapsed("Ejercicio 32")
let varFrase=("Programación")
console.log(varFrase.slice(8,12))
console.groupEnd()

// 33.	Utiliza el método substring() para obtener una subcadena de la cadena "JavaScript"
//  que comience en el índice 2 e imprime el resultado en consola.

console.groupCollapsed("Ejercicio 33")
console.log(stringUsingString1.substring(2))
console.groupEnd()

// 34.	Repite la cadena "Hola" tres veces utilizando el método repeat() 
// e imprime el resultado en consola.

console.groupCollapsed("Ejercicio 34")
console.log(simpleString1.repeat(3))
console.groupEnd()

// 35.	Divide la cadena "Esto es una oración de ejemplo" en un array 
// de palabras y muestra el resultado en consola.

console.groupCollapsed("Ejercicio 35")
console.log(word.split(" "))
console.groupEnd()

// 36.	Convierte la cadena "Javascript" a mayúsculas utilizando el 
// método toUpperCase() e imprime el resultado en consola.

console.groupCollapsed("Ejercicio 36")
console.log(stringUsingString1.toUpperCase())
console.groupEnd()

// 37.	Convierte la cadena "EJEMPLO" a minúsculas utilizando el 
// método toLowerCase() e imprime el resultado en consola.

console.groupCollapsed("Ejercicio 37")
let wordE="EJEMPLO"
console.log(wordE.toLowerCase())
console.groupEnd()

// 38.	Declara una variable numero y asígnale un número. Muestra en 
// consola su tipo de dato utilizando el operador typeof().

console.groupCollapsed("Ejercicio 38")
console.log(typeof(num1))
console.groupEnd()

// 39.	Declara una variable booleana y asígnale un valor booleano. 
// Muestra en consola su tipo de dato utilizando el operador typeof().

console.groupCollapsed("Ejercicio 39")
console.log(typeof(varBool))
console.groupEnd()

// 40.	Declara una variable arreglo y asígnale un array con al menos
//  tres elementos. Muestra en consola la longitud del array.

console.groupCollapsed("Ejercicio 40")
console.log((varArreglo.length))
console.groupEnd()

// 41.	Declara una variable objeto y asígnale un objeto con al menos 
// tres propiedades. Muestra en consola una de las propiedades del objeto.

console.groupCollapsed("Ejercicio 41")
let vacasFinca=Object({negra:"donJulio",
pintada:"donaRosa",
total:2})
console.log(vacasFinca.pintada)
console.groupEnd()

// 42.	Declara una variable nulo y asígnale el valor null. Muestra en
//  consola su tipo de dato utilizando el operador typeof().

console.groupCollapsed("Ejercicio 42")
console.log(typeof(varNulo))
console.groupEnd()

// 43.	Declara una variable indefinido y no le asignes ningún valor.
//  Muestra en consola su tipo de dato utilizando el operador typeof().

console.groupCollapsed("Ejercicio 43")
console.log(typeof(varUndefined))
console.groupEnd()

// 44.	Declara una variable decimal y asígnale un número decimal.
//  Muestra en consola su tipo de dato utilizando el operador typeof().

console.groupCollapsed("Ejercicio 44")
let x=parseFloat(9.245465)
console.log(typeof(x))
console.groupEnd()
