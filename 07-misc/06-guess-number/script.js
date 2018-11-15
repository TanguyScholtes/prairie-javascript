/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here
    function rng ( min, max ) {
        return Math.floor( Math.random() * ( max - min ) ) + min;
    }

    var tries = 0;
    var min = 1;
    var max = 100;
    var toGuess = rng( 1, 100 );

    function ask () {
        var guess = Number( prompt( "Devinez le nombre entre " + min + " et " + max + ".\nEssais : " + tries ) );
        if ( guess === toGuess ) {
            tries++;
            alert( "Félicitations ! Vous avez deviné le nombre caché.\nNombre : " + toGuess + "\nEssais : " + tries );
        } else if ( guess < toGuess && guess > 0 ) {
            tries++;
            alert( "Raté. Le nombre caché est plus grand que ça !" );
            ask();
        } else if ( guess > toGuess && guess < 100 ) {
            tries++;
            alert( "Hé non. Le nombre caché est plus petit." );
            ask();
        } else {
            alert( "Vous n'avez pas entré un chiffre entre 1 et 100. Réessayez." );
            ask();
        }
    }

    ask();
})();
