<?php
function getHeader($page): string
{
    return '
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
<meta name="viewport" content="width=device-width" />

<link href="https://cdn.jsdelivr.net/npm/halfmoon@1.1.1/css/halfmoon-variables.min.css" rel="stylesheet" />
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="css/tracklink.css" rel="stylesheet">

<link rel="icon" href="resources/fav/android-chrome-192x192.png">
<link rel="icon" href="resources/fav/android-chrome-512x512.png">
<link rel="icon" href="resources/fav/apple-touch-icon.png">
<link rel="icon" href="resources/fav/favicon.ico">
<link rel="icon" href="resources/fav/favicon-16x16.png">
<link rel="icon" href="resources/fav/favicon-32x32.png">
<link rel="manifest" href="resources/fav/site.webmanifest">

<title>tracklink - ' . $page . '</title>
</head>
<body class="with-custom-webkit-scrollbars with-custom-css-scrollbars" data-sidebar-shortcut-enabled="true">
' . getModalsForPage($page);
}

function getFooter($page): string
{
    $stickies = getStickies();
    $js = getJs($page);

    return '
<script src="https://cdn.jsdelivr.net/npm/halfmoon@1.1.1/js/halfmoon.min.js"></script>
<script src="/js/tracklink.js"></script>
' . $stickies . $js . '
</body>
</html>
';
}

function getNav($page): string
{
    $feedActive = '';
    $projectsActive = '';
    $collectionsActive = '';

    switch ($page) {
        case 'feed':
            $feedActive = ' active';
            break;
        case 'projects':
            $projectsActive = ' active';
            break;
        case 'collections':
            $collectionsActive = ' active';
            break;
    }

    return '
        <nav class="navbar justify-content-between">
            <div class="navbar-content w-250">
                <div class="mr-5">
                    <button class="btn btn-square" type="button" onclick="halfmoon.toggleSidebar()"
                            data-toggle="tooltip"
                            data-title="use shift + s" data-placement="right">
                    <span class="material-icons align-middle pb-5">
                        menu
                    </span>
                    </button>
                </div>
                <a href="/feed.php" class="navbar-brand">
                    <img src="resources/brand-logo.svg" alt="Tracklink logo">
                </a>
                <div class="d-none d-md-flex">
                    <kbd class="navbar-text text-monospace">v2/dev</kbd>
                </div>
            </div>
            <ul class="navbar-nav">
                <!-- d-none = display: none, d-md-flex = display: flex on medium screens and up (width > 768px) -->
                <li class="nav-item' . $feedActive . '">
                    <a href="feed.php" class="nav-link">
                        <div class="pt-5" data-toggle="tooltip" data-title="feed" data-placement="bottom">
                            <span class="material-icons font-size-24">newspaper</span>
                        </div>
                    </a>
                </li>
                <li class="nav-item' . $projectsActive . '">
                    <a href="projects.php" class="nav-link">
                        <div class="pt-5" data-toggle="tooltip" data-title="projects" data-placement="bottom">
                            <span class="material-icons font-size-24">audiotrack</span>
                        </div>
                    </a>
                </li>
                <li class="nav-item' . $collectionsActive . '">
                    <a href="collections.php" class="nav-link">
                        <div class="pt-5" data-toggle="tooltip" data-title="collections" data-placement="bottom">
                            <span class="material-icons font-size-24">album</span>
                        </div>
                    </a>
                </li>
            </ul>
            <div class="navbar-content w-250 justify-content-end pr-10">
                <div class="dropdown toggle-on-hover">
                    <a class="nav-link" data-toggle="dropdown" type="button">
                        <span class="material-icons font-size-24 mt-5">groups</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <h6 class="dropdown-header">choose server</h6>
                        <div class="dropdown-divider"></div>
                        <div class="dropdown-content">
                            <form action="inc/post/newServer.php" method="post">
                                <div class="btn-group" role="group">
                                    <select class="form-control" id="select-new-server">
                                        <option value="1" selected="selected">server1</option>
                                        <option value="2">server2</option>
                                        <option value="3">server3</option>
                                    </select>
                                    <button class="btn btn-primary btn-square" type="button">
                                        <span class="material-icons align-middle font-size-12">done</span>
                                    </button>
                                </div>
                            </form>
                            <button class="btn btn-link w-full mt-5" type="button">join new server</button>
                        </div>
                    </div>
                </div>
                <div class="dropdown toggle-on-hover">
                    <a class="nav-link" data-toggle="dropdown" type="button">
                        <span class="material-icons font-size-24">account_circle</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <h6 class="dropdown-header text-center">dan</h6>
                        <div class="dropdown-divider"></div>
                        <div class="dropdown-content">
                            <a class="btn w-full" href="#account" type="button">account</a>
                            <a href="login.php" class="btn btn-link w-full mt-5" type="button">
                                logout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
';
}

function getSidebar(): string
{
    return '
        <div class="sidebar-overlay" onclick="halfmoon.toggleSidebar()"></div>

        <div class="sidebar">
            <div class="sidebar-menu">
                <div class="hidden-md-and-up">
                    <div class="sidebar-content pt-0 pb-0 mb-0">
                        <kbd class="navbar-text text-monospace">v2/dev</kbd>
                    </div>
                    <br/>
                </div>
                <h5 class="sidebar-title">members</h5>
                <div class="sidebar-divider"></div>
                <div class="sidebar-content mb-0 mt-0">
                    <input type="text" class="form-control" placeholder="search members">
                </div>
                <a href="#" class="sidebar-link sidebar-link-with-icon pt-15">
                    <span class="sidebar-icon rounded-circle font-italic user-circle user-online">d</span>
                    <div>
                        <p class="font-weight-bold m-0 p-0">dan</p>
                        <div class="font-size-12 text-success text-shadow m-0 p-0">
                            online
                        </div>
                    </div>
                </a>
                <a href="#" class="sidebar-link sidebar-link-with-icon pt-15">
                    <span class="sidebar-icon rounded-circle font-italic user-circle user-online">d</span>
                    <div>
                        <p class="font-weight-bold m-0 p-0">dustin</p>
                        <div class="font-size-12 text-success m-0 p-0">online</div>
                    </div>
                </a>
                <a href="#" class="sidebar-link sidebar-link-with-icon pt-15">
                    <span class="sidebar-icon rounded-circle font-italic user-circle user-inactive">p</span>
                    <div>
                        <p class="font-weight-bold m-0 p-0" style="opacity: 75%">parks</p>
                        <div class="font-size-12 text-secondary"
                             style="margin: 0 0 0 0; padding: 0 0 0 0; opacity: 75%">away for 7m
                        </div>
                    </div>
                </a>
                <a href="#" class="sidebar-link sidebar-link-with-icon" style="padding-top: 15px">
                    <span class="sidebar-icon rounded-circle font-italic user-circle user-offline">o</span>
                    <div>
                        <p class="font-weight-bold" style="margin: 0 0 0 0; padding: 0 0 0 0; opacity: 50%">owen</p>
                        <div class="font-size-12 text-danger" style="margin: 0 0 0 0; padding: 0 0 0 0; opacity: 50%">
                            last seen 3d ago
                        </div>
                    </div>
                </a>
                <a href="#" class="sidebar-link sidebar-link-with-icon" style="padding-top: 15px">
                    <span class="sidebar-icon rounded-circle font-italic user-circle user-offline">c</span>
                    <div>
                        <p class="font-weight-bold" style="margin: 0 0 0 0; padding: 0 0 0 0; opacity: 50%">
                            christian</p>
                        <div class="font-size-12 text-danger" style="margin: 0 0 0 0; padding: 0 0 0 0; opacity: 50%">
                            last seen 4d ago
                        </div>
                    </div>
                </a>
                <a href="#" class="sidebar-link sidebar-link-with-icon" style="padding-top: 15px">
                    <span class="sidebar-icon rounded-circle font-italic user-circle user-offline">s</span>
                    <div>
                        <p class="font-weight-bold" style="margin: 0 0 0 0; padding: 0 0 0 0; opacity: 50%">enrique</p>
                        <div class="font-size-12 text-danger" style="margin: 0 0 0 0; padding: 0 0 0 0; opacity: 50%">
                            last seen 1w ago
                        </div>
                    </div>
                </a>
            </div>
        </div>
';
}

function getModalsForPage($page): string
{
    switch ($page) {
        case 'projects':
            return getModal('projects-add') . getModal('all-account');
        case 'collections':
            return getModal('collections-add') . getModal('all-account');
        case 'feed':
        case 'project':
            return getModal('all-account');
    }
    return '';
}

function getModal($type): string
{
    switch ($type) {
        default:
            return '';

        case 'projects-add':
            return '
    <div class="modal" id="add" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <a href="" class="close" role="button">
                    <span>&times;</span>
                </a>
                <h5 class="modal-title">add project</h5>
                <form action="" method="post" class="w-400 mw-full">
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">name</span>
                            </div>
                            <input type="text" class="form-control" placeholder="name">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
';

        case 'all-account':
            return '
    <div class="modal" id="account" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <a href="" class="close" role="button">
                    <span>&times;</span>
                </a>
                <h5 class="modal-title">account</h5>
                <form action="" method="post" class="w-400 mw-full">
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">name</span>
                            </div>
                            <input type="text" class="form-control" placeholder="name">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
';
    }
}

function getStickies(): string
{
    $stickyArray = explode(",", $_SESSION['stickies']);
    $_SESSION['stickies'] = '';

    if (count($stickyArray) < 1) {
        return '';
    }

    $output = '';

    foreach ($stickyArray as $sticky) {
        switch ($sticky) {
            case 'recoverSuccess':
                $output .= 'halfmoon.initStickyAlert({title: "password reset", content: "login with your new password", alertType: "alert-success"});';
                break;
            case 'recoverFail':
                $output .= 'halfmoon.initStickyAlert({title: "link invalid", content: "check your email for the password reset link", alertType: "alert-danger"});';
                break;
            case 'recoverSent':
                $output .= 'halfmoon.initStickyAlert({title: "email sent", content: "check your email for the password reset link", alertType: "alert-success"});';
                break;
            case 'registerVerifyEmail':
                $output .= 'halfmoon.initStickyAlert({title: "verify email", content: "check your email for a verification link", alertType: "alert-success"});';
                break;
        }
    }

    if ($output == '') {
        return '';
    }

    return '<script>' . $output . '</script>';
}

function getJs($page): string
{
    switch ($page) {
        case 'projects':
        case 'collections':
            return '<script>tracklink.initialProjectListView();</script>';
    }
    return '';
}

function getCard($id, $linkHeader, $image, $name, $time): string
{
    return '
<div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
    <div class="card p-0 mb-5 mt-20">
        <a href="' . $linkHeader . $id . '">
            <img src="' . $image . '" class="img-fluid rounded-top w-full h-200" alt="art" style="object-fit: cover" draggable="false">
        </a>
        <div class="content mt-5 mb-5 ml-20 mr-20">
            <a href="' . $linkHeader . $id . '" class="content-title text-light project-card-title font-size-16 mb-5"> ' . $name . '</a>
            <div class="row align-text-top">
                <div class="col">
                    <div class="row">
                        <span class="material-icons font-size-16 mt-15 text-muted">schedule</span>
                        <p class="text-muted align-top pl-5">' . $time . '</p>
                    </div>
                </div>
                <div class="col-auto mt-5">
                
                    <div class="dropdown">
                        <button class="btn btn-square rounded-circle" data-toggle="dropdown" type="button" id="dropdown-toggle-btn-1">
                            <span class="material-icons align-text-bottom">more_vert</span>
                        </button>
                        <div class="dropdown-menu">
                            <a href="#" class="dropdown-item">
                                <span class="material-icons font-size-16 align-text-bottom mr-5">text_fields</span>
                                rename
                            </a>
                            <a href="#" class="dropdown-item">
                                <span class="material-icons font-size-16 align-text-bottom mr-5">delete</span>
                                delete
                            </a>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    </div>
</div>
';
}

function getListItem($id, $linkHeader, $image, $name, $time, $lastUpdatedBy): string
{
    return '
<tr>
    <th>
        <a href="' . $linkHeader . $id . '">
            <img src="' . $image . '" class="img-fluid rounded w-50 ml-10" alt="art" style="object-fit: scale-down" draggable="false">
        </a>
    </th>
    <td>
        <a href="' . $linkHeader . $id . '" class="text-light project-card-title">' . $name . ' <span class="material-icons font-size-16 align-middle ml-5">launch</span></a>
    </td>
    <td>' . $time . '</td>
    <td>' . $lastUpdatedBy . '</td>
</tr>    
';
}