 <?php

    sleep(1);

    header('Content-Type: application/json');
    header('Cache-Control: no-cache, must-revalidate');

    $server = "localhost";
    $user = "root";
    $pass = "";
    $db = "distroada";

    $conn = mysqli_connect($server, $user, $pass, $db);

    $query = "SELECT * FROM distribuciones WHERE nombre LIKE '%" . $_POST['nombre'] . "%' ";

    $result = mysqli_query($conn, $query);

    $resultB = array();

    while ($col = mysqli_fetch_array($result)) {
        $resultB[] = $col;
    }
    echo json_encode($resultadoBusqueda);

    mysqli_close($conn);