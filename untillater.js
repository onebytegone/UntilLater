//  untillater.js 0.0.1
//  (c) 2015 Ethan Smith
//  UntilLater may be freely distributed under the MIT license.

// Import JQuery
var $ = $ || undefined;
if (typeof require !== 'undefined') {
   $ = require("jquery");
}

(function() {
   var root = this,
       UntilLater;

   /**
    * Creates an instance of UntilLater
    *
    * @param date Date After which to call `action`
    * @param action function
    * @param element string Selector for the element to fill
    */
   UntilLater = function(date, action, element) {
      if (element === undefined) {
         element = '#jsLater';
      }
   };


   /**
    * Exports to window as needed
    */
   if (typeof exports !== 'undefined') {
      // Support for browserify
      if (typeof module !== 'undefined' && module.exports) {
         exports = module.exports = UntilLater;
      }
      exports.UntilLater = UntilLater;
   } else {
      // Export UntilLater to default scope
      root.UntilLater = UntilLater;
   }
}());
