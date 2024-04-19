// 1. Sumar dos números.
let numebrOne = 5
let numberTwo = 8

console.info(numebrOne+numberTwo)
// 2. Restar dos números.
console.info(numebrOne-numberTwo)
// 3. Multiplicar dos números.
console.info(numebrOne*numberTwo)
// 4. Dividir dos números.
console.info(numebrOne/numberTwo)
// 5. Calcular el módulo (resto) de una división.
console.info(numebrOne%numberTwo)
// 6. Generar un número aleatorio entre 1 y 10.
let numberRandom= Math.round(Math.random()*(10-1)+1)//redondea por encima de 9.9999 y con floor redondea por debajo
let numberRandomo= Math.floor(Math.random()*(10)+1)//toma un rangpo de (10-1) y se le suma 1
console.info(numberRandom, numberRandomo )
// 7. Elevar un número a la potencia de otro.
console.info(numebrOne**numberTwo)
// 8. Calcular la raíz cuadrada de un número.
let numberThree=25
console.info(Math.sqrt(numberThree))
// 9. Convertir grados Celsius a Fahrenheit.
let gradosCelcius=37
console.info("Grados Fahrenheit = ", (gradosCelcius*(9/5))+32)
// 10.Calcular el área de un círculo.
let radio=10
console.log("área de un círculo = ",Math.PI*Math.pow(radio,2))
// 11.Calcular el perímetro de un cuadrado.
let lado=3
console.info("perímetro de un cuadrado= ", lado*4)
// 12.Calcular el volumen de una esfera.
console.info("volumen de una esfera = ", 4*Math.PI*Math.pow(radio,2))
// 13.Calcular el área de un triángulo.
let base=10
let altura=5
console.info("área de triangulo = ",(base*altura)/2)
// 14.Generar la tabla de multiplicar del número 5.

// let table=5
// for (let i=1;i<=10;i++){
//     let result =(table*i)
//     console.log(result)
// }

function multiplicarTabla(numero, inicio, fin) {
    for (let i = inicio; i <= fin; i++) {
        let resultado = numero * i;
        console.log( `${numero}  x ${i} = ${resultado}`);
    }
}

multiplicarTabla(5, 1, 10);

// 15.Encontrar el número mayor entre 3, 7 y 2.
console.info(Math.max(3, 7 ,2))
// 16.Encontrar el número menor entre 10, 20 y 5.
console.info(Math.min(10, 20, 5))
// 17.Calcular el promedio de 4, 6 y 8.
function calculaPromedioArray(numbers){
    let suma=0
    let count= numbers.length
    for (let i=0; i<count; i++){
        suma += numbers[i]
    }
    return suma / count
}
let numbers=[4, 6 , 8]
console.log(`Promedio de ${numbers} es = ${calculaPromedioArray(numbers)}`)
// 18.Calcular la factorial de 5.
let numberFact=5
let resFactorial=1
for(let i=1; i<=numberFact;i++){
    resFactorial*=i
}
console.log(resFactorial)
// 19.Redondear el número 3.6.
console.log(Math.round(3.6))
// 20.Calcular el doble de 9.
console.log(Math.pow(9,2))
// 21.Calcular el triple de 4.
console.log(Math.pow(4,3))
// 22.Calcular el cuadrado de 6.
console.log(Math.pow(6,2))
// 23.Calcular el cubo de 3.
console.log(Math.pow(3,3))
// 24.Calcular la suma de los primeros 10 números naturales.
let sumarNaturales =0
for (let i=0; i<=10; i++){
    sumarNaturales +=i
}
console.log(sumarNaturales)
// 25.Calcular la resta entre 50 y 25.
console.log( 50 -25)
// 26.Multiplicar 7 por 9.
console.log(7*9)
// 27.Dividir 144 por 12.
console.log(144/12)
// 28.Obtener el módulo de 17 dividido por 4.
console.log(17%4)
// 29.Generar un número aleatorio entre 20 y 30.
let numberRandom2= Math.round(Math.random()*(30-20)+20)//redondea por encima de 9.9999 y con floor redondea por debajo
console.info(numberRandom2 )
// 30.Elevar 2 a la potencia de 8
console.log(Math.pow(2,8))
// 31.Calcular la raíz cuadrada de 144.
console.info(Math.sqrt(144))
// 32.Convertir 100 grados Celsius a Fahrenheit.
let gradosCelcius2=100
console.info("Grados Fahrenheit = ", (gradosCelcius2*(9/5))+32)
// 33.Calcular el área de un rectángulo de base 5 y altura 10.
let baseR=5
let alturaR=10
console.log(baseR*alturaR)
// 34.Calcular el perímetro de un círculo con radio 6.
let radioC=6
console.log(Math.PI*2*radioC)
// 35.Calcular el volumen de un cubo con lado 4.
let ladoCubo=4
console.log(Math.pow(ladoCubo,3))
// 36.Calcular el área de un rombo con diagonales de 8 y 10.
let diagonalMayor=10
let diagonalMenor=8
console.log(diagonalMayor*diagonalMenor)
// 37.Calcular el área de un trapecio con bases 6 y 10 y altura 4.
let baseMayorTrapecio=10
let baseMenorTrapecio=6
let alturaTrapecio=4
console.log((alturaTrapecio*(baseMayorTrapecio+baseMenorTrapecio))/2)
// 38.Generar la tabla de multiplicar del número 8.
multiplicarTabla(8, 1, 10);
// 39.Encontrar el número mayor entre 15, 20 y 25.
console.info(Math.max(15, 20 ,25))
// 40.Encontrar el número menor entre 50, 75 y 100.
console.info(Math.max(50, 75 ,100))
// 41.Calcular el promedio de 7, 9 y 12.
let numberrs=[7, 9 , 12]
console.log(`Promedio de ${numberrs} es = ${calculaPromedioArray(numberrs)}`)
// 42.Calcular la factorial de 7.

// 43.Redondear el número 7.9.

// 44.Calcular el doble de 15.

// 45.Calcular el triple de 6.

// 46.Calcular el cuadrado de 8.

// 47.Calcular el cubo de 4.

// 48.Calcular la suma de los primeros 15 números naturales.

// 49.Calcular la resta entre 100 y 55.

// 50.Multiplicar 6 por 8.

// 51.Dividir 225 por 15.

// 52.Obtener el módulo de 20 dividido por 7.

// 53.Generar un número aleatorio entre 40 y 50.

// 54.Elevar 3 a la potencia de 4.

// 55.Calcular la raíz cuadrada de 169.

// 56.Convertir 80 grados Celsius a Fahrenheit.

// 57.Calcular el área de un rectángulo de base 8 y altura 12.

// 58.Calcular el perímetro de un círculo con radio 8.

// 59.Calcular el volumen de un cubo con lado 5.

// 60.Calcular el área de un rombo con diagonales de 12 y 16.

// 61.Calcular el área de un trapecio con bases 8 y 12 y altura 6.

// 62.Generar la tabla de multiplicar del número 9.

// 63.Encontrar el número mayor entre 25, 30 y 35.

// 64.Encontrar el número menor entre 80, 95 y 110.

// 65.Calcular el promedio de 8, 10 y 14.

// 66.Calcular la factorial de 8.

// 67.Redondear el número 9.2.

// 68.Calcular el doble de 18.

// 69.Calcular el triple de 7.

// 70.Calcular el cuadrado de 10.

// 71.Calcular el cubo de 5.

// 72.Calcular la suma de los primeros 20 números naturales.

// 73.Calcular la resta entre 200 y 75.

// 74.Multiplicar 9 por 11.

// 75.Dividir 300 por 25.

// 76.Obtener el módulo de 30 dividido por 9.

// 77.Generar un número aleatorio entre 60 y 70.

// 78.Elevar 4 a la potencia de 5.

// 79.Calcular la raíz cuadrada de 196.

// 80.Convertir 120 grados Celsius a Fahrenheit.

// 81.Calcular el área de un rectángulo de base 10 y altura 15.

// 82.Calcular el perímetro de un círculo con radio 10.

// 83.Calcular el volumen de un cubo con lado 6.

// 84.Calcular el área de un rombo con diagonales de 14 y 18.

// 85.Calcular el área de un trapecio con bases 10 y 15 y altura 8.

// 86.Generar la tabla de multiplicar del número 10.

// 87.Encontrar el número mayor entre 35, 40 y 45.

// 88.Encontrar el número menor entre 90, 105 y 120.

// 89.Calcular el promedio de 9, 11 y 15.

// 90.Calcular la factorial de 9.

// 91.Redondear el número 10.8.

// 92.Calcular el doble de 21.

// 93.Calcular el triple de 8.

// 94.Calcular el cuadrado de 12.

// 95.Calcular el cubo de 6.

// 96. Calcular la suma de los primeros 25 números naturales.