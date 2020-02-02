
function funcionAjaxAsincronaJSON() {
    llamadaAsincrona2("servidor/datosJSON.php", "GET", null, "JSON", tratarResultadoJSON);
}

function tratarResultadoJSON(result) {
    var results = JSON.parse(result)
    let salida = "<table border='1'><tr><th>NOMBRE</th><th>FECHA DE LANZAMIENTO</th><th>VERSION</th><th>TIPO</th><th>PESO</th></tr>";

    for (let i = 0; i < results.length; i++) {
        let object = results[i];
        salida += "<tr><td>" + object.nombre + "</td><td>" +
            object.fecha_lanz + "</td><td>" + object.version + "</td><td>" +
            objeto.tipo + "</td><td>" + object.peso + "</td></tr>";
    }

    salida += "</table>";

    document.getElementById("resultadoAsincronoJSON").innerHTML = salida;

}


////////////////////////////BÚSQUEDA////////////////////////////

function funcionAjaxAsincronaJSON2() {
    llamadaAsincrona2("servidor/datosBuscar.php", "POST", null, "JSON", tratarResultadoBusqueda);
}

function tratarResultadoBusqueda(searchResult) {
    var searchResults = JSON.parse(searchResult)
    let salidaBusqueda = "<table border='1'><tr><th>NOMBRE</th><th>FECHA DE LANZAMIENTO</th><th>VERSION</th><th>TIPO</th><th>PESO</th></tr>";

    for (let i = 0; i < searchResults.length; i++) {
        let object2 = results[i];
        salida += "<tr><td>" + object.nombre + "</td><td>" +
            object2.fecha_lanz + "</td><td>" + object2.version + "</td><td>" +
            objeto2.tipo + "</td><td>" + object2.peso + "</td></tr>";
    }

    salidaBusqueda += "</table>";

    document.getElementById("respuesta").innerHTML = salidaBusqueda;

}


////////////////////////////SELECT////////////////////////////


function funcionAjaxAsincronaJSON3() {
    llamadaAsincrona2("servidor/datosSelect.php", "POST", null, "JSON", tratarResultadoSelect);
}

function tratarResultadoSelect(selectResult) {
    var selectResult = JSON.parse(selectResult)
    let salidaSelect = "<table border='1'><tr><th>NOMBRE</th><th>FECHA DE LANZAMIENTO</th><th>VERSION</th><th>TIPO</th><th>PESO</th></tr>";

    for (let i = 0; i < searchResults.length; i++) {
        let object3 = results[i];
        salidaSelect += "<tr><td>" + object.nombre + "</td><td>" +
            object3.fecha_lanz + "</td><td>" + object3.version + "</td><td>" +
            objeto3.tipo + "</td><td>" + object3.peso + "</td></tr>";
    }

    salidaSelect += "</table>";

    document.getElementById("selectResponse").innerHTML = salidaSelect;

}



////////////////////////////INSERT////////////////////////////


function funcionAjaxAsincronaJSON3() {
    llamadaAsincrona3("servidor/datosInsertar.php", "POST", null, "JSON", tratarResultadoInsertar);
}

function tratarResultadoInsertar(resultInsert) {
    var resultsInsert = JSON.parse(resultInsert);
    let salidaInsert = "<table border='1'><tr><th>NOMBRE</th><th>FECHA DE LANZAMIENTO</th><th>VERSION</th><th>TIPO</th><th>PESO</th></tr>";

    for (let i = 0; i < resultsInsert.length; i++) {
        let object2 = resultsInsert[i];
        salidaI += "<tr><td>" + object2.nombre + "</td><td>" +
            object2.fecha_lanz + "</td><td>" + object2.version + "</td><td>" +
            object2.tipo + "</td><td>" + object2.peso + "</td></tr>";
    }


    salidaInsert += "</table>";

    document.getElementById("respuestaInsertar").innerHTML = salidaInsert;

}
