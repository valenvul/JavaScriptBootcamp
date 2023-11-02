// default arguments
let getScoreText = function(name = 'Anonymus', score = 0){
}

// si no se pasan parametros cuando la llamas los valores son los definidos en la declaracion de la funcion

//challenge area
//tip calculator, total price and tip percent

let getTip = function(total, percentage = .2){
    return total * percentage;
}

let tip = getTip(100, .25);
console.log(tip);

// podes crear template strings con ``
// template strings te deja incertar variables de forma mas limpi auqe ocncatenando strings
// podes hacer calculos dentro de las string templates

let name = 'Valentina';
let age = 21;
console.log(`Hey, my name is ${name} and I'm ${age} years old`);


//challenge area 2
//calculate the tip and return a statement saying the total the percentage and the result

let getTip2 = function(total, percentage = .2){
    return `A ${percentage*100}% tip on $${total} would be $${total * percentage}`;
}

let tip2 = getTip2(40, .25);
console.log(tip2);
