// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var acumulador = 0;
    for(i = 1; i <= 10; i++){
      acumulador = acumulador + i;
    }
return acumulador;
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
 var pares = [];
 for (i = 0; i < array.length; i++){
  var numero = array[i];
  if (numero % 2 == 0){
    pares.push(numero);
  }
 }
 return pares;
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  var arreglo = [];
  for (i = 0; i < array.length; i++){
    var numero = array[i];
    var elevado = Math.pow(numero, 2);
    arreglo.push(elevado);
  }
  return arreglo;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  var suma = 0;
  for (i = 0; i < array.length; i++){
    var result = array[i];
    var suma = suma + result;
  } 
  return suma;
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  var result = num.toString().length;
  return result;
}
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
