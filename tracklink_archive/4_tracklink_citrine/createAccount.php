<?php
/* LOAD LOGIC DEPENDENCIES */
require_once "depend/handler.php";

/* SECURITY CHECKPOINT - SESSION NOT REQUIRED */
// checkSession();
?>

<!DOCTYPE html>
<html>

<head>
    <?php echo getHead(); ?>
    <title>tracklink | create account</title>
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
                        <h2 class="content-title">create account</h2>
                        <form action="" method="post" name="Login_Form">
                            <input name="Email" type="email" id="Email" class="form-control" placeholder="email"
                                value="" style="margin: 0 0 15px 0;" required autofocus>
                            <input name="Name" type="text" id="Name" class="form-control" placeholder="display name"
                                value="" style="margin: 0 0 30px 0;" required>
                            <div style="display: flex; justify-content: space-between;">
                                <div>
                                    <button name="CreateAccount" value="CreateAccount" class="btn btn-primary"
                                        type="submit">next</button>
                                </div>
                                <div>
                                    <button name="BackToLogin" value="BackToLogin" class="btn btn-link" type="button"
                                        onclick="location.href = 'login.php';">back to login</button>
                                </div>
                            </div>
                            <?php
                                if(isset($_POST['CreateAccount'])){
                                    $conn = new mysqli($servername, $username, $password, $dbname);
                                    if ($conn->connect_error) {
                                        header("location:login.php");
                                        exit;
                                    }

                                    $userName = $_POST['Name'];
                                    $emailAlreadyRegistered = false;
                                    $userEmail = strtolower($_POST['Email']);
                                    $userResetString = time() . '_' . rand(100000000, 999999999);

                                    // EMAIL CHECK
                                    $sql = "SELECT email FROM users";
                                    $result = $conn->query($sql);
                                    if ($result->num_rows > 0) {
                                        while($row = $result->fetch_assoc()) {
                                            if($userEmail == $row['email']) {
                                                $emailAlreadyRegistered = true;
                                            }
                                        }
                                    }

                                    if(!$emailAlreadyRegistered) {
                                        $sql = "INSERT INTO `users` (`num`, `email`, `passhash`, `resetString`, `name`) VALUES (NULL, '$userEmail', '', '$userResetString', '$userName')";
                                        $result = $conn->query($sql);
                                        sendWelcomeEmail($userEmail, 'DOMAIN HERE/emailVerify.php?token=' . $userResetString);
                                        header("location:emailVerify.php");
                                        exit;
                                    } else {
                                        header("location:login.php?sticky=existingEmail&email=" . $userEmail);
                                        exit;
                                    }
                                    $conn->close();
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