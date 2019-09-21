// iniciando JQuery

$(document).ready(function(){
    console.log("JQuery cargado.");

    //$("body").html("<h1>Header agregado con JQuery</h1>");
    //$($div_container).children().html("<div></div>");
   // var $div_container = $("body").children();
    //debugger
    $("body").html("<div></div>");
    var $div_container = $("body").children();
    //var $el_h1 =  $("h1").html();
    $($div_container).attr("id","main-container");
    $div_container.html("<button>CLICK ME</button>");
    var $btn = $div_container.children("button");
    
    $btn.click(function(){
        //$(this).slideToggle();
        alert("Me clickeaste");
        
    });


    $btn.hover( function(){
        $(this).animate({"opacity":"0.5"},500);
    } , function(){
        $(this).animate({"opacity":"1"},500);
        console.log("Quitaste el mouse del botón.");
    } );


    


    //debugger   
    //$($div_container).children().html("<div></div>");
    // console.log($el_h1);
    // $("h1").attr("id","header");
    // console.log($("h1").css("margin-top"));
    // $("h1").css("margin-top","100px")
    // console.log($("h1").css("margin-top"));
        






});