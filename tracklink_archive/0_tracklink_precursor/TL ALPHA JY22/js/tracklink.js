// Force dark mode
if (!halfmoon.darkModeOn) {
    halfmoon.toggleDarkMode()
}

// change the view of an input with a hybrid of two elements
function updatePrepend(id) {
    let prependElement = document.getElementById('pre-' + id);
    let inputElement = document.getElementById('in-' + id);
    if (inputElement.value.length === 0) {
        prependElement.style.display = "none";
    } else {
        prependElement.style.display = "block";
    }
}

// tracklink global variable
let tracklink = {
    // toggles project page view from button & resets cookie for continuity
    toggleProjectListView: function () {

        let toggleViewIcon = document.getElementById("toggleViewIcon");
        let toggleViewGrid = document.getElementById("gridView");
        let toggleViewList = document.getElementById("listView");

        if (toggleViewIcon.textContent === "grid_view") {
            setCookie("lastProjectListView", "list", 30);
            toggleViewIcon.textContent = "view_list";
            toggleViewGrid.style.display = "flex";
            toggleViewList.style.display = "none";
        } else {
            setCookie("lastProjectListView", "", 30);
            toggleViewIcon.textContent = "grid_view";
            toggleViewGrid.style.display = "none";
            toggleViewList.style.display = "flex";
        }
    },

    // sets up initial view based on cookie (personalization)
    initialProjectListView: function () {

        let toggleViewIcon = document.getElementById("toggleViewIcon");
        let toggleViewGrid = document.getElementById("gridView");
        let toggleViewList = document.getElementById("listView");

        let lastProjectView = getCookie("lastProjectListView");

        if (lastProjectView === "list") {
            toggleViewIcon.textContent = "view_list";
            toggleViewGrid.style.display = "flex";
            toggleViewList.style.display = "none";
        } else {
            toggleViewIcon.textContent = "grid_view";
            toggleViewGrid.style.display = "none";
            toggleViewList.style.display = "flex";
        }
    }


}

function setCookie(cookieName, cookieValue, expireDays) {
    const date = new Date();
    date.setTime(date.getTime() + (expireDays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function getCookie(cookieName) {
    let name = cookieName + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            console.log(c.substring(name.length, c.length));
            return c.substring(name.length, c.length);
        }
    }
    console.log("cookie fetch failed.");
    return "";
}