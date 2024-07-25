class ActivityBoardMessageElement {
    set timeStamp(value) {
        this._timeStamp = value;
    }

    set user(value) {
        this._user = value;
    }

    set messageType(value) {
        this._messageType = value;
    }

    set messageContent(value) {
        this._messageContent = value;
    }

    constructor() {

        this._timeStamp = '';
        this._user = '';
        this._messageType = '';
        this._messageContent = '';

    }

    toString() {
        let fTime = '? ago';
        let fMessageContent = '';

        if(this._timeStamp !== '')
            fTime = f.lastMsToCurrentTimeAgo(this._timeStamp);

        if(this._messageContent !== '') {
            fMessageContent = '' +
                '<div class="comment-box my-5">' +
                '<span>' + this._messageContent + '</span>' +
                '</div>';
        }

        return '' +
            '<div class="my-10">' +
                '<div class="d-flex justify-content-between my-5">' +
                    '<div>' +
                        '<span class="font-size-12 font-weight-bold">' + this._user + '</span>' +
                        '<span class="font-size-12 text-muted"> ' + this.messageTypePretty() + '</span>' +
                    '</div>' +
                    '<div>' +
                        '<span class="font-size-12 text-muted">' + fTime + '</span>' +
                    '</div>' +
                '</div>' +
                fMessageContent +
            '</div>';
    }


    messageTypePretty() {
        switch(this._messageType) {
            case 'message':
                return 'posted a message';
            case 'stem':
                return 'uploaded stems';
            case 'bounce':
                return 'uploaded a bounce';
            case 'image':
            case 'art':
                return 'uploaded an image';
            default:
                f.warn('ActivityBoardMessageElement received unknown _messageType! ' + this._messageType);
                return 'performed undefined action';
        }
    }
}