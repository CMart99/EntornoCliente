// EJERCICIOS CON LOS OPERANDOS
// LAS LÍNEAS DE RETURN NUNCA DEBEN CAMBIARSE.
// DEBE TOCARSE EL CÓDIGO ANTES DEL RETURN PARA QUE LA FUNCIÓN DEVUELVA TRUE

function asignacionDeValoresSumar(){
 
    let x = 2;
    let y = 1;
 
     x = x + y;
 
    return x === 3;
}
 
 
function asignacionDeValoresRestar(){
 
    let x = 10;
    let y = 5;
 
    x = x - y;
 
    return x === 5;
}
 
function asignacionDeValoresMultiplicacion(){
 
    let x = 5;
    let y = 7;
 
    x = x * y;
 
    return x === 35;
}
 
function asignacionDeValoresResto(){
 
    let x = 1;
    let y = 10;
 
    return x === 1;
}
 
function comparacionIgualdad(){
 
    var x = null;
    var y = undefined;
    var x = undefined;
    var y = null;
    
    resultado = x === undefined
                && y  === null;
           
    return resultado;
}
 
function comparacionIgualdadEstricto(){
 
    let x = undefined;
    let y = null;
    
    resultado = x === undefined
                && y  === null;
 
    return resultado;
}
 
function compararcionMayorIgual(){
 
    let x = 4;
    let y = 3;
 
    resultado = typeof x == "number"
           && typeof y == "number"
           && x > y;
           
    return resultado;
}
 
 
function incremento(){
 
    let x = 4;
 
    ++x * 2;
 
    return x === 5;
}
 
 
function decremento(){
 
    let x = 6;
 
    --x * 2;
 
    return x === 5;
}
 
 
function igualdadIncremento(){
 
    let x = 4;
 
    x++ * 2;
 
    return x++ === 5;
}
 
function comparacionAND(){
    var x = "hola";
    var y = "hola";
    
    resultado = x === "hola"
    && y  === "hola";
 
    return resultado;
}
 
function comparacionOR(){
    var x = "hola";
    var y = "hola";
    
    resultado = x === "hola"
    || y  === "hola";
 
    return resultado;
}
 
function comparacionNOT(){
    
    var x = !true              
    var resultado = !false             
 
    return resultado;
}
