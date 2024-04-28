// Karina Pineda Parra
// Clan Dell
// 27/04/2024

// -------------------------------------------------
//          Modelo de datos para 10 mascotas
// -------------------------------------------------
let mascotasVeterinario = [
    {
        nombreMascota: "alaska",
        especieMascota: "felino",
        razaMascota: "criollo",
        edadMascota: 9,
        pesoMascota: "2 kilos",
        estadoMascota: "estable",
        propietarioMascota: {
            nombreDueñoMascota: "karina pineda",
            identificacionDueñoMascota: "1046545548",
            telefonoDueñoMascota: "3243812089",
            correoDueñoMascota: "espruebaemail@gmail.com"
        }
    },
    {
        nombreMascota: "polaco",
        especieMascota: "felino",
        razaMascota: "criollo",
        edadMascota: 9,
        pesoMascota: "7 kilos",
        estadoMascota: "estable",
        propietarioMascota: {
            nombreDueñoMascota: "karina pineda",
            identificacionDueñoMascota: "1046545548",
            telefonoDueñoMascota: "3243812089",
            correoDueñoMascota: "espruebaemail@gmail.com"
        }
    },
    {
        nombreMascota: "niña",
        especieMascota: "canino",
        razaMascota: "criollo",
        edadMascota: 8,
        pesoMascota: "12 kilos",
        estadoMascota: "critico",
        propietarioMascota: {
            nombreDueñoMascota: "karina pineda",
            identificacionDueñoMascota: "1046545548",
            telefonoDueñoMascota: "3243812089",
            correoDueñoMascota: "espruebaemail@gmail.com"
        }
    },
    {
        nombreMascota: "pola",
        especieMascota: "canino",
        razaMascota: "criollo",
        edadMascota: 4,
        pesoMascota: "14 kilos",
        estadoMascota: "estable",
        propietarioMascota: {
            nombreDueñoMascota: "lucila moreno",
            identificacionDueñoMascota: "15642646",
            telefonoDueñoMascota: "3244645619",
            correoDueñoMascota: "email@gmail.com"
        }
    },
    {
        nombreMascota: "dulce",
        especieMascota: "felino",
        razaMascota: "criollo",
        edadMascota: 4,
        pesoMascota: "8 kilos",
        estadoMascota: "critico",
        propietarioMascota: {
            nombreDueñoMascota: "luisa loaiza",
            identificacionDueñoMascota: "1068923324",
            telefonoDueñoMascota: "3254641667",
            correoDueñoMascota: "luisa@gmail.com"
        }
    },
    {
        nombreMascota: "coco",
        especieMascota: "canino",
        razaMascota: "bullDog",
        edadMascota: 2,
        pesoMascota: "6 kilos",
        estadoMascota: "critico",
        propietarioMascota: {
            nombreDueñoMascota: "marizol rocha",
            identificacionDueñoMascota: "145626448",
            telefonoDueñoMascota: "3656142353",
            correoDueñoMascota: "mary@gmail.com"
        }
    },
    {
        nombreMascota: "colin",
        especieMascota: "canino",
        razaMascota: "loboSiberiano",
        edadMascota: 3,
        pesoMascota: "16 kilos",
        estadoMascota: "estable",
        propietarioMascota: {
            nombreDueñoMascota: "valentina lopez",
            identificacionDueñoMascota: "123556560",
            telefonoDueñoMascota: "3254563461",
            correoDueñoMascota: "valentina@gmail.com"
        }
    },
    {
        nombreMascota: "sasha",
        especieMascota: "felino",
        razaMascota: "angora",
        edadMascota: 13,
        pesoMascota: "11 kilos",
        estadoMascota: "critico",
        propietarioMascota: {
            nombreDueñoMascota: "laura osorno",
            identificacionDueñoMascota: "164568754",
            telefonoDueñoMascota: "3232251519",
            correoDueñoMascota: "laura@gmail.com"
        }
    },
    {
        nombreMascota: "danger",
        especieMascota: "canino",
        razaMascota: "pastorAleman",
        edadMascota: 12,
        pesoMascota: "10 kilos",
        estadoMascota: "critico",
        propietarioMascota: {
            nombreDueñoMascota: "carolina cardona",
            identificacionDueñoMascota: "165969323",
            telefonoDueñoMascota: "305451251",
            correoDueñoMascota: "caro@gmail.com"
        }
    },
    {
        nombreMascota: "ricky",
        especieMascota: "canino",
        razaMascota: "Pincher",
        edadMascota: 3,
        pesoMascota: "2 kilos",
        estadoMascota: "estable",
        propietarioMascota: {
            nombreDueñoMascota: "laura osorno",
            identificacionDueñoMascota: "16589506",
            telefonoDueñoMascota: "312554854",
            correoDueñoMascota: "cele@gmail.com"
        }
    },
]

// -------------------------------------------------
//              Menú Gestion veterinaria
// -------------------------------------------------
function menu() {
    let opcion;

    while (opcion !== "8") {
        opcion = prompt(
            `Sistema Gestión Veterinaria Riwi
            Elige una opción:
            1. Registrar nueva mascota
            2. Ver lista mascotas
            3. Ver lista dueños
            4. Buscar mascota por nombre
            5. Ver mascotas del mismo propietario
            6. Actualizar datos mascota
            7. Eliminar mascota
            8. Salir`
        );

        if (opcion === "1") {
            resgistrarNuevaMascota();
        } else if (opcion === "2") {
            mostrarMascotasRegistradas();
        } else if (opcion === "3") {
            mostrarPropietariosMascotas();
        } else if (opcion === "4") {
            buscarMostrarMascota();
        } else if (opcion === "5") {
            mostrarMascotasMismoDueñoRepetido();
        } else if (opcion === "6") {
            actualizarMascota();
        } else if (opcion === "7") {
            eliminarMascota();
        } else if (opcion === "8") {
            console.log("Gracias por usar el sistema de gestión veterinaria. ¡Hasta luego!");
        } else {
            console.log("Opción no válida. Por favor, elija una opción válida.");
        }
    }
}

menu();

// -------------------------------------------------
// -------------------------------------------------
//                     CRUD VETERINARIA
// -------------------------------------------------
// -------------------------------------------------

// -------------------------------------------------
//                     Crear
// -------------------------------------------------

// 1. Registrar una nueva mascota
function resgistrarNuevaMascota() {
    const estadoMa = function () {

        let obtenerEstado = confirm(`
         ¿La mascota está en estado crítico?
         Si es así pulsa aceptar de lo contrario cancelar
         `)
        if (obtenerEstado == true) {
            return "critico"
        } else {
            return "estable"
        }
    }
    const nombreMascota = String(prompt("Ingresa el nombre de la nueva mascota")).toLowerCase()
    const especieMascota = String(prompt("Ingresa la especie de la nueva mascota")).toLowerCase()
    const razaMascota = String(prompt("Ingresa la raza de la nueva mascota")).toLowerCase()
    const fechaNacimientoMascota = prompt("Ingresa la fecha de nacimiento de la nueva mascota", "MM/DD/YYYY")
    const pesoMascota = String(prompt("Ingresa el peso de la nueva mascota")).toLowerCase()
    const estadoMascota = estadoMa()
    const nombreDueñoMascota = String(prompt("Ingresa el nombre del propietario de la mascota")).toLowerCase()
    const identificacionDueñoMascota = String(prompt("Ingresa el documentoID del propietario de la mascota")).toLowerCase()
    const telefonoDueñoMascota = String(prompt("Ingresa el teléfono del propietario de la mascota")).toLowerCase()
    const correoDueñoMascota = String(prompt("Ingresa el correo del propietario de la mascota")).toLowerCase()

    const edadMascota = new Date().getFullYear() - new Date(fechaNacimientoMascota).getFullYear()

    const MascotaNueva = {
        nombreMascota,
        especieMascota,
        razaMascota,
        edadMascota,
        pesoMascota,
        estadoMascota,
        propietarioMascota: {
            nombreDueñoMascota,
            identificacionDueñoMascota,
            telefonoDueñoMascota,
            correoDueñoMascota
        }
    }

    mascotasVeterinario.push(MascotaNueva)
    console.log(mascotasVeterinario)
}

// -------------------------------------------------
//                     Leer
// -------------------------------------------------


// 2. Ver la lista de todas las mascotas registradas, en dicho array.
function mostrarMascotasRegistradas() {
    mascotasVeterinario.forEach((mascota, index) => {
        console.log(`Mascota #${(index + 1)} Nombre: ${mascota.nombreMascota.toUpperCase()}`)
    })
}

// 3. Ver una lista de todos los dueños
function mostrarPropietariosMascotas() {
    let propietariosSinRepetir = {}

    mascotasVeterinario.forEach(mascota => {
        const nombreDueno = mascota.propietarioMascota.nombreDueñoMascota
        if (!propietariosSinRepetir[nombreDueno]) {
            console.log(`Nombre Dueño ${nombreDueno.toUpperCase()}`)
            propietariosSinRepetir[nombreDueno] = true
        }
    })
}

// 5. Filtrar y luego mostrar a todas las mascotas pertenecientes a un mismo dueño
function mostrarMascotasMismoDueñoRepetido() {
    const propietariosRepetidos = {}
    mascotasVeterinario.forEach((mascota, index) => {
        const nombreDueno = mascota.propietarioMascota.nombreDueñoMascota
        if (mascotasVeterinario.some(
            (otraMascota, otroIndex) => otroIndex !== index && otraMascota.propietarioMascota.nombreDueñoMascota === nombreDueno)
        ) {
            propietariosRepetidos[nombreDueno] = true
        }
    })

    console.log("Mascotas pertenecientes a propietarios cuyo nombre se repite:")
    mascotasVeterinario.forEach(mascota => {
        if (propietariosRepetidos[mascota.propietarioMascota.nombreDueñoMascota]) {
            console.log(`
            Nombre Dueño: ${mascota.propietarioMascota.nombreDueñoMascota}
            Nombre Mascota: ${mascota.nombreMascota}
            Especie: ${mascota.especieMascota}
            Raza: ${mascota.razaMascota}
            Edad: ${mascota.edadMascota}
            Peso: ${mascota.pesoMascota}
            Estado: ${mascota.estadoMascota}`)
        }
    })
}

// -------------------------------------------------
//                     Buscar
// -------------------------------------------------

// 4. Buscar una mascota por el nombre
function buscarMostrarMascota() {
    const nombreMascotaBuscada = String(prompt("Ingrese el nombre de la mascota a buscar:")).toLowerCase()
    const mascotaEncontrada = mascotasVeterinario.find(mascota => mascota.nombreMascota.toLowerCase() === nombreMascotaBuscada.toLowerCase())

    if (mascotaEncontrada) {
        console.log(`Aquí están los datos de la mascota \n 
        nombre: ${mascotaEncontrada.nombreMascota} \n
        edad: ${mascotaEncontrada.edadMascota} \n
        especie: ${mascotaEncontrada.especieMascota} \n
        raza: ${mascotaEncontrada.razaMascota} \n
        estado: ${mascotaEncontrada.estadoMascota} \n
        propietario: ${mascotaEncontrada.propietarioMascota.nombreDueñoMascota} \n
        telefono: ${mascotaEncontrada.propietarioMascota.telefonoDueñoMascota} \n
        correo: ${mascotaEncontrada.propietarioMascota.correoDueñoMascota} \n
        `)
    } else {
        console.log(`No se encontró ninguna mascota con el nombre "${nombreMascotaBuscada}".`)
    }
}

// -------------------------------------------------
//                     Actualizar
// -------------------------------------------------

// 6. Actualizar la información de una mascota existente.
function actualizarMascota() {
    const nombreMascota = String(prompt("Ingrese el nombre de la mascota a actualizar:"))
    const indiceMascota = mascotasVeterinario.findIndex(mascota => mascota.nombreMascota.toLowerCase() === nombreMascota.toLowerCase())

    if (indiceMascota !== -1) {
        const nuevoPeso = prompt(`Ingrese el nuevo peso para la mascota "${nombreMascota}":`)
        const nuevoEstado = prompt(`Ingrese el nuevo estado para la mascota "${nombreMascota}" (estable/crítico):`)
        const mascota = mascotasVeterinario[indiceMascota]
        mascota.pesoMascota = nuevoPeso
        mascota.estadoMascota = nuevoEstado

        console.log(`¡La información de la mascota "${nombreMascota}" ha sido actualizada con éxito!`)
    } else {
        console.log(`No se encontró ninguna mascota con el nombre "${nombreMascota}".`)
    }
}
console.log(mascotasVeterinario)



// -------------------------------------------------
//                     Eliminar
// -------------------------------------------------

// 7. Eliminar una mascota del array.
function eliminarMascota() {
    const nombreMascotaEliminar = prompt("Ingrese el nombre de la mascota a eliminar:")
    const mascotasFiltradas = mascotasVeterinario.filter(mascota => mascota.nombreMascota.toLowerCase() !== nombreMascotaEliminar.toLowerCase())

    if (mascotasFiltradas.length < mascotasVeterinario.length) {
        const cantidadEliminada = mascotasVeterinario.length - mascotasFiltradas.length
        mascotasVeterinario.splice(0, mascotasVeterinario.length, ...mascotasFiltradas)
        console.log(`Se han eliminado ${cantidadEliminada} mascota(s) con el nombre "${nombreMascotaEliminar}".`)
    } else {
        console.log(`No se encontró ninguna mascota con el nombre "${nombreMascotaEliminar}".`)
    }
}





