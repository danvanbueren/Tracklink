<?php
/* LOAD LOGIC DEPENDENCIES */
require_once "depend/handler.php";

/* SECURITY CHECKPOINT - SESSION NOT REQUIRED */
// checkSession();

$emailPassthrough = "";
switch($_GET["sticky"]) {
    case "passwordChanged":
        array_push($errorBuffer, "password_changed");
        break;
    case "loginFailed":
        array_push($errorBuffer, "login_failed");
        break;
    case "existingEmail":
        array_push($errorBuffer, "email_taken");
        break;
    case "timeout":
        array_push($errorBuffer, "timeout");
        break;
}
$emailPassthrough = $_GET["email"];
?>

<!DOCTYPE html>
<html>

<head>
    <?php echo getHead(); ?>
    <title>tracklink | login</title>
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
                        <h2 class="content-title">user portal</h2>
                        <form action="" method="post" name="Login_Form">
                            <input name="Email" type="email" id="Email" class="form-control"
                                placeholder="email" value="<?php echo $emailPassthrough ?>" style="margin: 0 0 15px 0;" required autofocus>
                            <input name="Password" type="password" id="Password" class="form-control"
                                placeholder="password" value="" style="margin: 0 0 30px 0;" required>
                            <div style="display: flex; justify-content: space-between;">
                                <div>
                                    <button name="Login" value="Login" class="btn btn-primary" type="submit">log
                                        in</button>
                                    <button name="ForgotPassword" value="ForgotPassword" class="btn btn-link"
                                        type="button" onclick="location.href = 'requestResetPassword.php';">forgot password</button>
                                </div>
                                <div>
                                    <button name="CreateAccount" value="CreateAccount" class="btn btn-link"
                                        type="button" onclick="location.href = 'createAccount.php';">create
                                        account</button>
                                </div>
                            </div>
                            <?php

                                if(isset($_POST['Login'])){
                                    $userEmail = strtolower($_POST['Email']);

                                    $conn = new mysqli($servername, $username, $password, $dbname);
                                    if ($conn->connect_error) {
                                        header("location:login.php");
                                        exit;
                                    }

                                    $sql = "SELECT * FROM users";
                                    $result = $conn->query($sql);
                                    if ($result->num_rows > 0) {
                                        while($row = $result->fetch_assoc()) {
                                            if($row['email'] == $userEmail) {
                                                if(password_verify($_POST['Password'], $row['passhash'])) {
                                                    $_SESSION['Email'] = $row['email'];
                                                    $_SESSION['Name'] = $row['name'];
                                                    $_SESSION['Active'] = true;
                                                    header("location:index.php");
                                                    exit;
                                                }
                                            }
                                        }
                                    }
                                    $conn->close();
                                    
                                    header("location:login.php?sticky=loginFailed&email=$userEmail");
                                    exit;
                                }
                            ?>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/halfmoon@1.1.1/js/halfmoon.min.js"></script>

    <?php echo getErrors($errorBuffer) ?>

</body>

</html>