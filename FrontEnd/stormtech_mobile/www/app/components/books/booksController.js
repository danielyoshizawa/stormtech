angular.module('stormtech.controllers')
  .controller('BooksController',['$scope', 'BooksService'
    ,  function(scope, booksService) {

      var successCallback = function(response) {
        scope.books = response.data;
      };

      var errorCallback = function(response) {
        console.log("Error Retrieving Books");
      };

      booksService.getBooks(successCallback, errorCallback);

}]);
