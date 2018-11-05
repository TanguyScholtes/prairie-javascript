/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here
    var first = document.getElementById( "pass-one" );
    var second = document.getElementById( "pass-two" );

    function compareInputs ( one, two ) {
        if ( one.value !== two.value ) {
            colorElement( one, "red" );
            colorElement( two, "red" );
        }
    }

    function colorElement ( element, color ) {
        element.style.border = "1px solid " + color;
    }

    document.getElementById( "run" ).addEventListener( "click", function () {
        colorElement( first, "lightgray" );
        colorElement( second, "lightgray" );

        compareInputs( first, second );
    }, false );
})();
