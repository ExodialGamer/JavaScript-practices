/* Cofla quiere instalar aplicaciones, pero no se decide por cual instalar, no se puede decidir entre 7 aplicaciones, de las 
cuales solo instalara 2. El programa debe: 
- Crear un sistema para decidir que app descargar
- El programa debe contener la cantidad de descargas, puntuacion y peso
- Deben poderse instalar, abrir, cerrar y desinstalar

*/
//inicio
class aplicacion{
    constructor(nombre,descargas,score,peso){
        this.nombre= nombre;
        this.nroDescargas= descargas;
        this.calificacion= score;
        this.peso=peso;
        this.instalado=false;
        this.abierta=false;
    
    }
    instalar(){
        let pregunta;
        if(this.instalado == true){
            alert(`Esa aplicacion ya se encuentra instalada`);
            
        }
        if(this.instalado==false){
        alert(`La aplicacion ${this.nombre} se esta instalando
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
La aplicacion tiene un total de descargas de ${this.nroDescargas}
La aplicacion tiene un score de ${this.calificacion}★`);
            alert(`La aplicacion ${this.nombre} se ha instalado correctamente`);
            this.instalado= true;
        }

}
    abrirApp(){
        
            let pregunta = prompt("Desea abrir la aplicacion?");
            if (pregunta == "si" || pregunta == "Si"){
                
                alert(`La aplicacion ${this.nombre} esta abierta`);
                this.abierta = true;
            }else{
                alert(`Muy bien, no se abrira la app`);
            }
    
}
    cerrarApp(){
        do{
            if(this.abierta= true){
        let pregunta= prompt("Desea cerrar la aplicacion?");
       
       
            if (pregunta == "si" || pregunta == "Si"){
                
                alert(`La aplicacion ${this.nombre} se cerró`);
                this.abierta=false;
            }else {
                alert(`La app continua abierta`);
            }
        }
        } while(this.abierta ==true);

}
    desinstalar(){
        let pregunta= prompt(`Desea desinstalar ${this.nombre}?`);
    
        
        if(pregunta== "si" || pregunta== "Si"){
            
            alert(`La aplicacion ${this.nombre} ha sido desinstalada`);
            this.instalado=false;
        }else{
            
            alert("Se cancelo la desinstalacion");
        }
    }
}          


const app1= new aplicacion("League of legends", 200000, 4.0, "20GB");
const app2= new aplicacion("Valorant", 100000, 4.5, "30GB");
const app3= new aplicacion("COD: Warzone", 1000000, 4.8, "70GB");
const app4= new aplicacion("PUBG", 150000, 4.0, "7GB");
const app5= new aplicacion("Clash Royale", 120549, 3.9, "2GB");
const app6= new aplicacion("The last of us", 150000, 4.9, "50GB" );
const app7= new aplicacion("Clash of clans", 200000, 4.1, "1.2GB");

let contador= 0;

do{
    let opcion=prompt(`Escoja dos de las siguientes aplicaciones para instalar:
    1. ${app1.nombre}. Peso: ${app1.peso}
    2. ${app2.nombre}. Peso: ${app2.peso}
    3. ${app3.nombre}. Peso: ${app3.peso}
    4. ${app4.nombre}. Peso: ${app4.peso}
    5. ${app5.nombre}. Peso: ${app5.peso}
    6. ${app6.nombre}. Peso: ${app6.peso}
    7. ${app7.nombre}. Peso: ${app7.peso}
    Escriba "8" si desea salir del programa
    `);

    if(opcion==1){
  
        if(app1.instalado==false){
            app1.instalar();
            app1.instalada=true;
            contador++;
            app1.abrirApp();
            if(app1.abierta==true){
                app1.cerrarApp();
            }
            app1.desinstalar();
            if(app1.instalado==false){
                contador--;
                continue;
            }
        }
        if(app1.instalada==true){
            app1.instalar();
       
        }
      
    } else if(opcion==2){
        if(app2.instalado==false){
            app2.instalar();
            app2.instalada=true;
            contador++;
            app2.abrirApp();
            if(app2.abierta==true){
                app2.cerrarApp();
            }
            app2.desinstalar();
            if(app2.instalado==false){
                contador--;
                continue;
            }
        }
        if(app2.instalada==true){
            app2.instalar();
       
        }
    }
    else if(opcion==3){
        if(app3.instalado==false){
            app3.instalar();
            app3.instalada=true;
            contador++;
            app3.abrirApp();
            if(app3.abierta==true){
                app3.cerrarApp();
            }
            app3.desinstalar();
            if(app3.instalado==false){
                contador--;
                continue;
            }
        }
        if(app3.instalada==true){
            app1.instalar();
       
        }
        
    }
    else if(opcion==4){
        if(app4.instalado==false){
            app4.instalar();
            app4.instalada=true;
            contador++;
            app4.abrirApp();
            if(app4.abierta==true){
                app4.cerrarApp();
            }
            app4.desinstalar();
            if(app4.instalado==false){
                contador--;
                continue;
            }
        }
        if(app4.instalada==true){
            app4.instalar();
       
        }
    }
    else if(opcion==5){
        if(app5.instalado==false){
            app5.instalar();
            app5.instalada=true;
            contador++;
            app5.abrirApp();
            if(app5.abierta==true){
                app5.cerrarApp();
            }
            app5.desinstalar();
            if(app5.instalado==false){
                contador--;
                continue;
            }
        }
        if(app5.instalada==true){
            app5.instalar();
       
        }
        
    }
    else if(opcion==6){
        if(app6.instalado==false){
            app6.instalar();
            app6.instalada=true;
            contador++;
            app6.abrirApp();
            if(app6.abierta==true){
                app6.cerrarApp();
            }
            app6.desinstalar();
            if(app6.instalado==false){
                contador--;
                continue;
            }
        }
        if(app6.instalada==true){
            app6.instalar();
       
        }
        
    }
    else if(opcion==7){
        if(app7.instalado==false){
            app7.instalar();
            app7.instalada=true;
            contador++;
            app7.abrirApp();
            if(app7.abierta==true){
                app7.cerrarApp();
            }
            app7.desinstalar();
            if(app7.instalado==false){
                contador--;
                continue;
            }
        }
        if(app7.instalada==true){
            app7.instalar();
       
        }
        
    }else if(opcion==8){
        break;
    }else{
        
        alert(`"${opcion}" es una opcion invalida`);
    }
}while(contador<2);
document.write(`La re ptisima madre por fin funciona todo correctamente. Te la rifaste Kevin eres un makina uwu`);