<?php
/**
 * use this php file to load all required items for the entire app
 */

// run functions
startSession();
autoload();

// additional prerequisites
$page = str_replace('.php', '', str_replace('/', '', $_SERVER['SCRIPT_NAME']));
echo getHeader($page);

// session management
function startSession()
{
    session_start();
    // need to add: check to see if the user is already in an authenticated session. if so, redirect to portal
}

// load requirements
function autoload()
{
    // manually require items not autoloaded
    require_once 'inc/pageElements.php';

    // automatically require items in class directory
    $files = glob('class/*.php');

    echo '<script>';
    foreach ($files as $file) {
        require_once $file;
    }
    echo '</script>';
}

// get uid from username
function getUidFromDisplayName(string $displayName): string
{

    $db = new DbPipe();
    $conn = $db->conn;
    $sql = "SELECT * FROM users";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            if($row["name"] == $displayName) {
                return $row['num'];
            }
        }
    }

    return '';
}

// sends a message to php_error.log
function say(string $messageToLog) {
    error_log('[TRACKLINK_' . getBuildVersion() . '] ' . $messageToLog, 0);
}