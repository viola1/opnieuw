var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, $sce, $http) {
		//notificaties
			$http.get('notificaties/js/data.json').success (function(data){
				$scope.notifications = data;
			});
	
		// referentiewaarden
		micromol = '\u03BCmol';
	    $scope.lists = [
		{name: 'kat',
		list:[
			{name: 'klinische chemie',
		     values: [{name: 'Ureum',value: '8,1-12,8',unit: micromol},
			          {name: 'Kreatinine',value: '76-164',unit: 'mmol'},
					  {name: 'Glucose (nuchter)',value: '3,4-5,7',unit: 'mmol'}]
		    },
			{name: 'eiwitten',
			 values: [{name: 'Totaal eiwit', value:'54-70',unit:'g/L'},
			          {name: 'Albumine', value:'25-34',unit:'g/L'}]
			}]},
		{name: 'hond',
		list:[
			{name: 'klinische chemie',
		     values: [{name: 'Ureum',value: '8,1-13',unit: 'mmol'},
			          {name: 'Kreatinine',value: '86-164',unit: 'mmol'},
					  {name: 'Glucose (nuchter)',value: '5,4-5,7',unit: 'mmol'}]
		    },
			{name: 'eiwitten',
			 values: [{name: 'Totaal eiwit', value:'54-80',unit:'g/L'},
			          {name: 'Albumine', value:'25-74',unit:'g/L'}]
			}]},
		{name:'vogels',
		list:[
			{name:'ostrich',
			 values: [{name: 'Urea', value:'0,5-0,8',unit:'mmol/L'},
			         {name: 'Creatinine', value: '/',unit:'mmol/L'}]
			},
			{name:'Peregrine falcon',
			values: [{name: 'Urea', value:'0,8-2,9',unit:'mmol/L'},
			         {name: 'Creatinine', value: '24-84', unit: 'mmol/L'}]
			}]}
		];
		$scope.listSelector = {};
		$scope.listSelector.list = {
			name:""
		};
		$scope.advertisement = {
			picture: function() {
				name = $scope.listSelector.list.name;
				name = name.charAt(0).toUpperCase() + name.slice(1);
				pic = 'http://linkelixir.com/iad/2016/'+name+'/banner.jpg';
				pic = $sce.trustAsResourceUrl(pic);
				return pic;
			},
			adlink: function() {
				name = $scope.listSelector.list.name;
				name = name.charAt(0).toUpperCase() + name.slice(1);
				src = 'http://linkelixir.com/iad/2016/';
				src = src + name;
				src = $sce.trustAsResourceUrl(src);
				return src;
			}
		};
		
});