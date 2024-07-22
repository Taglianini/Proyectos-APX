function ordernarElArray(lista) {
  // usá el método de burbujeo
  let aux = 0;

  for (let k = 0; k < lista.length; k++) {
    for (let i = 0; i < lista.length - k; i++) {
      if (lista[i + 1] < lista[i]) {
        aux = lista[i];
        lista[i] = lista[i + 1];
        lista[i + 1] = aux;
      }
    }
  }

  return lista;
}
// Array para almacenar los números aleatorios
// creá tu array de 40 numeros aleatorios
function main() {
  let randomNumbers = [];

  // Generar 40 números aleatorios y agregarlos al array
  for (let i = 0; i < 40; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100
    randomNumbers.push(randomNumber);
  }
  let resultado = ordernarElArray(randomNumbers);
  console.log(resultado);

}
// Mostrar el array en la consola
// usá función ordenarElArray para ordenar tu nuevo array
main();