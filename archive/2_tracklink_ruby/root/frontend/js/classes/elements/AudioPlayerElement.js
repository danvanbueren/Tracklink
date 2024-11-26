class AudioPlayerElement {

    constructor() {
        this.title = '';
        this.artist = '';

        this.artPath = ''; // if empty, then show icon - used for elementArtContainer

        this.currentTime = ''; // 0:00 format
        this.totalTime = ''; // 0:00 format

        this.isPaused = true; // used to set play or pause icon

        this.playbackProgress = 0; // measured from 0 to 1

        this.currentVolume = 1; // measured from 0 to 1
        this.lastSavedVolumeBeforeMute = 1; // measured from 0 to 1
    }

    setTitle(stringTitle) {
        this.title = stringTitle;
    }

    setArtist(stringArtist) {
        this.artist = stringArtist;
    }

    setArtPath(stringArtPath) {
        this.artPath = stringArtPath;
    }

    setCurrentTime(stringCurrentTime) {
        this.currentTime = stringCurrentTime;
    }

    setTotalTime(stringTotalTime) {
        this.totalTime = stringTotalTime;
    }

    setIsPaused(stringIsPaused) {
        this.isPaused = stringIsPaused;
    }

    setPlaybackProgress(stringPlaybackProgress) {
        this.playbackProgress = Number(stringPlaybackProgress);
    }

    setCurrentVolume(stringCurrentVolume) {
        this.currentVolume = Number(stringCurrentVolume);
    }

    setLastSavedVolumeBeforeMute(stringLastSavedVolumeBeforeMute) {
        this.lastSavedVolumeBeforeMute = Number(stringLastSavedVolumeBeforeMute);
    }

    updateAllGUI() {
        let elementTitle = document.getElementById('audio-bar-song-title'),
            elementArtist = document.getElementById('audio-bar-song-artist'),
            elementArtContainer = document.getElementById('audio-bar-image');

        elementTitle.innerText = this.title;
        elementArtist.innerText = this.artist;

        this.updateTimeTextGUI();
        this.updatePlayPauseGUI();

        if (this.artPath === '') {
            // set to icon
            elementArtContainer.innerHTML = '' +
                '<div class="audio-bar-image no-select">' +
                '<div class="rotating-slow-scale audio-bar-image-icon-background"></div>' +
                '<div class="audio-bar-image-icon-text">' +
                '<span class="material-icons">music_note</span>' +
                '</div>' +
                '</div>';
        } else {
            // set to image
            elementArtContainer.innerHTML = '<img class="audio-bar-image no-select" src="' +
                '../../' + this.artPath +
                '" alt="art" draggable="false">';
        }

        // TODO finish this stuff
        // this.updatePlaybackTimeGUI();
        // this.updateVolumeGUI();

    }

    updatePlayPauseGUI() {
        let elementPlayPauseIcon = document.getElementById('audio-player-play-pause');
        if (this.isPaused) {
            elementPlayPauseIcon.innerText = 'play_circle';
        } else {
            elementPlayPauseIcon.innerText = 'pause';
        }
    }

    updateTimeTextGUI() {
        let elementCurrentTime = document.getElementById('audio-time-current'),
            elementTotalTime = document.getElementById('audio-time-total');

        elementCurrentTime.innerText = f.secondsToPrettyTime(Number(this.currentTime));
        elementTotalTime.innerText = f.secondsToPrettyTime(Number(this.totalTime));
    }

    updatePlaybackTimeGUI() {
        f.error('element: updatePlaybackTimeGUI() not finished');
    }

    updateVolumeGUI() {
        f.error('element: updateVolumeGUI() not finished');
    }

    htmlAssembler() {
        return '<div class="row w-full d-flex ml-10 mr-10">' +
            '<div class="col-2 align-self-center">' +
            '<div class="row cursor-pointer" onclick="audioPlayerController.artTitleArtistOnClick()">' +
            '<div class="col-auto mr-15" id="audio-bar-image">' +
            '</div>' +
            '<div class="col d-flex">' +
            '<div class="align-self-center mb-10">' +
            '<p class="p-0 m-0 font-weight-bold font-size-16 no-select" id="audio-bar-song-title">-</p>' +
            '<p class="p-0 m-0 text-muted font-size-12 no-select" id="audio-bar-song-artist">-</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="col mt-15 mb-15">' +
            '<div class="row">' +
            '<div class="col"></div>' +
            '<div class="col-auto">' +
            '<div class="row w-200 d-flex pb-5">' +
            '<div class="col-4 align-self-center d-flex justify-content-end">' +
            '<span class="material-icons no-select skip-locked" id="audio-player-skip-back" onclick="audioPlayerController.skipBackOnClick();">skip_previous</span>' +
            '</div>' +
            '<div class="col-4 align-self-center d-flex justify-content-center">' +
            '<span class="material-icons no-select play-pause-locked"' +
            ' id="audio-player-play-pause" onclick="audioPlayerController.playPauseOnClick()">play_circle</span>' +
            '</div>' +
            '<div class="col-4 align-self-center d-flex">' +
            '<span class="material-icons no-select skip-locked" id="audio-player-skip-fore"' +
            ' onclick="audioPlayerController.skipForeOnClick()">skip_next</span>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="col"></div>' +
            '</div>' +
            '<div class="row d-flex">' +
            '<div class="col-auto mr-20 col align-self-center">' +
            '<p class="p-0 m-0 text-muted font-size-12 no-select" id="audio-time-current">-:--</p>' +
            '</div>' +
            '<div class="col align-self-center">' +
            '<div class="slider">' +
            '<input type="range" class="slider-input-locked" min="1" max="1000" value="1" id="audio-time-input-range" oninput="audioPlayerController.timeRangeOnInput()" disabled>' +
            '<div class="slider-progress-bar" style="width: 0" id="audio-time-progress-bar-visual"></div>' +
            '<div class="slider-progress-bar-bg"></div>' +
            '</div>' +
            '</div>' +
            '<div class="col-auto ml-20 col align-self-center">' +
            '<p class="p-0 m-0 text-muted font-size-12 no-select" id="audio-time-total">-:--</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="col-2 align-self-center">' +
            '<div class="row">' +
            '<div class="col"></div>' +
            '<div class="col-auto d-flex">' +
            '<span class="material-icons mr-15 cursor-pointer no-select queue-locked" id="queue-icon" onclick="audioPlayerController.queueOnClick()">queue_music</span>' +
            '<span class="material-icons mr-15 cursor-pointer no-select" id="volume-icon" onclick="audioPlayerController.speakerOnClick()">volume_up</span>' +
            '<div class="slider w-100 d-inline-block align-self-center">' +
            '<input type="range" class="slider-input" min="1" max="1000" value="1000" id="volume-input-range" oninput="audioPlayerController.volumeRangeOnInput()">' +
            '<div class="slider-progress-bar" style="width: 100%" id="volume-progress-bar-visual"></div>' +
            '<div class="slider-progress-bar-bg"></div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
    }

    toString() {
        return this.htmlAssembler();
    }
}