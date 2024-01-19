alert  ('¡Bienvenida y bievenido a nuestro sitio web!');
//recordar que los datos textos son escritos entre comillas o comillas simples
// los valores numericos no son necesarios ya que asi los reconoce como numerico
let nombre = 'Luna';
let edad = 25;
let numeroDeVentas  = 50;
let saldoDisponible = 1000;
let mensajeDeError = '¡Error! Completa todos los campos';
alert  (mensajeDeError);
//visualizar fallos de la aparición de la alerta
//cuando aparezca el mensaje de alerta error 
//ir a ispeccion de sitio o en este caso apretar F12
//deberá aparecer todo lo anotado anteriormente
console.log(nombre,edad,numeroDeVentas,saldoDisponible,mensajeDeError);
//acá se imprimen nuevas variables que estaran almancenando las ya declaradas
//si se fijan sigo utilizando nom y edad sin  la necesidad de declararlas con let 
//por que existe
nombre = prompt  ('¿cual es el nombre del usuario')
edad = prompt  ('¿cual es su edad?')
if (edad >= 18) {
    alert  ('¡Puedes obtener tu licencia de conducir!');
}
// el else es utilizado que si no cumple la condicion se utiliza como mensaje contradictorio
// en este caso si ingresa un valor menor a 18 no cumple la condicion.
else {
    alert ('Favor, espera tu mayoria de edad');
}
