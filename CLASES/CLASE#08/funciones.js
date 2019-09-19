//Función que devuelve el año actual
function anioActual(){
    var fecha = new Date();
    var anio = fecha.getFullYear();
    return anio;
}
//Funcion para calcular edad dentro de x anios
function edadFutura(edad,aniosAsumar){
    var resultado = edad + aniosAsumar;
    return resultado;
}

