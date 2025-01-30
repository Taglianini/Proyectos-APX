class Producto {
     constructor(name: string, price: number) {
       this.name = name;
       this.price = price;
     }
     name: string;
     price: number;
     getPrice() {
       return this.price;
     }
   }
                                                  class ProductoTecnologico extends Producto {
                                                       constructor(name: string, price: number, useBatteries: boolean) {
                                                       super(name, price);
                                                       this.useBatteries = useBatteries;
                                                       }
                                                       useBatteries: boolean = false;
                                                       setBatteries(usa: boolean) {
                                                       this.useBatteries = usa;
                                                       }
                                                  }
class ProductoAlimenticio extends Producto {
     fechaCaducidad: Date;
     constructor(name: string , price: number, fechaCaducidad: string) {
       super(name, price);
       // guarda la fecha de caducidad
       this.fechaCaducidad = new Date(fechaCaducidad);
     }
     checkCaducidad():boolean {
       const hoy = new Date();
       // [Completa la lógica para obtener si el producto está vencido]
          return this.fechaCaducidad < hoy; 
     }
}
const pan = new ProductoAlimenticio("Pan Integral", 3.50, "2024-05-30");

const estaVencido = pan.checkCaducidad();
console.log("¿El producto está vencido?:", estaVencido ? "Sí" : "No");

console.log("Nombre del Producto:", pan.name);
console.log("Precio:", pan.getPrice());
console.log("Fecha de Caducidad:", pan.fechaCaducidad);
