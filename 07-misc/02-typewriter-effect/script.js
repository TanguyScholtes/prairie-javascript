/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here
    var target = document.getElementById( "target" );
    target.innerHTML = "";
    var text = "Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.";
    var index = 0;

    var setFont = document.createElement( 'link' );
    setFont.setAttribute( "href", "https://fonts.googleapis.com/css?family=Fira+Mono" );
    setFont.setAttribute( "rel", "stylesheet" );
    document.getElementsByClassName('material')[0].insertBefore( setFont, target );
    target.style.fontFamily = "'Fira Mono', monospace";

    function randomTimer () {
        return Math.floor( Math.random() * ( 500 - 100 ) ) + 100;
    }

    function addLetter () {
        target.innerHTML += text[ index ];
        index++;

        if ( index < text.length ) {
            setTimeout( addLetter, randomTimer() );
        }
    }

    setTimeout( addLetter, randomTimer() );

})();
