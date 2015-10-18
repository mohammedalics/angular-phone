/**
 * 
 */


var phonecatApp = angular.module('phonecatApp', []); 

phonecatApp.controller('PhoneListCtrl', function($scope) {
	$scope.phones = [
	                 {'name' : 'Nexus S', 
	                	 'snippet' : 'Fast just got faster with Nexus S.'}, 
	                	 {'name' : 'iPhone 6S', 
	                	 'snippet' : 'Fast just got faster with iPhone 6S'},
	                	 {'name' : 'iPhone 6', 
	                	 'snippet' : 'Fast just got faster with iPhone 6'}
	                 ];
	
	
});


