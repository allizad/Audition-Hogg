
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
	});