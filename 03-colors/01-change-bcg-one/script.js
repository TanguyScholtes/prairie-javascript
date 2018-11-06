/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here
    function backgroundRed () {
        document.documentElement.style.backgroundColor = "rgb(175, 35, 35)";
    }

    function backgroundGreen () {
        document.documentElement.style.backgroundColor = "rgb(35, 175, 35)";
    }

    function backgroundYellow () {
        document.documentElement.style.backgroundColor = "rgb(175, 175, 35)";
    }

    function backgroundBlue () {
        document.documentElement.style.backgroundColor = "rgb(35, 35, 175)";
    }

    document.getElementById( "red" ).addEventListener( "click", backgroundRed, false );
    document.getElementById( "green" ).addEventListener( "click", backgroundGreen, false );
    document.getElementById( "yellow" ).addEventListener( "click", backgroundYellow, false );
    document.getElementById( "blue" ).addEventListener( "click", backgroundBlue, false );
})();
