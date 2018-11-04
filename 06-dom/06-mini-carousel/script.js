/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    var image = document.querySelector( ".material figure img" );

    function nextImage ( array ) {
        var currentImage = image.getAttribute( "src" );
        var currentIndex = array.findIndex( function ( source ) {
            return source == currentImage;
        } );

        if ( currentIndex < array.length - 1 ) {
            var nextIndex = currentIndex + 1;
        } else {
            var nextIndex = 0;
        }

        image.setAttribute( "src", gallery[ nextIndex ] );
    }

    document.getElementById( "next" ).addEventListener( "click", function () {
        nextImage( gallery );
    }, false );
})();
