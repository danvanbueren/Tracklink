<?php
session_start();

if(isset($_POST['simsubmit'])) {
    $_SESSION['stickies'] .= 'registerVerifyEmail,';
    header('Location: /login.php');
    exit;
}