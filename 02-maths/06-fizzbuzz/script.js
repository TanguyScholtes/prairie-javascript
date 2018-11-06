/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here
    function isMultipleOfThree ( number ) {
        if( number % 3 === 0 ) {
            return true;
        } else {
            return false;
        }
    }

    function isMultipleOfFive ( number ) {
        if( number % 5 === 0 ) {
            return true;
        } else {
            return false;
        }
    }

    for ( var i = 1; i <= 100; i++ ) {
        if ( isMultipleOfThree( i ) && isMultipleOfFive( i )  ) {
            console.log( "fizzbuzz" );
        } else if ( isMultipleOfThree( i ) && !isMultipleOfFive( i ) ) {
            console.log( "fizz" );
        } else if ( !isMultipleOfThree( i ) && isMultipleOfFive( i ) ) {
            console.log( "buzz" );
        } else {
            console.log( i );
        }
    }

})();
