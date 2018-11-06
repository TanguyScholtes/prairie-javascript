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
    var opOne = Number( document.getElementById( "op-one" ).value );
    var opTwo = Number( document.getElementById( "op-two" ).value );

    function isNumber ( number ) {
        return !isNaN( +number ) && isFinite( number );
    }

    if ( !isNumber( opOne ) || !isNumber( opTwo )  ) {
        alert( "Please enter valid numbers" );
    }

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        return alert( opOne + opTwo );
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform a substraction
        return alert( opOne - opTwo );
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform a multiplication
        return alert( opOne * opTwo );
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform a division
        return alert( opOne / opTwo );
    });
})();
