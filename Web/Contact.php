<?php
$nombre= isset($_POST['Nombre']) ? $_POST['Nombre'] : null ;
$email=$_POST["Email"];
$sugerencia=$_POST["Sugerencia"];
$contenido="
Nombre: $nombre\n\r
Email: $email\n\r
Sugerencia: $sugerencia\n\r
";
echo "<p>Hola $nombre su mensaje se ha enviado correctamente.</p>\n";
echo "<p>Gracias por contactar con nosotros.</p>\n";
echo "<p>Nos pondremos en contacto con usted lo antes posible.</p>\n";
?>