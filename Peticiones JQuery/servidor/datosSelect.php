<?php

sleep(1);

header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');

$server = "localhost";
$user = "root";
$pass = "";
$db = "distroada";

$conn = mysqli_connect($server, $user, $pass, $db);

$query = "SELECT * FROM distribuciones WHERE tipo LIKE '%" . $_POST['tipo'] . "%' ";

$searchResult = mysqli_query($conn, $query);

$sResult = array();

while ($col = mysqli_fetch_array($selectResult)) {
    $sResult[] = $col;
}
echo json_encode($sResult);

mysqli_close($conn);