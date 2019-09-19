
//menuBuscarNombres();

//document.getElementById("#buscarNombres")




/*=====================
FUNCIONES
=======================
*/

function buscarPersona(arr, busqueda) {
	var pos = -1;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === busqueda) {
			pos = i;
		}
	}
	return pos;
}

function recorrerMatriz(matriz, busqueda) {
	var posNombre;
	var region;
	var pos = -1;
	//debugger
	for (var i = 0; i < matriz.length; i++) {
		for (var j = 0; j < matriz[i].length; j++) {
			var valorActual = matriz[i][j];
			if (valorActual === busqueda) {
				posNombre = j;
				region = i;
				pos = [region, posNombre];
			}
		}
	}
	return pos;
}


function menuBuscarNombres() {
	var seguir = true;
	var arrayNombres = inicializarArrayNombres();
	var arrayMatrizNombres = inicializarMatrizNombres();
	//debugger
	while (seguir) {
		var opcion = parseInt(prompt('Bienvenido\nPara continuar elija alguna des las opciones.\n1. Búsqueda 1\n2. Búsqueda 2'));
		switch (opcion) {
			case 1:
				busquedaUno(arrayNombres);
				break;
			case 2:
				busquedaDos(arrayMatrizNombres);
				break;
			default:
				alert('No existe la opción seleccionada.');
				break;
		}
		seguir = continuar();
	}
}

function busquedaUno(array) {
	//debugger
	var busqueda = prompt('Ingrese el nombre de la persona a buscar:');
	var pos = buscarPersona(array, busqueda);

	if (pos == -1) {
		alert('La persona buscada no se encuentra en el arreglo.');
	} else {
		alert(busqueda + ' se encuentra en la pos: ' + pos)
	}
}

function busquedaDos(matriz) {

	var busqueda = prompt('Ingrese el nombre de la persona a buscar:');
	var pos = recorrerMatriz(matriz, busqueda);

	if (pos == -1) {
		alert('La persona buscada no se encuentra en el arreglo.');
	} else {
		alert('El nombre ' + busqueda + ' se encuentra en la posición ' + pos[1] + ' de la región ' + (pos[0] + 1));
	}
}

function continuar() {
	var seguir = confirm('¿Desea continuar?');
	return seguir;
}

function mostrarArrayEnPantalla(array, selector) {
	//debugger
	var contenidoHtml = "";
	var lista = document.getElementById(selector);
	for (var i = 0; i < array.length; i++) {
		contenidoHtml = contenidoHtml + "<li>" + array[i] + "</li>";
	}
	lista.innerHTML = contenidoHtml;
}

function inicializarArrayNombres() {
	var arrayNombres = ['Juan', 'Miguel', 'Luis', 'Pedro', 'Leandro'];
	//debugger
	return arrayNombres;
}

function inicializarMatrizNombres() {
	var REGION_1 = ['Alfonso', 'Carlos', 'Antonio'];
	var REGION_2 = ['Daniel', 'Fidel', 'Victoria'];
	var REGION_3 = ['Mariano', 'Galvan', 'Fermin'];

	var REGIONES = [REGION_1, REGION_2, REGION_3];

	return REGIONES;
}

function ayuda() {
	var arrayNombres = inicializarArrayNombres();
	var matrizDeNombres = inicializarMatrizNombres();
	//debugger
	var selector1 = "array-de-nombres";
	var selector2 = "matriz-de-nombres";
	mostrarArrayEnPantalla(arrayNombres, selector1);
	mostrarArrayEnPantalla(matrizDeNombres, selector2);

}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

var numero = getRandomInt(1, 3);

function menuJugarPPT() {
	var eleccionNavegador = getRandomInt(1, 4);
	var eleccionUsuario = parseInt(prompt('Bienvenido\nElegí una opción: \n1 - PIEDRA\n2 - PAPEL\n3 - TIJERA'));
	debugger	
	while (!validarOpcion(eleccionUsuario, 1, 3) || isNaN(eleccionUsuario)) {
		eleccionUsuario = prompt('Elija una opción válida.');
	}
	var resultado = chequearSiGano(eleccionNavegador, eleccionUsuario);
	actualizarResultadoDOM(resultado,'resultado');
	console.log(resultado);
}

function validarOpcion(numero, min, max) {
	var retorno = true;
	if (numero < min || numero > max) {
		retorno = false;
	}
	return retorno;
}

function chequearSiGano(eleccionNav, eleccionUsu) {
	var resultado;
	//debugger
	if(eleccionUsu == eleccionNav){
		resultado = 'Empataste';
	}else if(eleccionUsu == 1 && eleccionNav == 3 || eleccionUsu == 2 && eleccionNav == 1 || eleccionUsu == 3 && eleccionNav == 2){
		resultado = 'Ganaste';
	}else{
		resultado = 'Perdiste';
	}
	return resultado;
}

function actualizarResultadoDOM(resultado,idSelector) {	
	var mostrarResultado = document.getElementById(idSelector);
	mostrarResultado.textContent = resultado;
}