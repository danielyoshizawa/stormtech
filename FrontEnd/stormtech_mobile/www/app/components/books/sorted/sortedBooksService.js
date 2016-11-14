angular.module('stormtech.services')
  .service('SortedBooksService', ['$http', '$rootScope', function(http, rootScope) {

    var service = this;

    service.getSortedBooks = function(successCallback, errorCallback) {
      var url = rootScope.CONFIG.apiUrl + "/api/sorted/";

      var config = {
        headers: {'Content-type': 'application/json'},
      };

      http.get(url, config).then(successCallback, errorCallback);
    };

  }]);
