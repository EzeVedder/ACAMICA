$(document).ready(function() {
    console.log("Documento cargado.");

    cargarDocumento();






});








function cargarDocumento(){

    var $encabezado= $("#encabezado");
    $encabezado.after("<div></div>");

    var $contenedor_semanas = $encabezado.next().attr("id","contenedor-semanas");
    $contenedor_semanas.append("<ol></ol>").children().attr("id","lista-semanas");
    var $lista_semanas = $("#lista-semanas");

    for(var i=0; i<7; i++) {
        $lista_semanas.append("<li></li>"); 
    }

}