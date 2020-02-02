<?php

sleep(1);

header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');

$server = "localhost";
$user = "root";
$pass = "";
$db = "distroada";

$conn = mysqli_connect($server, $user, $pass, $db);

$query = "SELECT * FROM distribuciones";

$queryResult = mysqli_query($conn, $query);

$result = array();

while ($col = mysqli_fetch_array($queryResult)) {
	$result[] = $col;
}
echo json_encode($resultado);

mysqli_close($conn);
