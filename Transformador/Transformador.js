// 1 Crear la función transformarFrase. $$
// 2 Crear una copia del array frase con la primera letra de cada palabra en mayúscula utilizando el método map. $$
// 3 En cada iteración de map, convertir la primera letra de la palabra a mayúscula y concatenarla  con el resto de la palabra en minúscula utilizando los métodos charAt y slice. Devolver cada palabra con la primera letra en mayúscula. $$
// 4 Unir las palabras de fraseMayuscula en una sola cadena de texto, separadas por un espacio, utilizando el método join $$
// 5 Devolver la variable oracion desde la función. $$
// 6 Por último, se puede invocar la función transformarFrase con el array frase como argumento para obtener la oración con las palabras en mayúscula. $$

function transformarFrase(frase) {
    // 
    const arrayDePalabras = frase // tu código;
    const fraseMayuscula = arrayDePalabras.map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1));
    // Completar aquí
    const oracion = fraseMayuscula.join(" ");// unir las palabras
    return oracion;
  }

  function main() {
    const frase = ['La', 'vida', 'es', 'como', 'una', 'caja', 'de', 'chocolates'];
    const oracionMayuscula = transformarFrase(frase);
    console.log(oracionMayuscula); // 'La Vida Es Como Una Caja De Chocolates'
  }
  
  main();