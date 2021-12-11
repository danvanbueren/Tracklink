<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';


function sendPasswordResetEmail($email, $link) {
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'X';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'X';
        $mail->Password   = 'X';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;

        // Recipients
        $mail->setFrom('X', 'X');
        $mail->addAddress($email, $email);
        $mail->addReplyTo('X', 'No reply');

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'TrackLink Password Reset';

        // html
        $mail->Body    = 'Please reset your password here: ' . $link;

        // no html, raw text only
        $mail->AltBody = 'Please reset your password here: ' . $link;

        $mail->send();
        return true;
    } catch (Exception $e) {
        return false;
    }
}

function sendWelcomeEmail($email, $link) {
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'X';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'X';
        $mail->Password   = 'X';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;

        // Recipients
        $mail->setFrom('X', 'X');
        $mail->addAddress($email, $email);
        $mail->addReplyTo('X', 'No reply');

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'Welcome to TrackLink';

        // html
        $mail->Body    = 'Thanks for creating an account at TrackLink. Please set your password here: ' . $link;

        // no html, raw text only
        $mail->AltBody = 'Thanks for creating an account at TrackLink. Please set your password here: ' . $link;

        $mail->send();
        return true;
    } catch (Exception $e) {
        return false;
    }
}