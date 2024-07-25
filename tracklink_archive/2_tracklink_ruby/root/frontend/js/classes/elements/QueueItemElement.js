class QueueItemElement {

    constructor(intUniqueProjectId) {
        this.uniqueProjectId = intUniqueProjectId;

        this.isNowPlaying = false;

        this.queueNumber = 0;
        this.imgPath = '';
        this.title = 'title';
        this.artist = 'artist';
        this.collection = 'collection';
        this.time = '1:23';

        this.html1 = '<div class="row queue-item draggable cursor-pointer" id="draggable-' + this.uniqueProjectId + '">';
        this.html2 = '<div class="col-6 d-flex align-items-center no-select">';
        this.html3_1 = '<span id="queue-item-' + this.uniqueProjectId + '-number" class="m-5 no-select">';
        // INSERT HERE: this.queueNumber
        this.html3_2 = '</span>';
        // html3 ALT: <span id="..." class="... material-icons cursor-pointer">play_arrow</span>
        this.html4 = '<div class="queue-item-art m-5 ml-15 mr-15 d-flex align-items-center no-select">';

        this.html5_1 = '<img src="';
        // INSERT HERE: this.imgPath
        this.html5_2 = '" alt="img" draggable="false">';

        this.html6 = '</div>';
        this.html7 = '<div class="m-5">';
        this.html8_1 = '<span class="row text-primary font-weight-bold font-size-16 no-select">';
        // INSERT HERE: this.title
        this.html8_2 = '</span>';
        this.html9_1 = '<span class="row text-muted font-size-14 no-select">';
        // INSERT HERE: this.artist
        this.html9_2 = '</span></div></div>';
        this.html10 = '<div class="col d-flex align-items-center">';
        this.html11_1 = '<span class="m-5 no-select">';
        // INSERT HERE: this.collection
        this.html11_2 = '</span></div>';
        this.html12 = '<div class="col-1 d-flex align-items-center justify-content-end">';
        this.html13_1 = '<span class="m-5 no-select">';
        // INSERT HERE: this.time
        this.html13_2 = '</span></div></div>';
    }

    setIsNowPlaying(boolIsNowPlaying) {
        this.isNowPlaying = boolIsNowPlaying;
    }

    setQueueNumber(intQueueNumber) {
        this.queueNumber = intQueueNumber;
    }

    setImgPath(stringImgPath) {
        this.imgPath = stringImgPath;
    }

    setTitle(stringTitle) {
        this.title = stringTitle;
    }

    setArtist(stringArtist) {
        this.artist = stringArtist;
    }

    setCollection(stringCollection) {
        this.collection = stringCollection;
    }

    setTime(stringTime) {
        this.time = stringTime;
    }

    toString() {
        let output = '';

        if(this.isNowPlaying) {
            output += '<div class="row queue-item cursor-pointer" onclick="loadRoute(\'project\', \'' + this.uniqueProjectId + '\')" id="queue-item-now-playing">';
        } else {
            output += this.html1;
        }

        output += this.html2;

        if(this.isNowPlaying) {
            output += '<span id="queue-now-playing-number" class="m-5 no-select">1</span>';
        } else {
            output += this.html3_1;
            output += this.queueNumber;
            output += this.html3_2;
        }

        output += this.html4;

        if(this.imgPath === '') {
            output += '<span class="material-icons">music_note</span>';
        } else {
            output += this.html5_1;
            output += this.imgPath;
            output += this.html5_2;
        }

        output += this.html6;
        output += this.html7;
        output += this.html8_1;
        output += this.title;
        output += this.html8_2;
        output += this.html9_1;
        output += this.artist;
        output += this.html9_2;
        output += this.html10;
        output += this.html11_1;
        output += this.collection;
        output += this.html11_2;
        output += this.html12;
        output += this.html13_1;
        output += this.time;
        output += this.html13_2;


        return output;
    }
}