/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here
    var target = document.getElementById( "target" );
    var buttons = Array.from( document.querySelectorAll( "button" ) );

    function cycleButton ( button, min, max ) {
        var value = Number( button.innerHTML );

        if ( value >= max ) {
            value = min;
        } else {
            value++;
            if( value > 0 && value < 10 ) {
                value = "0" + value;
            }
        }
        button.innerHTML = value;

        target.innerHTML = "+";
        buttons.forEach( element => target.innerHTML += element.innerHTML );
    }

    buttons.forEach( function( button ) {
        button.addEventListener( "mousedown", function () {
            cycleButton( button, button.getAttribute( "data-min" ), button.getAttribute( "data-max" ) );
        } );
    } );
})();
