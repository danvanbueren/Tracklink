<?php

class PageView
{
    // placeholders
    private $title = 'title', $navUsage = false, $sidebarUsage = false, $htmlContent = 'content';

    // setter for title
    public function setTitle(string $val)
    {
        $this->title = $val;
    }

    // setter for nav usage
    public function setNavUsage(bool $val)
    {
        $this->navUsage = $val;
    }

    // setter for sidebar usage
    public function setSidebarUsage(bool $val)
    {
        $this->sidebarUsage = $val;
    }

    // setter for content
    public function setContent(string $val)
    {
        $this->htmlContent = $val;
    }

    // private serve method
    private function serve()
    {
        $output = '';

        // doctype, language
        $output .= '<!DOCTYPE html><html lang="en">';

        // head open
        $output .= '<head>';

        // static metas
        $output .= '<meta charset="utf-8" /><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /><meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" /><meta name="viewport" content="width=device-width" />';

        // favicon
        $output .= '<link rel="apple-touch-icon" sizes="180x180" href="/graphics/favicon/apple-touch-icon.png">';
        $output .= '<link rel="icon" type="image/png" sizes="32x32" href="/graphics/favicon/favicon-32x32.png">';
        $output .= '<link rel="icon" type="image/png" sizes="16x16" href="/graphics/favicon/favicon-16x16.png">';
        $output .= '<link rel="manifest" href="/graphics/favicon/site.webmanifest">';

        // title
        $output .= '<title>' . $this->title . '</title>';

        // css
        $output .= '<link href="https://cdn.jsdelivr.net/npm/halfmoon@1.1.1/css/halfmoon-variables.min.css" rel="stylesheet" />';
        $output .= '<link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet">';
        $output .= '<link href="css/tracklink.css" rel="stylesheet" />';

        // head close
        $output .= '</head>';

        // body open
        $output .= '<body class="with-custom-webkit-scrollbars with-custom-css-scrollbars" data-dm-shortcut-enabled="true" data-sidebar-shortcut-enabled="true" data-set-preferred-mode-onload="true">';

        // wrapper open ... with nav/sidebar logic
        if ($this->navUsage && $this->sidebarUsage) {
            $output .= '<div class="page-wrapper with-navbar with-sidebar">';
        } elseif ($this->navUsage) {
            $output .= '<div class="page-wrapper with-navbar">';
        } elseif ($this->sidebarUsage) {
            $output .= '<div class="page-wrapper with-sidebar">';
        } else {
            $output .= '<div class="page-wrapper">';
        }

        // sticky alerts
        $output .= '<div class="sticky-alerts"></div>';

        // nav logic
        if ($this->navUsage) {
            // nav open
            $output .= '<nav class="navbar">';

            // nav close
            $output .= '</nav>';
        }

        // sidebar logic
        if ($this->sidebarUsage) {
            // sidebar open
            $output .= '<div class="sidebar">';

            // sidebar close
            $output .= '</div>';
        }

        // content open
        $output .= '<div class="content-wrapper">';

        $output .= $this->htmlContent;

        // content close
        $output .= '</div>';

        // wrapper close
        $output .= '</div>';

        // javascript
        $output .= '<script src="https://cdn.jsdelivr.net/npm/halfmoon@1.1.1/js/halfmoon.min.js"></script>';
        $output .= '<script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>';
        $output .= '<script src="js/tracklink.js"></script>';

        // body close
        $output .= '</body>';

        // html close
        $output .= '</html>';

        return $output;
    }

    // public string serve
    public function __toString(): string
    {
        return $this->serve();
    }

}