'use strict';

angular.module('auditionHogg', ['ngRoute', 'firebase'])
	.config(function ($routeProvider, $locationProvider) {
	    $routeProvider
	    	.when('/subscribe', {
	    		templateUrl: "../views/subscribe.html",
	    		controller: ''
	    	})
	    	.when('/pl', {
	            templateUrl: '../views/postListing.html',
	            controller: ''
	        })
	        .when('/sl', {
	        	templateUrl: "../views/searchListing.html",
	        	controller: ''
	        })
	        .when('/about', {
	        	templateUrl: "../views/about.html",
	        	controller: ''
	        })
	        .otherwise({
	            redirectTo: '/'
	        });
	    // $locationProvider.html5Mode(true);
	})

	.controller("Firetube", ["$scope", "$firebase", 
		function($scope, $firebase) {
		var ref = new Firebase("https://mkshackathon.firebaseio.com/Postings/All");
		var sync = $firebase(ref);

		$scope.comments = sync.$asArray();
		$scope.username = 'Guest' + Math.floor(Math.random() * 101)

		$scope.addComment = function(e) {
			if (e.keyCode != 13) return;
			console.log($scope.comments)

			$scope.comments.$add({
				from: $scope.username,
				body: $scope.newComment
			});
			$scope.newComment = "";
			}
		}
	]);

// app.controller("PostController", function() {
// 	this.
// })

// angular.module("firetube", ["firebase"])