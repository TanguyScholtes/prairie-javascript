/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
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
            addClass( one, "error" );
            addClass( two, "error" );
        }
    }

    function addClass ( element, string ) {
        element.classList.add( string );
    }

    function removeClass( element, string ) {
        element.classList.remove( string );
    }

    document.getElementById( "run" ).addEventListener( "click", function () {
        removeClass( first, "error" );
        removeClass( second, "error" );

        compareInputs( first, second );
    }, false );

})();
