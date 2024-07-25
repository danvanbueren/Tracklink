<?php
require_once 'database.php';

$title = $_POST['title'];
$type = $_POST['type'];

switch($type) {
    case 'project':
        $sql = "INSERT INTO projects (uid, name, lyrics) VALUES (NULL, '" . $title . "', '');";
        $response['page'] = 'project';
        break;
    case 'collection':
        $sql = "INSERT INTO collection (uid, name, lyrics) VALUES (NULL, '" . $title . "', '');";
        $response['page'] = 'collection';
        break;
    default:
        die("invalid add type - " . $type);
}

$result = $conn->query($sql);
$id = mysqli_insert_id($conn);

$response['id'] = $id;

$response = json_encode($response);

print($response);