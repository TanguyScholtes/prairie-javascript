/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here
    var input = document.getElementById( "pass-one" );
    var validator = document.getElementById( "validity" ).innerHTML;

    function updateValidity () {
        if ( input.value.length >= 8 && input.value.match( /\d/g ).length >= 2 ) {
            validator = "Ok";
        } else {
            validator = "Not ok";
        }
    }

    input.addEventListener( "input", updateValidity );
})();
