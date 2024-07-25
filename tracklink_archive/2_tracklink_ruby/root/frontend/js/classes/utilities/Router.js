/*
* router logic:
*
* 1 - created by initializeJs() after all js is loaded
* 2 - router constructor establishes local vars
* 3 - constructor runs one-time method to load initial route from URL
* 4 - subsequent calls to go() method grab new routes and replace innerHtml of spa target
* 5 - that is all!
*
* */

class Router {
    constructor() {
        f.trace('Router.js::constructor()');

        // storage for return from queue
        this.lastRoute = [];
        this.lastRoute.push('home');

        // global access to current page element
        this.currentSpaPage = null;

        // start loading init page
        this.goInit();
    }

    go(stringRouteName, stringId) {
        f.trace('Router.js::go('+stringRouteName+', '+stringId+')');

        this.lastRoute = [];
        this.lastRoute.push(this.getUrlArgs('r'));
        this.lastRoute.push(this.getUrlArgs('id'));

        this.loadRoute(stringRouteName, stringId);

    }

    goBackFromQueue() {
        f.trace('Router.js::goBackFromQueue()');

        this.loadRoute(this.lastRoute[0], this.lastRoute[1]);
    }

    loadRoute(route, arg) {
        f.trace('Router.js::loadRoute(' + route + ', ' + arg + ')');

        // todo check session

        if(route === 'undefined' || route === null) {
            route = '';
            f.log('route defaulted to home due to null/undefined');
        }

        // reset modals
        document.getElementById('js-target-modals').innerHTML = '';

        switch (route) {
            case '':
            case 'home':
                this.currentSpaPage = new HomeRoute();
                history.pushState({urlPath: '/app.php'}, "tracklink | indev-ruby", "/app.php");
                break;
            case 'queue':
                //this.getDataAjax("queue.php", "ENABLE_DRAGGABLE_ELEMENTS");
                //history.pushState({urlPath: '/app.php?r=queue'}, "tracklink | indev-ruby", "/app.php?r=queue");
                f.log('route cancelled - queue page not yet implemented');
                break;
            case 'project':
                this.currentSpaPage = new ProjectRoute(arg);
                history.pushState({urlPath: '/app.php?r=project&id=' + arg}, "tracklink | indev-ruby", "/app.php?r=project&id=" + arg);
                break;
            case 'collection':
                this.currentSpaPage = new CollectionRoute(arg);
                history.pushState({urlPath: '/app.php?r=collection&id=' + arg}, "tracklink | indev-ruby", "/app.php?r=collection&id=" + arg);
                f.log('route cancelled - collection page not yet implemented');
                break;
            case 'add':
                this.currentSpaPage = new AddRoute();
                break;
            case 'uploadProjectFile':
                this.currentSpaPage = new UploadProjectFileRoute(arg);
                break;
            case 'login':
                this.currentSpaPage = new LoginRoute();
                break;
            default:
                //this.getDataAjax("broken.php");
                //history.pushState({urlPath: '/app.php'}, "tracklink | indev-ruby", "/app.php");
                f.log('route defaulted to home due to invalid case');
                break;
        }
    }

    goInit() {
        f.trace('Router.js::goInit()');

        let route = this.getUrlArgs('r');
        let id = this.getUrlArgs('id');
        this.go(route, id);
    }

    getUrlArgs(stringType) {
        f.trace('Router.js::getUrlArgs('+stringType+')');

        let urlArgs = window.location.search;
        let urlArgsSearch = new URLSearchParams(urlArgs);

        switch (stringType) {
            case 'r':
                return urlArgsSearch.get('r');
            case 'id':
                return urlArgsSearch.get('id');
            default:
                return urlArgs;
        }
    }
}