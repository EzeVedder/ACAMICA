/* Ejercicio de la clase 10

	1 - RESOLUCION DEL EJERCICIO UTILIZANDO LA LIBRERÍA DE JQUERY

*/

// inicializar jquery

$(document).ready(function () {

	$(".botones").mouseover(function () {
		var botonElegido = this.id;
		$("#" + botonElegido).click(function () {
			var n1 = parseInt($("#num1").val());
			var n2 = parseInt($("#num2").val());
			if (isNaN(n1) || isNaN(n2)) {
				//alert('Ingrese un número para continuar.');
				$("#validacion").show('fast');
			} else {
				var resultado = calcular(botonElegido, n1, n2); // FUNCION SWITCH QUE RECIBE COMO PARAMETROS LA OPERACION A REALIZAR Y LOS NUMEROS
				var texto = 'RESULTADO :'
				$("#resultado").text(texto + " " + resultado);
				$("#validacion").hide('fast');
			}
		});
	});
});

//==================================
/**FUNCION SUMAR
 * Funcion que recibe dos numeros por parametro y retorna la suma.
 * @param {primer operando a sumar} n1 
 * @param {segundo operando a sumer} n2 
 */
function sumar(n1, n2) {
	var suma = n1 + n2;
	return suma;
}
//==================================
/**FUNCION RESTAR
 * Funcion que recibe dos numeros por parametro y retorna la resta.
 * @param {primer operando a restar} n1 
 * @param {segundo operando a restar} n2 
 */
function restar(n1, n2) {
	var resta = n1 - n2;
	return resta;
}
//==================================
/**FUNCION MULTIPLICAR
 * Funcion que recibe dos numeros por parametro y retorna el producto.
 * @param {primer operando a multiplicar} n1 
 * @param {segundo operando a multiplicar} n2 
 */
function multiplicar(n1, n2) {
	var producto = n1 * n2;
	return producto;
}
//==================================
/**FUNCION DIVIDIR
 * Funcion que recibe dos numeros por parametro y retorna el cociente.
 * @param {dividendo} n1 
 * @param {divisor} n2 
 */
function dividir(n1, n2) {

	if (n2 != 0) {
		var cociente = n1 / n2;
		return cociente;
	} else {
		return false;
	}
}

// switch para saber el tipo de operación a calcular
function calcular(operacion, n1, n2) {
	debugger
	switch (operacion) {
		case 'btn_sumar':
			return sumar(n1, n2);
		case 'btn_restar':
			return restar(n1, n2);
		case 'btn_multiplicar':
			return multiplicar(n1, n2);
		case 'btn_dividir':
			if (n2 == 0) {
				return 'NO SE PUEDE DIVIDIR POR CERO';
			} else {
				return dividir(n1, n2);
			}
	}
}


// PRIMERA RESOLUCION DEL EJERCICIO. 
// SE DESCARTÓ POR SER INEFICAZ AL DISPARAR UN EVENTO PARA CADA BOTON.


		// $("#btn_restar").click(function(){
		// 	debugger	
		// 	var n1 = parseInt($("#num1").val());
		// 	var n2 = parseInt($("#num2").val());
		// 	var resultado = restar(n1,n2);
		// 	var texto = 'RESULTADO :'	
		// 	$("#resultado").text(texto+" "+resultado);
		// });
		// $("#btn_multiplicar").click(function(){
		// 	//debugger
		// 	var n1 = parseInt($("#num1").val());
		// 	var n2 = parseInt($("#num2").val());
		// 	var resultado = multiplicar(n1,n2);
		// 	var texto = 'RESULTADO :'	
		// 	$("#resultado").text(texto+" "+resultado);
		// });
		// $("#btn_dividir").click(function(){
		// 	debugger
		// 	var n1 = parseInt($("#num1").val());
		// 	var n2 = parseInt($("#num2").val());
		// 	var resultado = dividir(n1,n2);
		// 	if(!resultado) {
		// 		resultado = 'NO SE PUEDE DIVIDIR POR 0.';
		// 		resultado.fontsize = "10px";
		// 	}else {
		// 		resultado = resultado.toFixed(2);
		// 	}
		// 	var texto = 'RESULTADO :'	
		// 	$("#resultado").text(texto+" "+resultado);
		// });