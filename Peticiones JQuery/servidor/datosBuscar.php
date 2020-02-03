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
       
       $query = "SELECT * FROM distribuciones WHERE nombre LIKE '%" . $_POST['nombre'] . "%' ";
   
       $searchResult = mysqli_query($conn, $query);
   
       $sResult = array();
   
       while ($columna = mysqli_fetch_array( $searchResult )){
           $sResult[] = $columna;
       }
       echo json_encode($sResult);
   
       mysqli_close($conn);
   
   
   ?>
   
