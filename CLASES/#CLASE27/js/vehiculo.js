// clase de la que heredan los otros objetos su prototipo

function Vehiculo(p_ruedas,p_precio){
    this.ruedas = p_ruedas;
    this.precio = p_precio;
}

Vehiculo.prototype.tocarBocina = function(){
    console.log('PI PI');
}