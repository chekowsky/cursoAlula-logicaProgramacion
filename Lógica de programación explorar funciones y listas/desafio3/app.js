/*
Crea una función que calcule 
el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, 
que se recibirán como parámetros.
*/
function calcularIMC(altura, peso) {
    let imc = peso / (altura * altura);
    
    // Redondeamos el resultado a dos decimales
    imc = parseFloat(imc.toFixed(2));
    
    return imc;
  }
  
  let altura = 1.80;  // Altura en metros
  let peso = 100;     // Peso en kilogramos
  
  let resultadoIMC = calcularIMC(altura, peso);
  console.log("El índice de masa corporal (IMC) es: " + resultadoIMC);
  
/*
Crea una función que calcule el valor del factorial de un número pasado como parámetro.
*/
function calcularFactorial(numero) {
    if (numero === 0) {
      return 1;
    } else {

      return numero * calcularFactorial(numero - 1);
    }
  }
  
 
  let numero = 5;
  
  let resultadoFactorial = calcularFactorial(numero);
  console.log("El factorial de " + numero + " es: " + resultadoFactorial);
  
/*
Crea una función que convierta un valor en dólares, pasado como parámetro, 
y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). 
Para esto, considera la cotización del dólar igual a R$4,80.
*/
function convertirDolaresAReales(valorDolares) {
    
    let cotizacionDolar = 4.80;
    

    let valorReales = valorDolares * cotizacionDolar;
    
    
    valorReales = parseFloat(valorReales.toFixed(2));
    
    return valorReales;
  }
  

  let valorEnDolares = 50;
  
  let valorEnReales = convertirDolaresAReales(valorEnDolares);
  console.log("$" + valorEnDolares + " es igual a R$" + valorEnReales);
  
/*
Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
utilizando la altura y la anchura que se proporcionarán como parámetros.
*/
function calcularAreaYPerimetro(altura, anchura) {
    
    let area = altura * anchura;
    

    let perimetro = 2 * (altura + anchura);
    

    console.log("Área de la sala: " + area + " metros cuadrados");
    console.log("Perímetro de la sala: " + perimetro + " metros");
  }
  
  
  let alturaSala = 3;     
  let anchuraSala = 5;    
  
  calcularAreaYPerimetro(alturaSala, anchuraSala);
  
/*
Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
*/
function calcularAreaYPerimetroCircular(radio) {

    let pi = 3.14;
  
   
    let area = pi * Math.pow(radio, 2);
  
    
    let perimetro = 2 * pi * radio;
  
    
    console.log("Área de la sala circular: " + area + " metros cuadrados");
    console.log("Perímetro de la sala circular: " + perimetro + " metros");
  }
  
 
  let radioSalaCircular = 4; 
  
  calcularAreaYPerimetroCircular(radioSalaCircular);
  
/*
Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
*/
function mostrarTablaMultiplicar(numero) {
    console.log("Tabla de multiplicar del " + numero + ":");
  
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(numero + " x " + i + " = " + resultado);
    }
  }
  

  let numeroParaTabla = 7;
  
  mostrarTablaMultiplicar(numeroParaTabla);
  
