// Karina Pineda Parra
// Clan Dell
// 21/04/2024

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
function factorial(number) {
    let resFactorial = 1;
    for (let i = 1; i <= number; i++) {
        resFactorial *= i;
    }
    return resFactorial;
}
console.log(factorial(5))
// 19.Redondear el número 3.6.
console.log(Math.round(3.6))
// 20.Calcular el doble de 9.
console.log(9*2)
// 21.Calcular el triple de 4.
console.log(4*3)
// 22.Calcular el cuadrado de 6.
console.log(Math.pow(6,2))
// 23.Calcular el cubo de 3.
console.log(Math.pow(3,3))
// 24.Calcular la suma de los primeros 10 números naturales.
function sumNaturales(limite){
    let sumarNaturales =0
    for (let i=0; i<=limite; i++){
        sumarNaturales +=i
    }
    return(sumarNaturales)
}
console.log(sumNaturales(10))
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
function volumenCubo(ladoCubo){
    return (Math.pow(ladoCubo,3))
}
console.log(volumenCubo(4))
// 36.Calcular el área de un rombo con diagonales de 8 y 10.
function areaRombo(diagonalMayor,diagonalMenor){
    return(diagonalMayor*diagonalMenor)
}
console.log(areaRombo(10,8))
// 37.Calcular el área de un trapecio con bases 6 y 10 y altura 4.
function areaTrapecio(baseMayorTrapecio,baseMenorTrapecio,alturaTrapecio){
    return((alturaTrapecio*(baseMayorTrapecio+baseMenorTrapecio))/2)
}
console.log(areaTrapecio(10,6,4))
// 38.Generar la tabla de multiplicar del número 8.
multiplicarTabla(8, 1, 10);
// 39.Encontrar el número mayor entre 15, 20 y 25.
console.info(Math.max(15, 20 ,25))
// 40.Encontrar el número menor entre 50, 75 y 100.
console.info(Math.min(50, 75 ,100))
// 41.Calcular el promedio de 7, 9 y 12.
let numberrs=[7, 9 , 12]
console.log(`Promedio de ${numberrs} es = ${calculaPromedioArray(numberrs)}`)
// 42.Calcular la factorial de 7.
console.log(factorial(7))
// 43.Redondear el número 7.9.
console.log(Math.ceil(7.9))
// 44.Calcular el doble de 15.
console.log(15*2)
// 45.Calcular el triple de 6.
console.log(6*3)
// 46.Calcular el cuadrado de 8.
console.log(Math.pow(8,2))
// 47.Calcular el cubo de 4.
console.log(Math.pow(4,3))
// 48.Calcular la suma de los primeros 15 números naturales.
console.log(sumNaturales(15))
// 49.Calcular la resta entre 100 y 55.
console.log(100-55)
// 50.Multiplicar 6 por 8.
console.log(6*8)
// 51.Dividir 225 por 15.
console.log(225/15)
// 52.Obtener el módulo de 20 dividido por 7.
console.log(20%7)
// 53.Generar un número aleatorio entre 40 y 50.
let numberRandom3= Math.round(Math.random()*(50-40)+40)//redondea por encima de 9.9999 y con floor redondea por debajo
console.info(numberRandom3 )
// 54.Elevar 3 a la potencia de 4.
console.log(Math.pow(3,4))
// 55.Calcular la raíz cuadrada de 169.
console.log(Math.sqrt(169))
// 56.Convertir 80 grados Celsius a Fahrenheit.
let gradosCelcius3=80
console.info("Grados Fahrenheit = ", (gradosCelcius3*(9/5))+32)
// 57.Calcular el área de un rectángulo de base 8 y altura 12.
let baseRe=8
let alturaRe=12
console.log(baseRe*alturaRe)
// 58.Calcular el perímetro de un círculo con radio 8.
let radioCi=8
console.log(Math.PI*2*radioCi)
// 59.Calcular el volumen de un cubo con lado 5.
console.log(volumenCubo(5))
// 60.Calcular el área de un rombo con diagonales de 12 y 16.
console.log(areaRombo(12,16))
// 61.Calcular el área de un trapecio con bases 8 y 12 y altura 6.
console.log(areaTrapecio(12,8,6))
// 62.Generar la tabla de multiplicar del número 9.
multiplicarTabla(9,1,10)
// 63.Encontrar el número mayor entre 25, 30 y 35.
console.info(Math.max(80, 95 ,110))
// 64.Encontrar el número menor entre 80, 95 y 110.
console.info(Math.min(80, 95 ,110))
// 65.Calcular el promedio de 8, 10 y 14.
let numbrrs=[8, 10 , 14]
console.log(`Promedio de ${numbrrs} es = ${calculaPromedioArray(numbrrs)}`)
// 66.Calcular la factorial de 8.
console.log(factorial(8))
// 67.Redondear el número 9.2.
console.log(Math.floor(9.2))
// 68.Calcular el doble de 18.
console.log(18*2)
// 69.Calcular el triple de 7.
console.log(7*3)
// 70.Calcular el cuadrado de 10.
console.log(Math.pow(10,2))
// 71.Calcular el cubo de 5.
console.log(Math.pow(5,3))
// 72.Calcular la suma de los primeros 20 números naturales.
console.log(sumNaturales(20))
// 73.Calcular la resta entre 200 y 75.
console.log(200-75)
// 74.Multiplicar 9 por 11.
console.log(9*11)
// 75.Dividir 300 por 25.
console.log(300/25)
// 76.Obtener el módulo de 30 dividido por 9.
console.log(30%9)
// 77.Generar un número aleatorio entre 60 y 70.
let numberRandom4= Math.round(Math.random()*(70-60)+60)//redondea por encima de 9.9999 y con floor redondea por debajo
console.info(numberRandom4 )
// 78.Elevar 4 a la potencia de 5.
console.log(Math.pow(4,5))
// 79.Calcular la raíz cuadrada de 196.
console.log(Math.sqrt(196))
// 80.Convertir 120 grados Celsius a Fahrenheit.
let gradosCelcius4=120
console.info("Grados Fahrenheit = ", (gradosCelcius4*(9/5))+32)
// 81.Calcular el área de un rectángulo de base 10 y altura 15.
let baseRec=10
let alturaRec=15
console.log(baseRec*alturaRec)
// 82.Calcular el perímetro de un círculo con radio 10.
let radioCir=10
console.log(Math.PI*2*radioCir)
// 83.Calcular el volumen de un cubo con lado 6.
console.log(volumenCubo(6))
// 84.Calcular el área de un rombo con diagonales de 14 y 18.
console.log(areaRombo(14,18))
// 85.Calcular el área de un trapecio con bases 10 y 15 y altura 8.
console.log(areaTrapecio(15,10,8))
// 86.Generar la tabla de multiplicar del número 10.
multiplicarTabla(10,1,10)
// 87.Encontrar el número mayor entre 35, 40 y 45.
console.log(Math.max(35,40,45))
// 88.Encontrar el número menor entre 90, 105 y 120.
console.log(Math.min(90,105,120))
// 89.Calcular el promedio de 9, 11 y 15.
console.log(calculaPromedioArray([9,11,15]))
// 90.Calcular la factorial de 9.
console.log(factorial(9))
// 91.Redondear el número 10.8.
console.log(Math.ceil(10.8))
// 92.Calcular el doble de 21.
console.log(21*2)
// 93.Calcular el triple de 8.
console.log(3*8)
// 94.Calcular el cuadrado de 12.
console.log(Math.pow(12,2))
// 95.Calcular el cubo de 6.
console.log(Math.pow(6,3))
// 96. Calcular la suma de los primeros 25 números naturales.
console.log(sumNaturales(25))