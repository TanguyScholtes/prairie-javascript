/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here
    function getBirthDate () {
        var birthDay = document.getElementById( "dob-day" ).value;
        var birthMonth = document.getElementById( "dob-month" ).value;
        var birthYear = document.getElementById( "dob-year" ).value;

        return new Date( birthYear + "-" + birthMonth + "-" + birthDay );
    }

    function getAge () {
        var today = new Date();
        var bday = getBirthDate();
        var age = Math.abs( new Date( today - bday ).getFullYear() - 1970 );
        alert( "Vous avez " + age + " ans.");
    }

    document.getElementById( "run" ).addEventListener( "click", getAge, false );
})();
