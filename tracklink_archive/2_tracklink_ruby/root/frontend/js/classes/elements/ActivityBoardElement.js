class ActivityBoardElement {
    set messageElementContainer(value) {
        this._messageElementContainer = value;
    }

    constructor() {
        this._messageElementContainer = '';
    }

    toString() {
        let fMessages = '<span class="text-muted font-size-12 font-italic d-flex justify-content-center">nothing yet... :(</span>';
        if(this._messageElementContainer !== '')
            fMessages = this._messageElementContainer;

        return '' +
            '<div class="card">' +
            '<h2 class="card-title">activity board</h2>' +
            '<hr />' +

            '<textarea class="form-control w-full my-10" placeholder="add a note"></textarea>' +

            '<div class="d-flex justify-content-between my-10">' +
            '<span class="btn btn-primary">post</span>' +
            '<div class="custom-switch align-self-center">' +
            '<input type="checkbox" id="switch-private" value="" disabled>' +
            '<label class="text-muted" for="switch-private">private</label>' +
            '</div>' +
            '</div>' +

            '<hr />' +

            fMessages +

            '</div>';
    }
}