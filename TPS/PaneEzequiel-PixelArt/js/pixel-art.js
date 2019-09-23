
var paletaDeColores = [];
var grillaDeColores = 1749;
var colorElegido;
var colorRGB;


$(document).ready(function(){
  console.log("JQuery cargado...");
var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];



// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    //debugger
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    colorRGB = hex2rgb(colorActual);
    //pintarGrilla(this);
  })
);


/**
 * FUNCION PARA GENERAR LA PALETA DE COLORES DE MANERA DINÁMICA
 */

 function cargarPaletaDeColores(p_arrayColores) {
   
    var $paletaColores = $("#paleta");
    //debugger
    for(var i=0; i<p_arrayColores.length; i++){
      var colorActual = p_arrayColores[i];
      $paletaColores.append("<div></div>");
      var $div_actual = $paletaColores.children().eq(i);
      $div_actual.attr("id",colorActual);
      $div_actual.attr("class","color-paleta");
      $div_actual.css({"background-color":colorActual});
      //$paletaColores.children("div").css({"background-color":colorActual});
      paletaDeColores.push($div_actual);
      $div_actual.click(getColor);

    }

 }


/**
 * FUNCION PARA GENERAR LA GRILLA DE COLORES DE MANERA DINÁMICA
 */

 function cargarGrillaDeColores(p_grillaDeColores) {
  var $grillaDeColores = $("#grilla-pixeles");
  //debugger
  for(var i=0; i<p_grillaDeColores; i++){
    $grillaDeColores.append("<div></div>");
    var $div_actual = $grillaDeColores.children().eq(i);
    $div_actual.attr("id",i);
    $div_actual.click(pintarGrilla);
  }
}

/** FUNCION PARA MODIFICAR EL INDICADOR DE COLOR */

function getColor(event) {
  //debugger
  colorElegido = this.id;
  var indicadorDeColor = $("#indicador-de-color");
  indicadorDeColor.css("background-color",colorElegido);
  var colorHex = nameToHex(colorElegido);
  colorRGB = hex2rgb(colorHex);
  agregarMensajeDeColor(colorRGB);
}

function agregarMensajeDeColor(p_colorElegido){
  $("#indicador-de-color-mensaje").html("<p>PINCEL "+p_colorElegido+"</p>");
}

function pintarGrilla(event) {
  //debugger
  //var $elemento_pixel = $("#grilla-pixeles").children(this); SELECCIONO TODA LA GRILLA
  var $elemento_pixel = $("#grilla-pixeles").children().eq(this.id);
  $elemento_pixel.css("background-color",colorRGB);
  //this.id.style.background = colorElegido;

}


/** INICIO PROGRAMA */

 cargarPaletaDeColores(nombreColores);
 cargarGrillaDeColores(grillaDeColores);

});