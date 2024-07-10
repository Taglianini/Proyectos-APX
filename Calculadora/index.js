const operaciones = require("./operaciones.js")

function parsearTerminos(argv){
   const respuesta = {};
 
   argv.forEach(function (item, ind) {
     if (item.startsWith("--")) {
       const nombreSinGuiones = item.slice(2);
       respuesta[nombreSinGuiones] = argv[ind + 1];
     }
   });
   
    respuesta.primerTermino = JSON.parse(respuesta.primerTermino);
    respuesta.segundoTermino = JSON.parse(respuesta.segundoTermino);

   return respuesta;    
}

function ejecutarOperacion(objetoOperacion){
const mapa = {
   "+": operaciones.sumar,
   "-": operaciones.restar,
   "/": operaciones.dividir,
   "*": operaciones.multiplicar, 
}
const simbolo = objetoOperacion.operacion;
const ejecutor = mapa[simbolo];

return ejecutor(objetoOperacion.primerTermino, objetoOperacion.segundoTermino);
}

function main(){
   const operacionParseada = parsearTerminos(process.argv.slice(2));
   const resultado = ejecutarOperacion(operacionParseada);
   console.log(resultado);
}

main();
