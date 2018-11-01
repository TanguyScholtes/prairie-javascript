/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElememntById("element-id").value
    var numbers = [];
    var values = document.getElementById( "numbers" ).value.split(', ');

    for ( var i = 0; i < values.length; i++ ) {
        numbers[ i ] = parseInt( values[ i ], 10 );
    }

    document.getElementById( "run" ).addEventListener( "click", function() {
        return alert( numbers.sort( function( a, b ) {
            return a - b;
        } ) );
    } );

})();
