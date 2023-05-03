/* se busca comprar boletos de loteria
Si le alcanza para comprar uno, lo compra
Si le alcanza para comprar dos, los compra
Si le alcanza para comprar tres, los compra, y, si le sobra dinero lo regala
Mostrar que compro y vuelto
*/
"use strict";
let  compraBoleto= (nombre) => {
let dinero= prompt(`${nombre}: Introduzca la suma de dinero para la compra de boletos`)
let precioBoletos= 20;
if(dinero >= precioBoletos &&  dinero < precioBoletos*2) alert(`${nombre}: Ha comprado 1 boleto y le ha sobrado ${dinero -precioBoletos} de dinero`);
else if(dinero >= precioBoletos*2 &&  dinero < precioBoletos*3) alert(`${nombre}: Ha comprado 2 boletos y le ha sobrado ${dinero - (precioBoletos*2)} de dinero`);
else if(dinero >= precioBoletos*3) alert(`${nombre}: Ha comprado 3 boletos y le ha sobrado ${dinero - (precioBoletos*3)} de dinero, el cual regala`);
else alert(`${nombre}: No le alcanza la plata pinche pobre`);
}
console.log(compraBoleto("kevin"));