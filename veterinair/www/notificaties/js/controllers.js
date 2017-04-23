var nameSpace = angular.module("NotificationApp", []);
 
nameSpace.controller("NotificationFunction", ['$scope','$http', function($scope, $http)
		{    
			$http.get('js/data.json').success (function(data){
				$scope.notifications = data;
		});
 
		}]
);