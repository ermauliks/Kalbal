'use strict';

angular.module('kalbalApp')
.factory('Kalbal', function ($resource) {
  return $resource('/api/posts/:kalbalId');
});



angular.module('kalbalApp')
  .controller('MainCtrl', function ($scope, Kalbal) {

   	$scope.kalbals = Kalbal.query();


    // $scope.kalbals = [
    //   'Need a dependency? Its just a keystroke away. I allow you to easily search for new packages via the command-line (e.g. `bower search jquery`), install them and keep them updated without needing to open your browser.',
    //   'Easily run your unit tests in headless WebKit via PhantomJS. When you create a new application, I also include some test scaffolding for your app',
    //   'I optimize all your images using OptiPNG and JPEGTran so your users can spend less time downloading assets and more time using your app'
    // ];

    $scope.post = function(kalbal, userid) {
	    Kalbal.save({message: kalbal, user: userid}, function(kalbal) {
	      $scope.kalbals.push(kalbal);
	      $scope.kalbal = '';
	    });
  	};
  });
