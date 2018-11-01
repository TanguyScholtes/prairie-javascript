/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here

    function randomNumberGenerator ( min, max ) {
        return Math.random() * ( max - min ) + min;
    }

    function changeBackground ( r, g, b ) {
        document.documentElement.style.background = "rgb(" + r + "," + g + "," + b + ")";
    }

    function randomColorGenerator () {
        var red = randomNumberGenerator( 1, 256 );
        var green = randomNumberGenerator( 1, 256 );
        var blue = randomNumberGenerator( 1, 256 );

        changeBackground( red, green, blue );
    }

    document.getElementById( "run" ).addEventListener( "click", randomColorGenerator, false );
})();
