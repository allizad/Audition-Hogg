'use strict';

angular.module('auditionHogg').controller('PostListingCtrl', function($scope, $firebase) {
  $scope.selectedDate = new Date();

  // $scope.fromDate = new Date();
  // $scope.untilDate = new Date();
  $scope.getType = function(key) {
    return Object.prototype.toString.call($scope[key]);
  };

  $scope.clearDates = function() {
    $scope.selectedDate = null;
  };
});