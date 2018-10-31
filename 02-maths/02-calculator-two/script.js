/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
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

    var performOperation = function(operation) {
        // perform the operation
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
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
