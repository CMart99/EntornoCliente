<?php
   
   header('Content-Type: application/json');
   header('Cache-Control: no-cache, must-revalidate');
   
       $server = "localhost";
       $user = "root";
       $pass = "";  
       $db = "distroada";
   
       $conn = mysqli_connect($server, $user, $pass, $db);
       
       $nombre = $_POST['nombre2'];
       $fecha_lanz = $_POST['fecha_lanz'];
       $version = $_POST['version'];
       $peso = $_POST['peso'];


       $query = "INSERT INTO distribuciones (ID,nombre,fecha_lanz,version, peso) VALUES ('$nombre','$fecha_lanz','$version','$peso')";
   
       $resultadoInsertar = mysqli_query($conn, $query);
   
       $resultadoI = array();
   
       while ($columna = mysqli_fetch_array( $resultadoInsertar )){
           $resultadoInsert[] = $columna;
       }
       echo json_encode($resultadoInsert);
   
       mysqli_close($conn);
   
   
   ?>
   