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

function init() {
    var div_saldoActual = document.getElementById('saldo-actual');
    // saldos.saldoActual = prompt('Ingrese el saldo actual.');
    div_saldoActual.innerHTML = 'SALDO ACTUAL: ' + saldos.saldoActual;
}


function crearProductos() {
    
    // obtener el elemento padre
    var carroProductos = document.getElementById("carro-productos");
    // crear elemento hijo
    //var producto = document.createElement("div");
    // agregar el elemento hijo en el padre.
    //carroProductos.appendChild(producto);

    for (var i = 0; i < 11; i++) {
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



init();
crearProductos();

function agregarAlCarrito(event){
    debugger
    var precio = parseInt(event.textContent);
    saldos.saldoCarrito += precio;
    
    console.log(saldos.saldoCarrito);
}







