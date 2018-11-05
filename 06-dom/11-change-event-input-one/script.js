/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here
    var input = document.getElementById( "pass-one" );

    function updateCounter () {
        if ( input.value.length >= 10 ) {
            input.value = input.value.substr( 0, 10 );
        }
        document.getElementById( "counter" ).innerHTML = input.value.length + "/10";
    }

    input.addEventListener( "input", updateCounter, false );
    input.addEventListener( "change", updateCounter, false );
})();
