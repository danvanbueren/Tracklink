<?php

class SessionManager
{

    private $content = '<div class="simple-center w-250"><div><h1>internal error</h1><p>tracklink was unable to load your page correctly.</p><p>please report this error to a developer at tracklink\'s <a href="https://github.com/danvanbueren/tracklink">GitHub repo</a></p></div></div>';
    private $title = 'tracklink | error';
    private $navUsage = false;
    private $sidebarUsage = false;

    private $log = '';

    function __construct()
    {
        // start output buffer and session // php
        ob_start();
        session_start();

        // run the custom router
        $this->router();

        $this->setProperties();
    }

    // set properties based on session state
    private function setProperties()
    {
        switch($_SESSION['STATE']) {
            default:
                break;
            case 'LOGIN':
                $this->title = 'tracklink | login';

                require_once 'app/pages/AccountCreate.php';
                $this->content = $pageHtml;
                break;
            case 'REGISTER':
                $this->title = 'tracklink | create account';
                $this->content = 'create account';
                break;
            case 'RESETPW':
                $this->title = 'tracklink | reset password';
                $this->content = 'reset password';
                break;
            case 'FEED':
                $this->title = 'tracklink | feed';
                $this->content = 'feed';
                break;
        }
    }

    // router logic
    private function router()
    {
        $output = '';

        $secondsToTimeout = 900;

        // prevent session from lasting too long
        if (isset($_SESSION['LAST_ACTIVITY']) && (time() - $_SESSION['LAST_ACTIVITY'] > $secondsToTimeout)) {

            // reset session data
            session_unset();
            session_destroy();
            session_start();

            // set new session state to LOGIN
            $_SESSION['STATE'] = 'LOGIN';

            // force refresh of page clientside
            header("location: app.php");
            exit;
        }

        // log
        $output .= '___SESSION IS FRESH: ' . time() - $_SESSION['LAST_ACTIVITY']  . ' seconds';

        // set new activity time for session
        $_SESSION['LAST_ACTIVITY'] = time();

        // create local variable from SESSION STATE
        $state = $_SESSION['STATE'];

        // if state is set AND not empty...
        if (isset($state) && !empty($state)) {

            // check which state with a switch case
            switch ($state) {
                case '':
                    // set state to login
                    $_SESSION['STATE'] = 'LOGIN';

                    // redir
                    header('location:app.php');
                    exit;
                case 'LOGIN':
                    // show login page
                    $output .= '___STATE: LOGIN';
                    // (new AccountLogin) -> getHtml();
                    break;

            }
        } else {
            // set state to login
            $_SESSION['STATE'] = 'LOGIN';

            // redir
            header('location:app.php');
            exit;
        }

        $this->log = $output;
    }

    public function getContent() :string
    {
        return $this->content;
    }

    public function getTitle() :string
    {
        return $this->title;
    }

    public function getNavUsage() :bool
    {
        return $this->navUsage;
    }

    public function getSidebarUsage() :bool
    {
        return $this->sidebarUsage;
    }

    public function getLog() :string
    {
        return $this->log;
    }
}