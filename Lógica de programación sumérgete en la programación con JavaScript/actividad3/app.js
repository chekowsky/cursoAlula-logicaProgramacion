/*
Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
*/
console.log('actividad 1');
let contadorASC = 1;

while (contadorASC <= 10) {
  console.log(contadorASC);
  contadorASC++;
}
/*
Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
*/
console.log('actividad 2');
let contadorDESC = 10;

while (contadorDESC >= 0) {
  console.log(contadorDESC);
  contadorDESC--;
}
/*
Crea un programa de cuenta regresiva. 
Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
*/
console.log('actividad 3');
let numeroUtilizado = prompt('Ingrese un numero que contara hasta 0');
let zero=0;

while (numeroUtilizado != zero) {
    numeroUtilizado--;
    console.log(numeroUtilizado);
if (numeroUtilizado == zero)
    alert('terminamos recorrido');
}
/*
Crea un programa de cuenta progresiva. 
Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
*/
console.log('actividad 4');
let numeroUtilizados = prompt('Ingrese un número que contara 0 hasta el nº ingresado');
let cero=0;

while (numeroUtilizados != cero) {
    cero++;
    console.log(cero);
if (numeroUtilizados == cero)
    alert('terminamos recorrido');
}