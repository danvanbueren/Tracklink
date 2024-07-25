class HomeCardElement {

    constructor() {
        this.title = 'title';
        this.artist = 'artist';
        this.updateTime = 'updateTime';
        this.artPath = 'artPath';
        this.audioId = 'audioId';

        this.cardType = 'cardType'; // project, collection, etc
        this.id = 'id'; // project or collection id
    }

    setTitle(stringTitle) {
        this.title = stringTitle;
    }

    setArtist(stringArtist) {
        this.artist = stringArtist;
    }

    setUpdateTime(stringUpdateTime) {
        this.updateTime = stringUpdateTime;
    }

    setArtPath(stringArtPath) {
        this.artPath = stringArtPath;
    }

    setCardType(stringCardType) {
        if (stringCardType === 'project' || stringCardType === 'collection') {
            this.cardType = stringCardType;
        } else {
            f.error('wrong card type!' + stringCardType);
        }
    }

    setId(stringId) {
        this.id = stringId;
    }

    setAudioId(stringAudioId) {
        this.audioId = stringAudioId;
    }

    toString() {
        let onclickRouteJs = 'router.go(\'' + this.cardType + '\', \'' + this.id + '\')';

        let typeIcon = 'question_mark';

        switch (this.cardType) {
            case 'project':
                typeIcon = 'music_note';
                break;
            case 'collection':
                typeIcon = 'album';
                break;
        }

        let outputArt = '';

        if (this.artPath === 'artPath') {
            outputArt = '' +
                '<div class="img-fluid rounded-top overflow-hidden cursor-pointer" onclick="' + onclickRouteJs + '">' +
                '<div style="width:100%; height: 150px; object-fit: cover;" class="home-card-no-image"></div>' +
                '<span class="material-icons home-card-no-image-text">' + typeIcon + '</span>' +
                '</div>';
        } else {
            outputArt = '' +
                '<div class="img-fluid rounded-top overflow-hidden cursor-pointer" onclick="' + onclickRouteJs + '">' +
                '<img src="' + this.artPath + '" alt="art" style="width:100%; height: 150px; object-fit: cover">' +
                '<span class="material-icons home-card-no-image-text">' + typeIcon + '</span>' +
                '</div>';
        }

        let playButtonHtml = '';
        let queueButtonHtml = '';

        if (this.audioId === 'audioId') {
            playButtonHtml = '<div class="btn btn-square btn-rounded m-0 disabled" style="padding: 3px 0 0 0;" id="card-play-id-' + this.id + '">';
        } else {
            queueButtonHtml = '<span class="material-icons font-size-20 mr-10 cursor-pointer home-card-element-queue" id="card-queue-id-' + this.id + '" onclick="audioPlayerController.addToQueue(' + this.audioId + ')">queue</span>';
            playButtonHtml = '<div class="btn btn-square btn-rounded btn-primary m-0" style="padding: 3px 0 0 0;" id="card-play-id-' + this.id + '" onclick="audioPlayerController.addToQueuePlayNow(' + this.audioId + ')">';
        }

        let output = '';

        output += '' +
            '<div class="col-xl-4 col-lg-6 col-md-12 col-sm-12 no-select">' +
            '<div class="card p-0 home-card-element">' +
            outputArt +
            '<div class="content ml-20 mr-20 mt-10 mb-15">' +
            '<h2 class="card-title m-0 mb-5 text-truncate d-block cursor-pointer" onclick="' + onclickRouteJs + '">' + this.title + '</h2>' +
            '<span class="text-truncate d-block cursor-pointer" onclick="' + onclickRouteJs + '">' + this.artist + '</span>' +
            '<div class="row">' +
            '<div class="col d-inline-block text-truncate">' +
            '<span class="material-icons text-muted d-inline-block align-self-end pt-20 pr-5" style="font-size: 11px">history</span>' +
            '<span class="m-0 p-0 text-muted text-monospace d-inline-block align-self-end pt-20" style="font-size: 10px">' +
            this.updateTime +
            '</span>' +
            '</div>' +
            '<div class="col-auto">' +
            '<div class="text-right">' +
            queueButtonHtml +
            playButtonHtml +
            '<span class="material-icons">play_arrow</span>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';

        return output;
    }
}