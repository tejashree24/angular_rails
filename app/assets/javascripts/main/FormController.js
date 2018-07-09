function FormController($scope){
	$scope.userType = 'guest';

	$scope.leader = {};

	$scope.reset = function(){
		angular.copy($scope.leader);
	};

	$scope.update =function(user){
		angular.copy(user, $scope.leader);
	};

	$scope.reset();
}

angular.module('app')
		.controller('FormController',FormController);


