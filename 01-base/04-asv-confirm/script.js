/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

( function ask () {
    if ( !confirm( "Est-ce correct ? Âge : " + prompt( "Quel est votre âge ?" ) + ", Sexe : " + prompt( "Quel est votre sexe ?" ) + ", Ville : " + prompt( "Dans quelle ville vivez-vous ?" ) ) ) {
        ask();
    }
} ) ();
