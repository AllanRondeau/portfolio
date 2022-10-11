<?php
    header('Content-Type: application/json');
    $url = "C:\Users\sdron\Documents\Project\portfolio_angular_cli\project\portfolio\src\ui\homePage\ContactSection.component.ts";
    $data = json_decode(file_get_contents($url), true);
    var_dump($data);


