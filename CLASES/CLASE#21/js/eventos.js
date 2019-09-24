
// capturo el elemento padre
var divPadre = document.getElementById('contenedor');
var colores = ['violet','hotpink','orange','blue','green','cyan'];

function agregarDivs() {
    for(var i=1; i < colores.length; i++) {
        var divHijo = document.createElement('div');
        divHijo.textContent = i;
        divHijo.className = 'caja1';
        // asignarEstilo(divHijo);
        divHijo.id = i;
        divHijo.style.background = colores[i];
        divHijo.addEventListener('click',mostrarNro);
        divHijo.addEventListener('click',obtenerColor);
        //divHijo.addEventListener('mouseover',cambioFondo);
        //divHijo.addEventListener('mouseleave',FondoOriginal);
        divPadre.appendChild(divHijo);
    }
}

function mostrarNro(event) {
    var valor = event.currentTarget;
    console.log(valor.textContent); // o valor.id 
}

function cambioFondo(event) {
    event.target.style.background = 'red';
}

function FondoOriginal(event) {
    event.target.style.background = 'green';
}

function obtenerColor(event) {
    var colorActual = event.currentTarget;
    console.log(colorActual.style.background);
}



agregarDivs();

// function asignarEstilo(elem) {
//     elem.style.color = 'red';
// }


