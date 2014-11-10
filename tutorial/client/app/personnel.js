angular.module('personnel',[])
.controller('MainCtrl', [
	'$scope',
	function($scope){
		$scope.test = 'personnelCreation';
	
$scope.people = [
	'person1',
	'person2',
	'person3'
	];
	
	}]);