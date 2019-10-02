// variable global con los días de la semana.
var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];


$(document).ready(function () {
    console.log("Documento cargado.");
    cargarDocumento();
});


/** FUNCIONES */

function cargarDocumento() {

    var $encabezado = $("#encabezado");
    $encabezado.hide().fadeIn(800);

    // Cración div contenedor
    $encabezado.after("<div></div>");
    var $contenedor_semanas = $encabezado.next().attr("id", "contenedor-semanas");
    // Creación lista ordenada de elementos y asignación de id
    $contenedor_semanas.append("<ol></ol>").children().attr("id", "lista-semanas");
    // Carga dinámica de los días de la semana en etiqueta ol
    var $lista_semanas = $("#lista-semanas");
    for (var i = 0; i < 7; i++) {
        $lista_semanas.append("<li></li>");
        $dia_actual = $lista_semanas.children().eq(i);
        $dia_actual.text(diasSemana[i]).attr("class", "dia-semana");
        $dia_actual.click(ocultar);
    }
        
    // Creación de los botones para mostrar y cambiar tamaño
    $lista_semanas.after("<button type='button'>MOSTRAR ELEMENTOS</button>");
    var $btn_mostrar = $("button");
    $btn_mostrar.attr("id", "btn-mostrar-elementos");
    $btn_mostrar.after("<button type='button'>CAMBIAR FONT SIZE</button>");
    var $btn_cambiarFontSize = $("#btn-mostrar-elementos").next().attr("id", "btn-cambiar-FontSize");

    // Evento click en botones
    $btn_cambiarFontSize.click(cambiarFontSize);
    $btn_mostrar.click(mostrar);

}

function ocultar() {
    $(this).fadeOut(600);
}

/**
 * Función para recorrer la lista de elementos 
 * Si el display en elemento index esta oculto lo agrega al DOM
 */

function mostrar() {
    $dias = $("li.dia-semana");
    for (var i = 0; i < $dias.length; i++) {
        $dia_actual = $dias.eq(i);
        if ($dia_actual.css("display") == "none") {
            $dia_actual.show();
        }
    }
}

function cambiarFontSize() {
    var $lista_semanas = $("li.dia-semana");

    if ($lista_semanas.css("font-size") == "26px") {
        $lista_semanas.css("font-size", "16px");
    } else {
        $lista_semanas.css("font-size", "26px");
    }

}


