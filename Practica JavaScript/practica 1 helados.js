/* En una heladeria buscan comprar el helado mas caro, 
sin embargo, en el mostrador de helados no aparecen los precios 
de los helados, por lo que tienen que preguntar por los mismos
- Ingresar el monto y mostrar el helado mas caro
- Si hay 2 o mas helados por ese precio mostrarlos todos
- Indicar el vuelto
*/
/*let montoInicial =prompt("Cuanto dinero tienes");
let helado1, helado2, helado3, total; 
helado1 = 20;
helado2= 50;
helado3 = 50; 
helado4 =70;
helado5= 100;


if(montoInicial >= helado1 && montoInicial < helado2) {
total= montoInicial - helado1;
helado1 = "helado de chocolate";
alert(`Usted compro el ${helado1} le quedan ${total} $ disponible`);
} else if ((montoInicial >= helado2 || montoInicial >= helado3) && montoInicial<helado4) {
  helado2= "helado de fresa";
  helado3= "helado de uva";
  alert(`Puede comprar el ${helado2} o el ${helado3}`);
    
}else if(montoInicial >=helado4 && montoInicial<helado5){
total =montoInicial -helado4;
helado4= "Helado de crema";
alert(`Usted compro el ${helado4} le quedan ${total} $ disponible`);

}else if(montoInicial>=helado5){
    total =montoInicial -helado5;
    helado5= "Helado de banana";
    alert(`Usted compro el ${helado5} le quedan ${total} $ disponible`);
}else{
    alert(`Usted no tiene suficiente dinero, pinche jodido`);
}*/
"use strict";
const definirCompra= (nombre) =>{
let dinero = prompt(`dinero de ${nombre}`)

if(dinero >=0.6 && dinero <1) alert (`${nombre}: compro el helado de agua y le quedan ${dinero-0.6} de vuelto`);
else if(dinero >=1 && dinero <1.6) alert (`${nombre}: compro el helado de crema y le quedan ${dinero-1} de vuelto`);
else if(dinero >=1.6 && dinero <1.7) alert (`${nombre}: compro el helado de yuca y le quedan ${dinero-1.6} de vuelto`);
else if(dinero >=1.7 && dinero <1.8) alert (`${nombre}: compro el helado de uva y le quedan ${dinero-1.7} de vuelto`);
else if(dinero >=1.8 && dinero <2.9) alert (`${nombre}: compro el helado de fresa y le quedan ${dinero-1.8} de vuelto`);
else if(dinero >=2.9) alert (`${nombre}: compro el helado de 1/4 kg y le quedan ${dinero-2.9} de vuelto`);
else alert(`${nombre}: Usted no tiene suficiente dinero pinche pobre`);
}
console.log(definirCompra("Kevin"));
console.log(definirCompra("Roberto"));
console.log(definirCompra("Martin"));
