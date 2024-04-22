const listFruits = ["apple", //posicion 0
    "orange",
    "banana",
    "grape",
    "strawberry",
    "kiwi",
    "pineapple",
    "watermelon",
    "mango",
    "pear",
    "peach",
    "plum",
    "cherry",
    "blueberry",
    "raspberry",
    "blackberry",
    "lemon",
    "lime",
    "coconut",
    "pomegranate"]
// -----------------FOR EACH-----------------
// EL FOR IN TRAE LAS LLAVES-indice y los VALORES-------


console.groupCollapsed("For Each")
console.log("---------------------------------------------------")
//print list with classic for

for (let i = 0; i < listFruits.length; i++) {
    console.log(listFruits[i])
}
console.log("---------------------------------------------------")

listFruits.forEach(fruit => {
    console.log(fruit)
})

//imprimiendo  lowercase list y uppercase list
console.log("---------------------------------------------------")
listFruits.forEach(fruit => {
    console.log(fruit.toUpperCase(), "\n", fruit.toLowerCase())
})

console.log("---------------------------------------------------")

// listFruits.forEach((ELEMNT, KEY ) =>{
    listFruits.forEach((fruit, position) => {
        console.info("the fruit " + fruit + " is in the position " + position)
    })
    console.groupEnd()
    
    //---------------FOR IN--------------
    // EL FOR IN TRAE LAS LLAVES  O INDICES-------
// ---------
console.groupCollapsed("For in")

for (let key in listFruits) {
    console.log(key)
}
console.log("----------------------------------------------")
for (let key in listFruits) {
    console.log(listFruits[key])
}
console.log("---------------------------------------------------")
console.groupEnd()


//---------------FOR OF--------------
// EL FOR IN TRAE LOS VALORES -------
// ---------
console.groupCollapsed("For of")

for (const fruit of listFruits){
    console.log(fruit)
}

console.groupEnd()

console.table(listFruits)