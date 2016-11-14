angular.module('stormtech.services')
  .service('CreateBookService', ['$http', '$rootScope'
    , function(http, rootScope) {

    var service = this;

    service.createBook = function(book) {

      var url = rootScope.CONFIG.apiUrl + "/api/books/";
      var data = {
        title: book.title,
        author: book.author,
        year: book.year
      };

      http.post(url, data, {
        headers: {'Content-type': 'application/json'}
      }).success(function (response) {
        console.log("Book Created");
      }).error(function (response) {
        console.log('Error'  + response);
      });

    };

  }]);
