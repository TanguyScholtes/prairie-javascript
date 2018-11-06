/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElememntById("element-id").value

    function performOperation ( operation, opOne, opTwo ) {
        switch ( operation ) {
            case 'addition': return alert( opOne + opTwo );
                break;
            case 'substraction': return alert( opOne - opTwo );
                break;
            case 'multiplication': return alert( opOne * opTwo );
                break;
            case 'division': return alert( opOne / opTwo );
                break;
            default: return 0;
        }
    }

    function checkNumbers ( operation ) {
        var opOne = Number( document.getElementById( "op-one" ).value );
        var opTwo = Number( document.getElementById( "op-two" ).value );

        if ( isInteger( opOne ) && isInteger( opTwo ) ) {
            performOperation( operation, opOne, opTwo );
        } else {
            alert( "Please enter valid numbers" );
        }
    }

    function isInteger ( number ) {
        if ( number === parseInt( number, 10 ) ) {
            return true;
        } else {
            return false;
        }
    }

    Array.from( document.querySelectorAll( "button" ) ).forEach( function( $btn ) {
        $btn.addEventListener( "click", function() {
            checkNumbers( $btn.id );
        } );
    } );
})();
