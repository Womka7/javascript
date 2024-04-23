const coder ={
    id:"c001",
    name:"karina",
    lastName:"pineda",
    brithDate:new Date ("1998-04-23 14:00:00"),
    identification:"5646546",
    location:{
        country:"Colombia",
        state:"antioquia",
        city: "medellin",
        address:"guarne"
    },
    email:"espruebaemail@gmail.com",
    phoneNumber:"3243812089",
    clan:"dell",
    codebtor:"carmen parra",
   
    workingDay:"mañana",
    saludar:function () {
        console.log(`hola mundo soy ${this.name}`)
        return (`hola mundo soy ${this.name}`)
    }, showFullName:function(){
        console.log(this.name, this.lastName)
    }
}
console.group("Show Data")

console.log(coder)
console.log(coder.name, coder.lastName)
console.log(coder["name"],coder["lastName"])
console.log(coder.name, coder["lastName"])
coder.saludar()
console.log(coder.saludar())
coder.showFullName()

console.groupEnd()


console.group("Show Data")

coder.typeBlood = "A +"
coder["gener"]="masculino"

// coder.contactName="daniela perez"
// coder["backupPhoneNumber"]= "325166555"

coder.emergency={}
coder.emergency.contactName="daniela perez"
coder.emergency["backupPhoneNumber"]= "325166555"

Object.defineProperty(coder,"teamLeader",{
    value:"javier",
    writable: true,//  permite que la propiedad sea actualizada
    enumerable: true,// permite que la propiedad sea visible
    configurable:true// permite que la propiedad sea eliminada
})

// Object.defineProperty(coder,"email",{//aqui la informacion de email se va a cambiar por javier
//     value:"javier",
//     writable: true,//  permite que la propiedad sea actualizada
//     enumerable: true,// permite que la propiedad sea visible
//     configurable:true// permite que la propiedad sea eliminada
// })


coder.teamLeader ="kervin" // se puede cambiar si writeable esta en true
// delete coder.emergency// elimina una propiedad COMPLETAMENRE si el configurable se encuentra en true
// ----------------MEJOR MANERA DE ELIMINAR-----------------
// coder.teamLeader=undefined
// -------------------------------
console.log(coder)

console.groupEnd()

console.groupCollapsed("Update data")

coder.id="T001"
coder["phoneNumber"]=111111111111111111111111111155
console.log(coder)

console.groupEnd()

console.groupCollapsed("asignar objects")

const objetoA={
    a:"alpha",
    b:"bravo",
    c:"charpie"
}

const objetoB={
    d:"delta",
    c:"echo",
    e:"foxytrot"
}
console.info(objetoA)
console.info(objetoB)

Object.assign(objetoA,objetoB)//ayuda a sumar a psar las propiedades de un objeto a otro

console.info(objetoA)
console.info(objetoB)

console.groupEnd()

console.groupCollapsed("sumar objects")

const objetoC={
    a:"alpha",
    b:"bravo",
    c:"charpie"
}

const objetoD={
    d:"delta",
    c:"echo",
    e:"foxytrot"
}
const objetoResultado={...objetoC,...objetoD}// lo que hace es crear un nuevo objeto y alli estan los valores de los dos objetos completos
console.log(objetoC)
console.log(objetoD)
console.log(objetoResultado)

console.groupEnd()

// ----------QUE ES LA DESESTRUCTURACIÓN DE UN OBJETO-----------

console.groupCollapsed("Destructuring")

const person = {
    nameCoder: "javier",
    lastNameCoder: "combita",
    birthDateCoder: new Date("1998-04-23 14:00:00"),
    identificationNumberCoder: "109624738486",
    location: {
        countryCoder: "colombia",
        state: "antioquia",
        city: "medellin",
        address: "cl 14 # 58-43",
    },
    emailCoder: "jcomte@outlook.com"
}

// forma manual 

const name= person.nameCoder
const documentId=person.identificationNumberCoder
const email= person.emailCoder

// forma dinamica


const {
    nameCoder:name1,
    identificationNumberCoder:documentId1,
    emailCoder:email1,
}=person

console.log(name)
console.log(documentId)
console.log(email)


let {name:nombreCode1r,
lastName:apellidoCoder1,
location:ubicacion,
location:{
    address:ubicacion2
}
}=coder

console.log(nombreCode1r, apellidoCoder1,ubicacion["address"], ubicacion.address)




console.groupEnd()

console.groupCollapsed("macota exercise")

let mascota={
    nombrem:"niña",
    edad:"8",
    raza:"criolla",
    especie:"animal-perro",
    propietario:{
        nombrePr:"karina",
        apellidoPr:"pineda",
        tipoD:"cc",
        docuId:"123445646"
    }

}

let{ 
    nombrem:numascota,
    edad:edadmascota
}=mascota
console.log(`El nombre de la mascota es : \n ${numascota} \nsu edad es: \n ${edadmascota}`)

console.log

let{
    propietario:{
        nombrePr:dueño,
        docuId:Idueño,
        tipoD:tipoDoc
    }
}=mascota

console.log(`El dueño de \n ${numascota}\n es \n${dueño} \nidentificado con \n${tipoDoc} numero \n${Idueño}`)
console.groupEnd()