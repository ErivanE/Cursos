/*
    6  - 11 Buenos dias
    12 - 18 Buenas Tardes
    19 - 24 Buenas noches
    0  - 6  Durmiendo
*/
let hora = 15;
let mensaje;
if(hora >= 6 && hora <= 11){
    mensaje = "Buenos dias";
}else if(hora >= 12 && hora <= 18){
    mensaje = "Buenas Tardes";
}else if(hora >= 19 && hora <= 24){
    mensaje = "Buenas noches";
}else if(hora >= 0 && hora <= 5){
    mensaje = "Durmiendo";
}else{
    mensaje = "Datos invalidos";
}
console.log(mensaje);
