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
    function cycleButton ( id, min, max ) {
        var button = document.getElementById( id );
        var value = Number( button.innerHTML );
        var target = document.getElementById( "target" );

        if ( value >= max ) {
            value = min;
        } else {
            value++;
            if( value > 0 && value < 10 ) {
                value = "0" + value;
            }
        }
        button.innerHTML = value;

        switch ( id ) {
            case "part-one":
                var beginning = target.innerHTML.slice( 0, 1 );
                var ending = target.innerHTML.slice( 4 );
                target.innerHTML = beginning + button.innerHTML + ending;
                break;
            case "part-two":
                var beginning = target.innerHTML.slice( 0, 4 );
                var ending = target.innerHTML.slice( 6 );
                target.innerHTML = beginning + button.innerHTML + ending;
                break;
            case "part-three":
                var beginning = target.innerHTML.slice( 0, 6 );
                var ending = target.innerHTML.slice( 8 );
                target.innerHTML = beginning + button.innerHTML + ending;
                break;
            default:
            case "part-four":
                var beginning = target.innerHTML.slice( 0, 8 );
                target.innerHTML = beginning + button.innerHTML;
                break;
        }
    }

    Array.from( document.querySelectorAll( "button" ) ).forEach( function( $btn ) {
        $btn.addEventListener( "mousedown", function () {
            cycleButton($btn.id, $btn.getAttribute( "data-min" ), $btn.getAttribute( "data-max" ) );
        }, false );
    } );
})();
