<?php

class DatabaseController
{
    function __construct($host, $username, $password, $dbname) {

        $conn = new mysqli($host, $username, $password, $dbname);

        if ($conn->connect_error) {
            if($onLoginPage) {
                // add error to buffer
                array_push($errorBuffer, "cant_connect_db");
            } else {
                // redirect
                header("location:login.php");
                exit;
            }

            header("location:login.php?tell=db_error");
            exit;
        }

        return $conn;
    }
}