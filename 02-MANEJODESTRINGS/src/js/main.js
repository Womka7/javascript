// let ejemplo = "Hola mundo"


// ---------------------DECLARACION DE STRINGS -------------------------
// const option1 = "Hola mundo"
// const option2 = String("Hola mundo")
// const option3 = new String("Hola mundo")

// console.info(option1)
// console.info(option2)
// console.info(option3)

// ----------------------EXTRACCION DE DATOS---------------------------
// const message="Este es un mensaje para pruebas"
// document.write(message)

// ------------------EXTRAER LA CANTIDAD DE CARACTERES-----------------
// console.info(message.length)

// ------------------------EXTRAER UN CARACTER---------------------
// console.info(message[1])
// console.info(message.charAt(1))
// console.info(message.search("mensaje"))
// console.info(message.includes("mensaje"))

// ------------------------INTERPOLACION CON CADENAS, CONCATENACIOM------------------------
const messageOne="Este es un mensaje para"
const messageTwo="prcaticar concatenacion"
const fullName="Karina Pineda Parra"

console.info(messageOne)
console.info(messageTwo)

console.info("option 1(+):"+messageOne+" "+messageTwo)
console.info("option 2(,):",messageOne,messageTwo)
console.info(`option 3(\`): ${messageOne}${messageTwo}`)
console.info("option 4 concat() simple", messageOne.concat(" ").concat(messageTwo))
console.info("option 4 concat() abreviada", messageOne.concat(" ",messageTwo))


// -----------------------------INTERPOLACION CON COMPONENTE-------------
// const header=`
// <header>
//     <h1>Mi nombre es ${fullName}</h1>
// </header>`
// document.write(header)

// --------------------DEPURACION DE STRINGS------------------
// const message="HolA coMO eSTas"
// document.write(message)

// -----------------transformacion a minuscula----------------------
// console.info(message.toLowerCase())
// -----------------transformacion a mayuscula----------------------
// console.info(message.toUpperCase())

// --------------------LIMPIEZA DE ESPACIOS-----------------------
// const messageOne="     espruebaemail@gmail.com    "

// console.info(messageOne)
// console.info(messageOne.trimStart())
// console.info(messageOne.trimEnd())
// console.info(messageOne.trim())