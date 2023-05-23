/*SENTENCIAS DE CONTROL
    IF-ELSE
        if(condicion){
            sentencia A
        }else{
            sentencia B
        }
    SWITCH
        switch(valorAEvaluar){
            case posibleValor: 
                Sentencia A
                break;
            case posibleValor2:
                Sentencia B
                break;
            default: 
                Sentencia por defecto;
        }
*/

//IF-ELSE
//Ejemplo 1
let condicion = true;
if(condicion){
    console.log("es verdad");
}else{
    console.log("no, no es verdad");
}
//Ejemplo 2
let numero = 3;
if(numero == 1){
    console.log("numero 1");
}else if(numero == 2){
    console.log("numero 2");
}else if(numero == 3){
    console.log("numero 3");
}else if(console.log("numero 4")){
    console.log("numero 4");
}else{
    console.log("Algun otro numero");
}

//SWITCH
//Ejemplo 1
let condicion1 = true;
switch(condicion1){
    case true: 
        console.log("Es verdad");
        break;
    case false: 
        console.log("No, no es verdad");
        break; 
    default: console.log("No es verdad, ni mentira...");
}
if(condicion){
    console.log("es verdad");
}else{
    console.log("no, no es verdad");
}
