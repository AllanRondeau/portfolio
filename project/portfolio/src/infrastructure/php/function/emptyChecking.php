<?php

function verificationForm(array $array): bool|array
{
    $isEmpty = false;
    foreach($array as $arrayContent){
        if (!empty($arrayContent)){
            $arrayContent = htmlspecialchars($arrayContent);
            $arrayContent = trim($arrayContent);
            $arrayContent = stripslashes($arrayContent);
        }else{
            $isEmpty = true;
        }
    }
    if ($isEmpty){
        return false;
    }else{
        return $array;
    }
    
}
