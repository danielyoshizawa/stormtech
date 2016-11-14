angular.module('stormtech.controllers')
.controller('DetailsBookController', [ '$scope', '$stateParams'
  , function(scope, stateParams) {

    scope.bookId = stateParams.bookId;

}]);
