// MAP -> el map permite eretornar element a diferencia del forEach

console.groupCollapsed("map")
const array1 = ["lucas", "pablo", "maria", "pedro"]

let array2 = []
//-------------------------------------------------------

array2 = array1.map(function (nombre) {
    return nombre.toUpperCase()
})
console.log(array2)
// array2=array1.map(function(nombre){return nombre.toUpperCase()})


array2 = array1.map((nombre) => nombre.toUpperCase())

console.log(array2)

//-------------------------------------------------------
array1.forEach(name => {

    array2.push = (name.toUpperCase())
});
console.log(array2)

//-------------------------------------------------------
console.groupEnd()

console.groupCollapsed("reverse y toReverser")
const alphabet = ["A", "B", "C", "D", "E"]
console.log(alphabet)
// console.log(alphabet.reverse())
// console.log("el reverse altera el original",alphabet)
console.log(alphabet.toReversed())
console.log("el toreverse NOOOO altera el original CREA uno nuevo y lo invierte", alphabet)

let alfabetoMilitar = [
    "Alfa", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot",
    "Golf", "Hotel", "India", "Juliett", "Kilo", "Lima",
    "Mike", "November", "Oscar", "Papa", "Quebec", "Romeo",
    "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "X-ray",
    "Yankee", "Zulu"
];
console.log(alfabetoMilitar)
console.log(alfabetoMilitar.toReversed())
console.log(alfabetoMilitar)
console.log(alfabetoMilitar.reverse())
console.log(alfabetoMilitar)
console.groupEnd()

console.groupCollapsed("sort")

let nombreCoders = [
    "santiago",
    "reykon",
    "narciris",
    "pablo",
    "carolina",
    "marlon",
    "brandon",
    "edson",
    "esteban",
    "shirly",
]
console.log(nombreCoders)
console.log("------------toSorted().toReversed()---------------------------------------------------")
let codersOrdenadosDesDifereA = nombreCoders.toSorted().toReversed()
console.log(codersOrdenadosDesDifereA)
console.log(nombreCoders)
// -----------------------------------
console.log("---------------------sort()------------------------------------------")
// -------------------------------------
let codersOrdenados = nombreCoders.sort()
console.log(codersOrdenados)
console.log(nombreCoders)
// -----------------------------------
console.log("---------------------sort().reverse()------------------------------------------")
// -------------------------------------
let codersOrdenadosDes = nombreCoders.sort().reverse()
console.log(codersOrdenadosDes)
console.log(nombreCoders)

console.log("---------------------EJERCICIO------------------------------------------")


let listaDeSupermercado = [
    "Papel aluminio",
    "Bolsas para almacenamiento de alimentos",
    "Espátula de cocina",
    "Cucharón",
    "Cuchillo de cocina",
    "Tabla de cortar",
    "Tijeras de cocina",
    "Pelador de papas y vegetales",
    "Rallador de queso",
    "Colador"
];
console.table(listaDeSupermercado);
listaDeSupermercado = listaDeSupermercado.sort()
console.table(listaDeSupermercado);
let listaInversa = listaDeSupermercado.toSorted().toReversed()
console.table(listaInversa);

console.groupEnd()

console.groupCollapsed("filter")

let numerosl = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let numerosPares = numerosl.filter(function (numero) {
    return numero % 2 === 0
})
let numerosImpares = numerosl.filter(numero => numero % 2 !== 0)


// numerosl.forEach(numerito=>{
//     if (numerito%2===0){
//         numerosPares.push(numerito)
//     }else{
//         numerosImpares.push(numerito)
//     }
// })

console.log(numerosImpares)
console.log(numerosPares)

// con la lista de nombreCoders, van a crear 2 listas nuevas,
// filtras, la primera, todos los nombres que comiencen por una vocal
// la segunda lista todos los nombres que no comiencen por vocal

let iniCoderVocal = nombreCoders.filter(function (coder) {
    if (coder.startsWith("a")
        || coder.startsWith("e")
        || coder.startsWith("i")
        || coder.startsWith("o")
        || coder.startsWith("u")
    ) {
        return coder
    }
})

console.log(iniCoderVocal)
let iniCoderSinVocal = []


console.groupEnd()

console.groupCollapsed("every")

let numerosNat=[23,55,44,3,5,3,2]

const respuesta=numerosNat.every(numerin=> numerin>0)
console.log(respuesta)


// ----------------------TODOS DEBEN CUMPLIR LA CONDIICON-----

console.groupEnd()

console.groupCollapsed("some")

let numerosNat1=[-23,-55,44,-3,5,3,-2]

// ------------------con que un caso cumpla es TRUE---------
const respuesta2=numerosNat1.some(numerin=> numerin>0)
console.log(respuesta2)

console.groupEnd()