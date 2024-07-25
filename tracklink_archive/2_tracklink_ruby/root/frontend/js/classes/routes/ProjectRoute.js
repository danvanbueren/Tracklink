class ProjectRoute {
    constructor(id) {
        this.parsedResponse = '';

        this.id = id;
        this.name = '';
        this.lyrics = '';


        this.abe = new ActivityBoardElement();

        this.setInitialHtml();

        db.post('../../backend/api/routes/project.php', function () {
            router.currentSpaPage.updateElementTarget(db.responseText);
        }, 'id=' + this.id);


    }

    updateElementTarget(responseText) {
        this.parsedResponse = JSON.parse(responseText);
        console.log(this.parsedResponse);
        this.name = this.parsedResponse['name'];

        if(this.parsedResponse['foundProject'] === 'true') {
            this.setActivityBoardHtml();
            this.setBounceHtml();
            this.setGeneralHtml();
        } else {
            router.go('');
        }
    }

    setGeneralHtml() {
        let projectTitle = document.getElementById('project-title');
        projectTitle.innerText = this.name;

        let projectArtDescription = document.getElementById('project-art-description');
        projectArtDescription.innerText = 'uploaded by dan 12m ago';

        let projectLastUpdated = document.getElementById('project-last-updated');
        projectLastUpdated.innerText = 'last updated by dan 1m ago';
    }

    setActivityBoardHtml() {

        let ece = new ElementContainerElement();

        let components = this.parsedResponse['components'];

        Object.entries(components).forEach(([key]) => {
            let component = components[key];
            console.log(component);

            let abme = new ActivityBoardMessageElement();
            abme.user = component['uploadedBy'];
            abme.messageContent = component['name'];
            abme.messageType = component['type'];
            abme.timeStamp = component['dateCreated'];
            ece.add(abme);

        });

        this.abe.messageElementContainer = ece;

        document.getElementById('js-target-activity-board').innerHTML = this.abe.toString();
    }

    setBounceHtml() {
        let fe = new FileElement();
        fe.fileName = '19JAN14 lagoon.wav';
        fe.fileOwner = 'dan';
        fe.size = '18.1mb';
        fe.length = f.secondsToPrettyTime(786);
        fe.timeStamp = Date.now() - 50000000;
        fe.type = 'bounce';

        document.getElementById('js-target-latest-bounce').innerHTML = fe.toString();
    }

    setInitialHtml() {
        jsTargetSpaContent.innerHTML = '' +
            '<div class="no-select">' +

                '<div class="row">' +
                    '<div class="col-sm-7 col-md-5 col-lg-4 col-xl-4">' +
                        '<div class="card p-0 mr-0">' +

                            '<div class="img-fluid rounded-top overflow-hidden cursor-pointer">' +
                                '<div style="width:100%; height: 0; padding-bottom:100%; object-fit: cover;" class="home-card-no-image"></div>' +
                            '</div>' +

                            '<div class="content m-5 ml-15 mr-15 font-size-12">' +
                                '<span class="text-muted" id="project-art-description">...</span>' +
                            '</div>' +

                        '</div>' +
                    '</div>' +
                    '<div class="col-sm-12 col-md-7 col-lg-8 col-xl-8">' +
                        '<div class="content">' +
                            '<h2 class="mb-5 text-truncate" id="project-title">...</h2>' +
                            '<p class="text-muted font-size-12" id="project-last-updated">...</p>' +

                            '<h6 class="font-weight-bold mb-5">in collections</h6>' +
                            '<div id="js-target-project-collections">' +
                                '<span class="badge text-monospace text-muted mr-5 mb-5 cursor-pointer">COLLECTION</span>' +
                                '<span class="badge badge-primary text-monospace text-muted mr-5 mb-5 cursor-pointer font-weight-bold">+</span>' +
                            '</div>' +

                            '<h6 class="font-weight-bold mb-5">contributors</h6>' +
                            '<div id="js-target-project-contributors">' +
                                '<span class="badge text-monospace text-muted mr-5 mb-5 cursor-pointer">USER</span>' +
                                '<span class="badge text-monospace text-muted mr-5 mb-5 cursor-pointer">USER</span>' +
                            '</div>' +
                            '<span class="btn btn-primary mb-5 mt-20">edit lyrics</span>' +
                        '</div>' +
                    '</div>' +

                '</div>' +


                '<div class="row">' +

                    '<div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">' +

                        '<div class="card">' +
                            '<h2 class="card-title">latest bounce</h2>' +
                            '<hr />' +

                            '<div id="js-target-latest-bounce"></div>' +
                        '</div>' +
                        '<div class="card">' +
                            '<div class="row">' +
                                '<div class="col">' +
                                    '<h2 class="card-title">project files</h2>' +
                                '</div>' +
                                '<div class="col-auto">' +
                                    '<span class="btn btn-primary" onclick="router.loadRoute(\'uploadProjectFile\', \'' + this.id + '\');">upload</span>' +
                                '</div>' +
                            '</div>' +
                            '<hr />' +

                        '</div>' +
                    '</div>' +
                    '<div class="col-sm-12 col-md-12 col-lg-6 col-xl-6" id="js-target-activity-board">' +
                    '</div>' +
                '</div>' +
            '</div>';
    }
}