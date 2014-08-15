
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

			angular.extend($datepickerProvider.defaults, {
			  dateFormat: 'dd/MM/yyyy',
			  startWeek: 1
			});
	});