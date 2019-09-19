function saludar(msj) {
    alert(msj);
    document.getElementById('encabezado').innerHTML = msj;
}

function kmRecorridos(anios) {
    var kmTotales = 5 * 365 * anios;
    return kmTotales;
}
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
        return 'No se puede dividir por 0.';
    }
}

function calculador() {
    var n1 = parseInt(prompt("Elija el primer número: "));
    var n2 = parseInt(prompt("Elija el segundo número: "));

    console.log(n1);
    console.log(n2);
    var opcion = parseInt(prompt("Elija la operación a realizar: \n1-SUMAR \n2-RESTAR \n3-MULTIPLICAR \n4-DIVIDIR"));

    switch (opcion) {
        case 1:
            var resultadoSuma = sumar(n1, n2);
            console.log('La suma de los números ingresados es: ', resultadoSuma);
            break;
        case 2:
            var resultadoResta = restar(n1, n2);
            console.log('La resta de los números ingresados es: ', resultadoResta);
            break;
        case 3:
            var resultadoProducto = multiplicar(n1, n2);
            console.log('El producto de los números ingresados es: ', resultadoProducto);
            break;
        case 4:
            var resultadoCociente = dividir(n1, n2);
            console.log('El cociente de los números ingresados es: ', resultadoCociente);
            break;
        default:
            console.log('No se pudo realizar la operación.');
            break;
    }
}

var boton_sumar = document.getElementById('sumar');
var el_resultado = document.getElementById('resultado');

//Funciones creadas para los ejercicios de la clase 10 - 


