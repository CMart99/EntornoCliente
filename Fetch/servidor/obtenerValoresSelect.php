<?php

header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

switch($_POST["tipoPrueba"]){
    case "1":
 
  $mysqli = new mysqli('localhost', 'root', '', 'distroada');

  $query = $mysqli -> query ("SELECT * FROM distribuciones");
                    
    while ($fila = mysqli_fetch_array($query)) {
        $texto .="<select id='tipo' name='tipo'>";
        $texto .='<option value="1">'.$fila['distribuciones'].'</option>'; 
        $texto .="</select>";
                            
}
        break;

    case "2":
        $mysqli = new mysqli('localhost', 'root', '', 'distroada');

  $query = $mysqli -> query ("SELECT * FROM distribuciones");
    while ($fila = mysqli_fetch_array($query)) {
        $texto .="<select id='tipo' name='tipo'>";
        $texto .='<option value="2">'.$fila['c_aut'].'</option>'; 
        $texto .="</select>";  
              
}
        break;
    default:
        $texto .="<option value=''>--Selecciona--</option>";
        break;
}

echo json_encode($texto);
?>