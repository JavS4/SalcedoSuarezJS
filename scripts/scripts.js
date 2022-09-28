let nota1 = parseInt(prompt(`agrega una nota: `));
let nota2 = parseInt(prompt(`agrega la segunda nota: `));
let nota3 = parseInt(prompt(`agrega la tercera nota: `));



let opcion = prompt('Elige una de estas opciones: \n1- sumar \n2 - promedio \n3 - Promocion \n4 - salir');


for(let i = 0; i < 3; i++){
switch (opcion) {
    case '1':
        sumar();
        break;
    case '2':
        promedio();
        break;
    case '3':
        estado();
        break;
    case '4':
        break;
    default:
        alert('Elegiste una opción inválida');
}
}

function sumar(){
let resultado = nota1 + nota2 + nota3;
alert("La sumatoria total de sus notas es de "+resultado + " puntos");
}

function promedio(){
let promedio = (nota1 + nota2 + nota3)/30;
alert("Su promedio es de "+promedio);
}

function estado(){
if (promedio>=6){
    alert("Estas aprobado");
}
else{
    alert("A diciembre papu");
}
}



