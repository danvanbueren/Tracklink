<?php
// Security: no account
// Purpose: recover username/password

require_once 'inc/Tracklink.php';
?>
    <div class="page-wrapper">
        <div class="sticky-alerts"></div>
        <div class="content-wrapper">
            <div class="d-flex h-full">
                <div class="w-600 mw-full align-self-center m-auto">

                    <?php

                    if (isset($_GET["id"]) && strlen($_GET["id"]) > 0) {
                        if ($_GET["id"] == 'success') {

                            ?>

                            <div class="card p-0">
                                <img src="resources/login.jpg" class="img-fluid rounded-top" alt="background"
                                     style="width: 700px; height: 200px; object-fit: cover;">
                                <div class="content">
                                    <h2 class="card-title">change password</h2>
                                    <form action="inc/post/recoverHandler.php" method="post">
                                        <div class="input-group">
                                            <div class="input-group-prepend" id="pre-b" style="display: none">
                                                <span class="input-group-text justify-content-center w-100">password</span>
                                            </div>
                                            <input type="password" class="form-control" placeholder="password" id="in-b"
                                                   oninput="updatePrepend('b')" required autofocus>
                                        </div>
                                        <div class="input-group pt-15">
                                            <div class="input-group-prepend" id="pre-c" style="display: none">
                                                <span class="input-group-text justify-content-center w-100">verify</span>
                                            </div>
                                            <input type="password" class="form-control" placeholder="verify password"
                                                   id="in-c" oninput="updatePrepend('c')" required>
                                        </div>
                                        <br/>
                                        <div class="row pt-5">
                                            <div class="col">
                                                <input class="btn btn-primary" type="submit" value="submit">
                                            </div>
                                            <div class="col-auto">
                                                <a href="login.php" class="btn btn-link" type="button">back</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div class="content">
                                <form action="inc/post/changePasswordHandler.php" method="post">
                                    <button type="submit" name="simsubmit" class="btn">SIM SUBMIT</button>
                                </form>
                            </div>

                            <?php
                        } else {
                            $_SESSION['stickies'] .= 'recoverFail,';
                            header('Location: recover.php');
                            exit;
                        }
                    } else {
                        ?>

                        <div class="card p-0">
                            <img src="resources/login.jpg" class="img-fluid rounded-top" alt="background"
                                 style="width: 700px; height: 200px; object-fit: cover;">
                            <div class="content">
                                <h2 class="card-title">request password reset</h2>
                                <form action="inc/post/recoverHandler.php" method="post">
                                    <div class="input-group">
                                        <div class="input-group-prepend" id="pre-a" style="display: none">
                                            <span class="input-group-text justify-content-center w-100">email</span>
                                        </div>
                                        <input type="email" class="form-control" placeholder="email" id="in-a"
                                               oninput="updatePrepend('a')" required autofocus>
                                    </div>
                                    <br/>
                                    <div class="row pt-5">
                                        <div class="col">
                                            <input class="btn btn-primary" type="submit" value="send">
                                        </div>
                                        <div class="col-auto">
                                            <a href="login.php" class="btn btn-link" type="button">back</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div class="content">
                            <a href="recover.php?state=sent" class="btn">SIM SEND</a>
                            <a href="recover.php?id=success" class="btn">SIM EMAIL GOOD</a>
                            <a href="recover.php?id=garbage" class="btn">SIM EMAIL BAD</a>
                        </div>

                        <?php
                        if ($_GET["state"] == 'sent') {
                            $_SESSION['stickies'] .= 'recoverSent,';
                            header('Location: recover.php');
                            exit;
                        }
                    }

                    ?>
                </div>
            </div>
        </div>
    </div>
<?php
echo getFooter($page);