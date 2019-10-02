// var objeto_vacio = {};

// console.log(objeto_vacio.toString);

// console.log(objeto_vacio.toString());

// console.log(Object.getPrototypeOf(objeto_vacio)== Object.prototype);

// console.log(Object.prototype);


// var arreglo = [1,2,3];
// console.log("Devolución de la función Array.prototype "); 
// console.log(Object.getPrototypeOf(arreglo)== Array.prototype);


// /** PROTOTIPO DE EMPLEADO */

// var Empleado = function() {
//     this.empresa = "Acámica";
//     this.area = "";
//     this.nombre = "";
// }

// /** CREACION DE EMPLEADO CONTENIDOS
//  * Toma el prototipo de EMPLEADO para crear
//  * uno nuevo
//  */

//  var empleadoContenidos = Object.create(Empleado);
 
//  /** INSTANCIAR OBJETOS */
//  empleadoContenidos.area = 'Contenidos';
//  empleadoContenidos.empresa = 'Acamica';

//  /**
//   * COMPROBACION DE LA CREACION DE EMPLEADO CONTENIDOS
//   * CON PROTOTIPO EMPLEADO
//   */

// console.log('Comprobación de empleado contenidos con prototipo Empleado.');
// console.log(Object.getPrototypeOf(empleadoContenidos)==Empleado);
// console.log(empleadoContenidos.area);

// // CREO UN EMPLEADO JUAN CONTENIDO CON LAS PROPIEDADES DE UN EMPLEADO
// // DE CONTENIDOS.
// var juanContenidos = Object.create(empleadoContenidos);
// juanContenidos.nombre = 'Juan';
// console.log(juanContenidos.nombre);
// console.log(juanContenidos.empresa);


/** CONSTRUCTORES */

// var Empleado = function(nombre,area) {
//     this.nombre = nombre;
//     this.area = area;
//     this.nombreYarea = nombre + " del area " +area;
// }

// var empleadoJuan = new Empleado('Juan','Contenidos');
    
// console.log(Object.getPrototypeOf(empleadoJuan)==Empleado.prototype);
// console.log(empleadoJuan.nombreYarea);




// // function Perro (raza, nombre) {
// //     this.raza = raza;
// //     this.nombre = nombre;
// //   }
   
// //   // Acá creamos al perro snoopy 
// //   var snoopy = new Perro("Beagle","Snoopy");
  
// //   // Y le enseñamos a ladrar
// //   snoopy.ladrar = function() {
// //     console.log("Woof");
// //   };
  
   
// //   // Ahora creamos al perro Pichichus 
// //   var pichichus = new Perro("Callejero", "Pichichus");

// // pichichus.ladrar = function(){
// //     console.log("GUAU GUAU GUAU");
// // }

// Empleado.prototype.sueldo = 1000;

// var empleadoEze = new Empleado('Ezequiel','Contenidos');

// console.log(empleadoEze.sueldo);

// function Perro(nombre) {
//     this.nombre = nombre;
//   };

//   // Acá creamos a los diferentes perros
// var snoopy = new Perro("Snoopy"); 
// var buddy = new Perro("Buddy");
// var pichichus = new Perro("Pichichus");
// var blackie= new Perro("Blackie");


// //Snoopy dice quien es
// console.log("Soy "+ snoopy.nombre);

// //Buddy dice quien es
// console.log("Soy "+ buddy.nombre);
 
// //Pichichu dice quien es
// console.log("Soy "+ pichichus.nombre);

// // Blackie dice quien es
// console.log("Soy "+ blackie.nombre);

// Perro.prototype.ladrar = function(){
//     console.log("WOOF WOOF");
// }


// var Jugador = function(nombre,posicion){
//     this.nombre = nombre;
//     this.posicion = posicion;
//     this.fatiga = 0; // fatiga inicializa en 0
//         this.correr = function(tiempo){
//             //aumenta la fatiga con el transcurso del tiempo
//             this.fatiga = tiempo*5;
//         }
//         // console.log("--------");
//         // console.log(this);
// }

// var Arquero = function(nombre){
//     Jugador.call(this,nombre,"Arquero");
//     this.atajar = function(){
//         // el arquero ataja la pelota.
//     }
// }

// Arquero.prototype = Object.create(Jugador.prototype);
// Arquero.prototype.constructor = Arquero;  

// var Messi = new Jugador('Lionel Messi','Delantero');
// var Armani = new Arquero('Franco Armani');

// Jugador.prototype.patear = function(){
//     this.fatiga += 20;
// }   



var Animal= function(nombre){
    this.nombre=nombre;
  };
   
  
  var Perro = function(nombre){
    //completar el constructor de Perro
    debugger
    Animal.call(this,nombre);
    this.ladrar= function(){
      console.log("¡Guau Guau!");
    }
  }
Perro.prototype=Object.create(Animal.prototype);
Perro.prototype.constructor = Perro;
  
  //implementar la herencia de Perro con Animal 
   
  var Gato = function(nombre){
     //completar el constructor de Gato
     Animal.call(this,nombre);
     this.maullar=function(){
       console.log("¡Miau Miau!");
     }
  }

  Gato.prototype=Object.create(Animal.prototype);
  Gato.prototype.constructor = Gato;


  var pichichus = new Perro('Pichichus');
  var michi = new Gato('Michi');