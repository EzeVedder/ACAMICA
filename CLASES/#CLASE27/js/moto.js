// objeto que hereda propiedades y métodos del prototipo padre Vehiculo
function Moto(p_ruedas,p_precio){
    Vehiculo.call(this,p_ruedas,p_precio);
}

Moto.prototype = Object.create(Vehiculo.prototype);
Moto.prototype.constructor = Moto;