/* Introduccion a la programacion orientada a objetos. Conceptos de 
Clase
Objeto
Atributo
Metodo
Constructor
Instanciacion
*/

class vehiculo { //Definimos la clase y el nombre de la misma
    constructor(color,marca,nombre){ //definimos el constructor y los atributos que tendra cada vehiculo
        this.color= color; //objeto llamado color que almacena el valor del color del constructor
        this.marca=marca;   //objeto llamado marca que almacena el valor de la marca del constructor
        this.nombreVehiculo=nombre; //objeto llamado nombreVehiculo que almacena el valor del nombre del constructor
        this.info= `Mi vehiculo es un/a ${nombre}, su color es ${color} y es de marca ${marca}`; //objeto llamado info para mostrar texto
    }
    verInfo(){      //Asi se crean los metodos, son como funciones, pero que solo pueden ser creadas dentro de una clase
        document.write(this.info + "<br>");
    }
}
class carros extends vehiculo{
    constructor(color,marca,nombre,puertas,placa){
        super(color,marca,nombre);
        this.placa=null;
        this.puertas=puertas;
    }
    nroPuertas(){
        alert(`Tengo soy un ${this.nombreVehiculo} ${this.marca} y tengo ${this.puertas} puertas`);
    }
    set setPlaca(newPlaca){
        this.placa= newPlaca;
    }
    get getPlaca(){
        return this.placa;
    }
}


const carroAutomatico= new carros("Rojo", "Chevrolet", "carro automatico", 4); //instanciamos la clase y definimos los atributos de los objetos.
const carroSincronico= new carros("Azul", "Hyundai", "carro sincronico", 4);
const carroDeportivo= new carros("Dorado", "Ferrari", "carro deportivo", 2);
const motoChula= new vehiculo("Negra", "XR8", "moto");

/*document.write(carroAutomatico.info + "<br>");    // forma poco practica para mostrar la info, mejor utilizar metodos
document.write(carroSincronico.info + "<br>");
document.write(motoChula.info);*/
carroAutomatico.nroPuertas();
carroSincronico.nroPuertas();
carroDeportivo.nroPuertas();
carroDeportivo.verInfo();
carroDeportivo.setPlaca= "xre-8u5";
document.write(`La placa del ${carroDeportivo.nombreVehiculo} ${carroDeportivo.marca} es: ${carroDeportivo.getPlaca} <br>`);
carroAutomatico.verInfo(); //Asi se instancian los objetos en el cuerpo principal de javascript, con variable.nombreObjeto
carroSincronico.verInfo();
motoChula.verInfo();
