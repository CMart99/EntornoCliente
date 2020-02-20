<?php
   
   header('Content-Type: application/json');
   header('Cache-Control: no-cache, must-revalidate');
   
       $server = "localhost";
       $user = "root";
       $pwd = "";  
       $db = "distroada";
   
       $conn = mysqli_connect($server, $user, $pwd, $db);
       
       $distribuciones = $_POST['distribuciones'];

       $query = "INSERT INTO distribuciones (nombre, tipo, fecha_lanz, version, peso) VALUES ('$nombre', '$tipo', '$fecha_lanz', '$version', '$peso')";
   
       $resultadoInsert = mysqli_query($conn, $query);
   
       $resultadoI = array();
   
       while ($col = mysqli_fetch_array( $resultadoInsert )){
           $resultadoI[] = $col;
       }
       echo json_encode($resultadoI);
   
       mysqli_close($conn);
   
   
   ?>
   