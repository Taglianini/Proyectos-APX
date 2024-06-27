const { getAll, getOne, getAllWith } = require('./products');
function main() {
  console.log('Todos los productos:');
  console.log(getAll());
  console.log(getOne(2));
  console.log(getAllWith(6));
  // [Completar el resto de la lógica] 
  // Imprime los datos devueltos por las otras funciones
}

main();
