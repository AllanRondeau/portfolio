<?php
    header('Content-Type: application/json; charset=utf-8');

include('connexion.php');
$co = connexionBdd();
$arrayobj = [];

$query = $co->prepare('SELECT * from project');
$query->execute();
while ($result = $query->fetch()) {
    $arrayobj[] = (object)[
        "id" => $result[0],
        "filePathImage" => $result[1],
        "projectTitle" => $result[2],
        "projectSummary" => $result[3],
        "projectStartDate" => $result[4],
        "projectEndDate" => $result[5],
        "projectTechnology" => $result[6],
    ];
}
echo json_encode($arrayobj);
