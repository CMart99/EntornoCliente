<?php

header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');


$texto = "<div>";

switch($_POST["tipoCampo"]){
    case "input":
        $texto .= "<label for='prueba'>INPUT</label>";
        $texto .="<input type='text' placeholder='Nombre...' id='prueba' name='prueba' value='' />";
        break;
    case "checkbox":
        $texto .="<input type='checkbox' id='prueba' name='prueba' value='OK' />";
        $texto .= "<label for='prueba'>CHECKBOX</label>";    
        break;
    case "select":
        $texto .= "<label for='tipo'>SELECT</label>";
        $texto .="<select id='tipo' name='tipo'>";
        $texto .="<option value=''>--Selecciona--</option>";
        $texto .="<option value='1'>Windows</option>";
        $texto .="<option value='2'>Linux</option>";
        $texto .="</select>";
        break;
    default:
        $texto = "Por favor, selecciona alguna de las opciones anteriores.";
        break;
}

$texto .= "</div>";

echo json_encode($texto);
?>