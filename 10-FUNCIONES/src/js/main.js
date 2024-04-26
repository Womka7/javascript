console.groupCollapsed("Funciones")

// -----------alert es una funcion--------
// alert(23)
//LA FUNCION NO RETORNA NADA
// const hola=alert({"hola":"martha"})

// const respuesta=confirm("¿Estás seguro?")
// window.alert()//aqui lo que hay es la clase con su método alert


// -------funcion declarativa-------
function saludar(grupo){
    console.log(`Hola ${grupo}, Hoy es un nuevo dia`)
}
saludar("Equipo de enfermeras")
saludar("Equipo de desarrollo")


//crear un programa que envie una notificacion a los coders
// una notificacion para saludar y otra para despedir
// En ambos caos la notificacion debe salir el nombre del coder


// let nombre= String(prompt("Ingresa tu nombre"))

function notificacionC(nomCoder){
    let pregunta=confirm(`Hola ${nomCoder}, bienvenido`)
    if (pregunta===false){
        alert(`adios ${nomCoder} que tengas buen dia`)
    }
}
// notificacionC(nombre) //aca el usuario confirma con
// ----------------------------
function saludaar(coder){
    console.log(`Buen dia! \n ${coder} \n Inicia con toda la actitud`)
}
function despedida(coder){
    console.log(`Hasta luego! \n ${coder} \n Espero que descances`)
}
// saludaar(nombre)
// despedida(nombre)


function sumarDosNumber(numero1,numero2){
    let respuesta=numero1+numero2
    return respuesta
}
let total=sumarDosNumber(6,8)
console.log(`La suma da ${total}`)


//---------------LOGIN-------------

function login(nombre, contraseña){
    if (nombre==="admin"&&contraseña===12345){
        let bienvenido=`Hola Bienvenido ${nombre} te haz loggeado correctamente`
        console.log( bienvenido)
    }else{
        let datoIncorrecto = "Verifica que los datos sean correctos"
        console.error(datoIncorrecto)
    }
}
// let usuario=String(prompt("Ingresa tu usuario"))
// let clave=Number(prompt("Ingresa tu clave"))
// login(usuario,clave)

// ------------FUNCION DECLARATIVA-------------------------------
uno()
//en java script se puede llamar una funcion sin haberla ccreado primero
// es decir por encima o por debajo

function uno(){
    console.log("Esta es una funcion declarativa")
}
uno()

// --------------FUNCION EXPRESIVA------------------------
const dos =function(){
    console.log("Esta es una funcion expresiva")    
}
dos()

// ----------------------------------



console.groupEnd()
