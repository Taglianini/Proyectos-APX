class Album { // Definir la clase Album
     title: string;
     songs: string[];
   
    constructor(title: string, songs: string[]) {  // Definir el constructor de la clase Album
        this.title = title;
        this.songs = songs;
    }
   }
   
   class Banda {
   
     members: string[];
     // definir albums - agregar una propiedad para los álbumes de la banda
     albums: Album[];
   
     // Constructor que inicializa los miembros y los álbumes
     constructor(members: string[], albums: Album[]) {
       this.members = members;
       this.albums = albums;
     }
   
   
   
     getFirstAlbum(): Album {
       return this.albums[0]; // Retornar el primer álbum de la lista de álbumes
     }
   
   
     getAllMembers(): string[] {
       return this.members; // string[] 
     }
   
     // Implementar el método getRandomSong para retornar una canción aleatoria de un álbum específico
   
     getRandomSong(albumTitle: string): string {
       // Encontrar el álbum con el título recibido
       const album = this.albums.find((album) => album.title === albumTitle);
       // Si el álbum no existe, retornar un mensaje de error
       if (!album) {
         return "Album not found";
       }
       // Retornar una canción aleatoria del álbum
       return album.songs[Math.floor(Math.random() * album.songs.length)];
     }
   
   }
   // No modifiques el test
   // usalo como una guía y chequeo
   // para saber que tu clase Banda funciona correctamente
   
   function testClaseBanda() {
     // Lista de miembros inicial de la banda
     const members = ["dana", "pau"];
   
     // Definición de un objeto que representa el primer álbum
     const fa = {
       title: "album 1", // Título del álbum
       songs: ["album 1 - tema 1", "album 1 - tema 2"], // Lista de canciones del álbum
     };
   
     // Creación de una instancia de la clase Banda con miembros y álbumes
     const banda = new Banda(members, [
       fa, // Primer álbum
       {
         title: "album 2", // Título del segundo álbum
         songs: ["album 2 - tema 1", "album 2 - tema 2", "album 2 - tema 3"], // Canciones del segundo álbum
       },
     ]);
   
     // Obtener el primer álbum usando el método getFirstAlbum
     const firstAlbum = banda.getFirstAlbum();
   
     // Obtener todos los miembros de la banda usando el método getAllMembers
     const allMembers = banda.getAllMembers();
   
     // Obtener una canción aleatoria del álbum 1 usando el método getRandomSong
     const randomSongAlbum1 = banda.getRandomSong("album 1");
   
     // Validación de las funcionalidades implementadas
     if (
       firstAlbum.title == fa.title && // Verifica si el título del primer álbum coincide
       fa.songs.length == firstAlbum.songs.length && // Verifica si la cantidad de canciones coincide
       JSON.stringify(allMembers.sort()) == JSON.stringify(members.sort()) && // Verifica si los miembros coinciden, sin importar el orden
       fa.songs.includes(randomSongAlbum1) // Verifica si la canción aleatoria está en la lista de canciones del primer álbum
     ) {
       console.log("testClaseBanda passed"); // Mensaje de éxito
     } else {
       // Lanza un error si alguna verificación falla
       throw "testClaseBanda not passed";
     }
   }
   
  //function main() {
     // Ejecutar el test
     //testClaseBanda();
   //}
   
   main();