// Parent class of entire program

class Tracklink {

    targetDOM;
    currentView;
    f; // formatter

    constructor() {
        this.targetDOM = document.getElementById('target');
        this.f = new Formatter(this);

    }

    initialize() {
        app.darkModeOn();
        app.showSidebar(false);

        app.currentView = new TemplateInit(this);
        app.loadTemplate();

        let logUpdate = setInterval(function() {
            app.currentView.logUpdate();
        },5000);

        app.currentView.logAdd('sgdf', 'working', '1');

        // clearInterval(logUpdate);
    }

    loadTemplate() {
        app.targetDOM.innerHTML = this.currentView.get();
    }

    setTitleDOM(title) {
        document.title = 'Tracklink | ' + title;
    }

    darkModeOn() {
        if(!halfmoon.darkModeOn)
            halfmoon.toggleDarkMode()
    }

    showSidebar(bool) {
        let pageWrapper = document.getElementsByClassName("page-wrapper")[0];
        if (!bool) {
            if (pageWrapper.getAttribute("data-sidebar-hidden")) {
                pageWrapper.removeAttribute("data-sidebar-hidden");
            } else {
                pageWrapper.setAttribute("data-sidebar-hidden", "hidden");
            }
        }
    }

}

// Initialize method - entry point into js program

let app;

function initialize() {
    app = new Tracklink();
    app.initialize();
}