/* Cofla fue a preguntar por 3 telefonos, pero los encargados del sitio no sabian cual recomendarle, por lo cual 
accede al sistema donde puede ver:
- Particularidades de los 3 telefonos
- Cada uno debe tener color, peso, resolucion de pantalla, camara, procesador y memoria ram
- Los telefonos deben tener la funcionalidad de prender, Reiniciar, tomar fotos y grabar.
*/
class celular{
    constructor(nombre,color,peso,resolucion,camara,procesador,ram){
        this.nombre = nombre;
        this.color=color;
        this.peso=peso;
        this.resolucionPantalla=resolucion;
        this.camara=camara;
        this.procesador=procesador;
        this.memoriaRam=ram;
        this.info= `El nombre del telefono es ${nombre}, lo tenemos en color ${color}, el mismo tiene un peso de ${peso} y una resolucion de ${resolucion}. Su camara principal es de ${camara}, y cuenta con un procesador de ${procesador} y ${ram} de ram`;
    }
    verInfo(){
        document.write(this.info + "<br> <br>");
        }
    
    btnEncendido(){
        alert(`¡El telefono ${this.nombre} se ha encendido!`);
    }
    btnReiniciar(){
        let pregunta= prompt(`Seguro quiere reiniciar el dispositivo ${this.nombre}?`);
        if(pregunta=="Si"|| pregunta=="si"){
            alert("El dispositivo se ha reiniciado");
        }else{
            alert("Entonces no ande tocando en reiniciar el pinshe telefono");
        }
    }
    btnFoto(){
        alert(`Tomaste una bonita foto con tu ${this.nombre}`);
    }
    btnGrabar(){
        alert(`Estas grabando con tu ${this.nombre}`);
    }
}
const celularIphone13ProMax= new celular("Iphone 13 Pro Max", "azul cielo", 240, "2778x1284 pixels", "12 MP f/1.5, 1,9um / Ultrawide: 12 MP f/1.8, 6P, 120º", "Apple A15 Bionic", 6);
const celularRedmiNote12Pro= new celular("Redmi Note 12 Pro", "verde mate",201.8,"2400 x 1080 Pixels", "50 megapíxeles f /1.88", "MediaTek Dimensity 1080", 8 );
const celularSamsungZFold3= new celular("Samsung Galaxy Z Fold 3","negro", 271, "2208 x 1768 pixels", "10 megapíxeles, f/2.2, FOV 80º y fotodiodos de 1,22 µm", "Snapdragon 888 5G con 8 núcleos, 64 bits y litografía de 5 nm (2,84 GHz + 2,4 GHz + 1,8 GHz)", 12);

let opcion =prompt(`Que telefono quieres comprar, el ${celularIphone13ProMax.nombre} (1), el ${celularRedmiNote12Pro.nombre} (2), o el ${celularSamsungZFold3.nombre} (3)`);

if(opcion == 1){
    alert(`Usted ha comprado el ${celularIphone13ProMax.nombre}`)
    let pregunta;
    pregunta= prompt(`Desea encender el dispositivo?`);
    if(pregunta == "si" || pregunta == "Si"){
        celularIphone13ProMax.btnEncendido();
    }
    pregunta= prompt(`Desea reiniciar el dispositivo?`);
    if(pregunta == "si" || pregunta == "Si"){
        celularIphone13ProMax.btnReiniciar();
    }
    pregunta= prompt(`Desea tomar una foto?`);
    if(pregunta == "si" || pregunta == "Si"){
        celularIphone13ProMax.btnFoto();
    }
    pregunta= prompt(`Desea grabar un video?`);
    if(pregunta == "si" || pregunta == "Si"){
        celularIphone13ProMax.btnGrabar();
    }
    alert(`Las especificaciones de su celular se mostraran a continuacion, felicidades por su compra!`);
    celularIphone13ProMax.verInfo();


}else if(opcion == 2){
    alert(`Usted ha comprado el ${celularRedmiNote12Pro.nombre}`)
    let pregunta;
    pregunta= prompt(`Desea encender el dispositivo?`);
    if(pregunta == "si" || pregunta == "Si"){
        celularRedmiNote12Pro.btnEncendido();
    }
    pregunta= prompt(`Desea reiniciar el dispositivo?`);
    if(pregunta == "si" || pregunta == "Si"){
        celularRedmiNote12Pro.btnReiniciar();
    }
    pregunta= prompt(`Desea tomar una foto?`);
    if(pregunta == "si" || pregunta == "Si"){
        celularRedmiNote12Pro.btnFoto();
    }
    pregunta= prompt(`Desea grabar un video?`);
    if(pregunta == "si" || pregunta == "Si"){
        celularRedmiNote12Pro.btnGrabar();
    }
    alert(`Las especificaciones de su celular se mostraran a continuacion, felicidades por su compra!`);
    celularRedmiNote12Pro.verInfo();
}else if(opcion == 3){
    alert(`Usted ha comprado el ${celularSamsungZFold3.nombre}`)
    let pregunta;
    pregunta= prompt(`Desea encender el dispositivo?`);
    if(pregunta == "si" || pregunta == "Si"){
        celularSamsungZFold3.btnEncendido();
    }
    pregunta= prompt(`Desea reiniciar el dispositivo?`);
    if(pregunta == "si" || pregunta == "Si"){
        celularSamsungZFold3.btnReiniciar();
    }
    pregunta= prompt(`Desea tomar una foto?`);
    if(pregunta == "si" || pregunta == "Si"){
        celularSamsungZFold3.btnFoto();
    }
    pregunta= prompt(`Desea grabar un video?`);
    if(pregunta == "si" || pregunta == "Si"){
        celularSamsungZFold3.btnGrabar();
    }
    alert(`Las especificaciones de su celular se mostraran a continuacion, felicidades por su compra!`);
    celularSamsungZFold3.verInfo();
}else{
    alert("Opcion invalida");
}
