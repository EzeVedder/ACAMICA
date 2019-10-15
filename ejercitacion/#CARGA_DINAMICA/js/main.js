
var encabezado = document.getElementById('header'),
    seccion = document.getElementById('seccion'),


    Ejecutar = {
        
        cargarEncabezado: function(encabezado){
            encabezado.textContent = "RED";
            encabezado.style.padding = '20px';
            encabezado.style.background = "red";
        }

    }


Ejecutar.cargarEncabezado(encabezado);