//Import function isElementInViewport
import { isElementInViewport } from './isElementInViewport.js'
//Detect request animation frame
let scroll = window.requestAnimationFrame ||
    function(callback) {
        window.setTimeout(callback, 1000 / 60)
    };
//Detect images
let elementToShow = document.querySelectorAll('.show');
// loop trow elementToShow
function loop() {
    elementToShow.forEach(function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });
    //Apply function
    scroll(loop);
}
//run loop
loop();