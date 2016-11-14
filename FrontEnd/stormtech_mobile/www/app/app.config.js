angular.module('stormtech')
  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }

      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  .run(function ($rootScope) {

    if (ionic.Platform.isAndroid()) {
      $rootScope.CONFIG = {
        apiUrl: 'http://10.0.2.2:8056',
      };
    } else {

      $rootScope.CONFIG = {
        apiUrl: 'http://localhost:8056',
      };
    }
  });
