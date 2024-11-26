<?php
// Security: in account, in server
// Purpose: view/edit collection

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
                        <p class="p-0 m-0 mb-10 text-center">uploaded by dan 2d ago in song name</p>
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
                                    <h2 class="font-size-20 m-0 p-0 font-weight-bold">collection title</h2>
                                    <p class="font-size-12">last updated 3d ago</p>
                                    <p class="font-weight-bold m-0 p-0">contributors</p>
                                    <div class="font-weight-light m-0 p-0">
                                        <a href="#" class="badge">dan</a>
                                        <a href="#" class="badge">owen</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card pt-20">
                        <div class="content p-0 m-0">
                            <div class="row">
                                <div class="col">
                                    <div class="card-title">
                                        <span>projects</span>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <a href="#" class="btn btn-square btn-primary btn-sm">
                                        <span class="material-icons align-middle mb-5">add</span>
                                    </a>
                                </div>
                            </div>

                        </div>

                        <hr/>

                        <div class="card bg-dark-light m-0 mt-15 mb-20 p-10">
                            <div class="row">
                                <div class="col">
                                    <a href="project.php?id=10">
                                        <img src="data/1234/art-100-comp.jpg" class="img-fluid rounded w-50 m-0 mr-5" alt="art" style="object-fit: scale-down" draggable="false">
                                    </a>
                                    <a href="project.php?id=10">
                                        <h2 class="d-inline-block align-top font-size-20 m-0 p-0 font-weight-semi-bold text-light">song name</h2>
                                    </a>
                                </div>
                                <div class="col-auto">
                                    <span class="font-size-12 text-right">last updated 4d ago by smitty</span>
                                    <div class="font-weight-light m-0 p-0 text-right">
                                        <a href="#" class="badge">dan</a>
                                        <a href="#" class="badge">owen</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card bg-dark-light m-0 mt-15 mb-20 p-10">
                            <div class="row">
                                <div class="col">
                                    <a href="project.php?id=10">
                                        <img src="data/1234/art-100-comp.jpg" class="img-fluid rounded w-50 m-0 mr-5" alt="art" style="object-fit: scale-down" draggable="false">
                                    </a>
                                    <a href="project.php?id=10">
                                        <h2 class="d-inline-block align-top font-size-20 m-0 p-0 font-weight-semi-bold text-light">song name</h2>
                                    </a>
                                </div>
                                <div class="col-auto">
                                    <span class="font-size-12 text-right">last updated 4d ago by smitty</span>
                                    <div class="font-weight-light m-0 p-0 text-right">
                                        <a href="#" class="badge">dan</a>
                                        <a href="#" class="badge">owen</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-12 col-sm-6">
                    <div class="card pt-20">
                        <div class="content p-0 m-0">
                            <div class="card-title">
                                <span>activity board</span>
                            </div>
                        </div>

                        <hr/>

                        <div class="content m-0">
                            <textarea class="form-control w-full" placeholder="add a note"></textarea>
                            <div class="mt-10">
                                <button class="btn btn-primary d-inline-block">post</button>
                                <div class="custom-switch d-inline-block float-right mt-5">
                                    <input type="checkbox" id="switch-1" value="" disabled>
                                    <label for="switch-1">private</label>
                                </div>
                            </div>
                        </div>

                        <hr/>

                        <div class="content m-0 mt-10 mb-10">
                            <div class="row">
                                <div class="col-auto">
                                    <div class="custom-radio d-inline-block m-5">
                                        <input type="radio" name="radio-set-a" id="radio-1" value="radio-1"
                                               checked="checked">
                                        <label for="radio-1"><span class="material-icons">filter_alt_off</span></label>
                                    </div>
                                    <div class="custom-radio d-inline-block m-5">
                                        <input type="radio" name="radio-set-a" id="radio-2" value="radio-2">
                                        <label for="radio-2"><span class="material-icons">forum</span></label>
                                    </div>
                                    <div class="custom-radio d-inline-block m-5">
                                        <input type="radio" name="radio-set-a" id="radio-3" value="radio-3">
                                        <label for="radio-3"><span class="material-icons">campaign</span></label>
                                    </div>
                                </div>
                                <div class="col"></div>
                                <div class="col-auto">
                                    <nav>
                                        <ul class="pagination pagination-sm">
                                            <li class="page-item">
                                                <button class="btn btn-sm btn-square page-link disabled" id="activity-page-start" disabled>
                                                    <span class="material-icons align-middle font-size-16">first_page</span>
                                                </button>
                                            </li>
                                            <li class="page-item">
                                                <button class="btn btn-sm btn-square page-link btn-primary" id="page-1">
                                                    <span class="font-size-14">1</span>
                                                </button>
                                            </li>
                                            <li class="page-item">
                                                <button class="btn btn-sm btn-square page-link" id="page-2">
                                                    <span class="font-size-14">2</span>
                                                </button>
                                            </li>
                                            <li class="page-item">
                                                <button class="btn btn-sm btn-square page-link" id="page-3">
                                                    <span class="font-size-14">3</span>
                                                </button>
                                            </li>
                                            <li class="page-item">
                                                <button class="btn btn-sm btn-square page-link" id="activity-page-end">
                                                    <span class="material-icons align-middle font-size-16">last_page</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>

                        <div class="content m-0" style="max-height: 100%;">
                            <div class="mb-10">
                                <div class="content m-0 p-5">
                                    <p class="font-weight-bold m-0 p-0 d-inline-block font-size-12">dustin</p>
                                    <p class="text-muted m-0 p-0 d-inline-block font-size-12">added new album art:</p>
                                    <div class="font-weight-light d-inline-block m-0 p-0 ml-5">
                                        <a href="#" class="badge">song name</a>
                                    </div>
                                    <p class="text-muted m-0 p-0 d-inline-block float-right font-size-12">2d ago</p>
                                </div>
                            </div>
                            <div class="mb-10">
                                <div class="content m-0 p-5">
                                    <p class="font-weight-bold m-0 p-0 d-inline-block font-size-12">aaron</p>
                                    <p class="text-muted m-0 p-0 d-inline-block font-size-12">added a new bounce:</p>
                                    <div class="font-weight-light d-inline-block m-0 p-0 ml-5">
                                        <a href="#" class="badge">song name</a>
                                    </div>
                                    <p class="text-muted m-0 p-0 d-inline-block float-right font-size-12">4d ago</p>
                                </div>
                            </div>
                            <div class="mb-10">
                                <div class="content m-0 p-5">
                                    <p class="font-weight-bold m-0 p-0 d-inline-block font-size-12">parks</p>
                                    <p class="text-muted m-0 p-0 d-inline-block font-size-12">added new stems:</p>
                                    <div class="font-weight-light d-inline-block m-0 p-0 ml-5">
                                        <a href="#" class="badge">song name</a>
                                    </div>
                                    <p class="text-muted m-0 p-0 d-inline-block float-right font-size-12">1w ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<?php
echo getFooter($page);