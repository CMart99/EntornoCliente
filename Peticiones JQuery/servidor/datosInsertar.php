<?php

header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');

$server = "localhost";
$user = "root";
$pass = "";
$db = "distroada";

$conn = mysqli_connect($server, $user, $pass, $db);

$nombre = $_POST['nombre'];
$fecha_lanz = $_POST['fecha_lanz'];
$version = $_POST['version'];
$tipo = $_POST['tipo_distro'];
$peso = $_POST['peso'];


$query = "INSERT INTO distribuciones (nombre,fecha_lanz,version,tipo,peso) VALUES ($nombre,$fecha_lanz,$version,$tipo,$peso)";

$resultInsert = mysqli_query($conn, $query);

$resultI = array();

while ($col = mysqli_fetch_array($resultInsert)) {
    $resultI[] = $col;
}
echo json_encode($resultI);

mysqli_close($conn);
