<?php
// Security: in account, in server
// Purpose: view feed

require_once 'inc/Tracklink.php';
?>

    <div class="page-wrapper with-navbar with-sidebar" data-sidebar-type="full-height overlayed-sm-and-down">
        <div class="sticky-alerts"></div>
        <?php
        echo getSidebar();
        echo getNav($page);
        ?>

        <div class="content-wrapper">
            <div class="container d-flex h-full">
                <div class="w-600 mw-full align-self-center m-auto">
                    <div class="content text-center mt-0">
                        <h2 class="content-title">
                            <span class="material-icons font-size-24">construction</span>
                        </h2>
                        <p>
                            the feed will arrive soon!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

<?php
echo getFooter($page);