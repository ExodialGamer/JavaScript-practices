/*let primerArreglo= ["Sexo", "Coito", "El amor", "Frutifantastico", "El delicioso"];
let respuesta= 0;

let arreglo= (nombre)=>{
    
do{
    respuesta= prompt(`Que prefieres ${primerArreglo}`);
    if(respuesta=="sexo" || respuesta=="Sexo"){
        alert(`Ya veo, asi que prefieres el ${primerArreglo[0]}`);
        break;
    } else if(respuesta=="coito" || respuesta=="Coito"){
        alert(`Ya veo, asi que prefieres el ${primerArreglo[1]}`);
        break;
    }else if(respuesta=="el amor" || respuesta=="El amor"){
        alert(`Ya veo, asi que prefieres ${primerArreglo[2]}`);
        break;
    }else if(respuesta=="frutifantastico" || respuesta=="Frutifantastico"){
        alert(`Ya veo, asi que prefieres el ${primerArreglo[3]}`);
        break;
    }else if(respuesta=="el delicioso" || respuesta=="El delicioso"){
        alert(`Ya veo, asi que prefieres ${primerArreglo[4]}`);
        break;
    }else{
        alert(`${nombre} eso no es una opcion`);
        continue;
    }
    }while(respuesta !== "fin");
}


console.log(arreglo(prompt(`introduzca su nombre`)));*/
let Kevin={
    novia:"Stephanie",
    mama:"Taiby",
    edad:19,
    perroActual:"Odi",
    perroAnterior:"Doky"
}
let novia= Kevin["novia"];
let mama= Kevin["mama"];
let edad= Kevin["edad"];
let perroActual= Kevin["perroActual"];
let perroAnterior= Kevin["perroAnterior"];

let frase= `Kevin tiene: ${edad} años <br>
Su novia es ${novia} <br>
Su mama es ${mama} <br>
Su perro anterior fue ${perroAnterior} <br>
Su perro actual es ${perroActual}`;
document.write(frase);

