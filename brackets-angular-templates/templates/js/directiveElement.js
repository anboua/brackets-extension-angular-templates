angular.module('MyApp.directives')
    .directive('directiveName', [
   function () {
        'use strict';
        return {
            restrict: 'E',
            templateUrl: 'path/to/the/template.html',
            link: function () {
           /**
            * YOUR CODE ...
            */
            }
        };
   }
]);
