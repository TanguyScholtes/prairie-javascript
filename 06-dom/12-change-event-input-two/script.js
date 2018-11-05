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

    function updateValidity () {
        if ( input.value.length >= 8 && input.value.match( /\d/g ).length >= 2 ) {
            document.getElementById( "validity" ).innerHTML = "Ok";
        } else {
            document.getElementById( "validity" ).innerHTML = "Not ok";
        }
    }

    input.addEventListener( "input", updateValidity, false );
    input.addEventListener( "change", updateValidity, false );
})();
