function contarVocales (lista){

    let numVocales = 0;

    for (let letra of lista){

        console.log(letra);

        switch(letra){

            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            case "A":
            case "E":
            case "I":
            case "O":
            case "U":
            case "á":
            case "é":
            case "í":
            case "ó":
            case "ú":
            case "ä":
            case "ë":
            case "ï":
            case "ö":
            case "ü":
            case "Á":
            case "É":
            case "Í":
            case "Ó":
            case "Ú":

                numVocales++;
                break;
        }
       
    }
        return numVocales;
}


function factorial (numero){
    
    let resultado = 0;

    if (typeof numero === "number"){
    resultado = 1;

	for (let i = numero-1; i>=2; i--) {
		resultado = i; 
	}
    return resultado;
    }else{

    }
}


function comparaLista(lista1, lista2){

    let puntos1 = 0;
    let puntos2 = 0;

    for (let i=0; i<lista1.length; i++){
        if(typeof lista1[i] === "number"
            && typeof lista2[i] === "number"){
        if(lista1[i] >= lista2[i]){
            puntos1++;
        }else if(lista1[i] < lista2[i]){
                puntos2++;
            }
        }
    }
    if (puntos1 > puntos2){

        console.log(`Gana la lista 1 con ${puntos1} puntos.`);
    }else if (puntos1 < puntos2){
        console.log(`Gana la lista 2 con ${puntos2} puntos.`);
    }else{
        console.log(`Empate a ${puntos1} puntos.`);
    }
}

function concatenarLista(lista){

    let resultado = "";
    let tamLista = lista.length;
    
    for(let i=0; i < tamLista/2; i++){
        if(i === (tamLista- i - 1)){
            
            resultado += lista[i];
        }else{
            resultado += lista[i];
            resultado += lista[tamLista-i -1];
        }
    }
    return resultado;
}
    concatenarLista(["C","a","r","l","o","s"]);