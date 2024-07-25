<?php

class PortalFeed {
    function getHtml()
    {
        ?>

        <!DOCTYPE html>
        <html>

        <head>
            <title>tracklink | feed</title>
        </head>

        <body class="with-custom-webkit-scrollbars with-custom-css-scrollbars" data-dm-shortcut-enabled="true"
              data-sidebar-shortcut-enabled="true" data-set-preferred-mode-onload="true">
        <div class="page-wrapper with-navbar">

            <div class="sticky-alerts"></div>

            <div class="w-400 mw-full" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                <div class="card">
                    <h2 class="card-title">
                    <span class="material-icons" style="font-size:larger;padding:0 5px 0 0;">
                        kitesurfing
                    </span>
                        over the waves...
                    </h2>
                    <p class="text-muted">
                        you made it! thanks for testing out tracklink's account management system. more coming soon.
                    </p>
                    <div class="text-right">
                        <a href="https://github.com/danvanbueren/tracklink" class="btn btn-primary">leave feedback</a>
                    </div>
                </div>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/halfmoon@1.1.1/js/halfmoon.min.js"></script>
            <script src="js/tracklink.js"></script>
        </body>

        </html>

        <?php
    }
}