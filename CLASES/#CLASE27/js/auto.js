// objeto que hereda propiedades y métodos del prototipo padre Vehiculo
function Auto(p_ruedas,p_precio,p_cantPuertas){
    Vehiculo.call(this,p_ruedas,p_precio);
    this.puertas = p_cantPuertas;
}

Auto.prototype = Object.create(Vehiculo.prototype);
Auto.prototype.constructor = Auto;

