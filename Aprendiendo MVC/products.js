const products = [
    { id: 1, name: 'Producto 1', stock: 5 },
    {id: 2, name: 'Producto 2', stock: 3 },
    {id: 3, name: 'Producto 3', stock: 8 },
    {id: 4, name: 'Producto 4', stock: 6 }
  ];
  
  function getOne(id) {
    return products.find((product) => product.id === id);
  }
  function getAll(){
    let nombresProd = [];
    for (let i of products){
      nombresProd.push(i.name);
    }
    return nombresProd;
  }
  function getAllWith(minStock){
    return products.filter((i) => i.stock >= minStock);
  }
  module.exports = { 
    getOne, getAll, getAllWith
  };