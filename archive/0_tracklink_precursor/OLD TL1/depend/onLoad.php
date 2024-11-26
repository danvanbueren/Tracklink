<?php

// RUN THIS EVERY TIME A PAGE LOADS WITH FUNCTIONS.PHP INCLUDED
ob_start();
session_start();

/* ERROR HANDLING */
// Store error messages for later use
$errorBuffer = array();

// Prevent runaway redirects when error-handling
$onLoginPage = false;
if($_SERVER['REQUEST_URI'] == "/login.php") { $onLoginPage = true; }

// sql connection
try {
    // create PDO
    $conn = new PDO("mysql:host=$servername", $username, $password);
    // attributes
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    if($onLoginPage) {
        // add error to buffer
        array_push($errorBuffer, "cant_connect_db");
    } else {
        // redirect
        header("location:login.php");
	    exit;
    }
}