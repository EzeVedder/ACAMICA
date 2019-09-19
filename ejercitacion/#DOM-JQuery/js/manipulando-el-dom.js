var productos = ['arroz','papas','lechuga','galletitas'];

console.log(productos);

var elementoPadre = document.getElementById('lista-supermercado');

for(var i = 0; i<productos.length; i++) {
    var elem = productos[i];
    //debugger
    var li = document.createElement("li");
    li.textContent = elem;
    elementoPadre.appendChild(li);
}


var txt = document.getElementById('cliqueame');

txt.addEventListener('click',agrandarFuente);
txt.addEventListener('mousedown',colorAzul);

function agrandarFuente(e) {
    if(e.target.style.fontSize == '30px') {
        e.target.style.fontSize = '20px';
    }else {
        e.target.style.fontSize = '30px';
    }
}

function colorAzul(e) {
    e.target.style.color = 'blue';
}

var inp = document.getElementsByName('algo');

// posicion 0 es el primer caracter de lo que ingresa el usuario.
inp[0].addEventListener('change',mostrarAlgo);

function mostrarAlgo(e) {
    alert('Ingresaste: '+ e.target.value);
}

$(document).ready(function(){
    console.log('JQUERY CARGADO...');

    $('#cliqueame').click(function(){
        console.log('Cliqueaste el div con id cliqueame');
    })

})