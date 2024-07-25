<?php

class Project
{

    private string $projectId;

    function __construct(string $id)
    {
        $this->projectId = $id;
        $this->init();
    }

    function init() {


        $servername = "localhost";
        $username = "root";
        $password = "root";
        $dbname = "tracklink";

        $conn = new mysqli($servername, $username, $password, $dbname);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = 'SELECT * FROM projects WHERE num = ' . $this->projectId;
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            // output data of each row
            while($row = $result->fetch_assoc()) {
                echo " - num: " . $row["num"]. " - name: " . $row["name"]. " " . $row["belongsTo"]. "<br>";
            }
        } else {
            echo "0 results";
        }
        $conn->close();


    }

}