let a = 10;

if(a % 2 == 0){
    console.log("Es un numero par");
}else{
    console.log("Es un numero Impar");
}

//OTRA FORMA CON OPERADOR TERNARIO
let numero = a%2==0 ? "Es Par": "Es impar";
console.log(numero);