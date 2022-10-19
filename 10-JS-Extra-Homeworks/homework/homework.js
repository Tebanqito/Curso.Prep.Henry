// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = [];

  for (let clave in objeto) {
    matriz.push([clave, objeto[clave]]);
  }

  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var cantidad = 0;
  var objeto = {};

  for (var i = 0; i < string.length; i++) {
    if (objeto[string[i]] == undefined) {
      for (var j = 0; j < string.length; j++) {
        if (string[j] == string[i]) {
          cantidad++;
        }
      }
      objeto[string[i]] = cantidad;
    }
    cantidad = 0;
  }

  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var string = "";

  for (var i = 0; i < s.length; i++) {
    if (s[i] == s[i].toUpperCase()) string += s[i];
  }

  for (var j = 0; j < s.length; j++) {
    if (s[j] == s[j].toLowerCase()) string += s[j];
  }

  return string;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var palabra = "";
  var frase = "";

  for (var i = 0; i <= str.length; i++) {

    if (str[i] == " " || i == str.length) {
      for (var j = palabra.length - 1; j >= 0; j--) {
        frase = frase + palabra[j];
      }
      if (i < str.length - 1) {
        frase = frase + " ";
      }

      palabra = "";
    }

    if (str[i] !== " " && str[i] !== undefined) palabra = palabra + str[i];
  }

  return frase;
}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numeroString = String(numero);
  var numeroDadoVuelta = "";

  for (var i = numeroString.length - 1; i >= 0; i--) {
    numeroDadoVuelta = numeroDadoVuelta + numeroString[i];
  }

  if (numero == Number(numeroDadoVuelta)) return "Es capicua";
  return "No es capicua";
}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí 
  var cadenaNueva = "";

  for(var i = 0; i < cadena.length; i++) {
    esIgual = cadena[i] == "a" || cadena[i] == "b" || cadena[i] == "c";
    if(!esIgual) cadenaNueva += cadena[i];
  }

  return cadenaNueva;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var stringTemporal1 = "";
  var stringTemporal2 = "";
  var nuevoArray = [];

  for (var i = 0; i < arr.length; i++) {
    stringTemporal1 = arr[i];
    for (var j = i; j < arr.length; j++) {
      if(stringTemporal1.length > arr[j].length) {
        stringTemporal2 = arr[i];
        arr[i] = arr[j];
        arr[j] = stringTemporal2;
      }
    }
    nuevoArray.push(arr[i]);
  }

  return nuevoArray;
}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var nuevoArray = [];

  if (arreglo1.length < arreglo2.length) {
    for (var i = 0; i < arreglo1.length; i++) {
      for (var j = 0; j < arreglo2.length; j++) {
        if (arreglo1[i] == arreglo2[j]) {
          nuevoArray.push(arreglo1[i]);
          break;
        }
      }
    }
  } else {
    for (var i = 0; i < arreglo2.length; i++) {
      for (var j = 0; j < arreglo1.length; j++) {
        if (arreglo2[i] == arreglo1[j]) {
          nuevoArray.push(arreglo2[i]);
          break;
        }
      }
    }
  }

  return nuevoArray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

