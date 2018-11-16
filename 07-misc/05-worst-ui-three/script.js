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
        document.getElementById( "target" ).innerHTML = "+" + roulettes.reduce( ( accumulator, element ) => accumulator += element.value, "" );
    }

    function rouletteSwitch ( roulette ) {
        if ( roulette.roll === false ) {
            roulette.button.innerHTML = "Stop";
            roulette.roll = setInterval( function () {
                rouletteRoll( roulette );
            }, 175 );
        } else {
            clearInterval( roulette.roll );
            roulette.roll = false;
            roulette.button.innerHTML = "Start";
        }
    }

    Array.from( document.querySelectorAll( "button" ) ).forEach( function( btn ) {
        btn.innerHTML = "Start";
        var key = btn.id.slice( 4 );
        let roulette = {
            button: btn,
            input: document.getElementById( key ),
            value: document.getElementById( key ).value,
            roll: false
        };

        roulettes.push( roulette );

        btn.addEventListener( "click", function () {
            rouletteSwitch( roulette );
        } );
    } );
})();
