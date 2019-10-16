//PARA INCLUIR COMENTARIOS
/*
*  PARA INCLUIR VARIAS LINEAS DE COMENTARIOS
*
* */


//ESTE SCRITP ES PARA PRACTICAR LAS DECLARACIONES DE VARIABLES

///esta funcion hay que corregirla para poder probar las demas
function corregirDeclaraciones(){
    var funcion = new Object();
    var ejemplo = "EJEMPLO";
    var prueba123 = 123;
    var prueba_ejemplo = "EJERCICIO";
    var prueba = "PRUEBA";
    var prue_ba = "PRUEBA";

    return true;
}

function declararNumeros(numA, numB){
    return typeof numA === "number"
       && typeof numB === "number"
       && numA > numB;
}

function declararString(cadena){

    return cadena === "PRUEBA"
        && typeof cadena === "string";
}

function noDefinido(){
    var x = undefined;
    var y = null;
    return x === undefined
        && y === null;
}

function declararSymbol(){

    return typeof x === "symbol";
}

function declararFecha(){
    var hoy = new Date();
    return hoy instanceof Date;

}

function declararExpresionRegular(){

    return expresion instanceof RegExp;
}

function declararFuncion(){

    return funcion instanceof Function;
}



function declararObjeto(){

    class ObjetoPrueba{};
    
    let objeto = new ObjetoPrueba; //Declarar objeto

    return objeto instanceof ObjetoPrueba;
}

function declararArray(){

	let lista = [0,0,0,0,"Correcto"]; //Declaro el Array.
	
    return lista instanceof Array
            && lista.length === 5
            && lista[4] === "Correcto";

}


function declararArrayTipo(){

	let listaEnteros = new Int32Array([0,0,0,0,0,0,0,0,0,0]);
	
    return listaEnteros instanceof Int32Array
            && listaEnteros.length === 10;

}

x = "SOY gLOBAL";//Las variables globales han de declararse fuera de la función, en el ámbito global. 
				//Para no equivocarnos, es mejor no ponerle var ni let... 

function declararVariableGlobal(){
	
	

    return window.x
            && x === "SOY gLOBAL"
        ;

}

function declararPrototipo(){ //Constructor de una clase
	function prototipo(nombre){
		this.nombre = nombre;
	} 
		
    var objeto = new prototipo("ejemplo");


    return objeto.__proto__ === prototipo.prototype //Esta sentencia nos permite acceder al prototipo

}

function declaracionConRetraso(){
	
	var y = 35;
	
    var resultado = y === 35;


    return resultado;
}


function declaracionLet(){
    let x = 0;
    if(x > 1){
        let y = "bien";
    }
    return y === "bien";
}

function declaracionConst(){ //Las constantes no se pueden modificar
    const valor = 30;
    return valor === 30;
}

