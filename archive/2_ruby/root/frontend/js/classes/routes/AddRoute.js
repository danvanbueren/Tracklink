class AddRoute {
    constructor() {
        this.injectScaffold();

        let form = document.getElementById('add-form');
        let formTitle = document.getElementById('add-form-title');

        function handleForm(event) {
            event.preventDefault();

            let radios = document.getElementsByName('add-form-type');
            let formType = '';

            for(let i = 0; i < radios.length; i++) {
                if(radios[i].checked) {
                    formType = radios[i].value;
                    break;
                }
            }

            let formData = 'title=' + formTitle.value + '&type=' + formType;
            f.warn(formData);

            db.apiDbPOST('add.php', function() {
                f.log('RESPONSE TEXT: ' + db.responseText);

                let response = db.responseText;
                let decodedResponse = '';
                try {
                    decodedResponse = JSON.parse(response);
                } catch (e) {
                    f.error('JS: failed to decode ajax response!\n' + response);
                    return;
                }

                router.go(decodedResponse['page'], decodedResponse['id']);
            }, formData);

        }

        form.addEventListener('submit', handleForm);
    }

    injectScaffold() {
        jsTargetSpaContent.innerHTML = '' +
            '<div class="content">' +
                '<div class="content-title d-inline">Add Project / Collection</div>' +

                '<form id="add-form" class="w-400 mw-full mt-20">' +
                    '<div class="form-group">' +
                        '<label for="add-form-title" class="required">Title</label>' +
                        '<input type="text" class="form-control" id="add-form-title" placeholder="Project Title" name="add-title" required="required">' +
                    '</div>' +

                    '<div class="form-group">' +
                        '<label for="add-form-type" class="required">Type</label>' +
                        '<div class="custom-radio">' +
                            '<input type="radio" name="add-form-type" id="add-form-type-project" value="project" required="required">' +
                            '<label for="add-form-type-project">Project</label>' +
                        '</div>' +
                        '<div class="custom-radio">' +
                            '<input type="radio" name="add-form-type" id="add-form-type-collection" value="collection" required="required">' +
                            '<label for="add-form-type-collection">Collection</label>' +
                        '</div>' +
                    '</div>' +

                    '<input class="btn btn-primary" type="submit" value="Submit">' +
                '</form>' +
            '</div>';
    }
}