'use strict';

angular.module('kalbalApp')
.factory('User', function ($resource) {
  return $resource('/api/user/:kalbalId');
});

angular.module('kalbalApp')
  .controller('UserCtrl', function ($location, $scope, User) {

    $scope.register = function(handle, name, email, password) {
	    User.save({handle: handle, name: name, email: email, password: password }, function(kalbal) {
	      $location.path('/login');
	    });
  	};  

}); 
