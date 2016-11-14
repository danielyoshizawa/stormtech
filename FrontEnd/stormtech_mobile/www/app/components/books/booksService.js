angular.module('stormtech.services')
.service('BooksService',['$http', '$rootScope'
  , function(http, rootScope) {

    var service = this;

    service.getBooks = function(successCallback, errorCallback) {
      var url = rootScope.CONFIG.apiUrl + "/api/books/";

      var config = {
        headers: {'Content-type': 'application/json'}
      };

      http.get(url, config).then(successCallback, errorCallback);
    };

}]);
