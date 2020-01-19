<?php
   
   sleep(1);
   
   header('Content-Type: application/json');
   header('Cache-Control: no-cache, must-revalidate');
   
       $server = "localhost";
       $user = "root";
       $pass = "";  
       $db = "distroada";
   
       $conn = mysqli_connect($server, $user, $pass, $db);
       
       $query= "SELECT * FROM distribuciones WHERE fecha_lanz LIKE '%" . $_POST['fecha_lanz'] . "%' ";
   
       $resultadoBusqueda = mysqli_query($conn, $query);
   
       $resultadoB = array();
   
       while ($columna = mysqli_fetch_array( $resultadoBusqueda )){
           $resultadoB[] = $columna;
       }
       echo json_encode($resultadoB);
   
       mysqli_close($conn);
   
   
   ?>