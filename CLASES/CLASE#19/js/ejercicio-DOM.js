


function modificarColorEncabezado(p_IdElem, p_color) {
    //debugger
    var elemento = document.getElementById(p_IdElem);
    elemento.style.background = p_color;
}

function modificarColorCaja1(p_ClassElem) {
    //debugger
    var elementos = document.getElementsByClassName(p_ClassElem);
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.border = '2px solid blue';
        elementos[i].style.background = 'hotpink';
    }
}

function modificarParrafo(p_idParrafo, p_color) {
    //debugger
    var elemento = document.getElementById(p_idParrafo);
    elemento.style.color = p_color;
}


function modificarColor(e) {
    //debugger
    if (e.target.style.color == 'orange') {
        e.target.style.color = 'black';
    } else {
        e.target.style.color = 'orange';
    }
}

function colorBlanco(e) {
    //debugger
    e.target.style.color = 'white';
}



var elementoCaja1 = document.getElementById('5');
elementoCaja1.addEventListener('mousedown', modificarColor);

