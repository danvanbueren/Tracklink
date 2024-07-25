window.onload = function() {
    clientSessionTimeout();
};

const warnTime = 14.5 * 60 * 1000;
const expireTime = 15 * 60 * 1000;

function clientSessionTimeout() {
    // Open warning sticky
    window.setTimeout(function(){
        halfmoon.initStickyAlert({
            title: "are you there?",
            content: "your session is about to time out. refresh the page to continue.",
            alertType: "alert-secondary",
            fillType: "filled-lm",
            hasDismissButton: false,
            timeShown: 30000
        });
    }, warnTime);
    // Redirect to assist server-side logic
    window.setTimeout(function(){
        window.location.href = "app.php?sticky=timeout";
    }, expireTime);
}