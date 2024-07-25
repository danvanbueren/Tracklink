class Database {
    constructor() {
        this.responseText = '';
    }

    apiRoutesGET(apiFilename, functionOnLoad) {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            db.responseText = this.responseText;
            functionOnLoad();
        }
        xhttp.open("GET", "../../backend/api/routes/" + apiFilename, true);
        xhttp.send();
    }

    apiDbPOST(apiFilename, functionOnLoad, postData) {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            db.responseText = this.responseText;
            functionOnLoad();
        }

        xhttp.open("POST", "../../backend/api/db/" + apiFilename, true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(postData);
    }

    post(filepath, functionOnLoad, payload) {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            db.responseText = this.responseText;
            functionOnLoad();
        }

        xhttp.open("POST", filepath, true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(payload);
    }
}