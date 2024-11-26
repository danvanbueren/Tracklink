class CollectionRoute {
    constructor(id) {
        this.id = id;

        jsTargetSpaContent.innerHTML = '' +
            'id: ' +
            this.id +
            '// collection!';
    }
}