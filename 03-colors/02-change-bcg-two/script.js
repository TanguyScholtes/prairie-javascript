/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here
    function colorTypeCheck () {
        var string = document.getElementById( "color" ).value;

        if ( string.includes( "," ) ) {
            //if color string contains at least a coma, we assume it's a rgb color
            changeBackgroundRGB( string );
        } else {
            //else, we assume it's a hexadecimal color
            changeBackgroundHexa( string );
        }
    }

    function changeBackgroundRGB ( string ) {
        if ( string.indexOf( "rgb" ) == 0 ) {
            //color string starts with rgb or rgba
            var regex = /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/;
            var colors = string.match( regex );
            document.documentElement.style.background = "rgb(" + colors[ 1 ] + "," + colors[ 2 ] + "," + colors[ 3 ] + ")";
        } else if ( string.indexOf( "(" ) == 0 ) {
            //color string starts with (
            var regex = /\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/;
            var colors = string.match( regex );
            document.documentElement.style.background = "rgb(" + colors[ 1 ] + "," + colors[ 2 ] + "," + colors[ 3 ] + ")";
        } else {
            //color string is just rgb or rgba values separated with comas
            var regex = /(\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?)))?/;
            var colors = string.match( regex );
            document.documentElement.style.background = "rgb(" + colors[ 1 ] + "," + colors[ 2 ] + "," + colors[ 3 ] + ")";
        }
    }

    function changeBackgroundHexa ( string ) {
        if ( string.indexOf( "#" ) == 0 ) {
            //hexa color comes with its hashtag
            document.documentElement.style.background = string.substring( 0, 7 );
        } else {
            //hexa color womes without hashtag, so we have to add it
            document.documentElement.style.background = "#" + string.substring( 0, 6 );
        }
    }

    document.getElementById( "run" ).addEventListener( "click", colorTypeCheck, false );
})();
