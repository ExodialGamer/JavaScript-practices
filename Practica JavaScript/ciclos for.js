let array1=["maria", "patricia","laura"];
let array2=["roberto", "mario", array1, "ramon"];
forNombres: 
for(let array in array2){
    if(array == 2){
        
        for(let array of array1){
            
            document.write(array + "<br>");
            continue forNombres;
            
        }
    }else{
        document.write(array2[array] + "<br>");
    }
}