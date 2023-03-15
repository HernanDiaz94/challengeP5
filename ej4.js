/* realiza una funcion que reciba un array de objetos que tiene una 
lista de invitados con nombre y numero de mesa, y cree 
un nuevo objeto que contenga el numero de mesa con sus 
respectivo nombre de invitado */

function generarListaPorMesa(invitados) {
  const listaPorMesa = {};
  invitados.forEach((invitado) => {
    const mesa = invitado.mesa;
    const nombre = invitado.nombre;
    if (listaPorMesa[mesa]) {
      listaPorMesa[mesa].push(nombre);
    } else {
      listaPorMesa[mesa] = [nombre];
    }
  });
  return listaPorMesa;
}

let invitados = [
  {
    nombre: "Juan",
    mesa: 1,
  },
  {
    nombre: "Jose",
    mesa: 1,
  },
  {
    nombre: "Jimena",
    mesa: 2,
  },
  {
    nombre: "Julia",
    mesa: 2,
  },
];

let resultado = generarListaPorMesa(invitados);
console.log(resultado);
