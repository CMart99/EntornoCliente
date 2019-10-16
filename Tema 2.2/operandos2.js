// EJERCICIOS CON LOS OPERANDOS
// LAS LÍNEAS DE RETURN NUNCA DEBEN CAMBIARSE.
// DEBE TOCARSE EL CÓDIGO ANTES DEL RETURN PARA QUE LA FUNCIÓN DEVUELVA TRUE


function concatenarCadenas() {

    var x = "ALUMNO";
    var y = "_DAW_";
    var clase = 2017;

    var resultado = x.concat(y, clase);
    // console.log(resultado)
    return resultado === "ALUMNO_DAW_2017";
}

function operadorTernario() {

    let x = 14;
    let y = 18;

    var resultado = (x > y);

    return resultado;

}

function deleteArray() {

    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    array.length = 0;

    return array[9] === undefined;

}

function crearArray() {

    var hoy = new Date();
    var a = undefined;
    var b = null;
    var alumno = "ALUMNO_DAW";
    var num = "number";
    var ob = "object";
    var n = 3.14;

    let x = [n, alumno, hoy, num, ob, a, b];

    console.log(x);

    return x[0] === 1.5
        && x[1] === "ALUMNOS"
        && x[2] instanceof Date
        && typeof x[3] === "number"
        && typeof x[4] === "object"
        && x[5] === undefined
        && x[6] === null;

}

function existeElemento() {

    let x = { elemento1: "hola1", elemento1: "hola2" };

    return "elemento1" in x && "elemento2" in x;

}
