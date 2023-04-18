const inputPrice = document.querySelector('#price');// colocamos el valor que este en la caja con el id price que colocamos en html
const inputCoupon = document.querySelector('#coupon');// colocamos el valor que este en la caja con el id coupon que colocamos en html
const btn = document.querySelector('#calcular'); // colocamos el valor que este en el boton con idcalcular que colocamos en html
const pResult = document.querySelector('#result'); // // colocamos el valor que este en la etiqueta <p> con el id result que colocamos en html

btn.addEventListener('click', calcularPrecioConDescuento);// escuchamos el evento click en el constante btn y si es asi entra la funcion calcularPrecioConDescuento

// const arrayUObjecto = undefined; // ['cupones': descuento] {}?

// const couponsObj = {
//   'JuanDC_es_Batman': 30,
//   '3456789': 25,
//   '123': 15,
// };

const couponsList = []; // couponsList es un arreglo vacio
couponsList.push({ 
  name: 'D30',
  discount: 30,
}); // empujamos los valores del objeto a el arreglo que estaba vacio
couponsList.push({
  name: 'D25',
  discount: 25,
});
couponsList.push({
  name: 'D15',
  discount: 15,
});

function calcularPrecioConDescuento() {// entra la funcion cuendo le den clik en el addEvenListener
  const price = Number(inputPrice.value);// Number() es un constructor que crea Numeros cuando llamamos la funcion Number, esto regresa el valor en type Number.
  const coupon = inputCoupon.value; // agarramos el valor que esta en la caja inputcoupon

  if (!price || !coupon) { // si algunos de los valores es diferente a alguno valor osea es falso entonces entra
    pResult.innerText = 'CHANCLA por favor llena el formulario';
    return;
  }
  
  let discount; // creamos uns varianble de descuentos

  function isCouponInArray(couponElement) {// {name, discount} Esta funcion entra cada que va checnado el arreglo con medoto find()
    return couponElement.name == coupon; // retornara el nombre que este el objeto couponElement donde sea identico a donde colocapoms en la caja coupon en el html
  }
  
  const couponInArray = couponsList.find(isCouponInArray); // {} 
  // asi mismo el motodo find a diferencia del filter nos regresa un objeto
  // El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
console.log(couponInArray);// En este log podemos ver en consola que la funcion isCouponInArray termino regresando el objeto que tenia el coupon que colocamos en html
  if (couponInArray) { // aqui indicamos si existe el couponInArray
    discount = couponInArray.discount; // dale valor a discount con el numero que tiene de descuento el objeto couponInArray
  } else {
    pResult.innerText = 'El cupón no es válido'; //si no exitiera entraria aqui avisandonos
    return;
  }

  /*console.log({
    coupon, 
    discount,
    couponInArray,
    couponsList,
  });*/
  
  // if (couponsObj[coupon]) {
  //   discount = couponsObj[coupon];
  // } else {
    // pResult.innerText = 'El cupón no es válido';
    // return;
  // }
  
  // switch (coupon) {
  //   case 'JuanDC_es_Batman':
  //     discount = 30;
  //     break;
  //   case 'no_le_digas_a_nadie':
  //     discount = 25;
  //     break;
  //   default:
      // pResult.innerText = 'El cupón no es válido';
      // return;
  // }
  
  // if (coupon == 'JuanDC_es_Batman') {
  //   discount = 30;
  // } else if (coupon == 'no_le_digas_a_nadie') {
  //   discount = 25;
  // } else {
  // pResult.innerText = 'El cupón no es válido';
  // return;
  // }
  
  const newPrice = (price * (100 - discount)) / 100; // ejemplo calcular descuento 100 - 50 = 50 * 1000 = 50000 / 100 = 500

  pResult.innerText = 'El nuevo precio con descuento es $' + newPrice; // imprimimos en la etiqueta <p> del html lo siguiente
}
