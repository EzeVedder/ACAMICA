/**
 * objeto saldo
 */

var saldos = {
    saldoActual: 0,
    saldoCarrito: 0
};

/**
 * 
 */

window.onload = function(){
    init();
    crearProductos();
    
}


function init() {
    var div_saldoActual = document.getElementById('saldo-actual');
    var div_saldoCarrito = document.getElementById('saldo-carrito');
    saldos.saldoActual = pedirNumero('Ingrese el saldo.');
    div_saldoActual.innerHTML = 'SALDO ACTUAL: $' + saldos.saldoActual;
    div_saldoCarrito.innerHTML = 'SALDO CARRITO: $'+saldos.saldoCarrito;
}





function crearProductos() { 

    // obtener el elemento padre
    var carroProductos = document.getElementById("carro-productos");
    // crear elemento hijo
    //var producto = document.createElement("div");
    // agregar el elemento hijo en el padre.
    //carroProductos.appendChild(producto);

    for (var i = 1; i < 11; i++) {
        var producto = document.createElement("div");
        producto.id = 'producto ' + i;
        producto.className = 'productos';
        producto.innerHTML = i * 12;
        // producto.setAttribute("value",i);
        // debugger
        carroProductos.appendChild(producto);

        producto.addEventListener('click', function () {
            console.log('Producto agregado.');
            agregarAlCarrito(this);
        });
    }

}


function agregarAlCarrito(event) {
    var precio = parseInt(event.textContent);
    actualizarPantalla(precio);
}

function actualizarPantalla(monto) {
    if (monto < saldos.saldoActual) {
        restarSaldo(monto);
        actualizarCarrito(monto);
    } else {
        alert('No hay saldo para realizar la operación.');
        document.getElementById('saldo-actual').style.backgroundColor = 'red';
    }
        
}

function restarSaldo(monto) {
    var div_saldoActual = document.getElementById('saldo-actual');
    saldos.saldoActual -= monto;
    div_saldoActual.innerHTML = 'SALDO ACTUAL: $' + saldos.saldoActual;

}

function actualizarCarrito(monto) {
    var div_saldoCarrito = document.getElementById('saldo-carrito');
    saldos.saldoCarrito += monto;
    div_saldoCarrito.innerHTML = 'SALDO CARRITO $' + saldos.saldoCarrito;
}

function pedirNumero(msj) {
    var numero;
    numero = parseInt(prompt(msj));
    while(numero == 'null' || isNaN(numero) || numero < 200) {
        numero = parseInt(prompt('Error \n' + msj));
    }
    return numero;
}





