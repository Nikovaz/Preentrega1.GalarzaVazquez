function calcularCosto(distancia, peso) {
  const costoPorKm = 1000;
  const costoPorKg = 300;
  return (distancia * costoPorKm) + (peso * costoPorKg);
}

// Función para formatear un número decimal con dos decimales y separadores de miles
const formatearDecimal = numero => {
  return numero.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function cotizar() {
  let distancia, peso;

  do {
    distancia = prompt('Ingrese la distancia en kilómetros:');
    distancia = parseFloat(distancia.replace(',', '.')); // Reemplazar coma por punto
  } while (isNaN(distancia) || distancia <= 0);

  do {
    peso = prompt('Ingrese el peso del paquete en kilogramos:');
    peso = parseFloat(peso.replace(',', '.')); // Reemplazar coma por punto
  } while (isNaN(peso) || peso <= 0);

  const costo = calcularCosto(distancia, peso);
  alert(`El costo de envío para una distancia de ${formatearDecimal(distancia)} km y un peso de ${formatearDecimal(peso)} kg es $${formatearDecimal(costo)}.`);
}

cotizar();
