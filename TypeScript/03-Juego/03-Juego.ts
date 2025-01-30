class Jugador {
    nombre: string;
    puntaje: number;
  
    constructor(nombre: string) {
      this.nombre = nombre;
      this.puntaje = 0;
    }
  
    jugar() {
      console.log(`${this.nombre} está jugando.`);
      this.puntaje++; // Incrementa el puntaje del jugador en 1
    }
  
    obtenerPuntaje() {
      return this.puntaje; // Devuelve el puntaje del jugador
    }
  }
  
  // Creamos un objeto de la clase Jugador
  const jugador1 = new Jugador("Alice");
  
  // Accedemos a las propiedades del jugador
  console.log(`Nombre del jugador: ${jugador1.nombre}`); 
  // Muestra "Nombre del jugador: Alice"
  
  console.log(`Puntaje del jugador: ${jugador1.puntaje}`); 
  // Muestra "Puntaje del jugador: 0"
  
  // Llamamos al método para que el jugador juegue
  jugador1.jugar(); 
  // Muestra "Alice está jugando."
  
  // Accedemos al puntaje actualizado del jugador
  console.log(`Puntaje del jugador: ${jugador1.obtenerPuntaje()}`); 
  // Muestra "Puntaje del jugador: 1"
  