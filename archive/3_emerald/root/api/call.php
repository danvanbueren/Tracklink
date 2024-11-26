<?php

// FORMAT:
// 1. ACTION
// - AUTH - Initial authentication
// - GET_VIEW - Get package required for view
// -

// demonstration:
// get the attribute:
$go = $_REQUEST["GO"];

switch($go) {
    case 'AUTH':
        echo 'TEMP AUTH RESPONSE';
        break;
    case 'GET_VIEW':
        echo 'TEMP GET_VIEW RESPONSE';
        break;
    default:
        echo 'INVALID QUERY';
        break;
}