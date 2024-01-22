
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
asignarTextoElemento('h1', 'desafio n°2');

/*
Crear una función que muestre "¡Hola, mundo!" en la consola.
*/
function saludo() {
    console.log("¡Hola, mundo!");
}


saludo();
/*
Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
*/
function saludar() {
    let saludoNombre = document.getElementById('Nombre').value;
    console.log ("¡Hola, " + saludoNombre + "!");
    return
}

/*
Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
*/
function doble(){
    let devuelveDoble = parseInt(document.getElementById('numX2').value);
    console.log("¡El doble de tu n° es : " + devuelveDoble *2 + "!");
    return
}
/*
Crear una función que reciba tres números como parámetros y devuelva su promedio.
*/
function calcularPromedio(num1, num2, num3) {
    let promedio = (num1 + num2 + num3) / 3;
   
    return promedio;
}
let  resultado = calcularPromedio(5,6, 6,9, 3,2);
console.log("El promedio es: " + resultado);

/*
Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
*/
function encontrarMayor(num1, num2) {
    
    
return num1 > num2 ? num1 : num2;

}

let mayorNumero = encontrarMayor(15, 8);
console.log("El número mayor es: " + mayorNumero);




/*
Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
*/
function calcularCuadrado(numero) {
    return numero * numero;

   
}
let  resultado1 = calcularCuadrado(3);
console.log("El cuadrado de 3 es: " + resultado1);

let  resultado2 = calcularCuadrado(7);
console.log("El cuadrado de 7 es: " + resultado2);
    



