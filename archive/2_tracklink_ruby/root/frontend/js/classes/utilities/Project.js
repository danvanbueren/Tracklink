class Project {
    constructor(stringProjectId) {
        this.projectId = stringProjectId;

        f.warn('CRITICAL\n[tracklink.js] getProject(): \ncreate db link - these values are placeholders!');
    }

    getTitle() {
        return 'title-' + this.projectId;
    }
    getArtist() {
        return 'artist-' + this.projectId;
    }
    getCollection() {
        return 'collection-' + this.projectId;
    }
    getArtPath() {
        return 'backend/data/images/1.png';
    }
    getAudioPath() {
        return '../../backend/data/audio/1.mp3';
    }
    getTime() {
        return Math.floor(Math.random() * 10) + ':' + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
    }
}