// para crear objetos se usan corchetes y dentro de estos se definen las propiedades
// el valor se define con : y se separan con comas
let myBook = {
    title:'1984',
    author: 'Goerge Orwell',
    pageCount: 326
}

// para acceder a cada porpiedad se usa dot notation

console.log(myBook.title);

// con dot notation tambien podes cambiar el valor de una propiedad sin alterar el objeto entero

// challenge area
// modelar una persona con nombre edad y ubicacion
// imprimir la oracion nombre is edad and lives in ubicacion.

let person = {
    name : 'Valentina',
    age: 21,
    location: "Argentina"
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)