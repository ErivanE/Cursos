//COMENTARIOS
/* 
    Comentario multilinea
*/

//TIPOS DE DATOS

var caracter = 'x';     //String
console.log(caracter);
console.log(typeof caracter)

var numero = 4;         //numerico
console.log(numero);

var objeto = {          //Objeto
    nombre : "carlo",
    appellido : "pere",
    telefono : 33112211,
    id : 3
}
console.log(objeto);

var bandera = true;     //Booleano
console.log(bandera);

function miFuncion(){}  //Funcion
console.log(miFuncion);

var simbolo = Symbol("Un simbolo");  //Sibolo
console.log(simbolo);

class persona{          //Class -tipo funcion-
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(persona);

var x;                  //Undefined
console.log(x);

var y = null;           //Null -tipo Object
console.log(y);

var autos = ['BMW', "AUDI", "VOLVO", "WV"]; //ARREGLO
console.log(autos);
console.log(typeof autos);

var z = "";             //cadena vacia
console.log(z);
console.log(typeof z);

//CONCATENAR VARIABLES
var nombre = "ivan";
var apellido = "eli";

var nombreCompleto = nombre +" "+ apellido;
console.log(nombreCompleto);

var nombreCompleto2 = "nombre" + " "+ "Apellido";
console.log(nombreCompleto2);

var x =  2+ nombre + (219+1);
console.log(x);

/* 
    REGLAS DE VARIABLES.
        Las variables no pueden iniciar con Numeros o contener palabras reservadas
        las formas correctas de iniciar una variables son:
            aVariable;
            _Variable;
            $Variable;
            
    
    NOTAS
        NaN - Not a Number
        isNaN(numero) - retorna un bool preguntando si la variable es un numero
*/