class ElementContainerElement {

    constructor() {
        this.elements_array = [];
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