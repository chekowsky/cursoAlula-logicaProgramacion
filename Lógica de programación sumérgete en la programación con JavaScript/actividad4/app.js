/*
Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
*/
console.log('act 1');
console.log("¡Bienvenido al programa!");
/*
Crea una variable llamada "nombre" y asígnale tu nombre. 
Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
*/
console.log('act 2');
let nombre = "Miguel Angelo";
console.log("¡Hola, " + nombre + "!");
/*
Crea una variable llamada "nombre" y asígnale tu nombre. 
Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
*/
console.log('act 3');
let nombres = "Miguel Angelo";
alert("¡Hola, " + nombres + "!");
console.log('salio como alerta capaz que ni cuenta se dieron xd')
/*
Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. 
Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
*/
console.log('act 4');
let consulta = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log("Tu lenguaje de programación favorito es: " + consulta);
/*
Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. 
Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". 
Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
*/
console.log('act 5');
let valor1 = 2;
let valor2 = 3;
let resultado = valor1 + valor2;
//sera 5 !musica de suspenso xddddd

console.log("La suma de " + valor1 + " y " + valor2 + " es igual a " + resultado + ".");
/*
Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. 
Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.
log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
*/
console.log('act 6');
let val1 = 2;
let val2 = 4;
let resultados = val1 - val2;

console.log("La suma de " + val1 + " y " + val2 + " es igual a " + resultados + ".");
/*
Pide al usuario que ingrese su edad con prompt. 
Con base en la edad ingresada, 
utiliza un if para verificar si la persona es mayor o menor de edad y muestra 
un mensaje apropiado en la consola.
*/
console.log('act 7');
let edad = prompt("Por favor, ingresa tu edad:");
edad = parseInt(edad);

if (edad >= 18) {
    console.log("Eres mayor de edad. ¡Bienvenido/a!");
} else {
    console.log("Eres menor de edad. Ten cuidado y disfruta tu juventud.");
}

/*
Crea una variable "numero" y solicita un valor con prompt. 
Luego, verifica si es positivo, 
negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
*/
console.log('act 8');
let numero = prompt("Ingresa un número:");
numero = parseFloat(numero);

if (numero > 0) {
    console.log("El número ingresado es positivo.");
} else if (numero < 0) {
    console.log("El número ingresado es negativo.");
} else {
    console.log("El número ingresado es cero.");
}

/*
Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
*/
console.log('act 9');
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

/*
Crea una variable "nota" y asígnale un valor numérico. 
Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
*/
console.log('act 10');
let nota = prompt ('Ingresa tu nota de prueba: ');
nota = parseInt(nota);

if (nota >= 7) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

/*
Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
*/
console.log('act 11');
let numeroAleatorio = Math.random();
console.log("Número aleatorio: " + numeroAleatorio);
/*
Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
*/
console.log('act 12');
let numeroAleatorios = Math.floor(Math.random() * 10) + 1;
console.log("Número aleatorio entre 1 y 10: " + numeroAleatorios);

/*
Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
*/
console.log('act 13');
let numeroAleatorioss = Math.floor(Math.random() * 1000) + 1;
console.log("Número aleatorio entre 1 y 1000: " + numeroAleatorioss);