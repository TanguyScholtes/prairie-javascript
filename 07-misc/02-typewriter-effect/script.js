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
    var text = "Je suis un texte qui va apparaître dans un effet \"machine à écrire\", un peu comme dans les films noirs. Sauf que... je ne sais pas qui est l'assassin ! Y en a-t-il vraiment un ? Habite-t-il au 21 ? Que de mystères !";

    function randomTimer () {
        return Math.floor( Math.random() * ( 3500 - 1000 ) ) + 1000;
    }

    function timeout ( timer, counter ) {
        return new Promise( resolve => setTimeout( target.innerHTML += text[ counter ], timer ) );
    }

    ( async function () {
        for ( var i = 0; i < text.length; i++ ) {
            await timeout( randomTimer(), i );
        }
    } ) ();
})();
