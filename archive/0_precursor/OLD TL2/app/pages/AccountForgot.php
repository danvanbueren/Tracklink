<?php

class AccountForgot
{
    function getHtml()
    {
        ?>

        <?php
        /* LOAD LOGIC DEPENDENCIES */
        require_once "logic/handler.php";

        /* SECURITY CHECKPOINT - SESSION NOT REQUIRED */
// checkSession();

        ?>

        <!DOCTYPE html>
        <html>

        <head>
            <title>tracklink | request password reset</title>
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
                                      class="badge text-monospace">x</span>
                            </div>

                            <img src="graphics/site/login-card.jpg" class="img-fluid rounded-top" alt="TrackLink"
                                 style="height: 180px; width: 100%; object-fit: cover;">
                        </div>
                        <div class="content">
                            <h2 class="content-title">forgot password?</h2>
                            <form action="" method="post" name="Login_Form">
                                <input name="Email" type="email" id="Email" class="form-control" placeholder="email"
                                       value="" style="margin: 0 0 30px 0;" required autofocus>
                                <div style="display: flex; justify-content: space-between;">
                                    <div>
                                        <button name="Submit" value="Submit" class="btn btn-primary"
                                                type="submit">send email</button>
                                    </div>
                                    <div>
                                        <button name="BackToLogin" value="BackToLogin" class="btn btn-link" type="button"
                                                onclick="location.href = 'login.php';">back to login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/halfmoon@1.1.1/js/halfmoon.min.js"></script>
        <script src="min.js"></script>

        </body>

        </html>

        <?php
    }
}