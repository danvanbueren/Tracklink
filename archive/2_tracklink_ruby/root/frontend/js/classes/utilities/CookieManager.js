class CookieManager {
    constructor() {
        this.cookieSeparator = ',,><>_~.';
    }

// set cookie (save)
    setCookieData(name, value, daysUntilExpiration) {
        const date = new Date();
        date.setTime(date.getTime() + (daysUntilExpiration * 24 * 60 * 60 * 1000));
        let expires = "expires=" + date.toUTCString();

        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

// get cookie (read), returns string
    readCookieData(name) {
        name += "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let decodedCookieArray = decodedCookie.split(';');
        for (let i = 0; i < decodedCookieArray.length; i++) {
            let cookieElement = decodedCookieArray[i];
            while (cookieElement.charAt(0) === ' ') {
                cookieElement = cookieElement.substring(1);
            }
            if (cookieElement.indexOf(name) === 0) {
                return cookieElement.substring(name.length, cookieElement.length);
            }
        }
        return "";
    }

// formats cookie to save from runnable for continuity/refresh
    saveAPCCookie(audioPlayerController) {
        let value = JSON.stringify(playback_queue_array) + this.cookieSeparator
            + currentPlaybackQueueIndex + this.cookieSeparator
            + audioCurrentTimeSeconds + this.cookieSeparator
            + currentHTMLAudioVolume + this.cookieSeparator
            + lastVolumeBeforeMute;
        this.setCookieData('last_audio_player_settings', value, 1);
    }
}