'use strict';

angular.module('kalbalApp')
.factory('User', function ($resource) {
  return $resource('/api/user/:kalbalId');
});

angular.module('kalbalApp')
  .controller('UserCtrl', function ($location, $scope, User, Session) {

   $scope.logout = function() {
         Session.logout();
    };
  	$scope.login = function(user) {
        $scope.authError = null;

        Session.login(user.username, user.password)
        .then(function(response) {
            if (!response) {
                $scope.authError = 'Credentials are not valid';
            } else {
                $scope.authError = 'Success!';
            }
        }, function(response) {
            $scope.authError = 'Server offline, please try later';
        });
    };

    $scope.register = function(user) {
        $scope.authError = null;
        Session.register(user.email, user.password, user.confirm_password, user.handle, user.name)
            .then(function(response) {
               console.log(response);
            }, function(response) {
                var errors = '';
                $.each(response.data.errors, function(index, value) {
                    errors += index.substr(0,1).toUpperCase()+index.substr(1) + ' ' + value + ''
                });
                $scope.authError = errors;
            });
    };

}); 
