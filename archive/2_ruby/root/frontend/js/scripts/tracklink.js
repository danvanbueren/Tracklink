/***********************************************************************************************************************
 ***********************************************************************************************************************
 ...███████████ ███████████     █████████     █████████  █████   ████ █████       █████ ██████   █████ █████   ████.....
 ..░█░░░███░░░█░░███░░░░░███   ███░░░░░███   ███░░░░░███░░███   ███░ ░░███       ░░███ ░░██████ ░░███ ░░███   ███░......
 ..░   ░███  ░  ░███    ░███  ░███    ░███  ███     ░░░  ░███  ███    ░███        ░███  ░███░███ ░███  ░███  ███........
 ......░███     ░██████████   ░███████████ ░███          ░███████     ░███        ░███  ░███░░███░███  ░███████.........
 ......░███     ░███░░░░░███  ░███░░░░░███ ░███          ░███░░███    ░███        ░███  ░███ ░░██████  ░███░░███........
 ......░███     ░███    ░███  ░███    ░███ ░░███     ███ ░███ ░░███   ░███      █ ░███  ░███  ░░█████  ░███ ░░███.......
 ......█████    █████   █████ █████   █████ ░░█████████  █████ ░░████ ███████████ █████ █████  ░░█████ █████ ░░████.....
 .....░░░░░    ░░░░░   ░░░░░ ░░░░░   ░░░░░   ░░░░░░░░░  ░░░░░   ░░░░ ░░░░░░░░░░░ ░░░░░ ░░░░░    ░░░░░ ░░░░░   ░░░░......
 ***********************************************************************************************************************
 **********************************************************************************************************************/

/*
 * TODO: ISSUES
 * TODO: - Queue Items dont auto resize when sidebar is toggled (low severity)
 * TODO: - Get rid of .php cuz it ugly
 */

// instantiate objects
let audioPlayerController, audioPlayerElement;
let documentListener;
let dragManager, cookieManager, sessionManager;
let router, nav, f, db;

let jsTargetSpaContent = null;

function initializeJs() {
    // wait till doc ready
    document.onreadystatechange = () => {
        jsTargetSpaContent = document.getElementById('js-target-spa-content');

            if (document.readyState === 'complete' && jsTargetSpaContent !== null && typeof jsTargetSpaContent !== 'undefined') {

                // formatter
                f = new Formatter();
                f.setVerboseMode(true);
                f.setTraceMode(true);

                // create cookie manager before loading audio player
                cookieManager = new CookieManager();

                // session manager
                sessionManager = new SessionManager();

                // create db link
                db = new Database();

                // create audio player
                audioPlayerElement = new AudioPlayerElement();
                audioPlayerController = new AudioPlayerController(audioPlayerElement);

                // make listener last so it can reach all html stuff
                documentListener = new Listener();

                // last step - routing for SPA content
                router = new Router();

                dragManager = new DragManager();

                nav = new NavElement();
                nav.update();

                // resize
                f.resizeEvent();
                // fade in
                f.fadeInPageWrapper();

                f.log('js initialization completed @ ' + Date.now())
            }

    };
}