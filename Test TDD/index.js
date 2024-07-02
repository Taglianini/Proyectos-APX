// Escribir acá la función cuentaPalabras
function cuentaPalabras(texto){
    texto = texto.trim();
    const separadorDePalabras = texto.split(" ");
    palabrasContadas = separadorDePalabras.length;

    const palabrasConletraA = separadorDePalabras.filter(palabra => palabra.charAt(0).toLowerCase() === 'a');
    palabrasconAcontadas = palabrasConletraA.length 
    return { cantidadDePalabras: palabrasContadas, palabrasConA:  palabrasconAcontadas }
  }
// no modificar esta funcion
function testCuentaPalabras() {
    const texto =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste temporibus non, eligendi harum adipisci eos provident quaerat eveniet illo placeat distinctio omnis pariatur maiores et voluptates perferendis laborum quam facere.";
    const resultado = cuentaPalabras(texto);
    if (resultado.cantidadDePalabras == 30 && resultado.palabrasConA == 3) {
      console.log("testCuentaPalabras passed");
    } else {
      throw "testCuentaPalabras falló";
    }
  }
  
  function main() {
    testCuentaPalabras();
  }
  
  main();