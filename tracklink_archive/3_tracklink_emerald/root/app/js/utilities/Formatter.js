class Formatter {
    app;

    constructor(app) {
        this.app = app;
        this.verboseMode = false;
        this.traceMode = false;
    }

    // converts totalSeconds (int) to DD:HH:MM:SS format
    secondsToPrettyTime(totalSeconds) {
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.trunc(totalSeconds - minutes * 60);
        let hours = Math.floor(totalSeconds / 3600);
        let days = Math.floor(totalSeconds / 86400);

        if (days > 0) {
            return days + ":" + this.twoDigit(hours) + ":" + this.twoDigit(minutes) + ":" + this.twoDigit(seconds);
        } else if (hours > 0) {
            return hours + ":" + this.twoDigit(minutes) + ":" + this.twoDigit(seconds);
        } else {
            return minutes + ":" + this.twoDigit(seconds);
        }
    }

    // converts number (int) to always read in two digits
    twoDigit(number) {
        if (number < 10) {
            return "0" + number;
        } else {
            return number;
        }
    }

    // updates heights upon client resize
    resizeEvent() {
        let navHeight = document.getElementById('root-navbar-bottom').clientHeight;
        let userAccountBubbleHeight = document.getElementById('user-own-account-bubble').clientHeight;
        let totalHeight = document.getElementById('page-wrapper').clientHeight;

        let contentHeight = totalHeight - navHeight;

        document.documentElement.style.setProperty('--navbar-height', navHeight + "px");
        document.documentElement.style.setProperty('--content-height', contentHeight - userAccountBubbleHeight + "px");

        document.documentElement.style.setProperty('--content-height-row', contentHeight + "px");

        // TODO: drag manager???
        // dragManager.setAllWidths();
        // dragManager.updateAvailableSnappingPoints();
    }

    setVerboseMode(bool) {
        this.verboseMode = bool;
        this.warn('NOT DEPLOYABLE - VERBOSE MODE ACTIVE!');
    }

    setTraceMode(bool) {
        this.traceMode = bool;
        this.warn('NOT DEPLOYABLE - TRACE MODE ACTIVE!');
    }

    // logs console if verbose
    log(stringToLog) {
        if (this.verboseMode)
            console.log('[LOG] ' + stringToLog);
    }

    // logs console if verbose & method trace
    trace(stringToLog) {
        if (this.verboseMode && this.traceMode)
            console.log('[TRACE] >> ' + stringToLog);
    }

    // warns console if verbose
    warn(stringToLog) {
        if (this.verboseMode)
            console.warn('[WARN] ' + stringToLog);
    }

    // errors console if verbose
    error(stringToLog) {
        if (this.verboseMode)
            console.error('[ERROR] ' + stringToLog);
    }

    // fade in page wrapper after page has loaded
    fadeInPageWrapper() {
        let pageWrapper = document.getElementById('page-wrapper');
        pageWrapper.classList.add('page-wrapper-visible');
    }

    lastMsToCurrentTimeAgo(intLastMs) {
        let currentTime = Date.now();
        let deltaMs = currentTime - Number(intLastMs);
        let deltaSeconds = deltaMs / 1000;

        if(deltaSeconds < 0) {
            // impossible...time for memes
            this.app.f.warn('congrats bro u broke time lol gg ' + deltaSeconds);
            return('NaN');
        } else if(deltaSeconds < 10) {
            // less than 10 seconds - return lowest
            return 'moments ago';
        } else if(deltaSeconds < 60) {
            // less than 60 seconds - return in seconds
            return Math.trunc(deltaSeconds) + 's ago';
        } else if(deltaSeconds < 60 * 60) {
            // less than 60 minutes - return in minutes
            return Math.trunc(deltaSeconds / 60) + 'm ago';
        } else if(deltaSeconds < 60 * 60 * 24) {
            // less than 24 hours - return in hours
            return Math.trunc(deltaSeconds / 60 / 60) + 'h ago';
        } else if(deltaSeconds < 60 * 60 * 24 * 30) {
            // less than 30 days - return in days
            return Math.trunc(deltaSeconds / 60 / 60 / 24) + 'd ago';
        } else if(deltaSeconds < 60 * 60 * 24 * 30 * 12) {
            // less than 12 months - return in months
            return Math.trunc(deltaSeconds / 60 / 60 / 24 / 30) + 'mo ago';
        } else {
            // return in years... WOW
            return Math.trunc(deltaSeconds / 60 / 60 / 24 / 30 / 12) + 'y ago';
        }

    }

    getDisplayName(userId) {

    }
}