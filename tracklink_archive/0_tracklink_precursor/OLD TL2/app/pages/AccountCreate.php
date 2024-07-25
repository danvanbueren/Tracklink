<?php

require_once 'app/functions/BuildInfo.php';

$pageHtml = '
<div class="simple-center">
    <div class="w-600 mw-full">
        <div class="card p-0">
            <div style="position: relative; text-align: center;">
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                    <h1 id="login-brand-card-header">tracklink</h1>
                    <span id="login-version-card-mini"
                          class="badge text-monospace">' . getVersionNumber() . '</span>
                </div>
                <img src="graphics/site/login-card.jpg" class="img-fluid rounded-top" alt="TrackLink"
                     style="height: 180px; width: 100%; object-fit: cover;">
            </div>
            <div class="content">
                <h2 class="content-title">create account</h2>
                <form action="app/functions/StateFunction.php" method="post" name="Login_Form">
                    <input name="Email" type="email" id="Email" class="form-control" placeholder="email"
                           value="" style="margin: 0 0 15px 0;" required autofocus>
                    <input name="Name" type="text" id="Name" class="form-control" placeholder="display name"
                           value="" style="margin: 0 0 30px 0;" required>
                    <div style="display: flex; justify-content: space-between;">
                        <div>
                            <button name="CreateAccount" value="CreateAccount" class="btn btn-primary"
                                    type="submit">next
                            </button>
                        </div>
                        <div>
                            <button name="BackToLogin" value="BackToLogin" class="btn btn-link" type="button"
                                    onclick="location.href = " login.php";">back to login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>    
';