//Función que valida una URL de una web .com y .es
//con más de un parámetro GET en la url.
//Las urls deben empezar por http://www. o https://www.
//Recordad que el primer parámetro por GET se indica con "?""
//Recordad que el segundo y posteriores parámetros por GET se indica con "&"
//Por ejemplo: http://www.prueba.es?ejemplo=1&prueba=2 => valido
//Por ejemplo: http://www.prueba.es?ejemplo=1 =>no valido
//Por ejemplo: http://www.prueba.es => No valido
//Por ejemplo: https://www.prueba?hola=1&holita=2&holar=3 =>No valido

function esValidaURL(url) {
    let expresion = /^((http|https):\/\/)+(www\.)?([a-zA-Z0-9])+(\.com|\.es)+(\?)([a-zA-Z0-9])+(=)([a-zA-Z0-9])+((&)?([a-zA-Z0-9])+(=)([a-zA-Z0-9])+)+$/
    let resultado = false;
    if (expresion.test(url)) {
        resultado = true;
    }
    return resultado;
}


//Función que valia un password con las siguientes características
//Al menos existan 4 letras
//Al menos existan 4 numeros
//Tiene que haber un carácter !,?,-,$ o _
//Tiene que tener al menos una letra Mayúscula
//Ayuda: Pueden usarse varias expresiones regulares para validar el password
function esValidaPassword(password) {
    let Mayuscula = /.*([A-ZÑ].*)+/g;
    let minusculas = /.*([a-z].*){3,}/g;
    let letras = /(.*([a-z]).*){4,}/gi // Al menos tres letras minúsculas
    let numeros = /(.*([0-9]).*){4,}/g
    let ceros = /[0]/g; // Controla que no haya ceros
    let caracter = /(.*([!|?|-|$|_]).*)/g
    let resultado = false;
    if (Mayuscula.test(password)) {
        if (minusculas.test(password)) {
            if (letras.test(password)) {
                if (numeros.test(password)) {
                    if (!ceros.test(password)) { // Controla que no haya ceros
                        if (caracter.test(password)) {
                            resultado = true;
                        }
                    }
                }
            }
        }

    }
    return resultado;
}

//Función que elimina todos los caracteres que no sean letras y
//números de un texto
function eliminaCaracteresRaros(texto) {
    let expresion = /([^A-Z0-9áéíóúüÁÉÍÓÚÜñÑ -_])/gi;
    return texto.replace(expresion, "");
}
