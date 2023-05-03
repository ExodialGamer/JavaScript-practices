/**Crear mini sistema para registrar alumnos presentes y ausentes
Pasados 30 dias, mostrar su situacion final del alumno
Maximo de 10% de inasistencias
 */
let cantidadAlumnos=prompt("Cuantos alumnos hay");
let alumnosTotales=[];

for(let i=0; i<cantidadAlumnos;i++){
    alumnosTotales[i]=[prompt("Nombre del alumno " + (i+1)),0];
}
const tomarAsistencias= (nombre,p) =>{
    let presencia= prompt(`El estudiante ${nombre} asistio?`);
    if(presencia == "p" || presencia =="P"){
        alumnosTotales[p][1]++;
    }
}
for(i=0; i<30; i++){
for(alumno in alumnosTotales){
    tomarAsistencias(alumnosTotales[alumno][0],alumno);
    }
}
for(alumno in alumnosTotales){
    resultado=`${alumnosTotales[alumno][0]}: <br>
__Aprobados: ${alumnosTotales[alumno][1]} <br>
__Reprobados: ${30 - alumnosTotales[alumno][1]}`;
if(30 - alumnosTotales[alumno][1] >18){
    resultado += " Reprobado por inasistencias";
}else{
    resultado += "<br><br>";
}
document.write(resultado);
}