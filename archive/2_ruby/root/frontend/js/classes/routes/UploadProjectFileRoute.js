class UploadProjectFileRoute {
    constructor(id) {
        this.id = id;

        this.setInitialHtml();
    }

    setInitialHtml() {
        jsTargetSpaContent.innerHTML = '' +
            '<div class="content no-select">' +
                '<h5>upload project files</h5>' +
                '<form id="upf">' +

                    '<div class="form-group">' +
                        '<label for="upf" class="required">Type</label>' +
                        '<div class="custom-radio">' +
                            '<input type="radio" name="upf" id="upf-art" value="art" required="required">' +
                            '<label for="upf-art">Art</label>' +
                        '</div>' +
                        '<div class="custom-radio">' +
                            '<input type="radio" name="upf" id="upf-bounce" value="bounce" required="required">' +
                            '<label for="upf-bounce">Bounce</label>' +
                        '</div>' +
                        '<div class="custom-radio">' +
                            '<input type="radio" name="upf" id="upf-stems" value="stems" required="required">' +
                            '<label for="upf-stems">Stems</label>' +
                        '</div>' +
                    '</div>' +

                    '<div>' +
                        '<input type="file" id="multi-file-input-1" multiple="multiple" accept=".jpg,.png,.gif">' +
                    '</div>' +

                    '<span class="btn btn-primary">upload</span>' +
                '</form>' +
                '<span class="btn mt-20" onclick="router.go(\'project\', \'' + this.id + '\')">back</span>' +
            '</div>';

    }

}