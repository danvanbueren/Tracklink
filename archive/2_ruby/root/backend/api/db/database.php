<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "tracklink-indev-ruby";
$port = "";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("db failed - " . $conn->connect_error);
}