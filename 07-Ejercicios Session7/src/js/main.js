// Ejercicio 1
// 1. Crea un objeto llamado persona con propiedades como nombre, edad y ciudad.
console.groupCollapsed("Ejercicio 1");

let persona={
    nombre:"pedro",
    edad:"26",
    ciudad:"rionegro",
}

console.groupEnd();

// Ejercicio 2
// 2. Agrega una propiedad adicional al objeto persona que represente su ocupación.
console.groupCollapsed("Ejercicio 2");

persona.ocupacion="obrero"

console.groupEnd();

// Ejercicio 3
// 3. Accede a una propiedad del objeto persona y muestra su valor en la consola.
console.groupCollapsed("Ejercicio 3");

console.log(`${persona.ocupacion}`)

console.groupEnd();

// Ejercicio 4
// 4. Crea otro objeto llamado libro con propiedades como título, autor y año de publicación.
console.groupCollapsed("Ejercicio 4");

let libro={
    titulo:"quien se ha llevado mi queso",
    autor:"spencer johnson",
    añoPub:"1998",
}

console.groupEnd();

// Ejercicio 5
// 5. Combina las propiedades de los objetos persona y libro en un nuevo objeto llamado informacion.
console.groupCollapsed("Ejercicio 5");

const informacion={...persona,...libro}

console.groupEnd();

// Ejercicio 6
// 6. Cambia el valor de una propiedad en el objeto persona.
console.groupCollapsed("Ejercicio 6");

persona.edad="50"
console.log(persona)

console.groupEnd();

// Ejercicio 7
// 7. Elimina una propiedad del objeto libro.
console.groupCollapsed("Ejercicio 7");

delete libro.añoPub
console.log(libro)

console.groupEnd();

// Ejercicio 8
// 8. Crea un objeto llamado coche con propiedades como modelo, marca y año.
console.groupCollapsed("Ejercicio 8");

let coche={
    modelo:"cx30",
    marca:"mazda",
    añoModel:"2023"
}

console.groupEnd();

// Ejercicio 9
// 9. Muestra todas las propiedades del objeto coche en la consola.
console.groupCollapsed("Ejercicio 9");

console.log(Object.keys(coche))

console.groupEnd();

// Ejercicio 10
// 10.Agrega un método al objeto coche que imprima un mensaje en la consola.
console.groupCollapsed("Ejercicio 10");

coche.llantas =function(){
    console.log(`Hola, soy el coche ${coche.marca} y soy modelo ${coche.modelo}`)
}
console.log(coche)//aqui muestro la info del objeto pero no me muestra el metodo internamente
console.log(coche.llantas())//aca me muestra unicamente el metodo internamente

console.groupEnd();

// Ejercicio 11
// 11.Crea un objeto llamado circulo con propiedades como radio y color.
console.groupCollapsed("Ejercicio 11");

let circulo={
    radio:"5",
    color:"azul"
}

console.groupEnd();

// Ejercicio 12
// 12.Calcula el área del círculo utilizando la fórmula A = πr^2 y muestra el resultado.
console.groupCollapsed("Ejercicio 12");

let areaCirculo = (Math.PI)* Math.pow(Number(circulo.radio),2)
console.log(areaCirculo)

console.groupEnd();

// Ejercicio 13
// 13.Crea un objeto llamado rectangulo con propiedades como ancho y alto.
console.groupCollapsed("Ejercicio 13");

let rectangulo={
    ancho:"20",
    alto:"5"
}

console.groupEnd();

// Ejercicio 14
// 14.Calcula el perímetro del rectángulo utilizando la fórmula P = 2 * (ancho + alto)
//  y muestra el resultado.
console.groupCollapsed("Ejercicio 14");

let perimetroRectangulo= 2*(Number(rectangulo.alto )+ Number(rectangulo.ancho))
console.log(perimetroRectangulo)

console.groupEnd();

// Ejercicio 15
// 15.Combina las propiedades de los objetos circulo y rectangulo en un nuevo objeto llamado formas.
console.groupCollapsed("Ejercicio 15");

const formas={...circulo,...rectangulo}
console.log(formas)

console.groupEnd();

// Ejercicio 16
// 16.Crea un objeto llamado computadora con propiedades como marca, modelo y precio.
console.groupCollapsed("Ejercicio 16");

let computadora={
    marca:"acer",
    modelo:"x15",
    precio:"2000000"
}

console.groupEnd();

// Ejercicio 17
// 17.Muestra el precio de la computadora en la consola.
console.groupCollapsed("Ejercicio 17");
    console.log(`${computadora.precio}`)
console.groupEnd();

// Ejercicio 18
// 18.Agrega una propiedad al objeto computadora que indique si tiene o no una tarjeta gráfica.
console.groupCollapsed("Ejercicio 18");

computadora.tarjGrafica=true
console.log(computadora)

console.groupEnd();

// Ejercicio 19
// 19.Crea un objeto llamado mascota con propiedades como nombre, especie y edad.
console.groupCollapsed("Ejercicio 19");

console.groupEnd();

// Ejercicio 20
// 20.Muestra en la consola la especie de la mascota en mayúsculas.
console.groupCollapsed("Ejercicio 20");

console.groupEnd();

// Ejercicio 21
// 21.Crea un objeto llamado fruta con propiedades como nombre y color.
console.groupCollapsed("Ejercicio 21");

console.groupEnd();

// Ejercicio 22
// 22.Agrega un método al objeto fruta que imprima un mensaje indicando si la fruta está madura.
console.groupCollapsed("Ejercicio 22");

console.groupEnd();

// Ejercicio 23
// 23.Crea un objeto llamado estudiante con propiedades como nombre, edad y calificaciones.
console.groupCollapsed("Ejercicio 23");

console.groupEnd();

// Ejercicio 24
// 24.Muestra en la consola el promedio de las calificaciones del estudiante.
console.groupCollapsed("Ejercicio 24");

console.groupEnd();

// Ejercicio 25
// 25.Agrega una propiedad al objeto estudiante que indique si ha aprobado o no.
console.groupCollapsed("Ejercicio 25");

console.groupEnd();

// Ejercicio 26
// 26.Crea un objeto llamado bolsa con propiedades como tamaño y color.
console.groupCollapsed("Ejercicio 26");

console.groupEnd();

// Ejercicio 27
// 27.Muestra en la consola un mensaje que indique la capacidad de la bolsa (tamaño).
console.groupCollapsed("Ejercicio 27");

console.groupEnd();

// Ejercicio 28
// 28.Agrega un método al objeto bolsa que cambie su color.
console.groupCollapsed("Ejercicio 28");

console.groupEnd();

// Ejercicio 29
// 29.Crea un objeto llamado telefono con propiedades como marca, modelo y sistema operativo.
console.groupCollapsed("Ejercicio 29");

console.groupEnd();

// Ejercicio 30
// 30.Muestra en la consola un mensaje indicando el sistema operativo del teléfono.
console.groupCollapsed("Ejercicio 30");

console.groupEnd();

// Ejercicio 31
// 31.Agrega una propiedad al objeto telefono que represente la cantidad de memoria RAM.
console.groupCollapsed("Ejercicio 31");

console.groupEnd();

// Ejercicio 32
// 32.Crea un objeto llamado animal con propiedades como tipo y sonido.
console.groupCollapsed("Ejercicio 32");

console.groupEnd();

// Ejercicio 33
// 33.Muestra en la consola un mensaje que indique el sonido del animal.
console.groupCollapsed("Ejercicio 33");

console.groupEnd();

// Ejercicio 34
// 34.Agrega un método al objeto animal que imprima un mensaje indicando su tipo y sonido.
console.groupCollapsed("Ejercicio 34");

console.groupEnd();

// Ejercicio 35
// 35.Crea un objeto llamado vuelo con propiedades como aerolínea, número de vuelo y hora de salida.
console.groupCollapsed("Ejercicio 35");

console.groupEnd();

// Ejercicio 36
// 36.Muestra en la consola un mensaje que indique la aerolínea y el número de vuelo.
console.groupCollapsed("Ejercicio 36");

console.groupEnd();

// Ejercicio 37
// 37.Agrega una propiedad al objeto vuelo que represente el destino del vuelo.
console.groupCollapsed("Ejercicio 37");

console.groupEnd();

// Ejercicio 38
// 38.Crea un objeto llamado jugador con propiedades como nombre, equipo y posición.
console.groupCollapsed("Ejercicio 38");

console.groupEnd();

// Ejercicio 39
// 39.Muestra en la consola un mensaje que indique el nombre y el equipo del jugador.
console.groupCollapsed("Ejercicio 39");

console.groupEnd();

// Ejercicio 40
// 40.Agrega un método al objeto jugador que imprima un mensaje indicando su posición en el equipo.
console.groupCollapsed("Ejercicio 40");

console.groupEnd();
