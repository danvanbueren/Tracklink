<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport"/>
    <meta name="viewport" content="width=device-width"/>

    <link rel="icon" href="../rsc/fav/favicon.ico">
    <title>tracklink | indev-ruby</title>

    <link href="https://cdn.jsdelivr.net/npm/halfmoon@1.1.1/css/halfmoon-variables.min.css" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="../css/tracklink.css" rel="stylesheet">
</head>

<body class="with-custom-webkit-scrollbars with-custom-css-scrollbars" data-dm-shortcut-enabled="true"
      data-sidebar-shortcut-enabled="true" data-set-preferred-mode-onload="true" onresize="f.resizeEvent()">

<div id="js-target-modals"></div>

<div class="page-wrapper with-sidebar with-navbar-fixed-bottom" id="page-wrapper">

    <div class="sticky-alerts"></div>

    <div class="sidebar" id="nav-sidebar">
        <div class="sidebar-menu">
            <span class="sidebar-brand font-weight-bold no-select cursor-pointer" onclick="router.go('home');">
                <img src="../rsc/img/temp-brand-logo.png" alt="Tracklink Logo">
                Tracklink
                <span class="badge font-weight-light font-italic text-muted text-monospace pl-5 pr-5 ml-10 badge-pill"
                      style="font-size: 10px;">indev-ruby</span>
            </span>


            <div class="sidebar-content">

                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text font-weight-bold no-select">Studio</span>
                    </div>
                    <label for="studio-selection"></label>
                    <select class="form-control no-select" id="studio-selection" required="required"
                            onchange="//studioSelectionChanged()">
                        <option value="personal">Personal</option>
                        <option value="sapphire" selected="selected">Sapphire</option>
                        <option value="littleton">Littleton</option>
                        <option value="glass-cannon">Glass Cannon</option>
                    </select>
                </div>

            </div>

            <div class="sidebar-divider"></div>
            <br class="no-select" />

            <div id="js-target-nav-items"></div>

        </div>
    </div>

    <div class="content-wrapper">
        <div class="container-fluid">
            <div class="row" style="height: var(--content-height-row)">
                <div class="col" style="height: 100%;">
                    <div class="overflow-y-auto overflow-x-hidden mr-10" style="height: 100%;">
                        <div class="h-auto spa-content" id="js-target-spa-content"></div>
                    </div>
                </div>

                <div class="hidden-lg-and-down col-auto" id="js-target-user-sidebar" style="width: 75px">

                    <div class="overflow-x-hidden no-select" style="width: 75px;" id="user-own-account-bubble">
                        <div class="content m-0 pt-20 pb-10 mr-5">

                            <div class="h-50 mb-10">
                                <div class="position-relative" data-toggle="tooltip" data-title="USER STATUS"
                                     data-placement="left" style="height: 35px;">
                                    <div class="position-absolute">
                                        <span class="z-10"
                                              style="height: 50px; width: 50px; background-color: var(--dm-button-primary-bg-color); border-radius: 50%; display: inline-block"></span>
                                    </div>
                                    <div class="position-absolute">
                                        <span class="material-icons font-size-24 position-absolute z-20"
                                              style="margin: 11px 0 0 11px;">face_2</span>
                                    </div>
                                    <div class="position-absolute">
                                        <span class="material-icons font-size-20 position-absolute z-30"
                                              style="margin: 30px 0 0 30px; color: var(--dm-base-body-bg-color);">circle</span>
                                    </div>
                                    <div class="position-absolute">
                                        <span class="material-icons font-size-12 text-success position-absolute z-40"
                                              style="margin: 35px 0 0 35px;">circle</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="user-activity-bar overflow-y-auto overflow-x-hidden no-select">
                        <div class="content m-0 pt-10 pb-10 mr-5">

                            <div id="js-target-user-bar"></div>


                            <div class="h-50 mb-10">
                                <div class="position-relative" data-toggle="tooltip" data-title="USER STATUS" data-placement="left" style="height: 35px;">
                                    <div class="position-absolute">
                                        <span class="z-10" style="height: 50px; width: 50px; background-color: var(--dm-button-bg-color); border-radius: 50%; display: inline-block;"></span>
                                    </div>
                                    <div class="position-absolute">
                                        <span class="material-icons font-size-24 position-absolute z-20" style="margin: 11px 0 0 11px;">face_2</span>
                                    </div>
                                    <div class="position-absolute">
                                        <span class="material-icons font-size-20 position-absolute z-30" style="margin: 30px 0 0 30px; color: var(--dm-base-body-bg-color);">circle</span>
                                    </div>
                                    <div class="position-absolute">
                                        <span class="material-icons font-size-12 text-success position-absolute z-40" style="margin: 35px 0 0 35px;">circle</span>
                                    </div>
                                </div>
                            </div>

                            <div class="h-50 mb-10">
                                <div class="position-relative" data-toggle="tooltip" data-title="USER STATUS" data-placement="left" style="height: 35px;">
                                    <div class="position-absolute">
                                        <span class="z-10" style="height: 50px; width: 50px; background-color: var(--dm-button-bg-color); border-radius: 50%; display: inline-block;"></span>
                                    </div>
                                    <div class="position-absolute">
                                        <span class="material-icons font-size-24 position-absolute z-20" style="margin: 11px 0 0 11px;">face_3</span>
                                    </div>
                                    <div class="position-absolute">
                                        <span class="material-icons font-size-20 position-absolute z-30" style="margin: 30px 0 0 30px; color: var(--dm-base-body-bg-color);">circle</span>
                                    </div>
                                    <div class="position-absolute">
                                        <span class="material-icons font-size-12 text-success position-absolute z-40" style="margin: 35px 0 0 35px;">circle</span>
                                    </div>
                                </div>
                            </div>

                            <div class="h-50 mb-10">
                                <div class="position-relative" data-toggle="tooltip" data-title="USER STATUS" data-placement="left" style="height: 35px;">
                                    <div class="position-absolute">
                                        <span class="z-10" style="height: 50px; width: 50px; background-color: var(--dm-button-bg-color); border-radius: 50%; display: inline-block;"></span>
                                    </div>
                                    <div class="position-absolute">
                                        <span class="material-icons font-size-24 position-absolute z-20" style="margin: 11px 0 0 11px;">face_4</span>
                                    </div>
                                    <div class="position-absolute">
                                        <span class="material-icons font-size-20 position-absolute z-30" style="margin: 30px 0 0 30px; color: var(--dm-base-body-bg-color);">circle</span>
                                    </div>
                                    <div class="position-absolute">
                                        <span class="material-icons font-size-12 text-success position-absolute z-40" style="margin: 35px 0 0 35px;">circle</span>
                                    </div>
                                </div>
                            </div>

                            <div class="h-50 mb-10">
                                <div class="position-relative" data-toggle="tooltip" data-title="USER STATUS" data-placement="left" style="height: 35px;">
                                    <div class="position-absolute">
                                        <span class="z-10" style="height: 50px; width: 50px; background-color: var(--dm-button-bg-color); border-radius: 50%; display: inline-block;"></span>
                                    </div>
                                    <div class="position-absolute">
                                        <span class="material-icons font-size-24 position-absolute z-20" style="margin: 11px 0 0 11px;">face_5</span>
                                    </div>
                                    <div class="position-absolute">
                                        <span class="material-icons font-size-20 position-absolute z-30" style="margin: 30px 0 0 30px; color: var(--dm-base-body-bg-color);">circle</span>
                                    </div>
                                    <div class="position-absolute">
                                        <span class="material-icons font-size-12 text-secondary position-absolute z-40" style="margin: 35px 0 0 35px;">circle</span>
                                    </div>
                                </div>
                            </div>

                            <div class="h-50 mb-10">
                                <div class="position-relative" data-toggle="tooltip" data-title="USER STATUS" data-placement="left" style="height: 35px;">
                                    <div class="position-absolute">
                                        <span class="z-10" style="height: 50px; width: 50px; background-color: var(--dm-button-bg-color); border-radius: 50%; display: inline-block;"></span>
                                    </div>
                                    <div class="position-absolute">
                                        <span class="material-icons font-size-24 position-absolute z-20" style="margin: 11px 0 0 11px;">face_6</span>
                                    </div>
                                    <div class="position-absolute">
                                        <span class="material-icons font-size-20 position-absolute z-30" style="margin: 30px 0 0 30px; color: var(--dm-base-body-bg-color);">circle</span>
                                    </div>
                                    <div class="position-absolute">
                                        <span class="material-icons font-size-12 text-secondary position-absolute z-40" style="margin: 35px 0 0 35px;">circle</span>
                                    </div>
                                </div>
                            </div>

                            <div class="h-50 mb-10">
                                <div class="position-relative" data-toggle="tooltip" data-title="USER STATUS" data-placement="left" style="height: 35px;">
                                    <div class="position-absolute">
                                        <span class="z-10" style="height: 50px; width: 50px; background-color: var(--dm-button-bg-color); border-radius: 50%; display: inline-block;"></span>
                                    </div>
                                    <div class="position-absolute">
                                        <span class="material-icons font-size-24 position-absolute z-20" style="margin: 11px 0 0 11px;">sick</span>
                                    </div>
                                    <div class="position-absolute">
                                        <span class="material-icons font-size-20 position-absolute z-30" style="margin: 30px 0 0 30px; color: var(--dm-base-body-bg-color);">circle</span>
                                    </div>
                                    <div class="position-absolute">
                                        <span class="material-icons font-size-12 text-danger position-absolute z-40" style="margin: 35px 0 0 35px;">circle</span>
                                    </div>
                                </div>
                            </div>

                            <div class="h-50 mb-10">
                                <div class="position-relative" data-toggle="tooltip" data-title="USER STATUS" data-placement="left" style="height: 35px;">
                                    <div class="position-absolute">
                                        <span class="z-10" style="height: 50px; width: 50px; background-color: var(--dm-button-bg-color); border-radius: 50%; display: inline-block;"></span>
                                    </div>
                                    <div class="position-absolute">
                                        <span class="material-icons font-size-24 position-absolute z-20" style="margin: 11px 0 0 11px;">person_4</span>
                                    </div>
                                    <div class="position-absolute">
                                        <span class="material-icons font-size-20 position-absolute z-30" style="margin: 30px 0 0 30px; color: var(--dm-base-body-bg-color);">circle</span>
                                    </div>
                                    <div class="position-absolute">
                                        <span class="material-icons font-size-12 text-danger position-absolute z-40" style="margin: 35px 0 0 35px;">circle</span>
                                    </div>
                                </div>
                            </div>

                            <div class="h-50 mb-10">
                                <div class="position-relative" data-toggle="tooltip" data-title="USER STATUS" data-placement="left" style="height: 35px;">
                                    <div class="position-absolute">
                                        <span class="z-10" style="height: 50px; width: 50px; background-color: var(--dm-button-bg-color); border-radius: 50%; display: inline-block;"></span>
                                    </div>
                                    <div class="position-absolute">
                                        <span class="material-icons font-size-24 position-absolute z-20" style="margin: 11px 0 0 11px;">person_3</span>
                                    </div>
                                    <div class="position-absolute">
                                        <span class="material-icons font-size-20 position-absolute z-30" style="margin: 30px 0 0 30px; color: var(--dm-base-body-bg-color);">circle</span>
                                    </div>
                                    <div class="position-absolute">
                                        <span class="material-icons font-size-12 text-danger position-absolute z-40" style="margin: 35px 0 0 35px;">circle</span>
                                    </div>
                                </div>
                            </div>

                            <div class="h-50 mb-10">
                                <div class="position-relative" data-toggle="tooltip" data-title="USER STATUS" data-placement="left" style="height: 35px;">
                                    <div class="position-absolute">
                                        <span class="z-10" style="height: 50px; width: 50px; background-color: var(--dm-button-bg-color); border-radius: 50%; display: inline-block;"></span>
                                    </div>
                                    <div class="position-absolute">
                                        <span class="material-icons font-size-24 position-absolute z-20" style="margin: 11px 0 0 11px;">spa</span>
                                    </div>
                                    <div class="position-absolute">
                                        <span class="material-icons font-size-20 position-absolute z-30" style="margin: 30px 0 0 30px; color: var(--dm-base-body-bg-color);">circle</span>
                                    </div>
                                    <div class="position-absolute">
                                        <span class="material-icons font-size-12 text-danger position-absolute z-40" style="margin: 35px 0 0 35px;">circle</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <nav class="navbar navbar-fixed-bottom h-auto" id="root-navbar-bottom">

    </nav>

</div>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/halfmoon@1.1.1/js/halfmoon.min.js"></script>

<?php

// Include all js scripts

$di = new RecursiveDirectoryIterator('../js');

foreach (new RecursiveIteratorIterator($di) as $filename => $file) {
    if(!is_dir($filename)) {
        if(!str_contains($filename, '.DS_Store')) {

            echo '<script src="' . $filename . '"></script>' . PHP_EOL;

        }
    }
}

echo '<script>initializeJs();</script>';

?>

<noscript>
    <meta http-equiv="refresh" content="0; URL='js.php'">
</noscript>

</body>
</html>
