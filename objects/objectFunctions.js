// las funciones pueden recibir objetos como parametros pero tambien pueden devolver objetos

//challenge area
// una funcion a la que le pasas farenheit y te devuelve el valor en celsius y en kelvin

let tempCalculator = function(farenheit){
    return {
        farenheit: farenheit,
        celsius: (farenheit - 32) * (5/9),
        kelvin: (farenheit - 32) * (5/9) + 273.15
    }
}

let myTemp = tempCalculator(32);
console.log(myTemp.celsius, myTemp.kelvin);