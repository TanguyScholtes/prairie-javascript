/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  // your code here
  var cake = prompt( "Voulez-vous du gâteau ?" );

  if( cake === "Oui" || cake === "oui" || cake === "yes" || cake === "y" ) {
      alert( "Congratulations, you passed the test. For science. You monster." );
  } else {
      alert( "Du gâteau, ça ne se refuse pas !" );
  }

})();
