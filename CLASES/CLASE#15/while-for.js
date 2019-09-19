// ejercicio de sentencia while

var continuar = 1;
var opcion;

menu('Ingrese la opción.\n1 - Ejercicio While.\n2 - Ejercicio For.\n3 - Salir.');


function menu(msj){
    opcion = pedirNumeroEnteroPositivo(msj);
    
    debugger
}

function buscarOpcionElegida(opcion){
    switch(opcion){
            
    }
}


// while(continuar == 1){
//     var rta = pedirNumeroEnteroPositivo('¿Desea continuar...?\n1 - Siguiente\n2 - Terminar',1,2);
//     if(rta == 2){
//         alert('Elegí terminar.');
//     }else if(rta < 1 || rta > 2){
//         alert('Error. no es opción válida.')
//     }
//     continuar = rta;
//     debugger
// }

// // ejercicio de sentencia for

// var cantidad = 10;
// var suma = 0

// for(var i = 0; i<cantidad;i++){
//     var suma = i + suma;
// }

// alert('La suma de la sentencia for da como resultado: '+suma);


function validarEnteroPositivo(numero) {
    debugger
    var retorno = true;
    var buffer = parseInt(numero);
    if (buffer < 0 || buffer == null || buffer == undefined || typeof (buffer) == "string" || isNaN(buffer)) {
        retorno = false;
    }
    return retorno;
}

function pedirNumeroEnteroPositivo(msj,min,max) {
    var numero;
    var esNumero;
    var retorno;
    do {
        numero = parseInt(prompt(msj));
        esNumero = validarEnteroPositivo(numero);
        if (esNumero) {
            retorno = numero;
        } else{
            alert('ERROR. Por favor, ingrese un número válido.');
        }
    } while (isNaN(numero) || numero < min || numero > max);
    debugger
    return retorno;
}