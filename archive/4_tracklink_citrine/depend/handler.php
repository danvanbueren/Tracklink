<?php

require_once "mailer.php";
require_once "config.php";
require_once "onLoad.php";

/* GLOBAL VARIABLES */
$G_AUTHOR = 'Daniel Van Bueren';
$G_VERSION = 'indev2_0.3';

// Session management
function checkSession() {
    // redirect if no session
    if($_SESSION['Active'] == false){
        header("location:login.php");
	    exit;
    }
    // track last activity to auto expire sessions
    if (isset($_SESSION['LAST_ACTIVITY']) && (time() - $_SESSION['LAST_ACTIVITY'] > 900)) {
        // 900 sec == 15 min; if this changes, change the session logic in the js!
        session_unset();
        session_destroy();
        header("Location: /login.php?sticky=timeout");
        exit;
    }
    $_SESSION['LAST_ACTIVITY'] = time(); // update last activity time stamp
}

// Returns static head
function getHead() {
    return '<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/halfmoon@1.1.1/css/halfmoon-variables.min.css" rel="stylesheet" />
    <link href="css/min.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet">
    <link rel="apple-touch-icon" sizes="180x180" href="/graphics/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/graphics/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/graphics/favicon/favicon-16x16.png">
    <link rel="manifest" href="/graphics/favicon/site.webmanifest">';
}

// Helper function to format a nav item for the nav function
function getFormattedNavItem(string $pageTitle, bool $isActive) {
    $output = '<li class="nav-item';
    if($isActive) {
        $output .= ' active';
    }
    $output .= '">';
    $output .= '<a href="' . $pageTitle . '.php" class="nav-link">' . $pageTitle . '</a></li>';
    return $output;
}

// Get presentation-ready nav (all pages need to go into this array)
function getNav($pageTitle) {
    $pages = array("feed", "studio");
    $navItems = "";

    foreach ($pages as $page) {
        if($page == $pageTitle) {
            $navItems .= getFormattedNavItem($page, true);
        } else {
            $navItems .= getFormattedNavItem($page, false);
        }
    }

    $output = '
    <nav class="navbar" style="padding: 0 10% 0 10%;">
        <a href="index.php" class="navbar-brand" id="nav-brand-text">tracklink</a>
        <span class="badge navbar-text text-monospace" id="nav-version">' . $GLOBALS['G_VERSION'] . '</span>
        <ul class="navbar-nav d-none d-md-flex">
    ';
    $output .= $navItems;
    $output .= '
        </ul>
        <div class="form-inline d-none d-md-flex ml-auto">


        <div class="dropdown with-arrow">
            <a href="#" onclick="return false;" data-toggle="dropdown" id="avatar-popover-toggle" aria-haspopup="true" aria-expanded="false">
                <span class="material-icons profileEmblem" style="font-size: 36px;">account_circle</span>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="avatar-popover-toggle">
                <h6 class="dropdown-header">' . $_SESSION['Name'] . '</h6>
                <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item">account settings</a>
                    <a href="destroySession.php" class="dropdown-item">logout</a>
                </div>
            </div>
        </div>
    </nav>
    ';
    return $output;
}

// Return errors as formatted HTML for $errorBuffer
function getErrors($errorBuffer) {
    $output = '';
    foreach ($errorBuffer as $value) {
        switch($value) {
            case 'cant_connect_db':
                $output .= getFormattedSticky('system error', 'database is unavailable', 'alert-danger', 'filled-lm');
                break;
            case 'email_taken':
                $output .= getFormattedSticky('email already registered', 'log in or reset your password', 'alert-secondary', 'filled-lm');
                break;
            case 'password_changed':
                $output .= getFormattedSticky('password changed', 'log in with your new password', 'alert-success', 'filled-lm');
                break;
            case 'login_failed':
                $output .= getFormattedSticky('login failed', 'please try again', 'alert-secondary', 'filled-lm');
                break;
            case 'timeout':
                $output .= getFormattedSticky('signed out', 'you have been signed out due to inactivity', 'alert-secondary', 'filled-lm');
                break;
            case 'bad_token':
                $output .= getFormattedSticky('bad token', 'try opening the link again. be sure not to modify the link', 'alert-secondary', 'filled-lm');
                break;
            default:
                $output .= getFormattedSticky('not a valid case', $value, 'alert-secondary', 'filled-lm');
        }
    }
    return $output;
}

// Return a pre-formatted sticky
function getFormattedSticky($title, $content, $alertType, $fillType) {
    return '<script>halfmoon.initStickyAlert({title:"' . $title . '",content:"' . $content . '",alertType:"' . $alertType . '",fillType:"' . $fillType . '"});</script>';
}

// Helper function to log to console via JS
function logToBrowser($output, $with_script_tags = true) {
    $js_code = 'console.log(' . json_encode($output, JSON_HEX_TAG) . ');';
    if ($with_script_tags) {
        $js_code = '<script>' . $js_code . '</script>';
    }
    echo $js_code;
}