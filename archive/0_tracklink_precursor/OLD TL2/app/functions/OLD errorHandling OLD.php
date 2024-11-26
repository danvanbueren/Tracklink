<?php

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