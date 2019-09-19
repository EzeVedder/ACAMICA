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
/*================================ */
/**
 * Función que calcula el costo final de una venta.
 * @param {number} importeUnitario Es el importe por producto
 * @param {number} cantidadArticulo Es la cantidad de producto
 * @return {number} Retorna el resultado de multiplicar importeUnitario por cantidadArticulo
 */

function calcularCostoFinal(importeUnitario,cantidadArticulo) {
    var costoFinal = importeUnitario * cantidadArticulo;
    return costoFinal;
}

var calculoDeCostoFinal = function(importeUnitario,cantidadArticulo) {
	var costoFinal = importeUnitario * cantidadArticulo;
	return costoFinal;
}

function obtenerCostoFruta(fruta) {
	//debugger;
	switch(fruta) {
		case "Manzana":
		return 10;
		break;
		case "Limón":
		return 15;
		break;
		case "Ananá":
		return 30;
		break;
		default: 
		return null;
		break;
	}
}

/**
 * Función que pide un número al usuario y lo retorna.
 * @param {string} msj mensaje que recibe como parametro la función.
 * @return {number} numero que retorna la función.
 */
function obtenerNumero(msj) {
	var numero = parseInt(prompt(msj));
	return numero;
}

function menu(msj) {
	var opcion = obtenerNumero(msj);
	switch(opcion) {
		case 1:
			var precioUnit = obtenerNumero('Ingrese el precio unitario del producto.');
			var cantArticulo = obtenerNumero('Ingrese la cantidad de artículos.');
			var costoFinal = calcularCostoFinal(precioUnit,cantArticulo);
			console.log('El costo final a pagar es: $'+costoFinal);
		break;
		case 2:
			var fruta = prompt('Ingrese el nombre de la fruta para conocer el costo:\n - Manzana\n - Limón\n - Ananá ','Manzana');
			var costoFruta = obtenerCostoFruta(fruta);
			if( costoFruta == null) {
				console.log('No hay datos para mostrar.');
			}else {
				console.log('El costo es de $' + costoFruta);
			}
		break;
		default: console.log(opcion +' no es una opción válida.'); 
	}
}