'use strict';

angular.module('stormtech')
        .config(['$locationProvider', '$routeProvider'
          , function($locationProvider, $routeProvider) {
                $locationProvider.hashPrefix('!');
                $routeProvider.otherwise({redirectTo: '/books'});
}]);
