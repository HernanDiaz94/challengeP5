/* Escribí una función sumArray que tome dos parámetros, un arreglo de números ordenados y un número. La función devolverá true, si cualquier combinación de dos números distintos dentro del arreglo suman el número del segundo parámetro. Sino, devolverá false.

Ejemplo:

sumArray([2,5,7,10,11,15,20], 13) // debe retornar `true` porque 2+11 suman 13
sumArray([2,5,7,10,11,15,20], 14) // debe retornar `false` porque no podes sumar 2 veces el mismo valor
 */

function sumArray(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === num) {
      return true;
    }

    if (sum < num) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}
let nros = [2,5,7,10,11,15,20];
let result = sumArray(nros, 13);