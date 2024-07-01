function parserArgumentos(argv) {
    const respuesta = {};
  
    argv.forEach(function (item, ind) {
      if (item.startsWith("--")) {
        const nombreSinGuiones = item.slice(2);
        respuesta[nombreSinGuiones] = argv[ind + 1];
      }
    });
  
    return respuesta;
  }
  
  function main() {}
  const soloLosArgumentos = process.argv.slice(2);
  
  const objeto = parserArgumentos(soloLosArgumentos);
  
  console.log(objeto);
  main();