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
function startSession() {
    session_start();
}

// load requirements
function autoload() {
    // manually require items not autoloaded
    require_once 'inc/pageElements.php';

    // automatically require items in class directory
    $files = glob('class/*.php');

    echo '<script>';
    foreach($files as $file) {
        echo 'console.log("SERVER: require_once ' . $file . '");';
        require_once $file;
    }
    echo '</script>';
}