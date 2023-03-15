//crea una funcion que reciba un arreglo y devuelva un nuevo array
// con elementos que sean unicamente numeros.

function numerosEnArreglo(arr) {
  let numeros = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      numeros.push(arr[i]);
    }
  }
  return numeros;
}

let arr = [1,2,3,"a","b","c"];

console.log(numerosEnArreglo(arr));
