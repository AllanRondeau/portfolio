<?php
    #Fonction   appeler pour se connecter   la base de donn es
    function connexionDb() {
        // Permet d'utiliser les variables d'identification pour la connexion
        require('config.php');

        // Tentative de connexion   la base de donn es MySQL
        try{
            // chaine de connexion avec API PDO

            $co = new PDO("mysql:host=" . $server .";dbname=" . $dbName, $user);
            //On d finit le mode d'erreur de PDO sur Exception
            $co->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $co->setAttribute(PDO::MYSQL_ATTR_INIT_COMMAND, "SET NAMES 'utf8'");
            $co->exec("SET CHARACTER SET utf8");
        }
        // En cas de probl me dans la tentative connexion on termine le script php et on affichera le message d'erreur
        catch(PDOException $e){
            die('Erreur : ' . $e->getMessage());
        }
        return $co;
    }
?>
