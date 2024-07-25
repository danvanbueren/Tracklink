class DragManager {

    constructor() {

        this.mouseCurrentlyDown = false;
        this.lastMouseMoveEvent = 0;
        this.offsetX = 0;
        this.offsetY = 0;

        this.initialMouseX = 0;
        this.initialMouseY = 0;
        this.initialClickTime = 0;

        this.currentFocusedElement = null;
        this.elementArray = [];
        this.eligableSnappingCoords = []

        this.targetHeight = '';
        this.topOffset = '';
        this.lowestPossibleDragY = '';

        this.addListeners();

    }

    deregisterAll() {
        this.elementArray = [];
        this.eligableSnappingCoords = [];
    }

    // registers event as an eligible element
    register(intUniqueProjectId) {
        // get new HTMLElement
        let element = document.getElementById('draggable-' + intUniqueProjectId);

        // verify element is not null
        if (element === null) {
            error("draggable - couldn't register element");
            return;
        }

        this.elementArray.push(element);
        this.setWidth(element);

        this.updateAvailableSnappingPoints();

    }

    // fix element width due to absolute position issue
    setWidth(element) {
        element.style.width = document.getElementById("queue-item-now-playing").clientWidth + "px";
    }

    // on page resize, need to reset width for all elements
    setAllWidths() {
        if(this.elementArray.length > 0) {

            this.elementArray.forEach(element => {
                this.setWidth(element);
            });

        }
    }

    // adds listeners
    addListeners() {
        document.addEventListener('mousedown', this.mouseDownEvent);
        document.addEventListener('mousemove', this.mouseMoveEvent);
        document.addEventListener('mouseup', this.mouseUpEvent);
    }

    // set up listener - DO NOT REFER THROUGH 'this.x', USE 'dragManager.x'
    mouseDownEvent(event) {
        // Check if the event was a left mouse click
        if (event.which !== 1) {
            return;
        }

        // check if cursor fell within any registered elements in the array
        let cursorX = event.clientX, cursorY = event.clientY;

        // error handling
        if (typeof dragManager.elementArray === "undefined") {
            error('element array is undefined');
            return;
        } else if (dragManager.elementArray === null) {
            warn('element array is null');
            return;
        } else if (dragManager.elementArray.length < 1) {
            return;
        }

        // run for each element in the element array
        dragManager.elementArray.forEach(element => {
                let bounds = element.getBoundingClientRect();

                let top = bounds.top,
                    left = bounds.left,
                    bottom = bounds.bottom,
                    right = bounds.right;

                if (cursorX > left && cursorX < right && cursorY > top && cursorY < bottom) {
                    dragManager.currentFocusedElement = element;

                    dragManager.mouseCurrentlyDown = true;

                    dragManager.initialMouseX = cursorX;
                    dragManager.initialMouseY = cursorY;
                    dragManager.initialClickTime = Date.now();

                    dragManager.offsetX = cursorX - left;
                    dragManager.offsetY = cursorY - top;

                    if (element.classList.contains('queue-item'))
                        element.classList.remove('queue-item');
                    if (!element.classList.contains('queue-item-dragging'))
                        element.classList.add('queue-item-dragging');

                    element.style.cursor = 'grabbing';

                }
            }
        );
    }
    // set up listener - DO NOT REFER THROUGH 'this.x', USE 'dragManager.x'
    mouseMoveEvent(event) {

        if (dragManager.mouseCurrentlyDown) {

            if (!dragManager.mouseCurrentlyDown) {
                return;
            }

            if (!(Date.now() - dragManager.lastMouseMoveEvent > 16)) {
                return;
            }

            dragManager.lastMouseMoveEvent = Date.now();
            dragManager.moveElement(event);

        }
    }
    // set up listener - DO NOT REFER THROUGH 'this.x', USE 'dragManager.x'
    mouseUpEvent(event) {

        if (!dragManager.mouseCurrentlyDown) {
            return;
        }

        let element = dragManager.currentFocusedElement;

        dragManager.snapElement(event);

        if (element.classList.contains('queue-item-dragging'))
            element.classList.remove('queue-item-dragging');
        if (!element.classList.contains('queue-item'))
            element.classList.add('queue-item');

        element.style.cursor = 'pointer';

        let mouseMovementDeltaLessThanBuffer = false,
            mouseDownToUpTimeDeltaLessThanBuffer = false,
            isClick = false;

        if (Math.abs(dragManager.initialMouseX - event.clientX) < 3 || Math.abs(dragManager.initialMouseY - event.clientY) < 3)
            mouseMovementDeltaLessThanBuffer = true;

        if (Date.now() - dragManager.initialClickTime < 200)
            mouseDownToUpTimeDeltaLessThanBuffer = true;

        if (mouseMovementDeltaLessThanBuffer && mouseDownToUpTimeDeltaLessThanBuffer) {
            isClick = true;
        }

        if (isClick) {
            warn('supposed to load project route - TODO!');
            // loadRoute('uh');
        }

        dragManager.currentFocusedElement = null;
        dragManager.mouseCurrentlyDown = false;
    }

    // logic to move the element
    moveElement(event) {
        let element = this.currentFocusedElement;

        // let mouseX = event.clientX;
        let mouseY = event.clientY;

        // let sidebarWidth = document.getElementById("nav-sidebar").clientWidth;

        // mouseX -= sidebarWidth;
        // mouseX -= this.offsetX;
        mouseY -= this.offsetY;

        if(mouseY < this.topOffset)
            mouseY = this.topOffset;
        // TODO: auto scroll up?

        if(mouseY > this.lowestPossibleDragY) {
            mouseY = this.lowestPossibleDragY;
            // TODO: auto scroll down?
        }

        element.style.top = mouseY + "px";
        // element.style.left = mouseX + "px"; // WE DONT WANT IT MOVING HORIZONTALLY

    }

    getClosestIndexToMousePos(mousePosY) {

        let i = 0;
        let indexOfClosestCoord = 0;
        let closestDelta = 1000000000;

        this.eligableSnappingCoords.forEach(coord => {

            let delta = Math.abs(mousePosY - coord - this.offsetY);
            if(delta < closestDelta) {
                closestDelta = delta;
                indexOfClosestCoord = i;
            }

            i++;
        });

        return indexOfClosestCoord;
    }

    // snaps element in place and trades with other element
    snapElement(event) {
        let newMousePos = event.clientY;

        // find nearest match between newMousePos and entries in eligableSnappingCoords
        let closestIndex = this.getClosestIndexToMousePos(newMousePos);

        // move focused element to new slot
        this.currentFocusedElement.style.top = this.eligableSnappingCoords[closestIndex] + 'px';

        // TODO: move element to be replaced down!

        let i = 0;
        this.elementArray.forEach(element => {
            // if index (eligableSnappingCoords) of this element is the same or higher than the new index, then add 1 to its index and move
            if(i >= closestIndex) {

                element.style.top = this.eligableSnappingCoords[i] + 'px';

            }
            i++;
        });


    }

    // update the array that contains coords for each element in the queue
    updateAvailableSnappingPoints() {

        if(!this.elementArray.length > 0)
            return;


        this.topOffset = document.getElementById('queue-next-up-target').getBoundingClientRect().top;
        this.targetHeight = document.getElementById('queue-now-playing-target').clientHeight;
        this.lowestPossibleDragY = document.getElementById('root-navbar-bottom').getBoundingClientRect().top;
        this.lowestPossibleDragY -= document.getElementById('root-navbar-bottom').clientHeight;

        // update positions of elements
        let i = 0;

        this.eligableSnappingCoords = [];

        this.elementArray.forEach(element => {
            let coordY = this.topOffset + (this.targetHeight * i);

            this.eligableSnappingCoords.push(coordY);

            element.style.top = coordY + 'px';
            i++;
        });

        i = 0;


    }
}