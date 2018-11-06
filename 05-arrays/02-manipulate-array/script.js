/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];
    // your code here
    console.log( "Base array :" );
    console.log( fruits );

    function transformArray () {
        var array = fruits;
        
        //removes first element
        array.shift();
        //removes last element
        array.pop();
        //add "banane" in first place (index 0)
        array.unshift( "banane" );
        //add "kiwi" in last place
        array.push( "kiwi" );

        console.log( "Transformed array :" );
        console.log( array );
    }

    document.getElementById( "run" ).addEventListener( "click", transformArray, false );
})();
