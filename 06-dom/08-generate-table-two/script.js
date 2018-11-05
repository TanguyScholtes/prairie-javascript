/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here
    function constructTable ( rows, columns ) {
        var table = "<table><thead></thead><tbody>";

        for ( var i = 1; i <= rows; i++ ) {
            table += "<tr>"
            for ( var j = 1; j <= columns; j++ ) {
                table += "<td>" + i * j + "</td>";
            }
            table += "</tr>";
        }
        table += "</tbody></table>";

        return table;
    }

    document.getElementById( 'target' ).innerHTML = constructTable( 10, 10 );
})();
