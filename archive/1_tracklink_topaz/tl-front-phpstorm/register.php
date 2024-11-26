<?php
// Security: no account
// Purpose: create account

require_once 'inc/Tracklink.php';
?>
    <div class="page-wrapper">
        <div class="sticky-alerts"></div>
        <div class="content-wrapper">
            <div class="d-flex h-full">
                <div class="w-600 mw-full align-self-center m-auto">
                    <div class="card p-0">
                        <img src="resources/login.jpg" class="img-fluid rounded-top" alt="background"
                             style="width: 700px; height: 200px; object-fit: cover;">
                        <div class="content">
                            <h2 class="card-title">create account</h2>
                            <form action="inc/post/registerHandler.php" method="post">
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
                                <div class="input-group pt-15">
                                    <div class="input-group-prepend" id="pre-c" style="display: none">
                                        <span class="input-group-text justify-content-center w-100">verify</span>
                                    </div>
                                    <input type="password" class="form-control" placeholder="verify password" id="in-c" oninput="updatePrepend('c')" required>
                                </div>
                                <br/>
                                <div class="input-group pt-5">
                                    <div class="input-group-prepend" id="pre-d" style="display: none">
                                        <span class="input-group-text justify-content-center w-100">nickname</span>
                                    </div>
                                    <input type="password" class="form-control" placeholder="nickname" id="in-d" oninput="updatePrepend('d')" required>
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
                        <form action="inc/post/registerHandler.php" method="post">
                            <button type="submit" name="simsubmit" class="btn">SIMULATE SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php
echo getFooter($page);