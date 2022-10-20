<?php
header('Content-Type: application/json');
$url = "../../ui/homePage/ContactSection.component.ts";
require ('connexion.php');
$co = connexionBdd();

try {
    $data = json_decode(file_get_contents($url), true);
    $name = $data['name'];
    $email = $data['email'];
    $object = $data['object'];
    $content = $data['content'];
    $query = $co->prepare('INSERT INTO message(name_message, email_message, object_message, message_message) VALUES(:name, :email, :object, :content) ');
    $query->bindParam(":name", $name);
    $query->bindParam(":email", $email);
    $query->bindParam(":object", $object);
    $query->bindParam(":content", $content);
    $query->execute();
    echo json_encode('ratio');
}catch (exception $e){
    throw new $e;
}


