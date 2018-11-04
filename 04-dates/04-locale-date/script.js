/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here

    function getDate () {
        var options = {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        };
        return new Date().toLocaleDateString( "fr-BE", options );
    }

    document.getElementById( "target" ).innerHTML = getDate();
})();
