/* funcion que reemplace una letra por otra 
que reciba por parametro la frase y las letras, 
sensible a mayusculas y minusculas en js */

function reemplazarLetra(frase, letra1, letra2) {
  let nuevaFrase = "";
  for (let i = 0; i < frase.length; i++) {
    if (frase[i].toLowerCase() === letra1.toLowerCase()) {
      nuevaFrase += letra2;
    } else {
      nuevaFrase += frase[i];
    }
  }
  return nuevaFrase;
}

let frase = "hola como estas";

console.log(reemplazarLetra(frase, "a", "A"));
