angular.module('stormtech.controllers')
  .controller('SortedBooksController', ['$scope', 'SortedBooksService'
    , function(scope, sortedBooksService) {

    var successCallback = function(response) {
      scope.books = response.data;
    };

    var errorCallback = function(response) {
      console.log("Error trying to retrieve sorted books");
    };

    sortedBooksService.getSortedBooks(successCallback, errorCallback);

  }]);
