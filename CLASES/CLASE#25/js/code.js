// clase SUPERHEROE

function Superheroe(nombre) {
    this.nombre = nombre;
    this.irALuchar = function(){
        console.log(this.nombre + ' fue a luchar...')
    }
    this.miento = function(){
        console.log('NO ESTOY MINTIENDO!!!!!');
    }
}

function Spiderman(nombre){
    Superheroe.call(this,nombre);
    this.trepar = function(){
        console.log(this.nombre + ' está trepando.');
    }
}

console.log(Superheroe.prototype);
console.log(Spiderman.prototype);
console.log(Spiderman.prototype.constructor);
debugger
Spiderman.prototype = Object.create(Superheroe.prototype);  
console.log(Spiderman.prototype);
Spiderman.prototype.constructor = Spiderman;

debugger

console.log(Spiderman.prototype);
console.log(Spiderman.prototype.constructor);


function MujerMaravilla(nombre){
    Superheroe.call(this,nombre);
    this.volar = function(){
        console.log(this.nombre + ' está volando.');
    }
}

MujerMaravilla.prototype = Object.create(Superheroe.prototype);
MujerMaravilla.prototype.constructor = MujerMaravilla;

// debugger
var spider1 = new Spiderman('Spider1');

var mMaravilla = new MujerMaravilla('mujerMaravilla');

