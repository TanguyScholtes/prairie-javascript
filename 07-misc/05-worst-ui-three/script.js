/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here
    var roulettes = [];

    function rouletteRoll ( roulette ) {
        if ( roulette.value >= roulette.input.getAttribute( "data-max" ) ) {
            roulette.value = roulette.input.getAttribute( "data-min" );
        } else {
            roulette.value++;
            if( roulette.value > 0 && roulette.value < 10 ) {
                roulette.value = "0" + roulette.value;
            }
        }
        roulette.input.value = roulette.value;
        document.getElementById( "target" ).innerHTML = "+" + roulettes[ 0 ].value + roulettes[ 1 ].value + roulettes[ 2 ].value + roulettes[ 3 ].value;
    }

    function rouletteSwitch ( button ) {
        var index = roulettes.findIndex( function ( roulette ) {
            return roulette.button === button;
        } );

        if ( roulettes[ index ].roll === false ) {
            roulettes[ index ].button.innerHTML = "Stop";
            roulettes[ index ].roll = setInterval( function () {
                rouletteRoll( roulettes[ index ] );
            }, 175 );
        } else {
            clearInterval( roulettes[ index ].roll );
            roulettes[ index ].roll = false;
            roulettes[ index ].button.innerHTML = "Start";
        }
    }

    Array.from( document.querySelectorAll( "button" ) ).forEach( function( btn ) {
        var key = btn.id.slice( 4 );
        btn.innerHTML = "Start";

        roulettes.push( {
            button: btn,
            input: document.getElementById( key ),
            value: document.getElementById( key ).value,
            roll: false
        } );

        btn.addEventListener( "click", function () {
            rouletteSwitch( btn );
        }, false );
    } );
})();
