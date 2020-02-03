<?php

header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');

	$server = "localhost";
	$user = "root";
	$pass = "";  
	$db = "distroada";

	$conn = mysqli_connect($server, $user, $pass, $db);
	$conn->set_charset("utf8");
	
	$consulta = "SELECT * FROM distribuciones";

	$queryResult = mysqli_query($conn, $query);

    $result = array();

	while ($columna = mysqli_fetch_array( $queryResult )){
		$result[] = $col;
	}
    echo json_encode($result);

	mysqli_close($conn);


?>
