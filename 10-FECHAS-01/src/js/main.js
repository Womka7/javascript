

console.group("fechas")

const fecha =new Date()
console.log(fecha)

const juanjo =new Date(2005,8,1)//el mes inicia en 0 //aqui es septiembre
console.log(juanjo)

const juanjoString =new Date("09/01/2005")// el mes aqui SI inicia en 1 09/SEPTIEMBRE
console.log(juanjoString)

const dia =fecha.getDate()
console.log(dia)


const month =fecha.getMonth()
console.log(month+1)//porque el mes inicia en 0


const fullYear =fecha.getFullYear()//Dice exactamente el año ACTUAL
console.log(fullYear)

const year =fecha.getYear()
console.log(year)

const diaSemana =fecha.getDay() //Empieza en Dia 0 DOMINGO
console.log(diaSemana)

const horas =fecha.getHours()
console.log(horas)

const minutos =fecha.getMinutes()
console.log(minutos)

const segundos =fecha.getSeconds()
console.log(segundos)

const miliseconds =fecha.getMilliseconds()
console.log(miliseconds)

// -----------------------------------
// let fechaUsuario =new Date()
// OPCIONAL const usuario =new Date(prompt("ingresa una fecha: ","MM/DD/YYYY"))

// const usuario =prompt("ingresa una fecha: ","MM/DD/YYYY")
// fechaUsuario = new Date(usuario)
// console.log(fechaUsuario)

// --------------------------------------------

console.log(fecha.getTime())
const dias5 =fecha.setDate(fecha.getDate()+5)

console.log(new Date(dias5))
console.log(fecha);

// ------------------CALCULAR LA FECHA DE DEVOLUCION DE UN LIBRO---------------------
// const diasPrestamo = parseInt(prompt("Ingrese la cantidad de dias del prestamo"))
// const fechaDevolucion = new Date()
// fechaDevolucion.setDate(fechaDevolucion.getDate()+diasPrestamo)
// console.log(fechaDevolucion)

// -----------CALCULAR LA EDAD A PARTIR DE LA FECHA NACIMIENTO------------
// ------------------------------------------------
// ------------------------------------------------

// const fechaCumpleanio= new Date(prompt("ingrese su fecha de nacimiento: ","MM/DD/YYYY"))
// const fechaActual= new Date()
// // --------------------------------------
// const edad= (fechaActual.getFullYear()-fechaCumpleanio.getFullYear())
// console.log(edad)
// // --------------------------------------
// const edad2= Math.floor(fechaActual-fechaCumpleanio)/(1000*3600*24*365)
// console.log(edad2)

// ------------------------------------------------
// ------------------------------------------------

// Desarrolla una aplicación para recordar los cumpleaños 
// de tus amigos, esta debe decir cuantos días faltan para 
// el cumpleaños. Pídele al usuario la fecha de nacimiento.
const fechaCumpleString = prompt("ingrese su fecha de nacimiento: ","MM/DD/YYYY")
const fechaCumple= new Date(fechaCumpleString)
console.log(fechaCumple)

const fecha1 = new Date()
const conteo= (fechaCumple-fecha1)/(1000*3600*24)
console.log(conteo)

console.groupEnd()