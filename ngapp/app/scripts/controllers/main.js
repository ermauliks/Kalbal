'use strict';

angular.module('kalbalApp')
.factory('Kalbal', function ($resource) {
  return $resource('/api/posts/:kalbalId');
});



angular.module('kalbalApp')
  .controller('MainCtrl', function ($scope, Kalbal) {

   	$scope.kalbals = Kalbal.query();

    $scope.post = function(kalbal, userid) {
	    Kalbal.save({message: kalbal, user: userid}, function(kalbal) {
	      $scope.kalbals.push(kalbal);
	      $scope.kalbal = '';
	    });
  	};
  	
  });
