/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here
    var year = document.getElementById( "year" ).value;
    var months = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre"
    ];

    function getFridaysThirteen () {
        var monthsWithFridayThirteen = "";
        var date = new Date();

        for ( var month = 0; month <= 11; month++ ) {
            date.setFullYear( year, month, 13 );

            if ( date.getDay() == 5 ) {
                //if the day is friday (0 being sunday, 1 monday, etc..., so 5 is friday)
                monthsWithFridayThirteen += months[ month ] + ", ";
            }
        }

        alert( monthsWithFridayThirteen );
    }

    document.getElementById( "run" ).addEventListener( "click", getFridaysThirteen, false );
})();
