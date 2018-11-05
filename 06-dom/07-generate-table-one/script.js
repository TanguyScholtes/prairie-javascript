/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
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

    function constructTable ( rows, columns ) {
        var table = "<table><thead></thead><tbody>";
        
        for ( var i = 0; i < rows; i++ ) {
            table += "<tr>"
            for ( var j = 0; j < columns; j++ ) {
                table += "<td>" + rng( 1, 10 ) + "</td>";
            }
            table += "</tr>";
        }
        table += "</tbody></table>";

        return table;
    }

    document.getElementById( 'target' ).innerHTML = constructTable( 10, 1 );
})();
