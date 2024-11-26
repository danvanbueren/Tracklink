class Listener {
    constructor() {
        document.addEventListener('keypress', this.buttonPushed);
    }

    // detects space bar push event
    buttonPushed(event) {
        let keycode = event.keyCode,
            source = event.target,
            exclude = ['input', 'textarea'];

        if (exclude.indexOf(source.tagName.toLowerCase()) === -1 || source.id === "audio-time-input-range" || source.id === "volume-input-range") {
            if (keycode === 32) {
                audioPlayerController.playPauseOnClick();
            }
        }
    }

}