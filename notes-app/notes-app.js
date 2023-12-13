//DOM manipulation

// tenemos el objeto document ya creado que nos permite hacer queries a la pagina
// selecciona el primer elemento que matchea con el selector elegido. EL segundo parrafo sigue en pie
const p = document.querySelector('p');
// p.remove(); //elimina el objeto que seleccionamos

//para selecionar todos
const ps = document.querySelectorAll('p');

ps.forEach(function(p) {
    //cambio el contenido de los parrafos
    p.textContent = '****';
    // p.remove();
});

//Add new element

const new_p = document.createElement('p');
new_p.textContent = 'this is a new js element';
document.querySelector('body').appendChild(new_p);//agrega un parrafo abajo del ultimo elemento en body