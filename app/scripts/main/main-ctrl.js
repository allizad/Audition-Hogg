'use strict';

angular.module('auditionHogg').controller('MainCtrl', function($scope, $firebase) {
  // var ref = new Firebase('https://mkshackathon.firebaseio.com/');
  // var sync = $firebase(ref);
  // // create a synchronized array for use in our HTML code
  // $scope.messages = sync.$asArray();

  // $scope.addMessage = function(text) {
  //   $scope.messages.$add({text: text});
  // };
});

angular.module('auditionHogg').controller('formCtrl', function($scope){
	$scope.text = 'me@example.com'
});