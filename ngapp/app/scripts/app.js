'use strict';

angular.module('kalbalApp', ['ngResource','sessionService','recordService','$strap.directives'])

 .config(['$httpProvider', function($httpProvider){
        $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');

        var interceptor = ['$location', '$rootScope', '$q', function($location, $rootScope, $q) {
            function success(response) {
                return response
            };

            function error(response) {
                if (response.status == 401) {
                    $rootScope.$broadcast('event:unauthorized');
                    $location.path('/login');
                    return response;
                };
                return $q.reject(response);
            };

            return function(promise) {
                return promise.then(success, error);
            };
        }];
        $httpProvider.responseInterceptors.push(interceptor);
  }])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'UserCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'UserCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
