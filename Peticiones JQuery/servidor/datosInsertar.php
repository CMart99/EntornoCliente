<?php
sleep(1);
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');

$server = "localhost";
$user = "root";
$pass = "";
$db = "distroada";

$conn = mysqli_connect($server, $user, $pass, $db);
$conn->set_charset("utf8");

$nombre = $_POST['nombre'];

$query = "INSERT INTO distribuciones (nombre,fecha_lanz,version,tipo,peso) VALUES ('$nombre','30-01-2020','19.04','Linux','4Gb')";

$insertResult = mysqli_query($conn, $query);

$iResult = array();

while ($columna = mysqli_fetch_array($insertResult)) {
    $iResult[] = $columna;
}
echo json_encode($iResult);

mysqli_close($conexion);
