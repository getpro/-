var phoneApp = angular.module('phoneApp',[]);

function PhoneListCtrl($scope) {
	$scope.phones = [ {
		"name":"Nancy",
		"phone":"123456789"
	},{
		"name":"Marry",
		"phone":"66669999"
	} ];
}

phoneApp.controller("PhoneListCtrl",PhoneListCtrl);

