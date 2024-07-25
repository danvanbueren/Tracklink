class SessionManager {
    constructor() {
    }

    verifyAuthentication() {
        let result = cookieManager.readCookieData('session');

        if(result === '') {
            f.log('SESSION COOKIE NOT FOUND - redirect to login');
            router.loadRoute('login', '');
        }

        f.log('SESSION COOKIE FOUND: ' + result);
    }
}