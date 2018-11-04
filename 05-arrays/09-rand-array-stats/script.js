/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here
    function randomNumberGenerator ( min, max ) {
        return Math.floor( Math.random() * ( max - min ) ) + min;
    }

    function createRandomArray ( length ) {
        var array = [];
        for ( var i = 0; i < length; i++ ) {
            array[ i ] = randomNumberGenerator( 1, 100 );
        }
        displayArray( array );
        getArrayStats( array );
    }

    function displayArray ( array ) {
        for ( var i = 0; i < array.length; i++ ) {
            var position = i + 1;
            document.getElementById( "n-" + position ).innerHTML = array[ i ];
        }
    }

    function getArrayStats ( array ) {
        var sortedArray = array.sort( function( a, b ) {
            return a - b;
        } );
        var sum = 0;

        document.getElementById( "min" ).innerHTML = sortedArray[ 0 ];
        document.getElementById( "max" ).innerHTML = sortedArray[ sortedArray.length - 1 ];
        for ( var i = 0; i < sortedArray.length; i++ ) {
            sum += sortedArray[ i ];
        }
        document.getElementById( "sum" ).innerHTML = sum;
        document.getElementById( "average" ).innerHTML = sum / sortedArray.length;
    }

    document.getElementById( "run" ).addEventListener( "click", function () {
        createRandomArray( 10 );
    }, false );
})();
