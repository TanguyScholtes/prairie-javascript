/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    function ask () {
        var age = prompt( "Quel est votre âge ?" );
        var sex = prompt( "Quel est votre sexe ?" );
        var city = prompt( "Dans quelle ville vivez-vous ?" );

        if ( !confirm( "Est-ce correct ? Âge : " + age + ", Sexe : " + sex + ", Ville : " + city ) ) {
            ask();
            return 0;
        }
    }

    ask();

})();
