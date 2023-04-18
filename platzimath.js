// class PlatziMath {
//   static esPar() {}
//   static esImpar() {}
//   static calcularMedian() {}
// }

const ejemplo = ( a, b ) => { return a+b}; //ejemplo de como crear un array funcion es una funcionsin nombre el cual lo optiene una variable
const ejemplo2 = ( a, b ) => a - b; // si lo que esta en la funcion cabe en una linea no es necesario los corchetes y no es necesario el return

const PlatziMath = {};// CREAR UN OBJETO VACIO

PlatziMath.esPar = function esPar(lista) { // la funcion esPar recibe de parametro lista 
  return !(lista.length % 2); //returna el residuo de la division del total de numero que exiten el la lista y la ! significa que si es 0
  // si es 0 es un falso y es 1 es verdadero esto debio a que si sale 0 significa que no hay residuo por que es numero par
}

PlatziMath.esImpar = function esImpar(lista) {
  return lista.length % 2; //returna el residuo de la division entre 2 que puede dar 0 si es par o 1 si es impar
}

PlatziMath.calcularModa = function calcularModa(lista) {
  const listaCount = {};// objeto vacio

  for (let i = 0; i < lista.length; i++) {
    const elemento = lista[i];// guardamos cada vez que pase un valor del arreglo

    if (listaCount[elemento]) {// si existe ya ese numero entra osea el elemento del objeto 5 existe no para al else si en la tercera vuelta hay otro 5 va decir y ahy un elemento 5 entonces entra y vale 2
      listaCount[elemento] += 1;// incrementa
    } else {
      listaCount[elemento] = 1;//si no existe reseteamos y vuelve a valer 1
    }
  }

  const listaArray = Object.entries(listaCount);// Object.entries coniverte a un arreglo
  //El método Object.entries() devuelve una matriz de pares propios de una propiedad enumerable [key, value] de un objeto dado, en el mismo orden que es proporcionado por for...in (La diferencia es que un bucle for-in enumera las propiedades en la cadena de prototipos).
  const listaOrdenada = PlatziMath.ordenarListaBidimensional(listaArray, 1);// ya convertido en un arreglo bidemensional lo mandamos a una funcion que lo ordene y un 1 para que lo use de indice
  const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];// agarramos el indica de donde esta el valor mayor y restamos 1 debdio a que los arreglos empiezan de 0 y si tenemos ejemplo 5 elementos entonces el ultimo esta en el espacio 4
  const moda = listaMaxNumber[0];//ya le pasamos el valor del mas grande moda
  // console.log({listaCount, listaArray, listaOrdenada, listaMaxNumber});
  // console.log('La moda es: ' + listaMaxNumber[0]);
  return moda;
}

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) { 
  const lista = PlatziMath.ordenarLista(listaDesordenada);// Lista optiene lo que arrega la funcion ordenarLista que ordena de menor a mayo la lista
  const listaEsPar = PlatziMath.esPar(lista);// ListaEsPar tiene el valor de la funcion esPar que regresaba si es verdadero o falso

  if (listaEsPar) {// si listaEsPar es verdadero entra
    const indexMitad1ListaPar = (lista.length / 2) - 1; // optenemos el numero que esta a la mitad -1 
    const indexMitad2ListaPar = lista.length / 2; // optenemos el numero que esta a la mitad
    const listaMitades = [];//creamos un arreglo vacio
    listaMitades.push(lista[indexMitad1ListaPar]); // empujamos el valor de la lista usando los indices para saber los numeros que estan ala mitad
    listaMitades.push(lista[indexMitad2ListaPar]);//empujamos el otro valor

    const medianaListaPar = PlatziMath.calcularPromedio(listaMitades);// usamos la funcion calcularPromedio para sacar el valor de la division de los dos numeros que estan ala mitad
    return medianaListaPar;//returnamos el valor de la mediana
  } else {// si en caso dado es impar tenemos que escontrar el numero que esta a lamitad de la lista
    const indexMitadListaImpar = Math.floor(lista.length / 2);//Devuelve el máximo entero menor o igual a un número, osea nos quita el decimal
    //aunque podriamos usar Math.round() que nos redonde completamente apartir del 5.5 sube a 6 o 4.49 se queda en 4
    const medianaListaImpar = lista[indexMitadListaImpar]; // optenemos el valor del numero que esta ala mistad de la lista gracias al floor
    //console.log(indexMitadListaImpar);
    //console.log(medianaListaImpar);
    return medianaListaImpar;//retornamos el valor de la mediana
  }
}

PlatziMath.calcularPromedio = function calcularPromedio(lista) {//en el objeto PlatziMath.calcularPromedio tiene el valor que retorna la funcion
  function sumarTodosElementos(valorAcumulado, nuevoValor) { //funcion sumarTodosElementos recibe el parametro valorAcumulado y nuevo Valor
    return valorAcumulado + nuevoValor; //retorna el valor de la suma
  }

  const sumaLista = lista.reduce(sumarTodosElementos);//El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
   //esta constante sumaLista optiene el valor que nos proporcina la funcion calcularPromedion y con el metodo reduce lo acumula hasta dejar un solo dato
   //ejemplo const numeros = [1, 2, 3, 4, 5]; const suma = numeros.reduce((acumulado, actual) => {
  //return acumulado + actual;
//}, 0);
//console.log(suma); // Output: 15
  const promedio = sumaLista / lista.length; //con lo que la suma que se sumo en sumaLista dividio entre el total de valores que tenia la lista se sca el promedio
  return promedio; //retornamos el promedio
}//cerramos el objeto PlatziMath.calcularPromedio que contiene la funcion para calcular promedio

PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {//ordenamos la lista
    return valorAcumulado - nuevoValor; //aqui debemos hacer el calculo para saber como ordenarlo mayo a menor, orden alfabetico, etc
    // retornamos valores y va acomodando ejemplo 5 - 10 = -5 entonces se queda en su posicion por que es menor y si fuera
    // 5- 5 = 0 queda igual por que el valor es el mismo, sin embargo si es 10 - 5 = 5 quiere decir que es mayo asi que lo acomoda adelante
  }
  
  // const lista = listaDesordenada.sort((a,b) => a-b);
  const lista = listaDesordenada.sort(ordenarListaSort);//El método sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. La ordenación no es necesariamente estable. El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor Unicode.
  return lista;// retornamos el arreglo ya ordenado
}//cerramos el objeto PlatziMath.ordenarLista que continiene todo para ordenar la lista de arreglos

PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada, i) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
    return valorAcumulado[i] - nuevoValor[i]; //ordena de menor a mayor 
  }
  
  const lista = listaDesordenada.sort(ordenarListaSort); //ordena nuestra lista
  return lista; //retornamos la lista ya ordenada
}
