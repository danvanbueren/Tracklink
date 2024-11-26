class NavItemMiscElement {

    constructor(stringType) {
        this.type = '';

        this.title = 'title';

        switch (stringType) {
            case 'line':
                this.type = 'line';
                break;
            case 'title':
                this.type = 'title'
                break;
        }
    }

    setTitle(stringTitle) {
        this.title = stringTitle;
    }

    toString() {
        switch (this.type) {
            case 'line':
                return '<div class="sidebar-divider"></div>';
            case 'title':
                return '<h5 class="sidebar-title font-weight-bold no-select">' + this.title + '</h5>';
            default:
                return '<br class="no-select" />';
        }
    }
}