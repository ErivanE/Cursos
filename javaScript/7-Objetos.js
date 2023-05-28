//DEFINICION DE OBJETO
    // 1)
    let persona = {
        nombre:"ivan",
        apellido:"eli",
        edad:22,
        email:"ielizalde@gmail.com",
        idioma: 'es',
        //CONSTRUCTORES
        

        //AGREGAR METODOS A OBJETOS
        nombreCompleto: function(){
            return this.nombre + " " + this.apellido;
        },
        //GET
        get nombreCompleto2(){
            return this.nombre + ' ' + this.apellido;
        },
        get lang(){
            return this.idioma.toUpperCase();
        },
        //SET
        set lang(lang){
            this.idioma = lang.toUpperCase();
        }

    }
    // 2)
    let persona2 = new Object();
    persona2.nombre = "carlos";
    persona2.direccion= 'saturno15';
    persona2.telefono = 3333333333;

    console.log(persona2.telefono);

//ACCEDIENDO A LOS ATRIBUTOS
    console.log(persona.nombre);
    console.log(String(persona.edad));

    console.log(persona.nombreCompleto());
    console.log(persona.nombreCompleto2);
    console.log(persona.lang);

    persona.lang = 'us';
    console.log(persona.lang);

//ACCEDIENDO A PROPIEDADES
    console.log(persona.nombre);
    console.log(persona["nombre"]);

    for(atributos in persona){
        console.log(atributos);
        console.log(persona[atributos]);
    }

//AGREGAR - ELIMINAR PROPIEDADES DEL OBJETO
    //agregar
    persona.telefono = '3311443344';
    console.log(persona);
    //eliminar
    delete persona.telefono;
    console.log(persona);

//IMPRIMIR OBJETO
    //concatenando valores de atributos
    console.log(persona.nombre + ','+persona.apellido);
    //for in
    for(nombrePropiedad in persona) 
        console.log(persona[nombrePropiedad]);
    //object values
    let personaArray = Object.values(persona);
    console.log(personaArray);
    //JSON stringify
    let personaString = JSON.stringify(persona);
    console.log(personaString);

//FUNCION CONSTRUCTOR
    function Persona(nombre, apellido, edad, email, idioma){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.idioma = idioma;

        this.nombreCompleto = function(){
            return this.nombre + " " + this.apellido;
        }
    }
    let padre =  new Persona('juan', 'perez', 28, 'juanp@gmail.com', 'es');
    console.log(padre);

    let madre = new Persona('laura', 'quintero', 27, 'lquitero@gmail.com', 'es');
    console.log(madre);

    padre.nombre = 'carlo';
    console.log(padre);

    console.log(padre.nombreCompleto());

//FORMAS DE CREAR OBJETOS
    let miObjeto = new Object();
    let miObjeto2 = {};

    let miCadena1 = new String('hola');
    let miCadena2 = 'hola';

    let miNumero = new Number(1);
    let miNumero2 = 1;

    let miBool = new Boolean(true);
    let miBool2 = true;

    let miArreglo1 = new Array();
    let miArreglo2 = [];

    let miFuncion = new Function();
    let miFuncion2 = function(){};

//PROTOTYPE
    console.log(padre.telefono);
    Persona.prototype.telefono = null;
    padre.telefono = 334680909;
    console.log(padre.telefono);

//METODO CALL
    let carro1 ={
        marca : 'wv',
        modelo : 'golf',
        año : 2004,
        infoAuto : function(km, consecionaria){
            return this.marca + " " + this.modelo + " " + this.año + " " + km + " " + consecionaria;
        },
        auto : function(color, precio){
            return "Este auto es un " + this.marca +" "+color+" y cuesta "+precio; 
        }
    }
    let carro2={
        marca : 'seat',
        modelo : 'cordoba',
        año : 2004,
    }
    console.log(carro1.infoAuto(00001, "consecionariaRobertoz"));
    //call
    console.log(carro1.infoAuto.call(carro2, 0006, "consecionariaRodrigos"));

//METODO APPLY
    let arreglo = ['rojoPasion', '5peso'];
    console.log(carro1.auto.apply(carro2, arreglo))