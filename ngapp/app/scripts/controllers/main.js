'use strict';

angular.module('kalbalApp')
.factory('Kalbal', function ($resource) {
  return $resource('/api/posts/:kalbalId');
});



angular.module('kalbalApp')
  .controller('MainCtrl', function ($scope, Kalbal, Session, Records) {

   	$scope.kalbals = Kalbal.query();

    $scope.user = Session.requestCurrentUser();
    // $scope.records = Records.index();

     $scope.logout = function() {
        Session.logout();
    };


    $scope.post = function(kalbal, userid) {
      alert(kalbal)
	    Kalbal.save({message: kalbal, user: userid}, function(kalbal) {
	      $scope.kalbals.push(kalbal);
	      $scope.kalbal = '';
	    });
  	};
  	
  });
