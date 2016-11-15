'use strict';

angular.module('stormtech.controllers')
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/books', {
                templateUrl: 'books/books.html',
                controller: 'BooksController'
            });
        }])
        .controller('BooksController', ['$scope', function(scope) {

        }]);