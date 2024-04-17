// -----------CREACION DE NUMEROS-----------

// let numero1 = 454554152321
// let numero2  =Number(45)
// let numero3 = new Number(45)

// console.info(typeof(numero1))
// console.info(Number.MAX_VALUE)
// console.info(Number.MIN_VALUE)

// -------------OPERACIONES MATEMATICAS ---------

// const numero1 =5
// const numero2 =10
// const numero3 = Number("10")

// console.info(numero1  + numero2)
// console.info(numero1  - numero2)
// console.info(numero1  * numero2)
// console.info(numero1  / numero2)


// --------INGRESAR TEXTO POR PROMPT Y SABER EL TIPO-------

// numero1 =45.
// let numero2 =89.75

// let numero1 =Number(parseInt(prompt("Ingresa un numero")))
// let numero2 =Number(parseFloat(prompt("Ingresa un numero decimal")))
// let numero3 =Number.parseInt(prompt("Ingresa un numero"))
// let numero4 =Number.parseFloat(prompt("Ingresa un numero decimal"))
// let numero5 =parseFloat(prompt("Ingresa un numero decimal"))
// let numero6 =parseInt(prompt("Ingresa un numero"))

// console.info(typeof(numero1), typeof(numero2))

// console.info(Number.isInteger(numero1),Number.isInteger(numero2))

// ------FORMATOS DE NUMEROS----

// let numero=5466445

// console.info(numero.toString())
// console.info(numero.toString(2))// FORMATO BINARIO
// console.info(numero.toString(8))// FORMATO OCTAL
// console.info(numero.toString(16))// FORMATO HEXADECIMAL

// ---------------LA CANTIDAD DE DECIMALES QUE QUIERO QUE MI NUMERO TENGA------------

// const numeroEjemplo=512.2654556
// console.info(numeroEjemplo)
// console.info(numeroEjemplo.toFixed(2),numeroEjemplo.toFixed(5),numeroEjemplo.toFixed(3),numeroEjemplo.toFixed(4))

// ------------------CONVIERTE A FORMATO EXPONENCIAL-----------

// const numeroEjemplo=454892664657746545445555848656

// console.info(numeroEjemplo)
// console.info(numeroEjemplo.toExponential(), numeroEjemplo.toExponential(45),numeroEjemplo.toExponential(100))


// ----------------UN NUMERO MUY GRANDE LO REDUCE A LOS DECIMALES QUE EXPONENCIALMENTE------------

// const numeroEjemplo=454892664657746545445555848656

// console.info(numeroEjemplo)
// console.info(numeroEjemplo.toPrecision(), numeroEjemplo.toPrecision(5),numeroEjemplo.toPrecision(10))

// // --------------------CLASE-----MATH-----------

// // ------elevar un numero-----
// console.log(2*2*2*2*2*2*2)
// console.log(2**20)
// console.log(Math.pow(2,7))
// // ----------sacar raiz cuadrada-----
// console.log(Math.sqrt(25000))
// // -----------sacar raiz cubica------------
// console.log(Math.cbrt(25000))
// // -----------sacar cosemo---------
// console.log(Math.cos(0))
// // -----------absoluto de un numero-------
// console.log(Math.abs(-5655456))

// // --------indica si es un numero negativo o positivo---------
// let numero =-66
// console.log(Math.sign(numero))

// // --------saber si un numero es mayor y menor pero no funciona en array------
// console.log(Math.max(48,54,66,20,1,36,97))
// console.log(Math.min(48,54,66,20,1,36,97))


// // ---------------------------------------
// let numero1 =3.7
// document.write(numero1)
// // ----------redondeo de numeros------
// console.info(Math.round(numero1)) //redondea por encima al mas cercano
// console.info(Math.floor(numero1))//redondea por debajo al mas cercano
// console.info(Math.ceil(numero1))//redondeae dependeindo del computador

// ------------RANDOM DE UN NUMERO------------

let numero2 =Math.round(Math.random()*100)
document.write(numero2)// genera numeros enteros aleatorios+
