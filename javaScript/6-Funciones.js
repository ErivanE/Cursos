//DECLARAR FUNCION
function miFuncion(a,b){
    console.log("Suma: " + (a+b));
    console.log(arguments.length);
    return a+b; 
}
//LLAMAR FUNCION
miFuncion(4,2);

let suma = miFuncion(5,5);
console.log(suma);

//FUNCION DE TIPO EXPRESION
let sumar = function(a,b){return a+b};
console.log(sumar(2,3));

//FUNCION TIPO SELF-INVOKING *No se puede reutilizar, solo se llama una vez*
(function(){
    console.log("Ejecutando funcion");
})();

//FUNCION TIPO FLECHA
let sumarFuncion = function    (a,b){return a+b};
const sumarFuncionTipoFlecha = (a,b) =>     a+b;

resultado = sumarFuncionTipoFlecha(3,3);
console.log(resultado);

//PARAMETROS y ARGUMENTOS
/* 
    Los PARAMETROS son los valores que Recibe una funcion
    Los ARGUMENTOS son los valores que Mandamos a la funcion
*/
let resultados = sumarTodo(5,4,13,10,9);
console.log(resultados);

function sumarTodo(){
    let suma = 0
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i]
    }
    return suma; 
}

//PASO POR REFERENCIA
const persona = {
    nombre: "carlo",
    apellido : "pere"
}
function cambiarValorObjeto(persona1){
    persona1.nombre = "lara";
    persona1.apellido = "alskjdf";
}
cambiarValorObjeto(persona);
console.log(persona);



