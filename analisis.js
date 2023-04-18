console.log(salarios);

// Análisis personal para Juanita
function encontrarPersona(personaEnBusqueda) { 
  return salarios.find(persona => persona.name == personaEnBusqueda); // es un array funcion
  //.find encuentra el primer valor que tenga la coincidencia y lo da como un objeto a diferencia del .filter que regresa un arreglo con todas las coincidencias
  //persona sera cada objeto que estara en el arreglo
  // const persona = salarios.find((persona) => {
  //   return persona.name == personaEnBusqueda;
  // });
  // return persona;
}

function medianaPorPersona(nombrePersona) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;//accedemos a la propiedad trabajos que se encuentre con lo que regrese encontrarPersona
  console.log(trabajos);
  const salarios = trabajos.map(function (elemento) {//El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
    return elemento.salario;//.map nos ayuda a darle vuelta a los arreglos como si usaramos for o forEch
  
  });
  const medianaSalarios = PlatziMath.calcularMediana(salarios);//llamamos a calcular mediana que esta en un objeto PlatziMath que se encuentra en el archivo platzimath
  //y le damos el valo de lo que se encuentra en el arreglo de salarios

 
  return medianaSalarios;
}

function proyeccionPorPersona(nombrePersona) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;

  let porcentajesCrecimiento = [];
  
  for (let i = 1; i < trabajos.length; i++) {
    const salarioActual = trabajos[i].salario;
    const salarioPasado = trabajos[i - 1].salario;
    const crecimiento = salarioActual - salarioPasado;
    const porcentajeCrecimiento = crecimiento / salarioPasado;
    porcentajesCrecimiento.push(porcentajeCrecimiento)
  }

  const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

  // console.log({porcentajesCrecimiento, medianaPorcentajesCrecimiento});

  const ultimoSalario = trabajos[trabajos.length - 1].salario;
  const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
  const nuevoSalario = ultimoSalario + aumento;

  return nuevoSalario;
}

// Análisis empresarial
/* {
  Industrias Mokepon: {
    2018: [salario]
  }
  Industrias Mokepon: {
    2018: [salario, salarios, salrios]
    2019: 
    2025: 
    2026: 
  },
  Industrias Mokepon: {},
  Industrias Mokepon: {},
  Industrias Mokepon: {},
} */
const empresas = {};//creamos un objeto vacio el cual contendra datos de los trabajo

for (persona of salarios) { //este for dara vuelta a cada valor del arreglo salarios
  for (trabajo of persona.trabajos) {//este for dara vueltas al arreglo 
    if (!empresas[trabajo.empresa]) {//si en caso dato no hay empresa al llegar a este punto del arreglo pues entra y lo agregara a el arreglo que creamos
      empresas[trabajo.empresa] = {};
    }

    if (!empresas[trabajo.empresa][trabajo.year]) {//si tiene años la empresa que creamos entonces entra y lo acrecara al arreglo que creamos
      empresas[trabajo.empresa][trabajo.year] = [];
    }

    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);// y aqui empujamos  los valores de 
  }
}

console.log({empresas});

function medianaEmpresaYear(nombre, year) {
  if (!empresas[nombre]) {
    console.warn('La empresa no existe');
  } else if (!empresas[nombre][year]) {
    console.warn('La empresa no dio salarios ese año');
  } else {
    return PlatziMath.calcularMediana(empresas[nombre][year]);
  }
}


function proyeccionPorEmpresa(nombre) {
  if (!empresas[nombre]) {
    console.warn('La empresa no existe');
  } else {
    const empresaYears = Object.keys(empresas[nombre]);
    const listaMedianaYears = empresaYears.map((year) => {
      return medianaEmpresaYear(nombre, year);
    });
    
    let porcentajesCrecimiento = [];
  
    for (let i = 1; i < listaMedianaYears.length; i++) {
      const salarioActual = listaMedianaYears[i];
      const salarioPasado = listaMedianaYears[i - 1];
      const crecimiento = salarioActual - salarioPasado;
      const porcentajeCrecimiento = crecimiento / salarioPasado;
      porcentajesCrecimiento.push(porcentajeCrecimiento)
    }

    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);

    const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
    const aumento = ultimaMediana * medianaPorcentajesCrecimiento;
    const nuevoMediana = ultimaMediana + aumento;

    return nuevoMediana;
  }
}

// Análisis general
function medianaGeneral() {
  const listaMedianas = salarios.map(
    persona => medianaPorPersona(persona.name)
  );
  
  const mediana = PlatziMath.calcularMediana(listaMedianas);

  return mediana;
}

function medianaTop10() {
  const listaMedianas = salarios.map(
    persona => medianaPorPersona(persona.name)
  );

  const medianasOrdenadas = PlatziMath.ordenarLista(listaMedianas);
  
  const cantidad = listaMedianas.length / 10;
  const limite = listaMedianas.length - cantidad;
  
  const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length);

  const medianaTop10 = PlatziMath.calcularMediana(top10);
  return medianaTop10;
}