function objetoXHR(){
    if (window.XMLHttpRequest){// El navegador implementa la interfaz XHR de forma nativa
        return new XMLHttpRequest();
    }else if (window.ActiveXObject){ // El navegador no implementa la interfaz XHR de forma nativa
                                     // Por ejemplo: Internet explorer.
        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0',
            'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++){
            try{
                /* Se intenta crear el objeto en Internet Explorer comenzando
                en la versión más moderna del objeto hasta la primera versión.
                En el momento que se consiga crear el objeto, saldrá del bucle
                devolviendo el nuevo objeto creado. */

                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) {}//Capturamos el error,
        }
    }
    
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}


function llamadaAsincrona2(url,type,data,responseType,callback){
    XHR = new objetoXHR();
    if (XHR){
        alert("Comenzamos la peticion AJAX");
        document.getElementById("spinner").style ="display:block";


        XHR.open(type, url, true);

        XHR.onreadystatechange = ejecutarFuncionAjax(responseType,callback);

        if(type === "POST"){
           
            XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        }

        XHR.send(data);
    }
}


function ejecutarFuncionAjax(responseType,funcion){
    return function() {
        if (this.readyState == 4 && this.status == 200) {
            let result = "";
            switch(responseType){
                case "XML":
                    result = this.responseXML;
                    break;
                default :
                    result = this.responseText;
                    break;
            }
            funcion(result);

            alert("Ajax Request Terminated");
            document.getElementById("spinner").style ="display:none";
        }
    }
}


/////////////////////////////BÚSQUEDA/////////////////////////////

document.addEventListener("DOMContentLoaded",function(){
    let formularioAjax = document.getElementById("formulario");
    formularioAjax.addEventListener("submit",function(event){
        event.preventDefault();
        realizarPeticionAsincrona();
    });
})

function objetoXHR(){
    if (window.XMLHttpRequest){
        return new XMLHttpRequest();
    }else if (window.ActiveXObject){ 

        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0',
            'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++){
            try{
            
                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) {}
        }
    }
   
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}



function comprobarEstadoPeticion(){
    switch(this.readyState){
        case 4:
            if (this.status == 200){
                alert("Empieza la petición AJAX");
                tratarResultadoBusqueda(this.responseText);
                alert("Terminó la petición AJAX");
            }else{
                alert("HA HABIDO UN ERROR. INTENTELO MAS TARDE.")
            }
            break;
    }
}

function realizarPeticionAsincrona(){
    let nombre = document.getElementById("nombre").value;

    miXHR = new objetoXHR();
    miXHR.open("POST", "servidor/datosBuscar.php", true);
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.onreadystatechange = comprobarEstadoPeticion;
    
    let datos = "nombre="+nombre;
    miXHR.send(datos);

}


/////////////////////////////SELECT/////////////////////////////


document.addEventListener("DOMContentLoaded",function(){
    let formularioAjax2 = document.getElementById("formularioSelect");
    formularioAjax2.addEventListener("submit",function(event){
        event.preventDefault();
        realizarPeticionAsincrona2();
    });
})

function objetoXHR(){
    if (window.XMLHttpRequest){
        return new XMLHttpRequest();
    }else if (window.ActiveXObject){ 

        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0',
            'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++){
            try{
            
                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) {}
        }
    }
   
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}



function comprobarEstadoPeticion2(){
    switch(this.readyState){
        case 4:
            if (this.status == 200){
                alert("Empieza la petición AJAX");
                tratarResultadoSelect(this.responseText);
                alert("Terminó la petición AJAX");
            }else{
                alert("HA HABIDO UN ERROR. INTENTELO MAS TARDE.")
            }
            break;
    }
}

function realizarPeticionAsincrona2(){
    let tipo = document.getElementById("tipo").value;

    miXHR = new objetoXHR();
    miXHR.open("POST", "servidor/datosSelect.php", true);
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.onreadystatechange = comprobarEstadoPeticion2;
    
    let datos3 = "tipo="+tipo;
    miXHR.send(datos3);

}



/////////////////////////////INSERT/////////////////////////////


document.addEventListener("DOMContentLoaded",function(){
    let formularioAjax = document.getElementById("formularioInsert");
    formularioAjax.addEventListener("submit",function(event){
        event.preventDefault();
        realizarPeticionAsincrona3();
    });
})

function objetoXHR(){
    if (window.XMLHttpRequest){
        return new XMLHttpRequest();
    }else if (window.ActiveXObject){ 

        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0',
            'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++){
            try{
            
                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) {}
        }
    }
   
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}



function comprobarEstadoPeticion3(){
    switch(this.readyState){
        case 4:
            if (this.status == 200){
                alert("Empieza la petición AJAX");
                tratarResultadoInsertar(this.responseText);
                alert("Terminó la petición AJAX");
            }else{
                alert("HA HABIDO UN ERROR. INTENTELO MAS TARDE.")
            }
            break;
    }
}

function realizarPeticionAsincrona3(){
    let nombre2 = document.getElementById("nombre2").value;

    XHR = new objetoXHR();
    XHR.open("POST", "servidor/datosInsertar.php", true);
    XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    XHR.onreadystatechange = comprobarEstadoPeticion3;
    
    let data = "nombre="+nombre2;
    XHR.send(data);

}
