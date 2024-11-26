class TemplateInit {
    app;
    logContainer;

    constructor(app) {
        this.app = app;
        this.logContainer = [];
    }

    get() {
        this.app.setTitleDOM('Initializing...');
        return this.htmlTemplate;
    }

    htmlTemplate = '<div class="page-wrapper with-navbar with-sidebar">' +
        '<div class="content-wrapper">' +
        '<div class="h-full row d-flex align-items-center">' +
        '<div class="col"></div>' +
        '<div class="col-auto">' +
        '<div class="w-500 mw-full">' +
        '<div class="card p-0">' +
        '<div class="content">' +
        '<h2 class="content-title text-center m-0 p-0">tracklink</h2>' +
        '<p class="text-center font-italic gray m-0 p-0 mb-20">loading web app...</p>' +
        '<div class="h-150 overflow-y-auto" id="log-target">' +
        '</div>' +
        '</div></div></div></div>' +
        '<div class="col"></div>' +
        '</div></div></div>';

    logAdd(UUID, working_success_warn_error_info, stringMessage) {
        // UUID: to update status of previous logs
        // status: working, done, failed
        // message: contains anything
        // time set on log function run

        let alreadyExistsUUID = false;

        this.logContainer.forEach(function f(value) {
                console.log(value[0]);
                if(UUID === value[0]) {
                    console.log('UUID already used, not adding to log - ' + UUID);
                    alreadyExistsUUID = true;
                }
            }
        )

        if(!alreadyExistsUUID) {
            this.logContainer.push([UUID, working_success_warn_error_info, stringMessage, Date.now()]);
            this.logUpdate();
        }
    }

    logEditStatus(UUID, working_success_warn_error_info) {

        this.logContainer.forEach(function f(value) {
                console.log(value[0]);
                if(UUID === value[0]) {
                    console.log('Found matching UUID, updating - ' + UUID);
                    value[1] = working_success_warn_error_info;
                }
            }
        )

        this.logUpdate()
    }

    logUpdate() {

        let newHtml = '';

        for (let i = this.logContainer.length-1; i >= 0; i--) {
            let logUUID = this.logContainer[i][1];
            let logStatus = this.logContainer[i][1];
            let logMessage = this.logContainer[i][2];
            let logTime = this.logContainer[i][3];

            let logStatusHtml = '';
            let colorHtml = '';
            let timeHtml = '<span class="text-right" style="font-size: 10px; width: max-content; padding-left: 8px; color: rgba(255,255,255,0.2)">' + this.app.f.lastMsToCurrentTimeAgo(logTime) + '</span>';

            switch (logStatus) {
                case 'working':
                    colorHtml = 'gray';
                    logStatusHtml = '<span class="material-symbols-outlined spinning-cw gray mr-10">refresh</span>';
                    break;
                case 'success':
                    colorHtml = 'green';
                    logStatusHtml = '<span class="material-symbols-outlined green mr-10">done</span>';
                    break;
                case 'warn':
                    colorHtml = 'yellow';
                    logStatusHtml = '<span class="material-symbols-outlined yellow mr-10">error</span>';
                    break;
                case 'error':
                    colorHtml = 'red';
                    logStatusHtml = '<span class="material-symbols-outlined red mr-10">warning</span>';
                    break;
                default:
                    colorHtml = 'gray';
                    logStatusHtml = '<span class="material-symbols-outlined gray mr-10">info</span>';
                    break;
            }


            let logMessageHtml = '<span class="text-wrap text-truncate ' + colorHtml + '">' + logMessage + '</span>';

            newHtml += '<div class="text-monospace font-size-12 d-flex align-items-center mb-5">' +
                '<div class="col-auto d-flex align-items-center mr-5">' + logStatusHtml + '</div>' +
                '<div class="col d-flex align-items-center">' + logMessageHtml + '</div>' +
                '<div class="col-auto d-flex align-items-center ml-5 mr-10">' + timeHtml + '</div>' +
                '</div>';
        }


        let htmlLogTarget = document.getElementById('log-target');

        htmlLogTarget.innerHTML = newHtml;


    }
}