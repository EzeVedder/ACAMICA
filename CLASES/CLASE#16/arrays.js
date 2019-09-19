var ArrayMeses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
var ArrayDiasMes = [31,28,31,30,31,30,31,31,30,31,30,31];


// for(var i = 0; i< meses.length; i++){
//     console.log(meses[i]);
// }

for(var i = 0; i< ArrayMeses.length; i++){
    mes = ArrayMeses[i];
    dias = ArrayDiasMes[i];
    console.log('Mes: '+ mes +' - días: '+ dias);
}


