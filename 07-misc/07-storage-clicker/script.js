/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here
    var target = document.getElementById( "target" );

    if ( !localStorage.getItem( 'counter' ) ) {
        localStorage.setItem( 'counter', Number( target.innerHTML ) );
    }
    var count = localStorage.getItem( 'counter' );
    target.innerHTML = count;

    function incrementCounter () {
        count++;
        localStorage.setItem( 'counter', count );
        target.innerHTML = count;
    }

    document.getElementById( 'increment' ).addEventListener( 'click', incrementCounter, false );
})();
