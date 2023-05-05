/*Hacer lo mismo que en el ejercicio 7, pero con algunas caracteristicas extras para celulares gama alta
- Hacer que puedan grabar en camara super lenta
- Reconocimiento facial
- Camara extra
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
        
    }
        btnEncendido(){
            let pregunta;
        pregunta= prompt(`Desea encender el dispositivo?`);
        if(pregunta == "si" || pregunta == "Si"){
            alert(`¡El telefono ${this.nombre} se ha encendido!`);
        }
            
        }
        btnReiniciar(){
            let pregunta= prompt(`Desea reiniciar el dispositivo?`);
            if(pregunta == "si" || pregunta == "Si"){
                alert("El dispositivo se ha reiniciado");
            }
        }
        btnFoto(){
          let  pregunta= prompt(`Desea tomar una foto?`);
        if(pregunta == "si" || pregunta == "Si"){
            alert(`Tomaste una bonita foto con tu ${this.nombre}`);
        }
        }
        btnGrabar(){
          let  pregunta= prompt(`Desea grabar un video?`);
            if(pregunta == "si" || pregunta == "Si"){
                alert(`Estas grabando con tu ${this.nombre}`);
            }
        }
        verInfo(){
            return`
            Nombre: <b>${this.nombre}</b> <br>
            Color: <b>${this.color}</b><br>
            Peso: <b>${this.peso}gr</b><br>
            Resolucion de pantalla: <b>${this.resolucionPantalla}</b><br>
            Camara: <b>${this.camara}</b><br>
            Procesador: <b>${this.procesador}</b><br>
            Memoria Ram: <b>${this.memoriaRam}GB</b><br>
            `
        }
}
class gamaAlta extends celular{
    constructor(nombre,color,peso,resolucion,camara,procesador,ram,camarafront){
        super(nombre,color,peso,resolucion,camara,procesador,ram)
        this.camaraFrontal= camarafront;
        this.info= `El nombre del telefono es ${nombre}, lo tenemos en color ${color}, el mismo tiene un peso de ${peso} y una resolucion de ${resolucion}. Su camara principal es de ${camara}, su camara frontal es ${camarafront} y cuenta con un procesador de ${procesador} y ${ram} de ram`;
    }
    verInfo(){
        return`
        Nombre: <b>${this.nombre}</b> <br>
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}gr</b><br>
        Resolucion de pantalla: <b>${this.resolucionPantalla}</b><br>
        Camara: <b>${this.camara}</b><br>
        Camara frontal: <b>${this.camaraFrontal}</b><br>
        Procesador: <b>${this.procesador}</b><br>
        Memoria Ram: <b>${this.memoriaRam}GB</b><br>
        `
    }
    reconFacial(){
        alert("El reconocimiento facial esta funcionando");
    }
    camaraSLenta(){
        let pregunta= prompt("Desea grabar en camara super lenta?");
        if(pregunta=="si" || pregunta=="Si"){
        alert(`Estas grabando a camara super lenta`);
        }else{
            alert("weno ni modos master")
        }
    }
  
}
const celularIphone13ProMax= new gamaAlta("Iphone 13 Pro Max", "azul cielo", 240, "2778x1284 pixels", "12 MP f/1.5, 1,9um / Ultrawide: 12 MP f/1.8, 6P, 120º", "Apple A15 Bionic", 6, "12 megapíxeles con apertura ƒ/2.2");
const celularRedmiNote12Pro= new celular("Redmi Note 12 Pro", "verde mate",201.8,"2400 x 1080 Pixels", "50 megapíxeles f /1.88", "MediaTek Dimensity 1080", 8 );
const celularSamsungZFold3= new gamaAlta("Samsung Galaxy Z Fold 3","negro", 271, "2208 x 1768 pixels", "10 megapíxeles, f/2.2, FOV 80º y fotodiodos de 1,22 µm", "Snapdragon 888 5G con 8 núcleos, 64 bits y litografía de 5 nm (2,84 GHz + 2,4 GHz + 1,8 GHz)", 12, "10 megapíxeles con apertura f/2.2");

let opcion =prompt(`Que telefono quieres comprar, el ${celularIphone13ProMax.nombre} (1), el ${celularRedmiNote12Pro.nombre} (2), o el ${celularSamsungZFold3.nombre} (3)`);

if(opcion == 1){
    alert(`Usted ha comprado el ${celularIphone13ProMax.nombre}`);
    celularIphone13ProMax.reconFacial();
    celularIphone13ProMax.btnEncendido();
    celularIphone13ProMax.btnReiniciar();
    celularIphone13ProMax.btnFoto();
    celularIphone13ProMax.btnGrabar();
    celularIphone13ProMax.camaraSLenta();
alert(`Las especificaciones de su celular se mostraran a continuacion, felicidades por su compra!`);
document.write(celularIphone13ProMax.verInfo());
}else if(opcion == 2){
    alert(`Usted ha comprado el ${celularRedmiNote12Pro.nombre}`);
    celularRedmiNote12Pro.btnEncendido();
    celularRedmiNote12Pro.btnReiniciar();
    celularRedmiNote12Pro.btnFoto();
    celularRedmiNote12Pro.btnGrabar();
alert(`Las especificaciones de su celular se mostraran a continuacion, felicidades por su compra!`);
document.write(celularRedmiNote12Pro.verInfo());
}else if(opcion == 3){
    alert(`Usted ha comprado el ${celularSamsungZFold3.nombre}`);
    celularSamsungZFold3.reconFacial();
    celularSamsungZFold3.btnEncendido();
    celularSamsungZFold3.btnReiniciar()
    celularSamsungZFold3.btnFoto();
    celularSamsungZFold3.btnGrabar();
    celularSamsungZFold3.camaraSLenta();
    alert(`Las especificaciones de su celular se mostraran a continuacion, felicidades por su compra!`);
    document.write(celularSamsungZFold3.verInfo());
}else{
    alert("Opcion invalida");
}
