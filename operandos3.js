//Implementar las siguientes funciones para que pasen una serie de pruebas
//Usando solo estructuras de control para ello.

//Devuelves 1 si a es mayor que b
//Devuelves -1 si a es menor que b
//Devuelves 0 si a es igual b

function quienEsMayor(a,b){
 
    if(a > b){
        console.log("a es mayor");
    }else if(a < b){
        console.log("b es mayor");
    }else{
    console.log("a y b son iguales");
    }
}

//Dado un array de elementos, devuelve la suma de todos aquellos que los elementos sean pares
function sumarElementosPares(elementos){
 
    let x = 0;
 
    for (let i = 0; i < elementos.length; i++) {
       if (elementos[i] % 2 === 0) {
 
        x = x + elementos[i];
       } 
    }
    return x;
}

//Dado un array de elementos devuelve el valor mas grande de todos ellos.
function escogerValorMasGrande(elementos){
 
    return Math.max.apply(null, elementos);
}

//Dada una palabra cualquier, devuelve la palabra alreves, por ejemplo: "HOLA" => "ALOH"
function invertirUnaPalabra(palabra){
 
    let tam = palabra.length-1;
    let resultado = "";
 
    while(tam >= 0){
        resultado += palabra.charAt(tam);
        tam--; 
    }
 
    return resultado;
 
}

//Dada un array, cuenta el numero de elementos impares que contiene
function contarElementosImpares(elementos){
 
    let x = 0;
 
    for (let i = 0; i < elementos.length; i++) {
       if (elementos[i] % 2 !== 1)  {
 
        x++;
       } 
    }
    return x;
 
}


