(function() {
	'use strict';
	var app = angular.module('app', []);
	app.controller('MainCtrl', function($scope, $http){
		
		$scope.data = {};

		$scope.send = function() {
			console.log($scope.data);
			$http.post('http://localhost:3000/', $scope.data)
				.success(function(res) {
					console.log(res.data);
				})
				.error(function(err) {
					console.log(err);
				})
		};
	})
}());