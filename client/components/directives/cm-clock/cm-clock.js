(function(){
  'use strict';

  angular.module('cmClockModule', [])
  .directive('cmClock', [function(){
    var o = {};

    o.restrict    = 'A';
    o.templateUrl = '/components/directives/cm-clock/cm-clock.html';
    o.scope       = {};

    return o;
  }]);
})();

