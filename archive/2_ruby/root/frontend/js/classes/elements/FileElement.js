class FileElement {
    set fileName(value) {
        this._fileName = value;
    }

    set fileOwner(value) {
        this._fileOwner = value;
    }

    set timeStamp(value) {
        this._timeStamp = value;
    }

    set type(value) {
        this._type = value;
    }

    set size(value) {
        this._size = value;
    }

    set length(value) {
        this._length = value;
    }
    constructor() {
        this._fileName = '';
        this._fileOwner = '';
        this._timeStamp = '';
        this._type = '';
        this._size = '';
        this._length = '';
    }

    toString() {
        return '' +
            '<div class="row d-flex">' +
                '<div class="col-auto align-self-center">' +
                    '<span class="btn btn-primary btn-square btn-rounded mr-15">' +
                        '<span class="material-icons" style="padding-top: 10%">play_arrow</span>' +
                    '</span>' +
                '</div>' +

                '<div class="col-auto align-self-center">' +
                    '<span class="cursor-pointer btn-text material-icons mr-20 align-middle">queue</span>' +
                '</div>' +

                '<div class="col">' +
                    '<h6 class="mb-5">' + this._fileName + '</h6>' +
                    '<p class="text-muted font-size-12 mt-0 mb-10">uploaded by ' + this._fileOwner + ' ' + f.lastMsToCurrentTimeAgo(this._timeStamp) + '</p>' +

                    '<span class="text-muted text-monospace badge badge-pill mr-5">' +
                        '<span class="material-icons font-size-12 align-middle">audio_file</span> ' + this._type + '</span>' +

                    '<span class="text-muted text-monospace badge badge-pill mr-5">' +
                        '<span class="material-icons font-size-12 align-middle">save</span>  ' + this._size + '</span>' +

                    '<span class="text-muted text-monospace badge badge-pill">' +
                        '<span class="material-icons font-size-12 align-middle">schedule</span> ' + this._length + '</span>' +

                '</div>' +
            '</div>';
    }
}