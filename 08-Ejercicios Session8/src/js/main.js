// Ejercicio 1
// 1. Crea un array llamado frutas que contenga al menos 5 nombres de frutas diferentes.
console.groupCollapsed("Ejercicio 1");
let frutas=["manzana", "fresa","naranja", "lulo", "maracuya"]
console.groupEnd();

// Ejercicio 2
// 2. Utiliza un bucle for para recorrer el array frutas e imprimir cada elemento en la consola.
console.groupCollapsed("Ejercicio 2");
for(let i=0; i<frutas.length;i++){
    console.table(frutas[i])
}
console.groupEnd();

// Ejercicio 3
// 3. Utiliza un foreach para recorrer el array frutas e imprimir cada fruta en mayúscula en la consola.
console.groupCollapsed("Ejercicio 3");
frutas.forEach(fruta => {
    console.table(fruta)
});
console.groupEnd();

// Ejercicio 4
// 4. Crea un array llamado números que contenga los números del 1 al 10.
console.groupCollapsed("Ejercicio 4");
let numeros=[1,2,3,4,5,6,7,8,9,10]
console.groupEnd();

// Ejercicio 5
// 5. Utiliza un bucle while para recorrer el array numeros e imprimir cada elemento en la consola.
console.groupCollapsed("Ejercicio 5");
let i=0;
while(i<numeros.length){
    console.log(numeros[i])
    i++
}
console.groupEnd();

// Ejercicio 6
// 6. Agrega una nueva fruta al final del array frutas.
console.groupCollapsed("Ejercicio 6");
frutas.push("uva")
console.log(frutas)
console.groupEnd();

// Ejercicio 7
// 7. Elimina el segundo elemento del array números.
console.groupCollapsed("Ejercicio 7");
numeros.splice(1,1)
console.log(numeros)
console.groupEnd();

// Ejercicio 8
// 8. Invierte el orden de los elementos en el array frutas.
console.groupCollapsed("Ejercicio 8");
console.log(frutas.reverse())
console.groupEnd();

// Ejercicio 9
// 9. Ordena el array numeros en orden descendente.
console.groupCollapsed("Ejercicio 9");
// numeros.sort()
// console.log(numeros)
// numeros.reverse()
// console.log(numeros)

numnerosOrdenadosDe=
numeros.sort((a,b)=>b-a)
console.log(numnerosOrdenadosDe)
console.groupEnd();

// Ejercicio 10
// 10. Crea una función llamada buscarFruta que tome como argumento 
// una fruta y devuelva true si esa fruta está en el array frutas,
//  y false en caso contrario.
console.groupCollapsed("Ejercicio 10");

let buscarFruta=(frutab)=>{
    console.log(frutas.includes("lulo"))
}
buscarFruta()
console.groupEnd();

// Ejercicio 11
// 11. Imprime en la consola el primer elemento del array frutas.
console.groupCollapsed("Ejercicio 11");
console.log(frutas)
console.log(frutas[0])
console.groupEnd();

// Ejercicio 12
// 12. Imprime en la consola el último elemento del array numeros.
console.groupCollapsed("Ejercicio 12");
console.log(frutas.at(-1))
console.groupEnd();

// Ejercicio 13
// 13. Utiliza el método forEach para imprimir cada fruta pero convertida a array.
console.groupCollapsed("Ejercicio 13");
frutas.forEach(frutita => {
    console.log(frutita.toString())
});
console.groupEnd();

// Ejercicio 14
// 14. Utiliza un bucle for of para imprimir cada número del array numeros en la consola.
console.groupCollapsed("Ejercicio 14");
console.groupEnd();

// Ejercicio 15
// 15. Crea un nuevo array llamado duplicados que contenga el doble de cada número en el array numeros utilizando el método map.
console.groupCollapsed("Ejercicio 15");
console.groupEnd();

// Ejercicio 16
// 16. Crea dos arrays llamados array1 y array2, cada uno con al menos 3 números.
console.groupCollapsed("Ejercicio 16");
console.groupEnd();

// Ejercicio 17
// 17. Calcula la suma de los elementos de array1 y array2 por separado y muestra los resultados en la consola.
console.groupCollapsed("Ejercicio 17");
console.groupEnd();

// Ejercicio 18
// 18. Crea una función llamada buscarNumero que tome como argumentos un número y un array de números, y devuelva true si el número está en el array, y false en caso contrario.
console.groupCollapsed("Ejercicio 18");
console.groupEnd();

// Ejercicio 19
// 19. Crea un array llamado edades que contenga al menos 5 números (edades).
console.groupCollapsed("Ejercicio 19");
console.groupEnd();

// Ejercicio 20
// 20. Filtra el array edades para obtener un nuevo array llamado mayoresDeEdad que contenga solo las edades mayores o iguales a 18.
console.groupCollapsed("Ejercicio 20");
console.groupEnd();

// Ejercicio 21
// 21. Crea un array llamado precios que contenga al menos 3 números (precios de productos).
console.groupCollapsed("Ejercicio 21");
console.groupEnd();

// Ejercicio 22
// 22. Utiliza el método map para crear un nuevo array llamado preciosConIVA que contenga los precios con un 21% de IVA aplicado a cada uno.
console.groupCollapsed("Ejercicio 22");
console.groupEnd();

// Ejercicio 23
// 23. Crea un array llamado duplicados que contenga algunos números duplicados.
console.groupCollapsed("Ejercicio 23");
console.groupEnd();

// Ejercicio 24
// 24. Elimina los elementos duplicados del array duplicados y muestra el nuevo array sin duplicados en la consola.
console.groupCollapsed("Ejercicio 24");
let numberArrayDu=[1,5,1,2,2,4,7,1,2,9,5,7]
let numberSinD=[]

for(let i=0; i<numberArrayDu.length;i++){
    let estado=false;
}

console.groupEnd();

// Ejercicio 25
// 25. Crea dos arrays llamados array1 y array2, cada uno con al menos 3 nombres.
console.groupCollapsed("Ejercicio 25");
console.groupEnd();

// Ejercicio 26
// 26. Concatena los dos arrays en uno nuevo llamado concatenado y muestra el resultado en la consola.
console.groupCollapsed("Ejercicio 26");
console.groupEnd();

// Ejercicio 27
// 27. Crea un array llamado colores que contenga al menos 5 colores diferentes.
console.groupCollapsed("Ejercicio 27");
console.groupEnd();

// Ejercicio 28
// 28. Cuenta cuántos elementos tiene el array colores y muestra el resultado en la consola.
console.groupCollapsed("Ejercicio 28");
console.groupEnd();