document.addEventListener("DOMContentLoaded", function () {
    let formularioBusqueda = document.getElementById("formularioVer");
    formularioBusqueda.addEventListener("submit", function (event) {
        event.preventDefault();
        realizarPeticionAsincronaBusqueda2();
    });

})

function escribirResultadoV(respuesta) {
    let divResultado = document.getElementById("resultadoV");
    divResultado.innerHTML = "";
    var results = respuesta;
    let salida = "<table border='1'><tr><th>NOMBRE</th><th>FECHA DE LANZAMIENTO</th><th>VERSION</th><th>PESO</th></tr>";

    for (let i = 0; i < results.length; i++) {
        let objeto = results[i];
        salida += "<tr><td>" + objeto.nombre + "</td><td>" +
            objeto.fecha_lanz + "</td><td>" + objeto.version + "</td><td>" +
            objeto.peso + "</td></tr>";
    }

    salida += "</table>";

    divResultado.innerHTML = salida;

}

function realizarPeticionAsincronaBusqueda2() {
    let nombreInput = $("#nombre").val();
    $.ajax({
        url: "servidor/datosJSON.php",
        data: { nombre: nombreInput },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); }
    }).done(escribirResultadoV)
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultadoV").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}

//Buscar

document.addEventListener("DOMContentLoaded", function () {
    let formularioBusqueda = document.getElementById("formularioBusqueda");
    formularioBusqueda.addEventListener("submit", function (event) {
        event.preventDefault();
        realizarPeticionAsincronaBusqueda();
    });

})


function realizarPeticionAsincronaMYSQL() {

}



function escribirResultado(respuesta) {
    let divResultado = document.getElementById("result");
    divResultado.innerHTML = "";
    var results = respuesta;
    let salida = "<table border='1'><tr><th>NOMBRE</th><th>FECHA DE LANZAMIENTO</th><th>VERSION</th><th>TIPO</th><th>PESO</th></tr>";

    for (let i = 0; i < results.length; i++) {
        let objeto = results[i];
        salida += "<tr><td>" + objeto.nombre + "</td><td>" +
            objeto.fecha_lanz + "</td><td>" + objeto.version + "</td><td>"
        objeto.peso + "</td></tr>";
    }

    salida += "</table>";

    divResultado.innerHTML = salida;

}

function realizarPeticionAsincronaBusqueda() {
    let nombreInput = $("#nombre").val();
    $.ajax({
        url: "servidor/datosBuscar.php",
        data: { nombre: nombreInput },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); }
    }).done(escribirResultado)
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#result").html("ERROR");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}



//Insertar

document.addEventListener("DOMContentLoaded", function () {
    let formularioInsertar = document.getElementById("formularioInsertar");
    formularioInsertar.addEventListener("submit", function (event) {
        event.preventDefault();
        realizarPeticionAsincronaI();
    });

})

function realizarPeticionAsincronaI() {
    let nombreInput = $("#nombreIn").val();
    $.ajax({
        url: "servidor/datosInsertar.php",
        data: { nombre: nombreInput },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); }
    }).done(alert("Se ha insertado con exito!"))
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultI").html("ERROR");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}
