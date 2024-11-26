<?php

class AccountEmailStandby
{
    function getHtml()
    {
        ?>

        <!DOCTYPE html>
        <html>

        <head>
            <title>tracklink | check email</title>
        </head>

        <body class="with-custom-webkit-scrollbars with-custom-css-scrollbars" data-dm-shortcut-enabled="true"
              data-sidebar-shortcut-enabled="true" data-set-preferred-mode-onload="true">
        <div class="page-wrapper">

            <div class="sticky-alerts"></div>

            <div class="content-wrapper container-fluid row">
                <div class="w-600 mw-full" style="margin: auto;">
                    <div class="card p-0">
                        <div style="position: relative; text-align: center;">
                            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                                <h1 id="login-brand-card-header">tracklink</h1>
                                <span id="login-version-card-mini"
                                      class="badge text-monospace"><?php echo $GLOBALS['G_VERSION']; ?></span>
                            </div>

                            <img src="graphics/site/login-card.jpg" class="img-fluid rounded-top" alt="TrackLink"
                                 style="height: 180px; width: 100%; object-fit: cover;">
                        </div>
                        <div class="content">
                            <h2 class="content-title">check your email</h2>
                            <p class="text-muted">we sent you an email with a link to set your password.</p>
                            <div style="display: flex; justify-content: space-between;">
                                <div></div>
                                <div>
                                    <button name="BackToLogin" value="BackToLogin" class="btn btn-link" type="button" onclick="location.href = 'login.php';">back to login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/halfmoon@1.1.1/js/halfmoon.min.js"></script>

        </body>

        </html>

        <?php
    }
}
