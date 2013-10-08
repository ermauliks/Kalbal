'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('kalbalApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('It is not posting a message', function () {
    expect(scope.kalbals.length).toBe(3);
  });
});
