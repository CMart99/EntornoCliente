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

	$resultadoQuery = mysqli_query($conn, $query);

    $resultado = array();

	while ($columna = mysqli_fetch_array( $resultadoQuery )){
		$resultado[] = $columna;
	}
    echo json_encode($resultado);

	mysqli_close($conn);


?>
