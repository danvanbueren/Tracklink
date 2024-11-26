class HomeRoute {
    constructor() {
        this.setInitialHtml();

        db.apiRoutesGET('home.php', function () {
            router.currentSpaPage.updateElementTarget(db.responseText);
        });
    }

    setInitialHtml() {
        jsTargetSpaContent.innerHTML = '' +
            '<div class="row mt-20 mb-0 d-flex justify-content-between">' +
                '<div class="content mt-0 mb-0">' +
                    '<input type="text" class="form-control w-full" placeholder="Search"' +
                        ' id="js-target-home-search" oninput="router.currentSpaPage.updateSearch();">' +
                '</div>' +
                '<div class="content mt-0 mb-0 no-select">' +
                    '<span class="btn btn-primary btn-square d-flex align-items-center justify-content-center" onclick="router.go(\'add\');">' +
                        '<span class="material-icons">add</span></span>' +
                '</div>' +
            '</div>' +
            '<div class="row" id="js-target-home-cards"></div>';
    }

    updateElementTarget(stringResponseText) {
        let elementTarget = document.getElementById('js-target-home-cards');
        let decodedResponse = null;

        // parse JSON
        try {
            decodedResponse = JSON.parse(stringResponseText);
            // console.log(decodedResponse);
        } catch (e) {
            f.error('JS: failed to decode ajax response!\n' + stringResponseText);
            return;
        }

        console.log(decodedResponse);

        // create container
        let container = new ElementContainerElement();

        // add projects
        Object.keys(decodedResponse[0]).forEach(e => {
            let currentItem = decodedResponse[0][e];

            let cardElement = new HomeCardElement();
            cardElement.setTitle(currentItem['name']);
            cardElement.setId(currentItem['uid']);
            cardElement.setCardType(currentItem['type']);

            // f.log('lyrics: ' + currentItem['lyrics']); not needed here

            let elementComponents = currentItem['components'];

            let newestArtComponent = null,
                newestComponent = null,
                newestBounceComponent = null,
                componentOwners = [];

            // check if any components were detected in the first place
            try {
                Object.keys(elementComponents).forEach(ec => {
                    let component = elementComponents[ec];

                    // add artist ID to array
                    if (!componentOwners.includes(component['uploadedBy'])) {
                        componentOwners.push(component['uploadedBy']);
                    }

                    // check for newest component
                    if (newestComponent === null) {
                        newestComponent = component;
                    } else {
                        if (component['dateCreated'] > newestComponent['dateCreated']) {
                            newestComponent = component;
                        }
                    }

                    if (component['type'] === 'art') {
                        if (newestArtComponent === null) {
                            newestArtComponent = component['type'];
                        } else {
                            if (component['dateCreated'] > newestArtComponent['dateCreated']) {
                                newestArtComponent = component['type'];
                            }
                        }
                    }

                    if (component['type'] === 'bounce') {
                        if (newestBounceComponent === null) {
                            newestBounceComponent = component['type'];
                        } else {
                            if (component['dateCreated'] > newestBounceComponent['dateCreated']) {
                                newestBounceComponent = component['type'];
                            }
                        }
                    }
                });

                // update artists
                componentOwners.forEach(owner => {

                });

                cardElement.setArtist(componentOwners.toString());

                // update time last updated
                cardElement.setUpdateTime(f.lastMsToCurrentTimeAgo(newestComponent['dateCreated']));

                // update path to art
                if (typeof newestArtComponent['path'] !== 'undefined' && newestArtComponent['path'] !== null) {
                    cardElement.setArtPath(newestArtComponent['path']);
                }

                // update id of audio
                if (newestBounceComponent !== null) {
                    cardElement.setAudioId(newestBounceComponent['uid']);
                }

            } catch (e) {
                f.warn('failed to interpret components object - are there any components?');
                cardElement.setArtist('no contributors');
                cardElement.setUpdateTime('never');
            }

            container.add(cardElement);
        });

        // add projects
        Object.keys(decodedResponse[1]).forEach(e => {
            let currentItem = decodedResponse[1][e];

            let cardElement = new HomeCardElement();
            cardElement.setTitle(currentItem['name']);
            cardElement.setId(currentItem['uid']);
            cardElement.setCardType(currentItem['type']);

            // TODO set artists based on project lookup, then component lookup
            // TODO do same with update time...
            // TODO for play/queue buttons, we need to queue the entire collection :(

            container.add(cardElement);
        });

        // set html
        elementTarget.innerHTML = container.toString();
    }

    updateSearch() {
        let searchValue = document.getElementById('js-target-home-search').value;
        f.warn('search not yet implemented');
    }
}