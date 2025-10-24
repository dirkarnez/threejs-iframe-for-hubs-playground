[threejs-iframe-for-hubs-playground](https://dirkarnez.github.io/threejs-iframe-for-hubs-playground)
====================================================================================================
### Using
- https://github.com/Hubs-Foundation/three.js/tree/65b5105908f5f135cad25fed07e25f15f3876777
    - aligning with hubs

### AI
```
function clickAtCoordinates(x, y) {
    // 1. Get the element at the specified coordinates
    const targetElement = document.elementFromPoint(x, y);

    if (targetElement) {
        // 2. Create a new MouseEvent
        const clickEvent = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: x,
            clientY: y
        });

        // 3. Dispatch the event on the target element
        targetElement.dispatchEvent(clickEvent);
        console.log(`Clicked element at (${x}, ${y}):`, targetElement);
    } else {
        console.log(`No element found at (${x}, ${y})`);
    }
}

// Example usage:
// Simulate a click at coordinates (100, 50)
clickAtCoordinates(100, 50);
```
### Reference
- [Scrolling an iframe with JavaScript? - Stack Overflow](https://stackoverflow.com/questions/1192228/scrolling-an-iframe-with-javascript)
