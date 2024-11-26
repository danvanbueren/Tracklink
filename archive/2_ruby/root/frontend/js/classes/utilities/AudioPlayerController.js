class AudioPlayerController {
    constructor(audioPlayerElement) {
        // create element and insert html
        this.element = audioPlayerElement;
        document.getElementById("root-navbar-bottom").innerHTML = this.element.toString();
        // create actual html audio player
        this.audio = null;
        // array storage for queue
        this.playback_queue_array = [];
        this.currentPlaybackQueueIndex = 0;
        this.guiDisabled = true;
        this.cookie = null;

        this.loadCookie();


        // TODO... this is gonna suck. i sleep for now :(
        //setInterval(this.update, 200);
        //setInterval(cookieManager.saveAudioPlayerCookie, 500);
    }

    loadCookie() {
        this.cookie = cookieManager.readCookieData('last_audio_player_settings');
        let cookieArray = this.cookie.split(cookieManager.cookieSeparator);

        let i = 0;
        cookieArray.forEach((cookieArrayElement) => {
            switch (i) {
                case 0:
                    // add projectId to queue_array
                    try {
                        const saved_playback_queue_array_from_cookie = JSON.parse(cookieArrayElement);
                        this.playback_queue_array.length = 0;
                        saved_playback_queue_array_from_cookie.forEach(data => {
                            this.playback_queue_array.push(data);
                        });
                    } catch (e) {
                        f.warn('saved_playback_queue_array_from_cookie not JSON parsable');
                    }


                    break;
                case 1:
                    // set queue index
                    this.currentPlaybackQueueIndex = Number(cookieArrayElement);
                    break;
            }
            i++;
        });

        if (this.playback_queue_array.length > 0) {
            let currentProject = new Project(this.playback_queue_array[this.currentPlaybackQueueIndex]);
            this.audio = new Audio(currentProject.getAudioPath());

            let waitingForAudioReadyInterval = setInterval(function() {
                if (audioPlayerController.audio.readyState >= 2) {
                    clearInterval(waitingForAudioReadyInterval);
                    audioPlayerController.loadCookieAfterAudioReadyState();
                }
            }, 50);
        }
    }

    loadCookieAfterAudioReadyState() {
        let currentProject = new Project(this.playback_queue_array[this.currentPlaybackQueueIndex]);

        this.element.setTitle(currentProject.getTitle());
        this.element.setArtist(currentProject.getArtist());
        this.element.setArtPath(currentProject.getArtPath());

        this.element.setCurrentTime(this.audio.currentTime);
        this.element.setTotalTime(Number(this.audio.duration));

        this.audio.volume = this.element.currentVolume;

        this.element.setPlaybackProgress(0);

        let i = 0;
        let cookieArray = this.cookie.split(cookieManager.cookieSeparator);

        cookieArray.forEach((cookieArrayElement) => {
            switch (i) {
                case 0:
                case 1:
                    break;
                case 2:
                    // set current time
                    this.audio.currentTime = Number(cookieArrayElement);
                    break;
                case 3:
                    // set current volume
                    this.audio.volume = Number(cookieArrayElement);

                    break;
                case 4:
                    // set stored volume (mute)
                    this.element.setLastSavedVolumeBeforeMute(Number(cookieArrayElement))
                    break;
                default:
                    // unknown cookie detected
                    f.warn("LOAD COOKIE PROP: \nundefined! BROKEN COOKIE \n- " + cookieArrayElement);
                    break;
            }
            i++;
        });
        this.element.setCurrentVolume(this.audio.volume);
        this.element.updateVolumeGUI();

        this.element.setCurrentTime(this.audio.currentTime);
        this.element.updateTimeTextGUI();

        this.element.setPlaybackProgress(this.audio.currentTime / this.audio.duration);
        this.element.updatePlaybackTimeGUI();

        audioPlayerController.element.updateAllGUI();
        this.lockAudioControl(false);
    }

    lockAudioControl(boolean) {
        let skipBack = document.getElementById('audio-player-skip-back'),
            skipFore = document.getElementById('audio-player-skip-fore'),
            playPause = document.getElementById('audio-player-play-pause'),
            timeInput = document.getElementById('audio-time-input-range'),
            queueIcon = document.getElementById('queue-icon');

        if (boolean) {
            this.guiDisabled = true;

            // disable the interface
            if (skipBack.classList.contains('skip-back'))
                skipBack.classList.remove('skip-back');
            if (!skipBack.classList.contains('skip-locked'))
                skipBack.classList.add('skip-locked');

            if (skipFore.classList.contains('skip-fore'))
                skipFore.classList.remove('skip-fore');
            if (!skipFore.classList.contains('skip-locked'))
                skipFore.classList.add('skip-locked');

            if (playPause.classList.contains('play-pause'))
                playPause.classList.remove('play-pause');
            if (!playPause.classList.contains('play-pause-locked'))
                playPause.classList.add('play-pause-locked');

            if (timeInput.classList.contains('slider-input'))
                timeInput.classList.remove('slider-input');
            if (!timeInput.classList.contains('slider-input-locked'))
                timeInput.classList.add('slider-input-locked');

            if (!queueIcon.classList.contains('queue-locked'))
                queueIcon.classList.add('queue-locked');

            timeInput.disabled = true;
        } else {
            this.guiDisabled = false;

            // enable the interface
            if (skipBack.classList.contains('skip-locked'))
                skipBack.classList.remove('skip-locked');
            if (!skipBack.classList.contains('skip-back'))
                skipBack.classList.add('skip-back');

            if (skipFore.classList.contains('skip-locked'))
                skipFore.classList.remove('skip-locked');
            if (!skipFore.classList.contains('skip-fore'))
                skipFore.classList.add('skip-fore');

            if (playPause.classList.contains('play-pause-locked'))
                playPause.classList.remove('play-pause-locked');
            if (!playPause.classList.contains('play-pause'))
                playPause.classList.add('play-pause');

            if (timeInput.classList.contains('slider-input-locked'))
                timeInput.classList.remove('slider-input-locked');
            if (!timeInput.classList.contains('slider-input'))
                timeInput.classList.add('slider-input');

            if (queueIcon.classList.contains('queue-locked'))
                queueIcon.classList.remove('queue-locked');

            timeInput.disabled = false;
        }
    }

    addToQueue(stringProjectId) {
        // this.playback_queue_array[this.playback_queue_array.length] = stringProjectId;
        f.log('queue not yet implemented')
    }

    addToQueuePlayNow(stringProjectId) {
        // this.playback_queue_array[this.playback_queue_array.length] = stringProjectId;
        f.log('instant play queue not yet implemented')
    }

    // ONCLICK // ONINPUT // ONCLICK // ONINPUT // ONCLICK // ONINPUT // ONCLICK // ONINPUT // ONCLICK // ONINPUT

    artTitleArtistOnClick() {
        if (!this.guiDisabled) {
            f.warn("artTitleArtistOnClick() function incomplete");
        }
    }

    skipBackOnClick() {
        if (!this.guiDisabled) {
            if (this.audio !== null) {
                f.warn("skipBackOnClick() function incomplete");
            } else {
                f.error("audio element is null");
            }
        }
    }

    skipForeOnClick() {
        if (!this.guiDisabled) {
            if (this.audio !== null) {
                f.warn("skipForeOnClick() function incomplete");
            } else {
                f.warn("audio element is null");
            }
        }
    }

    playPauseOnClick() {
        if (!this.guiDisabled) {
            if (this.audio !== null) {
                if (this.audio.paused) {
                    this.audio.play();
                    this.element.setIsPaused(false);
                    this.element.updatePlayPauseGUI();
                } else {
                    this.audio.pause();
                    this.element.setIsPaused(true);
                    this.element.updatePlayPauseGUI();
                }
            } else {
                f.error("audio element is null");
            }
        }
    }

    timeRangeOnInput() {
        if (!this.guiDisabled) {
            f.warn("timeRangeOnInput() function incomplete");
        }
    }

    queueOnClick() {
        if (!this.guiDisabled) {
            f.warn("queueOnClick() function incomplete");
        }
    }

    speakerOnClick() {
        f.warn("speakerOnClick() function incomplete");
    }

    volumeRangeOnInput() {
        f.warn("volumeRangeOnInput() function incomplete");
    }

    // TODO BROKEN METHODS! - BROKEN METHODS! - BROKEN METHODS! - BROKEN METHODS! - BROKEN METHODS!

    update() {
        if (typeof this.audio !== 'undefined' && this.audio !== null) {

            // update info variables
            this.audioTotalDuration = this.audio.duration.valueOf();
            this.audioCurrentTimeSeconds = this.audio.currentTime.valueOf();
            this.audioCurrentTimePercent = (this.audioCurrentTimeSeconds / this.audioTotalDuration) * 100;

            // if 300ms have passed since the last user scrub
            if (Date.now() - literalLastTimeScrub > 300) {
                // update text time
                e_audioTimeTotal.textContent = secondsToPrettyTime(audioTotalDuration);
                e_audioTimeCurrent.textContent = secondsToPrettyTime(audioCurrentTimeSeconds);

                // update audio time input range
                e_audioTimeInputRange.value = audioCurrentTimePercent * 10;

                // update progress bar width/percentage
                if (audioCurrentTimePercent > 0) {
                    e_audioTimeProgressBarVisual.style.width = audioCurrentTimePercent + "%";
                } else {
                    e_audioTimeProgressBarVisual.style.width = "0";
                }
            }

            if (this.audio.paused) {
                // change to play button
                e_audioPlayerPlayPause.textContent = "play_circle";
            } else {
                // change to pause button
                e_audioPlayerPlayPause.textContent = "pause_circle";
            }

            // GOAL: update playback time if cookie goal was set when loading cookie...wack solution but im too confused to figure something cleaner
            if (goal_updatePlaybackTimeTo !== -1) {
                this.setPlaybackTimeSeconds(goal_updatePlaybackTimeTo);

                if (!cookieTimeUpdateFailed) {
                    goal_updatePlaybackTimeTo = -1;
                }
            }
        } else {
            // AUDIO IS NOT DEFINED OR INITIALIZED

            // if cookie has not yet been loaded
            if (!cookieLoaded) {
                // load cookie
                loadFromLastCookie();
                cookieLoaded = true;

                // if queue and queue index are correctly loaded
                if (playback_queue_array.length > 0 && currentPlaybackQueueIndex !== null && typeof currentPlaybackQueueIndex !== 'undefined') {

                    // load audio from queue
                    let project = new Project(playback_queue_array[currentPlaybackQueueIndex]);
                    this.audio = new Audio(project.getAudioPath());

                    // update vars
                    audioTotalDuration = this.audio.duration.valueOf().toString();
                    audioCurrentTimePercent = (audioCurrentTimeSeconds / audioTotalDuration) * 100;

                    // enable upper loop
                    audioPlayerEnabled = true;

                    // update UI
                    this.lockAudioControl(false);

                    // set volume
                    this.setVolume(currentHTMLAudioVolume * 100);

                    // set goal to update playback time
                    goal_updatePlaybackTimeTo = audioCurrentTimeSeconds;
                }
            } else {
                // cookie load was attempted but didn't work, now awaiting user-driven push to queue array

                // if user added to queue
                if (playback_queue_array.length > 0) {
                    log("audio loaded manually (origin not of cookie)");

                    // load audio (force index of 0 since cookie was unreliably loaded)
                    let project = new Project(playback_queue_array[0]);
                    this.audio = new Audio(project.getAudioPath());

                    // enable upper loop
                    audioPlayerEnabled = true;

                    // update UI
                    this.lockAudioControl(false);
                }
            }
        }
    }

    // function sets playback time in percent -- BACKEND
    setPlaybackTimePercent(playbackTimePercent) {
        if (audioPlayerEnabled) {
            e_audioTimeCurrent.textContent = secondsToPrettyTime(audioTotalDuration * e_audioTimeInputRange.value / 1000);
        }


        if (audioPlayerEnabled && Math.abs(Date.now() - lastTimePlaybackScrubCheckpoint) > 100) {
            let newCurrentTime = parseFloat((playbackTimePercent * this.audio.duration / 100).toFixed(2).toString());

            if (!isNaN(newCurrentTime)) {
                this.audio.currentTime = newCurrentTime;
                lastTimePlaybackScrubCheckpoint = Date.now();

                cookieTimeUpdateFailed = false;
            } else {
                error("Failed to update audio.currentTime due to NaN error!");
                cookieTimeUpdateFailed = true;
            }
        }

        // update length of played audio (blue bar to the left of the input circle)
        if (playbackTimePercent < 0.2) {
            e_audioTimeProgressBarVisual.style.width = "0";
        } else {
            e_audioTimeProgressBarVisual.style.width = playbackTimePercent + "%";
        }
    }

    // function sets playback time -- FRONTEND
    userUpdatePlaybackTime() {
        this.setPlaybackTimePercent(e_audioTimeInputRange.value / 10);
        literalLastTimeScrub = Date.now();
    }

    // VOLUME VOLUME VOLUME VOLUME VOLUME VOLUME VOLUME VOLUME
    // function sets volume -- FRONTEND
    userUpdateVolume() {
        let input = e_volumeInputRange.value / 10;
        this.setVolume(input);
    }

    // function sets volume -- BACKEND
    setVolume(volume) {
        if (volume < 0.2) {
            e_volumeProgressBarVisual.style.width = "0";
            e_volumeInputRange.value = 0;
            currentHTMLAudioVolume = 0;
        } else {
            e_volumeProgressBarVisual.style.width = volume + "%";
            e_volumeInputRange.value = volume * 10;
            currentHTMLAudioVolume = volume / 100;
        }

        if (volume < 0.2) {
            e_volumeIcon.textContent = "volume_off";
        } else if (volume < 25) {
            e_volumeIcon.textContent = "volume_mute";
        } else if (volume < 75) {
            e_volumeIcon.textContent = "volume_down";
        } else {
            e_volumeIcon.textContent = "volume_up";
        }

        if (audioPlayerEnabled) {
            this.audio.volume = currentHTMLAudioVolume;
        }
    }

    // function toggles mute -- FULLSTACK
    toggleMute() {
        f.warn("toggleMute() function incomplete");
        /*

        let input = e_volumeInputRange.value / 10;

        log("currentVolume = " + input);

        if (input > 1) {
            // current playback volume is over 0, therefor store value and mute
            log("volume is high, muting");

            lastVolumeBeforeMute = input;
            currentHTMLAudioVolume = 0;

            e_volumeInputRange.value = 1;
            e_volumeProgressBarVisual.style.width = "0";

            e_volumeIcon.textContent = "volume_off";
        } else {
            // current playback volume is 0, therefor unmute via stored value
            log("volume is muted, un-muting to stored value: " + lastVolumeBeforeMute);

            currentHTMLAudioVolume = lastVolumeBeforeMute / 100;

            e_volumeInputRange.value = lastVolumeBeforeMute * 10;
            e_volumeProgressBarVisual.style.width = lastVolumeBeforeMute + "%";

            if (lastVolumeBeforeMute < 1) {
                e_volumeIcon.textContent = "volume_off";
            } else if (lastVolumeBeforeMute < 25) {
                e_volumeIcon.textContent = "volume_mute";
            } else if (lastVolumeBeforeMute < 75) {
                e_volumeIcon.textContent = "volume_down";
            } else {
                e_volumeIcon.textContent = "volume_up";
            }
        }

        if (audioPlayerEnabled) {
            this.audio.volume = currentHTMLAudioVolume;
        }

         */
    }

}