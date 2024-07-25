<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" href="img/fav/android-chrome-512x512.png">
    <title>TrackLink | Enable Javascript!</title>
    <link href="css/halfmoon.min.css" rel="stylesheet" />
    <link href="css/tracklink.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
</head>
<body class="with-custom-webkit-scrollbars with-custom-css-scrollbars" data-dm-shortcut-enabled="true" data-sidebar-shortcut-enabled="true" data-set-preferred-mode-onload="true">

<div id="target">

    <div class="page-wrapper with-navbar with-sidebar">
        <div class="content-wrapper">
            <div class="h-full row d-flex align-items-center">
                <div class="col"></div>
                <div class="col-auto">
                    <div class="w-400 mw-full">
                        <div class="card p-0">
                            <div class="content">
                                <h2 class="content-title text-center">
                                    tracklink
                                </h2>
                                <span class="text-monospace font-size-12" style="color: indianred;">This web app requires JavaScript - please enable and refresh!</span><br>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col"></div>
            </div>
        </div>
    </div>

</div>

<?php
$di = new RecursiveDirectoryIterator('js');

foreach (new RecursiveIteratorIterator($di) as $filename => $file) {
    if(!is_dir($filename)) {
        if(!str_contains($filename, '.DS_Store')) {
            echo '<script src="' . $filename . '"></script>' . PHP_EOL;
        }
    }
}
echo '<script>initialize();</script>';
?>

</body>
</html>