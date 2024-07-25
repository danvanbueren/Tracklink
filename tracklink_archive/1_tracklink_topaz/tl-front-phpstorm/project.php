<?php
// Security: in account, in server
// Purpose: view/edit project

require_once 'inc/Tracklink.php';
?>

    <div class="modal" id="project-art" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content p-0 w-400 w-sm-500 w-md-600 w-lg-700">
                <a href="#" class="close" role="button" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </a>
                <img src="/data/1234/art-1000-comp.jpg" class="w-full" alt="art" draggable="false">
                <div class="content row p-0 m-10 mb-15">
                    <div class="col"></div>
                    <div class="col-auto">
                        <p class="p-0 m-0 mb-10 text-center">uploaded by dan 2d ago</p>
                        <a href="/data/1234/art.png" download="art.png" class="btn">
                            <span class="material-icons align-middle">file_download</span>
                            <span>download uncompressed original</span>
                        </a>
                    </div>
                    <div class="col"></div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal modal-full ie-scroll-fix" id="project-lyrics" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content p-0 w-400 w-sm-500 w-md-600 w-lg-700">
                <a href="#" class="close" role="button" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </a>
                <img src="/data/1234/art.png" class="w-full" alt="art">
                <div class="content row p-0 m-10 mb-15">
                    <div class="col"></div>
                    <div class="col-auto">
                        <button class="btn">download original file</button>
                    </div>
                    <div class="col"></div>
                </div>
            </div>
        </div>
    </div>

    <div class="page-wrapper with-navbar with-sidebar" data-sidebar-type="full-height overlayed-sm-and-down">
        <div class="sticky-alerts"></div>
        <?php
        echo getSidebar();
        echo getNav($page);
        ?>

        <div class="content-wrapper">
            <div class="row">
                <div class="col-12 col-sm-6">

                    <div class="content">
                        <div class="row">
                            <div class="col-12 col-md-6 w-400 mw-full">
                                <div class="card m-0 mb-10 p-0">

                                    <div class="content" style="display: none">
                                        <div class="text-center">
                                            <a href="" class="text-muted w-full h-full">
                                                <span class="material-icons">add_a_photo</span>
                                            </a>
                                        </div>
                                    </div>
                                    <a href="#project-art">
                                        <img src="/data/1234/art-1000-comp.jpg" class="img-fluid rounded-top" style="" alt="art" draggable="false">
                                    </a>
                                    <div class="content m-0 p-0 pl-10 pr-10 pb-5 mt-5">
                                        <p class="font-size-12 text-muted m-0 p-0">uploaded by dan 2d ago</p>
                                    </div>

                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="content p-0 pl-15 m-0">
                                    <h2 class="font-size-20 m-0 mb-5 p-0 font-weight-bold">song title</h2>
                                    <p class="font-size-12 mb-10">last updated 3d ago</p>
                                    <div class="font-weight-light m-0 mb-15 p-0">
                                        <span class="m-0 p-0 font-size-12 text-muted">in</span>
                                        <a href="collection.php?id=1" class="badge">collection name</a>
                                        <a href="#" class="badge badge-primary">
                                            <span class="material-icons align-middle font-size-12">add</span>
                                        </a>
                                    </div>
                                    <p class="font-weight-bold m-0 mb-5 p-0">contributors</p>
                                    <div class="font-weight-light m-0 p-0 mb-15">
                                        <a href="#" class="badge">dan</a>
                                        <a href="#" class="badge">owen</a>
                                        <a href="#" class="badge">aaron</a>
                                        <a href="#" class="badge">parks</a>
                                        <a href="#" class="badge">a hedgehog</a>
                                        <a href="#" class="badge">xXspaceman_69Xx</a>
                                    </div>
                                    <a href="#" class="btn btn-sm btn-primary mb-10" role="button">
                                        <span class="material-icons font-size-12 align-middle">launch</span>
                                        <span>lyric editor</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card pt-20">
                        <div class="content p-0 m-0">
                            <div class="card-title">
                                <span>latest bounce</span>
                            </div>
                        </div>

                        <hr/>

                        <div class="content p-0 m-0 mt-10">
                            <p class="font-size-12 text-muted">uploaded by dan 5d ago</p>
                        </div>

                        <div class="content p-0 m-0 mt-15 audio-player-container">
                            <div class="row">
                                <div class="col-1">
                                    <button class="btn btn-square rounded-circle h-25 w-25 m-0 mr-5">
                                        <span class="material-icons font-size-16 align-top mt-5">play_arrow</span>
                                    </button>
                                </div>

                                <div class="col-10">
                                    <div class="progress m-0" style="height: 25px">
                                        <div class="progress-bar" style="width: 66%" role="progressbar">
                                            0:59/1:30
                                        </div>
                                    </div>
                                </div>

                                <div class="col-1">
                                    <button class="btn btn-square rounded-circle h-25 w-25 m-0 ml-5">
                                        <span class="material-icons font-size-16 align-top mt-5">volume_up</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6">
                    <?php
                    $board = new ActivityBoard();
                    $board->addActivity('benji','posted a message','moments ago','you know im out here makin bangers n shit', false);
                    $board->addActivity('dustin','posted a message','24m ago','FIRE', false);
                    $board->addActivity('benji','uploaded a bounce','14hr ago','', false);
                    $board->addActivity('benji','uploaded stems','14hr ago','', false);
                    $board->addActivity('benji','posted a message','2d ago','working on an edit', false);
                    $board->addActivity('ben','uploaded album art','3d ago','', false);
                    $board->addActivity('dan','created project','3d ago','', false);
                    echo $board;
                    ?>
                </div>
            </div>
        </div>
    </div>

<?php
echo getFooter($page);