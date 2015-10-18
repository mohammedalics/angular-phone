/**
 * 
 */


var phonecatApp = angular.module('phonecatApp', []); 

//phonecatApp.controller('PhoneListCtrl', function($scope) {
//	$scope.phones = [
//	                 {'name': 'Nexus S',
//     'snippet': 'Fast just got faster with Nexus S.',
//     'age': 1},
//    {'name': 'Motorola XOOM™ with Wi-Fi',
//     'snippet': 'The Next, Next Generation tablet.',
//     'age': 2},
//    {'name': 'MOTOROLA XOOM™',
//     'snippet': 'The Next, Next Generation tablet.',
//     'age': 3}];
//	  $scope.orderProp = 'age';
//	
//});



//phonecatApp.controller('PhoneListCtrl', function($scope, $http) {
//	$http.get('phones.json').success(function(data) {
//		$scope.phones = data; 
//	});
//});

function PhoneListCtrl($scope, $http) {
	$http.get('phones.json').success(function(data) {
		$scope.phones = data; 
	});

	
}

//PhoneListCtrl.$inject = ['$scope', '$http'];

phonecatApp.controller('PhoneListCtrl', PhoneListCtrl);

