'use strict';

angular.module('dashboardAppApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'stormpath',
  'stormpath.templates'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $rootScopeProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    // $rootScopeProvider.digestTtl(1000);
  })
  .run(function($stormpath, $rootScope) {
    $stormpath.uiRouter({
      loginState: 'login',
      defaultPostLoginState: 'main'
    });
    $rootScope.$on('$sessionEnd', function() {
      console.log("User logged out");
    });

  });