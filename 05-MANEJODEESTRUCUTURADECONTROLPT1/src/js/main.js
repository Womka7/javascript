// -----------------------------------------------------------
// --------ESTRUCTURAS IF --- IF ELSE --- IF ELSE-IF--------
// -----------------------------------------------------------
console.groupCollapsed("Estructuras If, If else, If Else-If")
// console.log(8 < 10); //True
// console.log("8" >= 6); //True

// let hora = 13

// if (hora > 8 && hora < 17) {
//     console.info("Estoy en mi jornada laboral")
// } else {
//     console.info("No estoy en mi jornada laboral")
// }

// let mes = prompt("Ingresa el mes actual")

// if (mes == "enero") {
//     console.info("Es Enero")
// } else if (mes == "febrero") {
//     console.info("Es Febrero")
// } else if (mes == "marzo") {
//     console.info("Es Marzo")
// } else if (mes == "abril") {
//     console.info("Es Abril")
// } else if (mes == "mayo") {
//     console.info("Es Mayo")
// } else {
//     console.info("Ingresaste un mes que no entiendo")
// }
console.groupEnd();

console.groupCollapsed("Ejercicio de mes en trismestre")
 
// // ---------desarrollar un algoritmo que solicite el numero del mes 
// //----------- y valide con el numero del mesn en que trismestre del año se encuentra

// let numberMonth = prompt("Ingresa un mes que deseas conocer su trimestre")

// if (numberMonth== "01" || numberMonth=="02" || numberMonth=="03" || numberMonth=="2" ||numberMonth== "1" || numberMonth=="3"){
//     alert(`El mes ${numberMonth} se encuentra en el PRIMER TRIMESTRE`)
// } else if(numberMonth== "04" ||numberMonth== "05" || numberMonth=="06" || numberMonth=="5" || numberMonth=="4" || numberMonth=="6"){
//     alert(`El mes ${numberMonth} se encuentra en el SECUNDO TRIMESTRE`)
// } else if(numberMonth== "07" || numberMonth=="08" || numberMonth=="09" ||numberMonth== "8" || numberMonth=="7" || numberMonth=="9"){
//     alert(`El mes ${numberMonth} se encuentra en el TERCER TRIMESTRE`)
// } else if(numberMonth== "10" || numberMonth=="11" ||numberMonth== "12" ||numberMonth== "11" || numberMonth=="10" ||numberMonth== "12"){
//     alert(`El mes ${numberMonth} se encuentra en el CUARTO TRIMESTRE`)
// }else{
//     alert(`Ese mes no pertenece a los 12 meses del año`)
// }

// let numberMonths = parseInt( prompt("Ingresa un mes que deseas conocer su trimestre"))
// switch(numberMonths){
//     case 1:
//         console.log(`El mes ${numberMonths} se encuentra en el PRIMER TRIMESTRE`)
//         break
//     case 2:
//         console.log(`El mes ${numberMonths} se encuentra en el PRIMER TRIMESTRE`)
//         break
//     case 3:
//         console.log(`El mes ${numberMonths} se encuentra en el PRIMER TRIMESTRE`)
//         break
//     default:
//         console.log(`Ingresa un numero entre 1 y 12`)
//         break
// }

// ---------------Desarrolla un algoritmo que muestre un menu de un restaurante y luego le presenre al usuario
// ---------------estas opciones 1 soclicita almuerzo 2 solicita domicilio 3 cancelar orden 4 finalizar el programa

// let money =500
// let menuRestaurante=prompt(`Escoge 1 opcion del menú:
//          1.  Solicita almuerzo
//          2.  Solicitar domicilio
//          3.  Cancelar orden
//          4.  Finalizar el programa`)


// if (menuRestaurante =="1" && money>=20){
//     console.log("con gusto te atenderemos")
// }else if(menuRestaurante =="2" && money>=5){
//     console.log("solicitar domicilio")
// }else if (menuRestaurante =="3" ){
//     console.log("Orden Cancelada")
// }else if(menuRestaurante =="4" ){
//     console.log("Prpograma Finalizado")
// }else{
//     console.log("Lo siento el servicio no puede ser brindado")
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1FALTA EL EJEMPLO DE SWCTH

console.groupEnd()
// ----------CICLOS FOR --------
console.groupCollapsed("ciclo For")

for (i=0; i<5; i++){
    console.log("Hola mundo")
}

// imprimir todas las tablas del 1 al 10

function multiplicarTabla(numero, inicio, fin) {
    for (let i = inicio; i <= fin; i++) {
        let resultado = numero * i;
        console.log( `${numero}  x ${i} = ${resultado}`);
    }
}

multiplicarTabla(1, 1, 10);
multiplicarTabla(2, 1, 10);
multiplicarTabla(3, 1, 10);
multiplicarTabla(4, 1, 10);
multiplicarTabla(5, 1, 10);
multiplicarTabla(6, 1, 10);
multiplicarTabla(7, 1, 10);
multiplicarTabla(8, 1, 10);
multiplicarTabla(9, 1, 10);
multiplicarTabla(10, 1, 10);
console.groupEnd()