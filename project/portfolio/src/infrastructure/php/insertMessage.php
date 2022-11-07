<?php
header('Content-Type: application/json');
$url = "../../ui/homePage/ContactSection.component.ts";
require ('connexion.php');
$co = connexionBdd();

try {
    $data = file_get_contents('php://input');
    echo $data;
}catch (exception $e){
    throw new $e;
}


