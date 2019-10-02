
function sucesor(numero){
    var suc = 1 + numero;

    function mostrarSucesor(){
        console.log(suc);
    }
    return mostrarSucesor;
}

var sucesorDe2 = sucesor(2);

sucesorDe2();