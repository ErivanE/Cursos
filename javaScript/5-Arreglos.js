//DEFINIR ARREGLO
let autos = new Array("bmw", "mercedes", "volvo", "audi");  //vieja sintaxis
const autosNuevo = ["bmw", "mercedes", "volvo", "audi"];    //nueva sintaxis
console.log(autosNuevo);

//IMPRIMIR ARREGLO
for(let i = 0; i < autosNuevo.length; i++){
    console.log(autosNuevo[i])
}

//MODIFICAR ARREGLO
console.log(autosNuevo[1]);
autosNuevo[1] = "VW"
console.log(autosNuevo[1]);

//AGREGAR VALORES AL ARREGLO
autosNuevo.push("Nissan");
for(let i = 0; i < autosNuevo.length; i++){
    console.log(autosNuevo[i])
}

console.log(Array.isArray(autosNuevo));
console.log(autosNuevo instanceof Array);

