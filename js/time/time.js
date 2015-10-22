var app = angular.module('timeApp');

app.directive('theTime', function() {
	return {
		restrict: 'E',
		template: '<div> The current time is: {{time | date: "medium"}} </div>',
		link: function(scope, element, attr) {
			scope.time = Date.now();
		}
	}
});