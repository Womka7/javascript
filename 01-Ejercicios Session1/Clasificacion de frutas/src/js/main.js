let fruits=["Manzana","Mandarina","Pera","Mora","Fresa", "Banana","Naranja","Limon"]


let citrusFruits=[]
let sweetFruits=[]

for ( let i=0; i< fruits.length; i++){
    console.log(fruits[i])
}

// fruits.forEach(fruits => {
//     console.log(fruits)
// });

for (let i=0; i< fruits.length; i++){
    if (fruits[i]=="Manzana"||fruits[i]== "Mora"||fruits[i]== "Fresa"||fruits[i]== "Banana"||fruits[i]== "Pera"){
        sweetFruits.push(fruits[i])
    }else{
        citrusFruits.push(fruits[i])
    }
}

// fruits.forEach(fruits => {
//      if (fruits=="Manzana"||fruits== "Mora"||fruits== "Fresa"||fruits== "Banana"||fruits== "Pera"){
//         sweetFruits.push(fruits)
//     }else{
//         citrusFruits.push(fruits)
//     }
// });   


console.group("Frutas critricas")
console.table(citrusFruits)
console.groupEnd

console.group("Frutas dulces")
console.table(sweetFruits)
console.groupEnd