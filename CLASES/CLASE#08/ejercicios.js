//Ejercicio 1

var anioActual = anioActual();

var anioNacimiento = parseInt(prompt('Ingresa el año de tu nacimiento: ', 2000));
console.log(anioNacimiento);
var edadActual = anioActual - anioNacimiento;
console.log(edadActual);

if (edadActual > 25) {
    alert('Tengo más de 25 años.');
} else {
    alert('Tengo 25 años o menos.');
}
//llamada a la función edadFutura
var edadFut = edadFutura(edadActual, 8);
console.log('Dentro de 8 años tendré ' + edadFut);

//===================================================

//Ejercicio 2

var cantidadDeGrupos = 4;
var cantAlumnos = parseInt(prompt('Ingrese la cantidad de alumnos presentes: '));
// console.log(cantAlumnos);
var restoCantAlumnosPorGrupo = cantAlumnos % cantidadDeGrupos;
// console.log(restoCantAlumnosPorGrupo); 
var cantAlumnosPorGrupo = cantAlumnos / cantidadDeGrupos;
cantAlumnosPorGrupo = Math.round(cantAlumnosPorGrupo);

if (restoCantAlumnosPorGrupo == 0 && cantAlumnosPorGrupo > 4) {
    alert('En todos los grupos hay la misma cantidad de alumnos y son más de 4 alumnos por grupo.');
} else if (restoCantAlumnosPorGrupo == 0 && cantAlumnosPorGrupo == 4) {
    // console.log(cantAlumnosPorGrupo + " " + restoCantAlumnosPorGrupo);
    alert('No se cumplen las condiciones. \nHay ' + cantAlumnosPorGrupo + ' alumnos por grupo.');
} else {
    var grupoImp = cantAlumnos - (cantAlumnosPorGrupo * 3);
    alert('No se cumplen las condiciones. \nTres grupos tienen ' + cantAlumnosPorGrupo + ' alumnos' + '\nUno de los grupos tiene ' + grupoImp + ' alumnos.');
}
//si la cantidad de alumnos por grupo es igual a la cantidad de grupos incremento en 1 la cantidad de alumnos por grupo
if (cantAlumnosPorGrupo == cantidadDeGrupos) {
    cantAlumnosPorGrupo++;
    console.log('La cantidad de alumnos por grupo nueva es: ' + cantAlumnosPorGrupo);
}