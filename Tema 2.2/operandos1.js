// EJERCICIOS CON LOS OPERANDOS
// LAS LÍNEAS DE RETURN NUNCA DEBEN CAMBIARSE.
// DEBE TOCARSE EL CÓDIGO ANTES DEL RETURN PARA QUE LA FUNCIÓN DEVUELVA TRUE

function asignacionDeValoresSumar(){

    let x = 0;
    let y = 0;

    x +=3;

    return x === 3;
}


function asignacionDeValoresRestar(){

    let x = 0;
    let y = 0;
    x -=-5;

    return x === 5;
}

function asignacionDeValoresMultiplicacion(){

    let x = 5;
    let y = 0;
    x *=7;
    return x === 35;
}

function asignacionDeValoresResto(){

    let x = 3;
    let y = 0;
    x%=2;
    return x === 1;
}

function comparacionIgualdad(){

    let x = undefined;
    let y = null;
    let resultado = x==y;
    return resultado;
}

function comparacionIgualdadEstricto(){

    let x = undefined;
    let y = undefined;
    let resultado = x===y;
    return resultado;
}

function compararcionMayorIgual(){

    let x = 0;
    let y = 0;
    let resultado = x>=y;
    return resultado;
}


function incremento(){

    let x = 7;
    x++;
    return x === 8;
}


function decremento(){

    let x = 3;
    x--;
    return x === 2;
}


function igualdadIncremento(){

    let x = 8;

    return x++ === 8;
}

function comparacionAND(){
    var x = "hola";
    var y = "hola";
    if(y && x ==="hola"){
         resultado = true;
    }

    return resultado;
}

function comparacionOR(){
    var x = "hola";
    var y = "hola2";
    if(y || x ==="hola"){
        resultado = true;
   }
    return resultado;
}

function comparacionNOT(){
    var x = "hola";
    if(x !== "hola2"){
        resultado=true;
    }

    return resultado;
}
