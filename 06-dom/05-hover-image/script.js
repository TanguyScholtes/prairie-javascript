/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here

    var image = document.querySelector( ".material figure img" );
    var originalSource = image.getAttribute( "src" );
    var altSource = image.getAttribute( "data-hover" );

    function imageHover () {
        image.setAttribute( "src", altSource );
    }

    function imageOrigin () {
        image.setAttribute( "src", originalSource );
    }

    image.addEventListener( "mouseenter", imageHover , false );
    image.addEventListener( "mouseleave", imageOrigin , false );
})();
