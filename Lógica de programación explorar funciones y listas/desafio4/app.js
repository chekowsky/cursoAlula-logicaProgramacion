/*
Crea una lista vacía llamada "listaGenerica".
*/
let listaGenerica = []; 
console.log("Longitud de la listaGenerica:", listaGenerica.length);

/*
Crea una lista de lenguajes de programación llamada 
"lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
*/
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];


console.log("Lista de lenguajes de programación:", lenguajesDeProgramacion);

/*
Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
*/
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// Verificamos la lista actualizada
console.log("Lista de lenguajes de programación:", lenguajesDeProgramacion);

/*
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
*/
function mostrarLenguajesDeProgramacion() {
    let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python', 'Java', 'Ruby', 'GoLang'];
  
    // Iteramos sobre la lista y mostramos cada elemento en la consola
    for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
      console.log(lenguajesDeProgramacion[i]);
    }
  }
  
  // Llamamos a la función para mostrar los lenguajes de programación
  mostrarLenguajesDeProgramacion();
  
/*
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
*/
function mostrarLenguajesInverso() {
    let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python', 'Java', 'Ruby', 'GoLang'];
  
    // Iteramos sobre la lista en orden inverso y mostramos cada elemento en la consola
    for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
      console.log(lenguajesDeProgramacion[i]);
    }
  }
  
  // Llamamos a la función para mostrar los lenguajes de programación en orden inverso
  mostrarLenguajesInverso();
  
/*
Crea una función que calcule el promedio de los elementos en una lista de números.
*/
function calcularPromedio(lista) {
    // Verificamos si la lista está vacía
    if (lista.length === 0) {
      console.log("La lista está vacía. No se puede calcular el promedio.");
      return;
    }
  
    // Calculamos la suma de los elementos en la lista
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
  
    // Calculamos el promedio
    let promedio = suma / lista.length;
  
    // Mostramos el resultado en la consola
    console.log("El promedio de la lista es: " + promedio);
  }
  
  // Ejemplo de uso:
  let num = [10, 5, 8, 12, 7];
  
  calcularPromedio(num);
  
/*
Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
*/
function encontrarMinMax(lista) {
    // Verificamos si la lista está vacía
    if (lista.length === 0) {
      console.log("La lista está vacía. No se puede encontrar el mínimo y el máximo.");
      return;
    }
  
    // Inicializamos las letiables para el mínimo y el máximo con el primer elemento de la lista
    let minimo = lista[0];
    let maximo = lista[0];
  
    // Iteramos sobre la lista para encontrar el mínimo y el máximo
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] < minimo) {
        minimo = lista[i];
      }
      if (lista[i] > maximo) {
        maximo = lista[i];
      }
    }
  
    // Mostramos los resultados en la consola
    console.log("El número más pequeño es: " + minimo);
    console.log("El número más grande es: " + maximo);
  }
  
  // Ejemplo de uso:
  let numbers = [10, 5, 8, 12, 7];
  
  encontrarMinMax(numbers);
  
  
/*
Crea una función que devuelva la suma de todos los elementos en una lista.
*/
function sumarElementos(lista) {
    // Verificamos si la lista está vacía
    if (lista.length === 0) {
      console.log("La lista está vacía. La suma es 0.");
      return 0;
    }
  
    // Calculamos la suma de los elementos en la lista
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
  
    // Devolvemos la suma
    return suma;
  }
  
  // Ejemplo de uso:
  let numeross = [10, 5, 8, 12, 7];
  
  let resultadosSuma = sumarElementos(numeross);
  console.log("La suma de los elementos es: " + resultadosSuma);
  
/*
Crea una función que devuelva la posición en la lista donde 
se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
*/
function encontrarPosicion(elemento, lista) {
    // Iteramos sobre la lista para encontrar la posición del elemento
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Devolvemos la posición si encontramos el elemento
      }
    }
  
    // Si no encontramos el elemento, devolvemos -1
    return -1;
  }
  
  // Ejemplo de uso:
  let numerosss = [10, 5, 8, 12, 7];
  let elementoBuscar = 8;
  
  let posicion = encontrarPosicion(elementoBuscar, numerosss);
  
  if (posicion !== -1) {
    console.log("El elemento " + elementoBuscar + " se encuentra en la posición " + posicion + " de la lista.");
  } else {
    console.log("El elemento " + elementoBuscar + " no se encuentra en la lista.");
  }
  
/*
Crea una función que reciba dos listas de números del mismo tamaño y 
devuelva una nueva lista con la suma de los elementos uno a uno.
*/

function sumarListas(lista1, lista2) {
    // Verificamos que las listas tengan el mismo tamaño
    if (lista1.length !== lista2.length) {
      console.log("Las listas no tienen el mismo tamaño.");
      return null;
    }
  
    // Creamos una nueva lista para almacenar la suma de los elementos
    let listaSuma = [];
  
    // Iteramos sobre las listas y sumamos los elementos uno a uno
    for (let i = 0; i < lista1.length; i++) {
      listaSuma.push(lista1[i] + lista2[i]);
    }
  
    // Devolvemos la lista con la suma de los elementos
    return listaSuma;
  }
  
  // Ejemplo de uso:
  let listaA = [1, 2, 3, 4];
  let listaB = [5, 6, 7, 8];
  
  var resultadoSuma = sumarListas(listaA, listaB);
  
  if (resultadoSuma !== null) {
    console.log("La suma de las listas es:", resultadoSuma);
  }
  
/*
Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
*/
function calcularCuadrados(lista) {
    // Creamos una nueva lista para almacenar los cuadrados
    let listaCuadrados = [];
  
    // Iteramos sobre la lista y calculamos el cuadrado de cada número
    for (let i = 0; i < lista.length; i++) {
      listaCuadrados.push(lista[i] * lista[i]);
    }
  
    // Devolvemos la lista con los cuadrados
    return listaCuadrados;
  }
  
  // Ejemplo de uso:
  let numeros = [1, 2, 3, 4, 5];
  
  let cuadrados = calcularCuadrados(numeros);
  console.log("Lista original:", numeros);
  console.log("Lista con los cuadrados:", cuadrados);
  