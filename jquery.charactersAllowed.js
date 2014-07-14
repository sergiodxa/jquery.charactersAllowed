/*
*
*   Name: jquery.charactersAllowed
*   Version: 1.0.0
*   Author: Sergio Daniel Xalambrí
*   Twitter: @sergiodxa
*   License: MIT
*
*/

(function ($) {
  $.fn.charactersAllowed = function (charactersList){
    $(this).keydown(function (event) {
      // check keycodes:
      //  http://www.asquare.net/javascript/tests/KeyCode.html
      var keyPressed = event.keyCode;
      if (charactersList.indexOf(keyPressed) === -1) {
        event.preventDefault();
      };
    });
  };
}(jQuery));