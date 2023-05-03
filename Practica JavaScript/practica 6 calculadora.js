//Hacer una calculadora
const sumar= (num1,num2) => {
    return parseInt(num1) + parseInt(num2);
}
const restar= (num1,num2) => {
    return parseInt(num1) - parseInt(num2);
}
const multiplicar= (num1,num2) => {
    return parseInt(num1) * parseInt(num2);
}
const dividir= (num1,num2) => {
    return parseInt(num1) / parseInt(num2);
}
const porcentaje= (num1,num2) => {
    return parseInt(num1) * (parseInt(num2)/100);
}


let opcion= prompt("Introduzca 1. Para sumar. 2. Para restar. 3. Para multiplicar. 4. Para divir. 5. Para sacar porcentaje");
let resultado;
if (opcion==1){
    num1=prompt("Introduzca el valor del numero 1");
    num2= prompt("Introduzca el valor del numero 2");
    resultado= sumar(num1,num2);
    alert(`Tu resultado es ${resultado}`);
}else if (opcion==2){
    num1=prompt("Introduzca el valor del numero 1");
    num2= prompt("Introduzca el valor del numero 2");
    resultado= restar(num1,num2);
    alert(`Tu resultado es ${resultado}`);
}else if (opcion==3){
    num1=prompt("Introduzca el valor del numero 1");
    num2= prompt("Introduzca el valor del numero 2");
    resultado= multiplicar(num1,num2);
    alert(`Tu resultado es ${resultado}`);
}else if (opcion==4){
    num1=prompt("Introduzca el valor del numero 1");
    num2= prompt("Introduzca el valor del numero 2");
    resultado= dividir(num1,num2);
    alert(`Tu resultado es ${resultado}`);
}else if(opcion==5) {
    num1=prompt("Introduzca el valor del numero 1");
    num2= prompt("El cuanto porciento de ese valor desea sacar");
    resultado= porcentaje(num1,num2);
    alert(`Tu resultado es ${resultado}%`);
}else{
    alert("Opcion invalida");
}