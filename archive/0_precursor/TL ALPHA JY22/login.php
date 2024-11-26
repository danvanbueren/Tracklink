<?php
// Security: no account
// Purpose: login

require_once 'inc/Tracklink.php';
?>

    <div class="page-wrapper">
        <div class="sticky-alerts"></div>
        <div class="content-wrapper">
            <div class="d-flex h-full">
                <div class="w-600 mw-full align-self-center m-auto">
                    <div class="card p-0">
                        <div class="position-relative h-100 h-sm-150 h-md-200">
                            <img src="resources/login.jpg" class="img-fluid rounded-top position-absolute h-100 h-sm-150 h-md-200 w-full z-0" alt="background" style="object-fit: cover;">
                            <p class="position-absolute w-200 w-sm-250 w-md-300 mt-5 z-20 roboto-title-text" style="top: 50%; left: 50%; transform: translate(-50%, -50%);"><span style="font-weight: 900;">track</span>link</p>
                        </div>
                        <div class="content">
                            <h2 class="card-title">login</h2>
                            <form action="inc/post/loginHandler.php" method="post">
                                <div class="input-group">
                                    <div class="input-group-prepend" id="pre-a" style="display: none">
                                        <span class="input-group-text justify-content-center w-100">email</span>
                                    </div>
                                    <input type="email" class="form-control" placeholder="email" id="in-a" oninput="updatePrepend('a')" required autofocus>
                                </div>
                                <div class="input-group pt-15">
                                    <div class="input-group-prepend" id="pre-b" style="display: none">
                                        <span class="input-group-text justify-content-center w-100">password</span>
                                    </div>
                                    <input type="password" class="form-control" placeholder="password" id="in-b" oninput="updatePrepend('b')" required>
                                </div>
                                <br/>
                                <div class="row pt-5">
                                    <div class="col">
                                        <input class="btn btn-primary" type="submit" value="submit">
                                        <a href="recover.php" class="btn btn-link" role="button">reset password</a>
                                    </div>
                                    <div class="col-auto">
                                        <a href="register.php" class="btn" type="button">create account</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="content">
                        <a href="feed.php" class="btn">SIMULATE SUBMIT</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php
echo getFooter($page);