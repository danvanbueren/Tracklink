<?php
require_once '../db/database.php';

$id = $_POST['id'];

$output = array();

$sql = "SELECT * FROM projects WHERE uid = " . $id;
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $output['uid'] = $row["uid"];
        $output['name'] = $row["name"];
        $output['lyrics'] = $row["lyrics"];
        $output['foundProject'] = 'true';
    }
} else {
    $output['foundProject'] = 'false';
}


$sql = "SELECT * FROM components WHERE belongsTo = " . $id;
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $output['components'][$row["uid"]] = array(

            "uid" => $row["uid"],
            "name" => $row["name"],
            "type" => $row["type"],
            "belongsTo" => $row["belongsTo"],
            "path" => $row["path"],
            "dateCreated" => $row["dateCreated"],
            "uploadedBy" => $row["uploadedBy"]

        );

    }
}


echo json_encode($output);
