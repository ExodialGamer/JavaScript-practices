/*Kofla invento una maquina para solo dejar pasar a los mayores de edad
Programa que deje:
Pasar solo a los mayores de edad
El primero que entre luego de las 2 entra gratis
*/
let entradaGratis= false;
let verificarEdad= (nombre) =>{
    let edad;
    let hora;
    let preguntaNombre;
    let continuar;
    do{
    nombre=prompt("decime tu nombre")
    edad=prompt("Dime tu edad");
    hora=prompt("Que hora es"); 
    if(edad>=18){
     if(hora>=2 && hora <7 && entradaGratis==false){
            alert(`Perfecto ${nombre}, eres mayor de edad y aparte entras gratis`);
            entradaGratis=true;
        }else{
            alert(`Perfecto ${nombre}, eres mayor de edad, por llegar tarde la mamas y la entrada esta a 200 varos uwu`);
            
        }
    }else{
        alert(`Lo siento ${nombre}, usted es menor de edad chamaco miado`);
        
    
    }
    continuar=prompt("Desea continuar? Introduzca si o no")
}while(continuar !== "no" || cotinuar !=="No" );
  
}
console.log(verificarEdad(""));
