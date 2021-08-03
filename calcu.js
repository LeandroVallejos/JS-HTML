let boton = document.getElementById("enviar");
boton.addEventListener("click", revisar, true);

function revisar() {
  const forma = document.getElementById("formulario");
  let primero = parseFloat(forma["num1"].value);
  let segundo = parseFloat(forma["num2"].value);
  const sel = document.getElementById("seleccion").value;
  if (isNaN(primero) || isNaN(segundo)) {
    alert("Falta indicar alguno o ambos números");
  } else {
    let numcheck = true;
    switch (sel) {
      case "suma": {
        sumar(primero, segundo);
        break;
      }
      case "resta": {
        restar(primero, segundo);
        break;
      }
      case "multi": {
        multiplicar(primero, segundo);
        break;
      }
      case "divi": {
        dividir(primero, segundo);
        break;
      }
      default: {
        alert("No seleccionaste ninguna opción");
        numcheck = false;
        break;
      }
    }
    if(numcheck)
    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
  }
}

let resultado;
function sumar(num1, num2) {
  resultado = num1 + num2;
}
function restar(num1, num2) {
  resultado = num1 - num2;
}
function multiplicar(num1, num2) {
  resultado = num1 * num2;
}
function dividir(num1, num2) {
  if (num2 != 0) {
    resultado = num1 / num2;
  } else {
    alert("No se puede dividir por 0");
  }
}
