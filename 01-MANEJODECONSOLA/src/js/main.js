// var userName= "Karina"
// let lastName="Pineda"
// const age=25
// const email="usuario@email.com"
// let phone= "3243812089"
// let address= "Guarne"


var userName= prompt("Enter your username")
let lastName=prompt("Enter your lastname")
const age= Number(prompt("Enter your age"))
if (typeof(age) !==Number){
    console.error("Eso no es un número")
    alert("Eso no es un número")
}
const email=prompt("Enter your email")
let phone= prompt("Enter your numberphone")
let address= prompt("Enter your address")





// CONSOLE METHODS

// console.log(userName)
// console.info(lastName)
// console.warn(age)
// console.error(email)
// console.debug(phone)
// alert(address)

// console.log( `%c${address}`, "background-color: #D9CEFF; border-radius: 50px; font-size: 50px")

// Llamando informacion contenida en varibales de diferente maneras 

// console.info("Full name: " + userName + " " + lastName)
// console.info("Full name: ",userName , lastName)
// console.info(`Full name: ${userName} ${lastName}`)

// console.info("nombre: "+userName + " apellido: " +lastName + " edad: " +age+ " correo: " +email+ " telefono: " +phone+ " direccion: " +address)
// console.info("nombre:",userName,"apellido:",lastName,"edad:",age,"correo:",email,"telefono:",phone,"direccion:",address)
// console.info(`nombre: ${userName} apellido:${lastName} edad:${age} correo:${email} telefono:${phone} direccion:${address}`)

console.group("data basic")
    console.info(userName)
    console.info(lastName)
    console.info(age)
console.groupEnd()

console.group("data contact")
    console.info(email)
    console.info(phone)
    console.info(address)
console.groupEnd()

// ALERT EXAMPLE

// let timerInterval;
// Swal.fire({
//   title: "Auto close alert!",
//   html: "I will close in <b></b> milliseconds.",
//   timer: 2000,
//   timerProgressBar: true,
//   didOpen: () => {
//     Swal.showLoading();
//     const timer = Swal.getPopup().querySelector("b");
//     timerInterval = setInterval(() => {
//       timer.textContent = `${Swal.getTimerLeft()}`;
//     }, 100);
//   },
//   willClose: () => {
//     clearInterval(timerInterval);
//   }
// }).then((result) => {
//   /* Read more about handling dismissals below */
//   if (result.dismiss === Swal.DismissReason.timer) {
//     console.log("I was closed by the timer");
//   }
// });


const coders=[ "lupe ortiz", "mateo lopez", "maria antonieta"]
console.info(coders)
console.table(coders)