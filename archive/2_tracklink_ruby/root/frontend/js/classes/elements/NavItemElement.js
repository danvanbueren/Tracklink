class NavItemElement {

    constructor() {
        this.routeType = 'home';
        this.routeId = '';

        this.title = 'title';
        this.isFavorite = false;
        this.imgPath = '';
        this.iconName = 'broken_image';
    }

    setTitle(stringTitle) {
        this.title = stringTitle;
    }

    setFavorite(boolFavorite) {
        this.isFavorite = boolFavorite;
    }

    setImgPath(stringImgPath) {
        this.imgPath = stringImgPath;
    }

    setIconName(stringIconName) {
        this.iconName = stringIconName;
    }

    setRoute(stringRouteType, stringRouteArg) {
        switch(stringRouteType) {
            case 'project':
            case 'collection':
            case 'view':
                this.routeType = stringRouteType;
                this.routeId = stringRouteArg;
                break;
            default:
                f.error('NavItemElement.js :: setRoute() :: route type is not allowed - will only route to home');
        }
    }

    toString() {
        let output = '';

        output += '<span ' +
            'onclick="router.go(\'' + this.routeType + '\', \'' + this.routeId + '\')" ' +
            'class="sidebar-link sidebar-link-with-icon text-monospace font-italic font-size-12 text-lowercase ';

        if (this.isFavorite)
            output += 'text-secondary ';


        output += 'no-select cursor-pointer nav-item">' +
            '<span class="sidebar-icon">' +
            '<span class="material-icons no-select">';

        if (this.imgPath === '')
            output += this.iconName;

        output += '</span></span>';

        if (this.isFavorite)
            output += '<span class="material-icons font-size-12 mr-10 no-select">favorite</span>';

        output += this.title;

        output += '</span>';

        return output;
    }
}