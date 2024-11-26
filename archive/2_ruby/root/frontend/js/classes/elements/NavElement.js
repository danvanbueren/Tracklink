class NavElement {

    constructor() {
        this.elements_array = [];
    }

    update() {
        /* GET ELEMENT */
        let htmlTarget = document.getElementById('js-target-nav-items');

        /* CREATE TITLE - PROJECTS */
        let navTitleProjects = new NavItemMiscElement('title');
        navTitleProjects.setTitle('projects');
        this.add(navTitleProjects);

        /* CREATE A PROJECT */
        let i1 = new NavItemElement();
        i1.setTitle('this is a song');
        i1.setIconName('music_note');
        i1.setFavorite(true);
        i1.setRoute('project', '13');
        this.add(i1);

        /* CREATE A PROJECT */
        let i2 = new NavItemElement();
        i2.setTitle('and here, an album');
        i2.setIconName('album');
        i2.setFavorite(true);
        i2.setRoute('collection', '501');
        this.add(i2);

        /* CREATE BREAK */
        this.add(new NavItemMiscElement());

        /* CREATE A PROJECT */
        let i3 = new NavItemElement();
        i3.setTitle('kevin type beat');
        i3.setIconName('music_note');
        i3.setRoute('project', '2345');
        this.add(i3);

        /* CREATE A PROJECT */
        let i4 = new NavItemElement();
        i4.setTitle('big ounce');
        i4.setIconName('music_note');
        i4.setRoute('project', '98');
        this.add(i4);

        /* CREATE A PROJECT */
        let i5 = new NavItemElement();
        i5.setTitle('dababy');
        i5.setIconName('music_note');
        i5.setRoute('project', '4353452');
        this.add(i5);

        /* CREATE TONS OF EXTRAS */
        this.add(new NavItemMiscElement());
        this.add(new NavItemMiscElement('line'));
        this.add(new NavItemMiscElement());

        /* CREATE A TITLE - VIEWS */
        let navTitleViews = new NavItemMiscElement('title');
        navTitleViews.setTitle('views');
        this.add(navTitleViews);

        /* CREATE A VIEW */
        let v1 = new NavItemElement();
        v1.setTitle('projects');
        v1.setIconName('music_note');
        v1.setRoute('view', 'projects');
        this.add(v1);

        /* CREATE A VIEW */
        let v2 = new NavItemElement();
        v2.setTitle('collections');
        v2.setIconName('album');
        v2.setRoute('view', 'collections');
        this.add(v2);

        /* CREATE A VIEW */
        let v3 = new NavItemElement();
        v3.setTitle('favorites');
        v3.setIconName('favorite');
        v3.setRoute('view', 'favorites');
        this.add(v3);

        /* CREATE BREAK */
        this.add(new NavItemMiscElement());

        /* CREATE A VIEW */
        let v4 = new NavItemElement();
        v4.setTitle('shared with you');
        v4.setIconName('folder_shared');
        v4.setRoute('view', 'shared-with-you');
        this.add(v4);

        /* CREATE A VIEW */
        let v5 = new NavItemElement();
        v5.setTitle('private');
        v5.setIconName('lock');
        v5.setRoute('view', 'private');
        this.add(v5);

        /* SET HTML */
        htmlTarget.innerHTML = this.toString();
    }

    add(element) {
        this.elements_array.push(element);
    }

    toString() {
        let output = '';
        this.elements_array.forEach(e => {
            output += e.toString();
        })
        return output;
    }
}