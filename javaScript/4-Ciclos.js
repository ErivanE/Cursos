/*Ciclos
    WHILE
        while(condicion){
            sentencias
        }
    DO - WHILE
        do{
            sentencias
        }while(condicion);
    FOR
        for(inicio;condicion;operacion){
            sentencias
        }
*/
let contador = 0;
while(contador <= 3){
    console.log("soy un "+contador);
    contador++;
}
do{
    console.log(contador);
    contador++;
}while(contador <= 6);
for(contador; contador <= 9; contador++){
    console.log(contador);
}