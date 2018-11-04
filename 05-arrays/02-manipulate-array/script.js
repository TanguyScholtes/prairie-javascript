/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
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
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];
    // your code here
    function transformArray () {
        var array = fruits;
        //replaces first element of array with "banane"
        array.splice( 0, 1, "banane" );
        //replaces last element of array with "kiwi"
        array.splice( array.length - 1, 1, "kiwi" );
        console.log( array );
    }

    document.getElementById( "run" ).addEventListener( "click", transformArray, false );
})();
