console.group('Cuadrado') // console.group inicia una impresion agrupada en consola el cual aparecera automaticamente

const ladoCuadrado = 5; // declaramos una constante con 5
const perimetroCuadrado = ladoCuadrado * 4; // declaramos una constante con el valor de la variable de ladoCuadraro * 4
const areaCuadrado = ladoCuadrado * ladoCuadrado; // declaramos una constante con el valor de ladoCuadraro * lado Cuadrado

console.log({
  ladoCuadrado,
  perimetroCuadrado,
  areaCuadrado,
});// imprimimos como un objeto con valores

function calcularCuadrado(lado) { //iniciamos una funcion el cual tenemos que darle un parametro que es el valor de lado
  return {
    perimetro: lado * 4, //separar con , para retornar otro valor
    area: lado * lado,
  };
}

console.groupEnd('Cuadrado') // console.group finaliza una impresion agrupada en consola

console.group('Triangulo')// console.group inicia una impresion agrupada en consola el cual aparecera automaticamente

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;// declaramos constantes para dale el valor

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase; // damos el valor de perimetro haciendo el calculo y imprimiendo
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2; // damor el valor para calcular el area del triangulo

function calcularTriangulo(lado1, lado2, base, altura) { // creamos una funcion el cual recibira un parametro con valores del triangulo
  return {
    perimetro: lado1 + lado2 + base,
    area: (base * altura) / 2,
  };// imprimimos como un objeto con valores
}


function calcularAlturaTriangulo(lado1, base) { // ejemplo 4 y 5
  if (lado1 == base) { // ejemplo 4 no es igual a 5 enconses no cumple esta condicion
    console.warn('Este no es un triángulo isosceles');
  } else { // cualquier otro valor si cumple la condicion
    // h = raizcuadrada(lado1**2 - (b**2)/4)
    return Math.sqrt( (lado1 ** 2) - ( (base ** 2) ) / 4 ); // ejemplo raizcuadrada ((4 * 4  = 16) - (5 * 5 = 25) = -9 / 4 = 9.75) = 3.122
    // usar ** dos veces ayuda a decir elevado a la 2 ejemplo 2 ** 3 == a decir 2 * 2 * 2 = 8
    // usamos Math que es un objeto incorporado que tiene propiedades y métodos para constantes y funciones matemáticas. No es un objeto de función.
    //La función Math.sqrt() retorna la raíz cuadrada de un número, que es
  }
}
console.log({
  ladoTriangulo1,
  ladoTriangulo2,
  ladoTrianguloBase,
  alturaTriangulo,
  perimetroTriangulo,
  areaTriangulo,
});// imprimimos como un objeto con valores

console.groupEnd('Triangulo') // console.group finaliza una impresion agrupada en consola

console.group('Circle') // console.group inicia una impresion agrupada en consola el cual aparecera automaticamente

const radioCirculo = 3; // valor del radio del circulo
const diametroCirculo = radioCirculo * 2; // calculo del diametro del circulo
const PI = 3.1415; // damos el valor de PI a la variable PI

const circunferencia = diametroCirculo * PI; // caculo de la circufenrecnia
const areaCirculo = (radioCirculo ** 2) * PI; // calculo del area del circulo

console.log({
  radioCirculo,
  diametroCirculo,
  PI,
  circunferencia,
  areaCirculo,
});// imprimimos como un objeto con valores

function calcularCirculo(radio) { // creamos funcion que optiene el valor de ciruclo
  const diametro = radio * 2; // calculo del diametro con el parametro que dimos de radio
  const radioAlCuadrado = Math.pow(radio, 2); // ejemplo si radio vale 5 , el siguiente valo es la potencia a la que aumentara en este caso 5 ** 2 === 5*5 = 25
  //La función Math.pow() devuelve la base elevada al exponente , esto es, baseexponente.

  
  return {
    circunferencia: diametro * Math.PI, // circuferencia es igual al diametro * el valor de PI
    area: radioAlCuadrado * Math.PI,// La propiedad Math.PI representa la relacion entre la longitud de la circunferencia de un circulo y su diametro, la cual es aproximadamente 3.14159.
  };// imprimimos como un objeto con valores
}

console.groupEnd('Circle') // console.group finaliza una impresion agrupada en consola
