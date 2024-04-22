console.groupCollapsed("lista")
const teamLeader = {
    id: "115551",
    indentificationNumber: "1024657544",
    name: "karina",
    lastName: "pineda",
    birthDate: new Date("1997-02-23 18:00:00"),
    phoneNumber: "(+57) 3243812089",
    email: "espruebaemail@gmail.com"
}

console.log(teamLeader.name)

for (const key in teamLeader) {
    console.log(key)
    // console.log(teamLeader[i])
}


Object.keys(teamLeader).forEach(index => {
    console.log(teamLeader[index])
});

Object.values(teamLeader).forEach(value => {
    console.log(value)
});


// 1. lista de numeros del 1 al 100
// 2. filtrar pares y guardarlos en una lista aparte

let numeros = []
let paresNumber = []
for (let i = 0; i <= 100; i++) {
    numeros.push(i)
    if (i % 2 == 0) {
        paresNumber.push(i)
    }
}
// console.table(numeros)
// console.table(paresNumber)

// 1. lista de numeros del 1 al 100
// 2. filtrar pares y guardarlos en una lista aparte

let paresNumber1 = []
let numeros1 = []
for (let i = 0; i <= 100; i++) {
    numeros1.push(i)
}
// paresNumber1=numeros1.filter( par=>{
//     (par%2===0)
//         console.table(par)
//         return 

// })
let paresNumber1otro = []
paresNumber1otro = numeros1.filter(parido => parido % 2 == 0)
console.table(paresNumber1otro)
console.groupEnd()

console.group("lista empleados")

listaEmpleados = [
    {
        nombre: "Juan Pérez",
        edad: 30,
        puesto: "Desarrollador de Software",
        salario: 50000
    },
    {
        nombre: "María García",
        edad: 28,
        puesto: "Diseñadora Gráfica",
        salario: 45000
    },
    {
        nombre: "Luis Ramírez",
        edad: 35,
        puesto: "Gerente de Proyectos",
        salario: 60000
    },
    {
        nombre: "Ana Martínez",
        edad: 32,
        puesto: "Analista de Negocios",
        salario: 55000
    }
];

// imprimir el nombre y puesto de cada uno de los empleados en minuscula


listaEmpleados.forEach(empleado => {
    console.log(`El empleado, ${empleado.nombre} trabaja como 
    ${empleado["puesto"]} y gana 
    ${empleado.salario.toLocaleString('es-US', { 
        style: 'currency', 
        currency: 'USD' })}`.toLowerCase())
    // console.log(empleado)
})


const listaNo=listaEmpleados.map(empleado => {
    console.log(`El empleado, ${empleado.nombre} trabaja como 
    ${empleado["puesto"]} y gana 
    ${empleado.salario.toLocaleString('es-US', { 
        style: 'currency', 
        currency: 'USD' })}`.toLowerCase())
    // console.log(empleado)
})
console.
console.groupEnd()