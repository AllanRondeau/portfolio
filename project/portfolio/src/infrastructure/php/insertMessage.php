<?php
require ('connexion.php');
require ('function/emptyChecking.php');
header('Content-Type: application/json');
$url = "../../ui/homePage/ContactSection.component.ts";
$co = connexionDb();

try {
    $data = file_get_contents('php://input');
    $messageContentArray = json_decode($data, true);
    $checkedInputInArray = verificationForm($messageContentArray);
    if (!$checkedInputInArray){
        throw new Exception("An error occured while checking message content");
    }
    $query = $co->prepare('INSERT INTO message(name_message, email_message, object_message, content_message) values(:name, :email, :content, :object)');
    $query->bindParam(':name', $checkedInputInArray['name']);
    $query->bindParam(':email', $checkedInputInArray['email']);
    $query->bindParam(':object', $checkedInputInArray['object']);
    $query->bindParam(':content', $checkedInputInArray['content']);
    $query->execute();
    echo true;
}catch (exception $e){
    throw new $e;
}


