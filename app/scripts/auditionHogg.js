'use strict';

angular.module('auditionHogg', ['ngRoute', 'firebase', 'mgcrea.ngStrap'])
	.config(function ($routeProvider, $locationProvider, $datepickerProvider) {
	    $routeProvider
	    	.when('/', {
	    		templateUrl: "../views/main.html",
	    		controller: ''
	    	})
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
	        .when('/signin', {
	        	templateUrl: "../views/signin.html",

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


	.controller("PostListingCtrl",
		function($scope, $firebase) {
			var ref = new Firebase("https://mkshackathon.firebaseio.com/Postings/All");
			var sync = $firebase(ref);

			$scope.comments = sync.$asArray();
			$scope.username = 'Guest' + Math.floor(Math.random() * 101);

			$scope.submitListing = function() {
				console.log("yep");

				$scope.comments.$add({
					play: $scope.play,
					company: $scope.company,
					website: $scope.website,
					contact: {
						name: $scope.name,
						email: $scope.email
					},
					location: {
						location: $scope.location,
						streetAddress: $scope.street,
						zip: $scope.zip
					},
					startDate: $scope.startDate,
					endDate: $scope.endDate,
	////////////////////////////////////////////////////////////////////////////////////
					// compensation: $scope.compensation,
					// equity: $scope.equity,
	///////////////////////////////////////////////////////////////////////////////////
					information: $scope.information
				});
			}
	})

	.controller("searchListing",
		function($scope, $firebase) {
			var ref = new Firebase("https://mkshackathon.firebaseio.com/Postings/All");
			var sync = $firebase(ref);	
			
			var postingsArray = sync.$asArray();

			$scope.postings = postingsArray;

		}
<<<<<<< HEAD

		);
=======
	])

	.controller('showSignIn', function($scope) {

  		$scope.signIn = false;
  		$scope.createAcct = false;
  
	});
>>>>>>> fe12ba6fba48538caac3cee48cfbf8c93c38c28a

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
