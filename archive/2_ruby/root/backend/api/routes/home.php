<?php
require_once '../db/database.php';

$outputProjects = array();

$sql = "SELECT * FROM projects";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $outputProjects['proj_' . $row["uid"]] = array(
            "uid" => $row["uid"],
            "name" => $row["name"],
            "lyrics" => $row["lyrics"],
            "type" => "project"
        );
    }
}

foreach ($outputProjects as $project) {
    $sql = "SELECT * FROM components WHERE belongsTo = " . $project["uid"];
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $outputProjects['proj_' . $project["uid"]]["components"][$row["uid"]] = array(
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
}

/**/

$outputCollections = array();

$sql = "SELECT * FROM collection";
$result2 = $conn->query($sql);

if ($result2->num_rows > 0) {
    while ($row = $result2->fetch_assoc()) {
        $outputCollections['coll_' . $row["uid"]] = array(
            "uid" => $row["uid"],
            "name" => $row["name"],
            "assignedProjectsArray" => $row["assignedProjectsArray"],
            "type" => "collection"
        );
    }
}

// $sql = "UPDATE collection SET assignedProjectsArray = 534 WHERE collection.uid = 1;";
// $result = $conn->query($sql);

/**/

$conn->close();

echo json_encode([$outputProjects, $outputCollections]);