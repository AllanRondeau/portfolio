<?php
header('Content-Type: application/json');
$url = "C:\Users\sdron\Documents\Project\portfolio_angular_cli\project\portfolio\src\ui\homePage\ContactSection.component.ts";
try {
    $data = json_decode(file_get_contents($url), true);
    echo json_encode("yes");
}catch (exception $e){
    throw new $e;
}


