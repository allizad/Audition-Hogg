'use strict';

angular.module('auditionHogg', ['ngRoute', 'firebase', 'mgcrea.ngStrap'])
	.config(function ($routeProvider, $locationProvider, $datepickerProvider) {
	    $routeProvider
	    	.when('/', {
	    		templateUrl: '../views/main.html',
	    		controller: ''
	    	})
	    	.when('/subscribe', {
	    		templateUrl: '../views/subscribe.html',
	    		controller: ''
	    	})
	    	.when('/pl', {
	            templateUrl: '../views/postListing.html',
	            controller: ''
	        })
	        .when('/sl', {
	        	templateUrl: '../views/searchListing.html',
	        	controller: ''
	        })
	        .when('/about', {
	        	templateUrl: '../views/about.html',
	        	controller: ''
	        })
	        .when('/signin', {
	        	templateUrl: '../views/signin.html',

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
	.controller('SubscribeCtrl',
		function($scope, $firebase) {
			var ref = new Firebase('https://mkshackathon.firebaseio.com/MailingList');
			var sync = $firebase(ref);
			$scope.mailings = sync.$asArray();

			$scope.submitSubscription = function() {
				console.log('yay');

				$scope.mailings.$add({
					firstname: $scope.firstname,
					lastname: $scope.lastname,
					email: $scope.email
				});
			};
		})

	.controller('PostListingCtrl',
		function($scope, $firebase) {
			var ref = new Firebase('https://mkshackathon.firebaseio.com/Postings');
			var sync = $firebase(ref);
			$scope.postings = sync.$asArray();

			// $scope.username = 'Guest' + Math.floor(Math.random() * 101);
		  // $scope.getType = function(key) {
		  //   return Object.prototype.toString.call($scope[key]);
		  // };
		  // $scope.startDate = new Date();
		  // $scope.endDate = new Date();
		  // console.log($scope.getType("startDate"));
			$scope.submitListing = function() {
				console.log('yep');

				$scope.postings.$add({
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
					startDate: $scope.startDate.toDateString(),
					endDate: $scope.endDate.toDateString(),
	////////////////////////////////////////////////////////////////////////////////////
					// compensation: $scope.compensation,
					// equity: $scope.equity,
	///////////////////////////////////////////////////////////////////////////////////
					information: $scope.information
				});
			};
	})

	.controller('searchListing',
		function($scope, $firebase) {
			var ref = new Firebase('https://mkshackathon.firebaseio.com/Postings');
			var sync = $firebase(ref);	
			var postingsArray = sync.$asArray();
			$scope.postings = postingsArray;

		})

	.controller('showSignIn', function($scope) {

  		$scope.signIn = false;
  		$scope.createAcct = false;
  
	})

	.controller('signupCtrl',
		function($scope, $firebase) {
			var ref = new Firebase('https://mkshackathon.firebaseio.com/Users');
			var sync = $firebase(ref);	
			$scope.signup = sync.$asArray();

			$scope.submitSignup = function() {
				console.log('yay');

				$scope.signup.$add({
					firstname: $scope.firstnameSUP,
					lastname: $scope.lastnameSUP,
					email: $scope.email,
					password: $scope.signInPassword
				});
			};
		});



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
