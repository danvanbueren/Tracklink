<?php
/* LOAD LOGIC DEPENDENCIES */
require_once "depend/handler.php";

/* SECURITY CHECKPOINT - SESSION NOT REQUIRED */
// checkSession();

$pageHasInputs = false;

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    header("location:login.php");
    exit;
}

$sql = "SELECT * FROM users";
$result = $conn->query($sql);

$tokenFromUrl = $_GET["token"];

if(isset($tokenFromUrl) && $tokenFromUrl != '') {
    logToBrowser($tokenFromUrl . 'passed checks');
} else {
    logToBrowser($tokenFromUrl . 'failed checks');
}

if ($result->num_rows > 0 && isset($tokenFromUrl) && $tokenFromUrl != '') {
    while($row = $result->fetch_assoc()) {
        if($row['resetString'] == $tokenFromUrl) {
            $pageHasInputs = true;
        }
    }
    if(!$pageHasInputs) {
        array_push($errorBuffer, "bad_token");
    }
} else {
    $pageHasInputs = false;
}

$conn->close();

/* to read the date from the reset string */
// echo explode("_", $userResetString)[0];

?>

<!DOCTYPE html>
<html>

<head>
    <?php
        echo getHead();
        if($pageHasInputs) {
            echo '<title>tracklink | set password</title>';
        } else {
            echo '<title>tracklink | check email</title>';
        }
    ?>

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

                        <?php
                    
                    if($pageHasInputs) {
                        /* PAGE STATE: SET A NEW PASSWORD */
                        ?>

                        <h2 class="content-title">set new password</h2>
                        <form action="" method="post" name="Login_Form">
                            <input name="Password" type="password" id="Password" class="form-control" placeholder="new password"
                                value="" style="margin: 0 0 30px 0;" required autofocus>
                            <div style="display: flex; justify-content: space-between;">
                                <div>
                                    <button name="Submit" value="Submit" class="btn btn-primary"
                                        type="submit">submit</button>
                                </div>
                                <div>
                                    <button name="BackToLogin" value="BackToLogin" class="btn btn-link" type="button"
                                        onclick="location.href = 'login.php';">back to login</button>
                                </div>
                            </div>



                            <?php
                                if(isset($_POST['Submit'])){

                                    $exposedPassword = $_POST['Password'];
                                    $passhash = password_hash($exposedPassword, PASSWORD_DEFAULT);
                                    
                                    $conn = new mysqli($servername, $username, $password, $dbname);
                                    if ($conn->connect_error) {
                                        header("location:login.php");
                                        exit;
                                    }

                                    // PRELIM SQL
                                    $sql = "SELECT * FROM users";
                                    $result = $conn->query($sql);
                                    if ($result->num_rows > 0) {
                                        while($row = $result->fetch_assoc()) {
                                            if($row['resetString'] == $_GET["token"]) {
                                                $userNum = $row['num'];
                                                $userEmail = $row['email'];
                                            }
                                        }
                                    }

                                    // FIND USER FROM TOKEN
                                    $sql = "UPDATE users SET passhash = '$passhash' WHERE users.num = $userNum";
                                    $result = $conn->query($sql);
                                    $sql = "UPDATE users SET resetString = '' WHERE users.num = $userNum";
                                    $result = $conn->query($sql);

                                    $conn->close();

                                    header("location:login.php?sticky=passwordChanged&email=$userEmail");
                                    exit;


                                }
                                    
                            ?>










                        </form>

                        <?php
                    } else {
                        /* PAGE STATE: CHECK EMAIL */
                        ?>

                        <h2 class="content-title">check your email</h2>

                        <p class="text-muted">
                            we sent you an email with a link to set your password.
                        </p>

                        <div style="display: flex; justify-content: space-between;">
                                <div>
                                </div>
                                <div>
                                    <button name="BackToLogin" value="BackToLogin" class="btn btn-link" type="button"
                                        onclick="location.href = 'login.php';">back to login</button>
                                </div>
                            </div>


                        <?php
                    }
                    
                    ?>


                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/halfmoon@1.1.1/js/halfmoon.min.js"></script>

    <?php echo getErrors($errorBuffer) ?>

</body>

</html>