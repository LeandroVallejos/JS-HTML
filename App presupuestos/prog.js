const ingresos = [
  new Ingreso("salarkmkkio", 20.0),
  new Ingreso("venta coche", 1500.0),
];
const gastos = [new Gasto("cuota ingles", 2000.0), new Gasto("asdasd", 150)];

let cargarApp = () => {
  cargarHeader(); //Para actualizar los numeros que se muestran en el header
  cargarIngresos();
  cargarGastos();
};

let totalIngresos = () => {
  let totalIn = 0;
  for (let ingreso of ingresos) {
    totalIn += ingreso.valor;
  }
  return totalIn;
};

let totalGastos = () => {
  let totalGa = 0;
  for (let gasto of gastos) {
    totalGa += gasto.valor;
  }
  return totalGa;
};

let cargarHeader = () => {
  let presupuesto = totalIngresos() - totalGastos();
  let porcentajeGastos = totalGastos() / totalIngresos();
  document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
  document.getElementById("porcentaje").innerHTML =
    formatoPorcentaje(porcentajeGastos);
  document.getElementById("ingresos").innerHTML = formatoMoneda(
    totalIngresos()
  );
  document.getElementById("egresos").innerHTML = formatoMoneda(totalGastos());
};

const formatoMoneda = (valor) => {
  return valor.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
  });
};
const formatoPorcentaje = (valor) => {
  return valor.toLocaleString("es-AR", {
    style: "percent",
    minimumFractionDigits: 2,
  });
};

const cargarIngresos = () => {
  let ingresosHTML = "";
  for (let ingreso of ingresos) {
    ingresosHTML += crearIngresoHTML(ingreso);
  }
  document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
};

const crearIngresoHTML = (ingreso) => {
  let ingresoHTML = `
  <div class="elemento limpiarEstilos">
  <div class="elemento_descripcion">${ingreso.descripcion}</div>
  <div class="derecha limpiarEstilos"></div>
  <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
  <div class="elemento_eliminar">
      <button class="elemento_eliminar--btn">
          <ion-icon name="close-circle-outline"
          onclick="eliminarIngreso(${ingreso.id})"></ion-icon>
      </button>
  </div>
</div>
`;
  return ingresoHTML;
};

const cargarGastos = () => {
  let gastosHTML = "";
  for (let gasto of gastos) {
    gastosHTML += crearGastoHTML(gasto);
  }
  document.getElementById("lista-egresos").innerHTML = gastosHTML;
};
const crearGastoHTML = (gasto) => {
  let gastoHTML = `
  <div class="elemento limpiarEstilos">
  <div class="elemento_descripcion">${gasto.descripcion}</div>
  <div class="derecha limpiarEstilos"></div>
  <div class="elemento_valor">${formatoMoneda(gasto.valor)}</div>
  <div class="elemento_porcentaje>${formatoPorcentaje(
    gasto.valor / totalGastos
  )}</div>
  <div class="elemento_eliminar">
      <button class="elemento_eliminar--btn">
          <ion-icon name="close-circle-outline"
          onclick="eliminarGasto(${gasto.id})"></ion-icon>
      </button>
  </div>
</div>
`;
  return gastoHTML;
};

const eliminarIngreso = (id) => {
  let indiceEliminar = ingresos.findIndex((ingreso) => {
    ingreso.id === id;
  }); //este es cada ingreso de la iteracion, revisa cada id
  ingresos.splice(indiceEliminar, 1); //un elemento a eliminar
  cargarHeader();
  cargarIngresos();
};
const eliminarGasto = (id) => {
  let indiceEliminar = gastos.findIndex((gasto) => {
    gasto.id === id;
  }); //este es cada gasto de la iteracion, revisa cada id
  gastos.splice(indiceEliminar, 1); //un elemento a eliminar
  cargarHeader();
  cargarGastos();
};
const agregarDato = () => {
  let forma = document.forms["forma"];
  let tipo = forma["tipo"];
  let descripcion = forma["descripcion"];
  let valor = forma["valor"];
  if (descripcion.value !== "" && valor.value !== "") {
    if (tipo.value === "ingreso") {
      ingresos.push(new Ingreso(descripcion.value, Number(valor.value))); //tambien en vez de usar Number() puedo agregar + (o sea queda +valor.value) para pasar a numero
      console.log(ingresos);
      cargarHeader();
      cargarIngresos();
    } else {
      gastos.push(new Gasto(descripcion.value, Number(valor.value))); //tambien en vez de usar Number() puedo agregar + (o sea queda +valor.value) para pasar a numero
      cargarHeader();
      cargarGastos();
    }
  }
};
