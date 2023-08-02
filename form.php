<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["nombre"];
    $email = $_POST["email"];
    $message = $_POST["mensaje"];

    $to = "corradijoaquin@gmail.com";
    $subject = "Nuevo mensaje de doctorcorradi.com.ar";
    $email_content = "Nombre: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Mensaje:\n$message\n";
    $headers = "From: $email";

    mail($to, $subject, $email_content, $headers);
}
?>