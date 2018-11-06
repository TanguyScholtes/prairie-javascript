/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here
    var paragraph = document.getElementById( "target" );
    var text = paragraph.innerHTML;
    var wave = "";

    function rng ( min, max ) {
        return Math.floor( Math.random() * ( max - min ) ) + min;
    }

    for ( var i = 0; i < text.length; i++ ) {
        wave += "<span style=\"font-size: " + rng( 1, 6 ) + "em\">" + text[ i ] + "</span>";
    }

    paragraph.innerHTML = wave;
})();
