var app = angular.module("timeApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: './mini-timeDirective/main.html',
			controller: 'MainController'
		});
	.when('/friends', {
		templateUrl: '.'
	})
})

app.directive('showTime', function() {
	return {
		restrict: 'E',
		templateUrl: "./app/nav/nav.html",
		controller: "",
		scope: {},
		link: function($scope, element, attrs) {

		}
	}
});