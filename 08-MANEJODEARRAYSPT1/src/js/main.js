// -----------CREACION DE ARRAYS----------------
console.groupCollapsed("creacion de arrays")
const array1 = new Array(4)
const array2 = Array("a", "b", "c")
const array3 = []

console.log(array1)
console.log(array2)
console.log(array3)

console.groupEnd()
// ---------------CONSULTAR DATOS DE ARRAY------------------------------------------------
const array = [1, 2, 3, 4, 5, "hola", "mundo", true, false, "alpha"]
console.groupCollapsed("consultar datos de array")

console.log(`El array tiene ${array.length} elementos`)
console.log(array[6])
console.log(array.at(6))
console.log(array.at(-3))

console.log(array[9])//alpha
console.log(array.at(-1)) //alpha

// -------- include me devuelve si encuentra el elemnto o no como true o false------
console.log(array.includes("mundo")) //true
console.log(array.includes("zulua"))//false

// -------me da la posicion en la que está el elemto-----------
console.log(array.indexOf("mundo")) //6
console.log(array.indexOf("zulua")) //  -1   // si no lo encuentra devuelve -1

console.groupEnd()
// ---------------ACTUALIZAR DATOS EN ARRAY---------------------------------------------------
console.groupCollapsed("Actualizar elementos de un array")

array[5] = "hello"
console.log(array)

console.groupEnd()
// --------------AGREGAR DATOS A ARRAY---------------------------------------
console.groupCollapsed("Agregar elementos al array")

console.log(array)
array[10] = "bravo"
console.log(array)
array.push("charlie")// AGREGA ELEMENTOS AL ARRAY EN LA POSICION ULTIMA...CREA UNA ULTIMA POSICION
console.log(array)
array.push("delta")
console.log(array)

array.unshift("1")//AGREGA ELEMENTOS AL INCICIO DE LA LISTA Y DESPLAZA LO DEMAS
array.unshift("2")
console.log(array)

console.groupEnd()


// --------------ELIMINAR DATOS A ARRAY---------------------------------------
console.groupCollapsed("Eliminar elementos a un array")

console.log(array)
array.pop() //El .pop siempre elimina el ultimo elemento si o si no sirve darle parametros
console.log(array)

let posiconEliminada = array.pop()  // con .pop extraigo el ultimo elemento elemento de un array y hago con el lo que quiera
console.log(posiconEliminada)
console.log(array)

delete array[2]// este elimina el objeto pero deja la posicion vacia
console.log(array)

//Con shift se elimina a partir de la primera posición y funciona similar a .pop que los guarda en una variable
array.shift()
array.shift()
array.shift()

console.log(array)

console.groupEnd()

// ---------------------------------------------------------------------
console.groupCollapsed("Sumar arrays")
const objeto1 = {
    nombre: "alpha",
    apellido: "bravo"
}
const objeto2 = {
    edad: "26 años",
    ciudad: "medellin"
}

console.log(objeto1)
console.log(objeto2)

const objeto3 = { ...objeto1, ...objeto2 }
// const objeto3={
//     nombre: "charlie",
//     apellido:"bravo",
//     edad: "26 años",
//     ciudad:"medellin"
// }
console.log(objeto3)
// INVESTIGATR ESTO PORQUE ME SALIO TAL CUAL
Object.assign(objeto1, objeto2)
console.log(objeto1)


console.groupEnd()
// -------mas a detalle la exolicacion entre asignar y sumar------
console.groupCollapsed("Sumar arrays2")

let primerosNumeros = [1, 2, 3, 4, 5]
let segundosNumeros = [6, 7, 8, 9, 10]

console.log(primerosNumeros)
console.log(segundosNumeros)

// -----------suma------crea nuevo y le asigna lo de otros
let sumaNumeros = primerosNumeros.concat(segundosNumeros, 123, true, "hola")
console.log(sumaNumeros)

// ----------asignacion----------agrega a uno ya existente lo de otro
primerosNumeros = primerosNumeros.concat(segundosNumeros, 123, true, "hola")
console.log(primerosNumeros)


console.groupEnd()

console.groupCollapsed("Listar elementos de un array")

let listaSupermercado = [
    "arroz",
    "pan",
    "arepa",
    "agupanela",
    "huevos",
    "guaro",
    "pescado",
    "leche",
    "carne"
]
console.log(" \n ------------------------------------ \n ")

console.groupCollapsed("ciclo for normalito")

for (let i = 0; i < listaSupermercado.length; i++) {

    console.table(`lista for \n ${listaSupermercado[i]}`)
}
console.groupEnd()

console.log(" \n ------------------------------------ \n ")

console.groupCollapsed("ciclo while normalito")

let i = 0
while (i < listaSupermercado.length) {
    console.table(`lista con while \n ${listaSupermercado[i]}`)
    i++
}

console.groupEnd()

console.log(" \n ------------------------------------ \n ")

console.groupCollapsed("ciclo for of")

for (productos of listaSupermercado) {
    console.table(`lista for of \n ${productos}`)

}

console.groupEnd()

console.log(" \n ------------------------------------ \n ")

console.groupCollapsed("ciclo forEach")

listaSupermercado.forEach(producto => {
    console.table(`lista foreach \n ${producto}`)

});

console.groupEnd()

console.log(" \n ------------------------------------ \n ")

listaSupermercado.forEach((producto, index)=> {
    console.table(`lista foreach \n ${producto}  en la posicion ${index}`)

})

// console.log(listaSupermercado)


// for in da las posiciones ----solo listar---
// for of el contenido ----solo listar---
// for each las dos cosas----solo listar---
// el for normal para usar varios datos


console.groupEnd()

