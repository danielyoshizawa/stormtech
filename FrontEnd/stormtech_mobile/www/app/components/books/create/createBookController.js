angular.module('stormtech.controllers')
  .controller('CreateBookController',['$scope', 'CreateBookService', function(scope, createBookService) {

  scope.submitBook = function(book) {
      createBookService.createBook(book);
  };

}]);
