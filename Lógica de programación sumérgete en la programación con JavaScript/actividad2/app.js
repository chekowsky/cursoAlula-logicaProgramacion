/*
Pregunta al usuario qué día de la semana es. 
Si la respuesta es "Sábado" o "Domingo", muestra 
"¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
*/
let diaSa = 'Sábado';
let diaDo = 'Domingo'
let eligeUnaSemana =  prompt ('Actividad 1: Elige un dia de semana');

if (eligeUnaSemana == diaSa || eligeUnaSemana == diaDo){
    alert('¡Buen fin de semana!')
}
else
{
    alert('"¡Buena semana!".')
}
/*
Verifica si un número ingresado por el usuario 
es positivo o negativo. 
Muestra una alerta informativa.
*/
let tipo = prompt('Actividad 2: Elige un n° y verifiquemos si es positivo o negativo');

if (tipo >= 0){
    alert ('Es un número positivo : ' + tipo)
}
else{
    alert('Es un número negativo : ' + tipo)
}
/*
Crea un sistema de puntuación para un juego. 
Si la puntuación es mayor o igual a 100, muestra 
"¡Felicidades, has ganado!". En caso contrario, 
muestra "Intenta nuevamente para ganar.".
*/
let puntuacion = prompt('Actividad 3: Anota la cantidad de dominadas de balon que puedes hacer');
if ( puntuacion >= 100) {
    alert('Lo has logrado dominaste el balon como un campeon, tu cantidad : ' + puntuacion)
} else {
    alert('Lo lamento pero sigue intentando debes superar la marca de 100 dominadas o más tu puedes: ' + puntuacion)
}
/*
Crea un mensaje que informe al usuario sobre el saldo de su cuenta, 
utilizando un template string para incluir el valor del saldo.
*/
let valorSaldo = prompt ('Actividad 4: Quieres conocer tu saldo');
let monto = 200
if (valorSaldo = 'si') {
    alert ('su saldo es de  : '+ monto);
} else {
    alert ('ok no revelaremos su saldo')
}

/*
Pide al usuario que ingrese su nombre mediante un prompt. Luego, 
muestra una alerta de bienvenida usando ese nombre.
*/
let nombre = prompt('Actividad 5:Favor ingrese su nombre');
alert('Bienvenido :' + nombre);