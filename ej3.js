/* funcion que recibe un pin en string y debe retornar true si el pin
es numerico de 4 o 6 numeros; si contiene una letra, retorna false */

function validarPin(pin) {
  // Verificar si el pin tiene 4 o 6 dígitos
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }

  // Verificar si el pin contiene solo números
  for (let i = 0; i < pin.length; i++) {
    if (isNaN(pin[i])) {
      return false;
    }
  }

  // Si se llega hasta aquí, el pin es válido
  return true;
}

let pin1 = "1234";
let pin2 = "1234a";

console.log(validarPin(pin1));
console.log(validarPin(pin2));
