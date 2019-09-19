//Declaración de variables
var nombreUsuario = "Ezequiel Pane";
var password = "1234";
var saldoCuenta = 10000;
var limiteExtraccion = 5000;
var acceso = false;
var precioAgua = 350;
var precioTelefono = 425;
var precioLuz = 210;
var precioInternet = 570;
var cuentaDestino1 = "000001";
var cuentaDestino2 = "000002";


//Funcion para validar el acceso con usuario y contraseña
function iniciarSesion() {
    debugger
    var nombre = validarUsuario(prompt('Ingrese nombre de usuario: ', 'Ezequiel Pane'));
    if (nombre) {
        var pass = validarPassword(prompt('Ingrese clave de acceso: ', '1234'));
        if (pass) {
            retorno = true;
            acceso = true;
        } else {
            alert('La clave ingresada es incorrecta.');
            retorno = false;
        }
    } else {
        alert('El nombre de usuario es incorrecto.');
        retorno = false;
    }
    return retorno;
}

//Funcion para realizar el login del usuario. Permite cargar las funciones que modifican el html.
function loguearse() {
    var acceder = iniciarSesion();
    if (acceder) {
        alert('Bienvenido a su Home banking ' + nombreUsuario + '.');
        cargarNombreEnPantalla();
        actualizarSaldoEnPantalla();
        actualizarLimiteEnPantalla();
        mostrarCierreSesion();
        ocultarLogin();
    } else {
        alert('Datos incorrectos. Vuelva a intentar.');
    }
}

// FUNCIONES PARA MODIFICAR EL SALDO DE LA CUENTA.

//Funcion que recibe dinero para acreditar al saldo de la cuenta.
function sumarSaldo(dinero) {
    saldoCuenta += dinero;
}

//Funcion que recibe dinero para restar al saldo de la cuenta.
function restarSaldo(dinero) {
    saldoCuenta -= dinero;
}

// VALIDACIONES

//Funcion para validar que el numero ingresado sea entero positivo
function validarEnteroPositivo(numero) {
    debugger
    var retorno = true;
    var buffer = parseInt(numero);
    if (buffer < 0 || buffer == null || buffer == undefined || typeof (buffer) == "string" || isNaN(buffer)) {
        retorno = false;
    }
    return retorno;
}

//Funcion para validar que el dinero a retirar sea módulo de 100 (el home banking sólo permite retirar billetes de 100)
function validarBilletesDe100(dinero) {
    var retorno = true;
    if (dinero % 100 > 0) {
        retorno = false;
    }
    return retorno;
}

function haySaldoDisponible() {
    var retorno = true;
    if (saldoCuenta < 100) {
        retorno = false;
    } else {
        retorno = true;
    }
    return retorno;
}

function validarLimiteExtraccion(extraccion) {
    var retorno = true;
    if (extraccion > limiteExtraccion) {
        retorno = false;
    }
    return retorno;
}

function validarSaldoEnCuenta(extraccion) {
    debugger
    var retorno = true;
    if (extraccion > saldoCuenta) {
        retorno = false;
    }
    return retorno;
}

function validarUsuario(nUsuario) {
    var retorno = true;
    if (nUsuario != nombreUsuario) {
        retorno = false;
    }
    return retorno;
}

function validarPassword(nPassword) {
    var retorno = true;
    if (nPassword != password) {
        retorno = false;
    }
    return retorno;
}

//Funcion que pide al usuario un numero entero positivo. Itera hasta que el usuario ingrese el numero. 
function pedirNumeroEnteroPositivo(msj) {
    var numero;
    var esNumero;
    var retorno;
    do {
        numero = parseInt(prompt(msj));
        esNumero = validarEnteroPositivo(numero);
        if (esNumero) {
            retorno = numero;
        } else {
            alert('ERROR. Por favor, ingrese un número válido.');
        }
    } while (isNaN(numero) || numero < 0);
    return retorno;
}



//Funcion para cerrar la sesión del usuario. Modifica los datos del html.
function cerrarSesion() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a ";
    document.getElementById("saldo-cuenta").innerHTML = "$";
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $";
    document.getElementById('endLogin').style.display = 'none';
    document.getElementById('login').style.display = 'block';
    alert('Ha cerrado la sesión.\nHasta pronto.');
}

/*
    =================================
 */

// FUNCIONES PRINCIPALES

//Funcion que modifica el limite de extracción y modifica el html.
function cambiarLimiteDeExtraccion() {
    if (acceso) {
        debugger
        var limiteNuevo = pedirNumeroEnteroPositivo('Ingrese el nuevo limite de extraccion:');
        if (limiteNuevo >= 5000 && validarBilletesDe100(limiteNuevo)) {
            limiteExtraccion = limiteNuevo;
            alert('La operación se realizó con éxito.\nEl límite nuevo es de: $' + limiteNuevo);
            actualizarLimiteEnPantalla();
        } else {
            alert('Sólo se aceptan billetes de $100 y el límite nuevo no puede ser menor a $5000');
        }
    }
}

//Funcion para extrar saldo de la cuenta y modifica el html.
function extraerDinero() {
    if (acceso) {
        debugger
        if (haySaldoDisponible()) {
            var extraccion = pedirNumeroEnteroPositivo('Ingrese el monto que desea extraer:');
            var saldoAnterior = saldoCuenta;
            if (validarSaldoEnCuenta(extraccion)) {
                if (validarLimiteExtraccion(extraccion)) {
                    if (validarBilletesDe100(extraccion)) {
                        restarSaldo(extraccion);
                        alert('La operación se realizó con éxito.\nHas retirado: $' + extraccion + '\nSaldo anterior: $' + saldoAnterior + '\nSaldo actual: $' + saldoCuenta);
                        actualizarSaldoEnPantalla();
                    } else {
                        alert('Sólo se pueden entregar billetes de $100');
                    }
                } else {
                    alert('El valor de la extracción no puede superar el límite diario.');
                }
            } else {
                alert('La extracción no puede superar el saldo de la cuenta.');
            }
        } else {
            alert('No hay fondos suficientes para realizar la operación.');
        }
    }
}



//Funcion para depositar saldo en la cuenta y modifica el html.
function depositarDinero() {
    if (acceso) {
        debugger
        var deposito = pedirNumeroEnteroPositivo('Ingrese el monto a depositar:\nSe admiten depósitos de hasta $900.000');
        var saldoAnterior = saldoCuenta;
        if (deposito > 100 && deposito <= 900000) {
            sumarSaldo(deposito);
            alert('La operación se realizó con éxito.\nHas depositado: $' + deposito + '\nSaldo anterior: $' + saldoAnterior + '\nSaldo actual: $' + saldoCuenta);
            actualizarSaldoEnPantalla();
        } else if (deposito > 0 || deposito < 100) {
            alert('Error. Ingrese un número mayor a 100.');
        } else {
            alert('Error. Ingrese un número válido.');
        }
    }
}

//Funcion para pagar servicios y modifica el html.
function pagarServicio() {
    if (acceso) {
        var tipoServicio = pedirNumeroEnteroPositivo('Ingrese el número de servicio que desea pagar: \n1 - Agua\n2 - Luz\n3 - Internet\n4 - Teléfono.');
        var valorServicio;
        debugger
        switch (tipoServicio) {
            case 1:
                valorServicio = precioAgua;
                if (saldoCuenta > valorServicio) {
                    saldoAnterior = saldoCuenta;
                    restarSaldo(valorServicio);
                    alert('Has pagado el servicio de Agua\nSaldo anterior: $' + saldoAnterior + '\nDinero descontado: $' + precioAgua + '\nSaldo actual: $' + saldoCuenta);
                    actualizarSaldoEnPantalla();
                    break;
                } else {
                    alert('No hay suficiente saldo en tu cuenta para pagar este servicio.');
                    break;
                }
            case 2:
                valorServicio = precioLuz;
                if (saldoCuenta > valorServicio) {
                    saldoAnterior = saldoCuenta;
                    restarSaldo(valorServicio);
                    alert('Has pagado el servicio de Luz\nSaldo anterior: $' + saldoAnterior + '\nDinero descontado: $' + precioLuz + '\nSaldo actual: $' + saldoCuenta);
                    actualizarSaldoEnPantalla();
                    break;
                } else {
                    alert('No hay suficiente saldo en tu cuenta para pagar este servicio.');
                    break;
                }
            case 3:
                valorServicio = precioInternet;
                if (saldoCuenta > valorServicio) {
                    saldoAnterior = saldoCuenta;
                    restarSaldo(valorServicio);
                    alert('Has pagado el servicio de Internet\nSaldo anterior: $' + saldoAnterior + '\nDinero descontado: $' + precioInternet + '\nSaldo actual: $' + saldoCuenta);
                    actualizarSaldoEnPantalla();
                    break;
                } else {
                    alert('No hay suficiente saldo en tu cuenta para pagar este servicio.');
                    break;
                }
            case 4:
                valorServicio = precioTelefono;
                if (saldoCuenta > valorServicio) {
                    saldoAnterior = saldoCuenta;
                    restarSaldo(valorServicio);
                    alert('Has pagado el servicio de Teléfono\nSaldo anterior: $' + saldoAnterior + '\nDinero descontado: $' + precioTelefono + '\nSaldo actual: $' + saldoCuenta);
                    actualizarSaldoEnPantalla();
                    break;
                } else {
                    alert('No hay suficiente saldo en tu cuenta para pagar este servicio.');
                    break;
                }
            default:
                alert('No existe el servicio que intenta pagar.');
        }
    }
}

//Funcion para transferir saldo a cuentas amigas y modifica el html.
function transferirDinero() {
    if (acceso) {
        var montoTransferencia = pedirNumeroEnteroPositivo('Ingrese el monto a transferir:');
        if (montoTransferencia <= saldoCuenta) {
            var cuentaDestino = prompt('Ingrese la cuenta destino:', "000002");
            if (cuentaDestino == cuentaDestino1 || cuentaDestino == cuentaDestino2) {
                restarSaldo(montoTransferencia);
                alert('Se han transferido: $' + montoTransferencia + '\nCuenta destino: ' + cuentaDestino + '\nSaldo actual: $' + saldoCuenta);
                actualizarSaldoEnPantalla();
            } else {
                alert('La cuenta no existe.');
            }
        } else {
            alert('No hay fondos suficientes para realizar la operación.');
        }
    }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

//Funcion para mostrar el boton de cierre de sesión.
function mostrarCierreSesion() {
    document.getElementById('endLogin').style.display = 'block';
}

function ocultarLogin() {
    document.getElementById('login').style.display = 'none';
}

