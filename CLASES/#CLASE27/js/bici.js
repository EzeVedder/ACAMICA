// objeto que hereda propiedades y métodos del prototipo padre Vehiculo
function Bici(p_ruedas,p_precio){
    Vehiculo.call(this,p_ruedas,p_precio);
}

Bici.prototype = Object.create(Vehiculo.prototype);
Bici.prototype.constructor = Bici;