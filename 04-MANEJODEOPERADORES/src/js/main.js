// -------tipos de datos--------
console.groupCollapsed("tipos de datos")
let variable1 = 156
let variable2 = "854"
let variable3 = 'Hola mundo'
let variable4 = true
let variable5
let variable6 = null
let variable7 = ["hola", "hola", "hola", "hola", "hola", "hola"]
let variable8 = {
    "hola": "hola",
    "hola": "hola",
    "hola": "hola"
}
let variable9 = function name() {

}

console.log("variable1 ", typeof variable1, "\n", "variable2 ", typeof variable2, "\n",
    "variable3 ", typeof variable3, "\n", "variable4 ", typeof variable4, "\n",
    "variable5 ", typeof variable5, "\n", "variable6 ", typeof variable6, "\n",
    "variable7 ", typeof variable7, "\n", "variable8 ", typeof variable8, "\n", "variable9 ", typeof variable9)

variable5 = 5
console.log("variable5 ", typeof variable5)
console.groupEnd()


// -----------OPERADORES ARTIMETICOS---------
console.groupCollapsed("operadores artimeticos")
let numero1 = 8
let numero2 = 2

let suma = numero1 + numero2
let resta = numero1 - numero2
let multiplicacion = numero1 * numero2
let division = numero1 / numero2
let potencia = numero1 ** numero2

console.log("suma ", suma, "\n ", "resta ", resta, "\n ",
    "multiplicacion ", multiplicacion, "\n ", "division ", division, "\n ", "potencia ", potencia)

console.groupEnd()

// -----------OPERADORES DE INCREMENTO Y DECREMENTO---------
console.groupCollapsed("operadores de incremento y decremento")
//---------------------incremento-----------------

let numeroIncrementar = 10
let numeroDecrementar=100
document.write(numeroIncrementar)
numeroIncrementar ++// 11
numeroIncrementar ++//12
numeroIncrementar +=2 //14
numeroIncrementar =numeroIncrementar +2 
numeroIncrementar +=2 //18

// ------------------decremento-----------

document.write(numeroIncrementar)
numeroDecrementar --
numeroDecrementar --
numeroDecrementar --
numeroDecrementar -=40 
numeroDecrementar -=40 
numeroDecrementar -=40 


console.log("decrementado ", numeroDecrementar,  "\n ","incrementdo", numeroIncrementar)

console.groupEnd()

// -----------------OPERADORES DE COMPARACION-----------
console.groupCollapsed("operadores de comparacion")

console.log(5+9 ==20) //false

// ------comparador de igualdad == o ===

console.log(4=="4") //true
console.log(4==="4") //false porque no es exacatamente igual a tipo de dato
console.log("hola mundo"=="Hola mundo") //false

let numeroFactura = "12458"
numeroFactura=parseInt(numeroFactura)

console.log(numeroFactura ===12458) // true

// ----------comparador de diferencia "!= o !=="

console.log(2 !=9) //true
console.log(2 !=2) //false
console.log(2 !=='2') //True

const contraseña="12345"
const contraseñaConfirmacion="12345"

if (contraseña===contraseñaConfirmacion){
    console.error("usuario registrado ")
}

// -----comparador mayor que----
console.log(8>5) //true
console.log(8>8)//false
console.log(8>=8)//true

// -----comparador mayor que----
console.log(8<5) //false
console.log(8<8)//true
console.log(8<=8)//true

let edad =12
if (edad<18){
    console.error("tiene peligro de que la policia te capture")
}
else if (edad>=18){
    console.warn("puedes ingerir alcohol, pero tambien te puede agarrar el ejercito")
}

console.groupEnd()

// -------------------OPERADORES LOGICOS--------------------
console.groupCollapsed("operadores logicos")

//------------------ operador AND------------------------

//          true    true  = TRUE
console.log(1<5  &&  8>2)
//          true    false  = FALSE
console.log(1<5  &&  8<2)
//                   false              true        false           FALSE
console.log("usuario"=="admin" && "1234"==1234 && "Rol"==true)

//------------------ operador OR------------------------

//           false  false  true   false     FALSE
console.log(1>6 || 5<1 || 8>2 || 9>50)

// -------------------operadores mezclados----------

//                                       TRUE
//                               false    ||    true
//                      false   &&  true  ||      true  &&    true
console.log(("usuario"=="Usuario"&& 5>2)||("rol"==="rol"&& 6=="6"))

//----------------- operador NOT-----------------------

let variable =false
console.log(!variable)//TRUE


//                                       TRUE
//                               TRUE    ||    FALSE
//                      false   &&  true  ||      true  &&    false
console.log(!("usuario"=="Usuario"&& 5>2)||("rol"==="rol"&& 6==="6"))

console.groupEnd()