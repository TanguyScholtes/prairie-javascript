/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
    function removeDoubles ( array ) {
        var uniques = new Set();
        for ( var i = 0; i < array.length; i++ ) {
            if ( !uniques.has( array[ i ] ) ) {
                uniques.add( array[ i ] );
            }
        }

        console.log( "Tableau après traitement :" );
        console.log( uniques );
    }

    console.log( "Tableau avant traitement :" );
    console.log( fruits );

    document.getElementById( "run" ).addEventListener( "click", function () {
        removeDoubles( fruits );
    }, false );
})();
