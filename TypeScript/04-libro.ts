class Libro {
    titulo: string;
    autor: string;
    añoPublicacion: number;

    constructor(titulo: string, autor: string, añoPublicacion: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.añoPublicacion = añoPublicacion;
    }
    getAntiguedad(): number {
      const añoActual = new Date().getFullYear();
      const antiguedad = añoActual - this.añoPublicacion;
      return antiguedad;
        // [Tu código para devolver la antiguedad basada en la propiedad this.añoPublicacion]
    }
} 

// Creando instancias de la clase Libro
const libro1 = new Libro("Cien años de soledad", "Gabriel García Martinez", 1967);
const libro2 = new Libro("Padre pobre, Padre rico", "Lautarito", 1969);

// Usando el método getAntiguedad y mostrando detalles de los libros
console.log(`El libro "${libro1.titulo}" de ${libro1.autor}, publicado en ${libro1.añoPublicacion}, tiene ${libro1.getAntiguedad()} años de antigüedad.`);

console.log(`El libro "${libro2.titulo}" de ${libro2.autor}, publicado en ${libro2.añoPublicacion}, tiene ${libro2.getAntiguedad()} años de antigüedad.`);
