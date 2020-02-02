// Diferencia de años
export function obtenerDiferencia(year){
  return new Date().getFullYear() - year;
}

// Calcular el total mas el incremento por marca
export function calcularMarca(marca){
  let incremento;

  switch (marca) {
    case 'americano':
      incremento = 1.15;
      break;
    case 'europeo':
      incremento = 1.30;
      break;
    case 'asiatico':
      incremento = 1.05;
      break;
  
    default:
      break;
  }

  return incremento;
}

// Calcular el tipo de seguro
export function obtenerPlan(plan){
  return (plan === 'basico') ? 1.20 : 1.50;
}

// Muestra la primera letra en mayúscula
export function primeraMayuscula(texto){
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}