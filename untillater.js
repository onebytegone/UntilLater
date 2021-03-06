//  untillater.js 0.0.1
//  (c) 2015 Ethan Smith
//  UntilLater may be freely distributed under the MIT license.


var lib = function(global, name) {
   if (typeof require !== 'undefined') {
      return require(name);
   }
   return global || undefined;
};

// Import libraries
var $ = lib($, 'jquery'),
    moment = lib(moment, 'moment');

(function() {
   var root = this,
       UntilLater;

   /**
    * Creates an instance of UntilLater
    *
    * @param date Date After which to call `action`
    * @param action function
    * @param selector string Selector for the selector to fill
    */
   UntilLater = function(date, action, selector) {
      if (selector === undefined) {
         selector = '#jsLater';
      }

      this.action = action;
      this.element = $(selector);
      this.element.empty();
      this.targetDate = date;

      if (this.isPastTime()) {
         this.runTargetAction();
      } else {
         this.updateTimeDisplay();
         this.timer = setInterval(this.timerTicked.bind(this), 1000);
      }
   };

   UntilLater.prototype = {
      runTargetAction: function() {
         this.action();
      },

      timeRemaining: function() {
         return moment(this.targetDate).countdown().toString();
      },

      updateTimeDisplay: function() {
         this.element.html(this.timeRemaining());
      },

      isPastTime: function() {
         var now = new Date();
         return this.targetDate <= now;
      },

      timerTicked: function() {
         if (this.isPastTime()) {
            clearInterval(this.timer);
            this.runTargetAction();
            return;
         }

         this.updateTimeDisplay();
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
