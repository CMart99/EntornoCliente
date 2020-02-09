<?php

header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

switch($_POST["tipoPrueba"]){
    case "1":
 
  $mysqli = new mysqli('localhost', 'root', '', 'distroada');

  $query = $mysqli -> query ("SELECT * FROM distribuciones ORDER BY `fecha_lanz` DESC");
                    
    while ($texto = mysqli_fetch_array($query)) {
        
                            
}
        break;

    case "2":
        $mysqli = new mysqli('localhost', 'root', '', 'distroada');

  $query = $mysqli -> query ("SELECT * FROM distribuciones ORDER BY `peso` DESC");
                    
    while ($texto = mysqli_fetch_array($query)) {
                            
}
        break;
    default:
        $texto .="<option value=''></option>";
        break;
}
echo json_encode($texto);
?>