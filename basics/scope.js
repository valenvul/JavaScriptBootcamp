let varOne = 'varOne';

if(true){
    console.log(varOne);
    let varTwo = 'varTwo';
}

 console.log(varTwo); // esto genera un priblema xq varTwo solo existe dentro del if

//Lexical Scope (lo que usa JavaScript)
//Global Scope  - Defined outside all code blocks
//Local Scope - Defined inside a codeblock

// Podes redefinir una variable dentro de un bloque xq tienen otro scope pero ahi va a shadowear el valor heredado de la variable

let name ='valen';

if (true){
    let name = 'vul';
    console.log(name);
}

// si no se define la variable con let y directamente se le asigna un valor a un nombre, se crea una variable global