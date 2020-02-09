<?php

header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');


$texto = "<div>";

switch($_POST["tipoCampo"]){
    case "input":
        $texto .= "<label for='input'>Campo input</label>";
        $texto .="<input type='text' placeholder='Nombre...' id='input' name='campo' value='' />";
        break;
    case "checkbox":
        $texto .="<input type='checkbox' id='checkbox' name='checkbox' value='OK' />";
        $texto .= "<label for='prueba'>Campo checkbox</label>";    
        break;
    case "select":
        $texto .= "<label for='prueba'>Selecciona</label>";
        $texto .="<select id='seleccion' name='seleccion'>";
        $texto .="<option value=''>--Selecciona--</option>";
        $texto .="<option value='1'>Distros por fecha de lanzamiento</option>";
        $texto .="<option value='2'>Distros por peso</option>";
        $texto .="</select>";
        break;
    default:
        $texto = "¡ERROR! Debes seleccionar una opción de la lista.";
        break;
}

$texto .= "</div>";

echo json_encode($texto);
?>
