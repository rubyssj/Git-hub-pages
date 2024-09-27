var decimal = 3.121;
console.log(decimal);
var miVariable = 18;
console.log("MI EDAD ES " + miVariable)
// ahora una variable constante
const miVar = 3;
console.log("esto es una variable constante "  + miVar)
//no podemos asignar o cambiar un valor una vez declarada
// a mi variable constante
var resultados = 32*23;
console.log("el resultado de esta operacion es :" + resultados);
//operacion con variables
var op1 = 3;
var op2 = 3;
var resultados = op1 + op2;
console.log("el resultado es :" + resultados);
//CONDICIONALES
let miNum = 6;
let miNombre = "Ruben";
// la && significa "y"
// la || significa "o" 
if (miNum > 3 && miNombre == "Ruben") {
    console.log("si el numero da : " + miNum  , "y tambien el nombre es Ruben ");

}  
else {
    console.log("no es el numero : " + miNum);
}
//bucles
//var contador = 0;
//while(contador < 5) {

   // console.log (contador)
   // contador = contador + 1
//}

for(let contador = 0 ; contador < 10 ; contador = contador +1){

    console.log(contador)
}