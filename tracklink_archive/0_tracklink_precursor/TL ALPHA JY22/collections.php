<?php
// Security: in account, in server
// Purpose: view projects

require_once 'inc/Tracklink.php';
?>

    <div class="page-wrapper with-navbar with-sidebar" data-sidebar-type="full-height overlayed-sm-and-down">
        <div class="sticky-alerts"></div>
        <?php
        echo getSidebar();
        echo getNav($page);
        ?>

        <div class="fab-wrapper z-50">
            <a class="btn btn-primary fab" href="#add" role="button">
                <span class="material-icons">add</span>
            </a>
        </div>

        <div class="content-wrapper">
            <div class="container-fluid z-0">

                <div class="content mb-5 mt-20">
                    <div class="btn-toolbar" role="toolbar">
                        <h2 class="font-size-20 p-0 m-0 mr-20 font-weight-bold">collections</h2>
                        <input type="text" class="form-control w-100 w-sm-200 disabled" placeholder="search"  readonly="readonly">

                        <div class="ml-auto">
                            <button class="btn btn-square mr-5 disabled" type="button">
                                <span class="material-icons align-middle pb-5">sort_by_alpha</span>
                            </button>

                            <button class="btn btn-square" type="button" onclick="tracklink.toggleProjectListView()"
                                    data-toggle="tooltip" data-title="toggle view" data-placement="bottom">
                                <span class="material-icons align-middle pb-5" id="toggleViewIcon">view_list</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="row" id="gridView" style="display: flex">
                    <?php
                    for($i = 0; $i < 2; $i++) {
                        echo getCard(2, '/collection.php?id=', 'data/1234/art-1000-comp.jpg','collection','6d ago');
                    }
                    ?>

                    <div class="content row h-50 w-full hidden-md-and-up">
                        <div class="col"></div>
                        <div class="col-auto">
                            <span class="material-icons mt-15">surfing</span>
                        </div>
                        <div class="col"></div>
                    </div>

                </div>

                <div class="card" id="listView" style="display: none">
                    <table class="table table-hover table-striped table-no-outer-padding">
                        <thead>
                            <tr>
                                <th class="col-1"></th>
                                <th class="col-7">collection name</th>
                                <th class="col-2">last updated</th>
                                <th class="col-2">updated by</th>
                            </tr>
                        </thead>
                        <tbody>
                        <?php
                        for($i = 0; $i < 2; $i++) {
                            echo getListItem(2, '/collection.php?id=', 'data/1234/art-100-comp.jpg', 'collection', '6d ago', 'dustin');
                        }
                        ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

<?php
echo getFooter($page);