/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];
    // your code here
    function hasWord ( array, word ) {
        if ( array.find( function ( item ) { return item == word } ) ) {
            console.log( word + " fait partie du tableau." );
        } else {
            console.log( word + " ne fait pas partie du tableau." );
        }
    }

    document.getElementById( "run" ).addEventListener( "click", function () {
        hasWord( fruits, "pomme" );
    }, false );
})();
