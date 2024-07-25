<?php
session_start();

if(isset($_POST['simsubmit'])) {
    $_SESSION['stickies'] .= 'recoverSuccess,';
    header('Location: /login.php');
    exit;
}