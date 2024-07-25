<?php

// Get presentation-ready nav (all pages need to go into this array)
function getNav($pageTitle) {
    $pages = array("feed", "studio");
    $navItems = "";

    foreach ($pages as $page) {
        if($page == $pageTitle) {
            $navItems .= getFormattedNavItem($page, true);
        } else {
            $navItems .= getFormattedNavItem($page, false);
        }
    }

    $output = '
    <nav class="navbar" style="padding: 0 10% 0 10%;">
        <a href="index.php" class="navbar-brand" id="nav-brand-text">tracklink</a>
        <span class="badge navbar-text text-monospace" id="nav-version">' . $GLOBALS['G_VERSION'] . '</span>
        <ul class="navbar-nav d-none d-md-flex">
    ';
    $output .= $navItems;
    $output .= '
        </ul>
        <div class="form-inline d-none d-md-flex ml-auto">


        <div class="dropdown with-arrow">
            <a href="#" onclick="return false;" data-toggle="dropdown" id="avatar-popover-toggle" aria-haspopup="true" aria-expanded="false">
                <span class="material-icons profileEmblem" style="font-size: 36px;">account_circle</span>
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="avatar-popover-toggle">
                <h6 class="dropdown-header">' . $_SESSION['Name'] . '</h6>
                <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item">account settings</a>
                    <a href="destroySession.php" class="dropdown-item">logout</a>
                </div>
            </div>
        </div>
    </nav>
    ';
    return $output;
}

// Helper function to format a nav item for the nav function
function getFormattedNavItem(string $pageTitle, bool $isActive) {
    $output = '<li class="nav-item';
    if($isActive) {
        $output .= ' active';
    }
    $output .= '">';
    $output .= '<a href="' . $pageTitle . '.php" class="nav-link">' . $pageTitle . '</a></li>';
    return $output;
}