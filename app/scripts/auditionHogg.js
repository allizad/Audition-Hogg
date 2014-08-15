'use strict';

angular.module('auditionHogg', ['ngRoute', 'firebase', 'mgcrea.ngStrap'])
	.config(function ($routeProvider, $locationProvider, $datepickerProvider) {
	    $routeProvider
	    	.when('/subscribe', {
	    		templateUrl: "../views/subscribe.html",
	    		controller: ''
	    	})
	    	.when('/pl', {
	            templateUrl: '../views/postListing.html',
	            controller: 'PostListingCtrl'
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
//BRING BACKKKKKKKK
		// .config(function($datepickerProvider) {
		//   angular.extend($datepickerProvider.defaults, {
		//   dateFormat: 'dd/MM/yyyy',
		//   startWeek: 1,trigger:manual
		//   });
		//  })
// ^^^^^^^^^^^^^^^^^^^^^^

	// .controller("Firetube", ["$scope", "$firebase", 
	// 	function($scope, $firebase) {
	// 	var ref = new Firebase("https://mkshackathon.firebaseio.com/Postings/All");
	// 	var sync = $firebase(ref);

	// 	$scope.comments = sync.$asArray();
	// 	$scope.username = 'Guest' + Math.floor(Math.random() * 101)

	// 	$scope.addComment = function(e) {
	// 		if (e.keyCode != 13) return;
	// 		console.log($scope.comments)

	// 		$scope.comments.$add({
	// 			from: $scope.username,
	// 			body: $scope.newComment
	// 		});
	// 		$scope.newComment = "";
	// 		}
	// 	}
	// ])


	.controller("Firetube", ["$scope", "$firebase", 
		function($scope, $firebase) {
		var ref = new Firebase("https://mkshackathon.firebaseio.com/Postings/All");
		var sync = $firebase(ref);

		$scope.postings = sync.$asArray();
		$scope.username = 'Guest' + Math.floor(Math.random() * 101)

		$scope.submit = function() {

			$scope.postings.$add({
				play: $scope.play,
				company: $scope.company,
				website: $scope.website,
				contact: {
					name: $scope.name,
					email: $scope.email
				},
				location: {
					streetAddress: $scope.street,
					zip: $scope.zip
				},
////////////////////////////////////////////////////////////////////////////////////
				// compensation: $scope.compensation,
				// equity: $scope.equity,
////////////////////////////////////////////////////////////////////////////////////
				information: $scope.information

			});
			$scope.newComment = "";
			}

		}
	]);

// app.controller("PostController", function() {
// 	this.
// })

// angular.module("firetube", ["firebase"])

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
			// angular.extend($datepickerProvider.defaults, {
			//   dateFormat: 'dd/MM/yyyy',
			//   startWeek: 1
			// });
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
