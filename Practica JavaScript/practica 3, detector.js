/*En el detector de mentiras mas certero del mundo.
Si el detector devuelve 1, es verdadero (Si no miente, no pasa nada)
Si el detector devuelve 2, es falso (Si miente, entonces recibe una descarga)
Si el detector devuelve 3, es indecision (En caso de indecision repetir la pregunta)

*/
let detector= (nombre) => {
   let valor=0;
    
    do{
    
    valor= prompt(`${nombre}: introduzca un valor del 1 al 3`);
    
    if(valor == 1){
        alert(`el valor es verdadero, no pasa nada ombe`);
        break;
    }else if(valor == 2){
        alert(`el valor es falso, corrientazo pa usted gilipollas`);
        alert(`${nombre} c murio electrokutao`)
        break;
    }else if (valor == 3){
        alert(`Indecision, se repetira la pregunta`);
        continue;
    }else{
        alert(`Opcion invalida`); 
    } 
}while(valor !== "fin");
};
console.log(detector(prompt(`Introduzca su nombre mi don uwu`)));