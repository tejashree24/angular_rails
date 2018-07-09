angular
	.module('app',['ui.router','templates'])
	.config(['$stateProvider', '$urlRouterProvider',
		function($stateProvider,$urlRouterProvider){
			$stateProvider
			.state('home',{
				url: '/home',
				templateUrl: 'main/_home.html',
				controller: 'MainCtrl',
			})
			.state('about',{
				url: '/about',
				templateUrl: 'main/_about.html',
				controller: 'MainCtrl',
			})
			.state('alertdemo',{
				url: '/alertdemo',
				templateUrl: 'main/_alertdemo.html',
				controller: 'AlertCtrl',
			})
			.state('formdemo',{
				url: '/formdemo',
				templateUrl: 'main/_form_example.html',
				controller: 'FormController',
			})
			.state('servicedemo',{
				url: '/servicedemo',
				templateUrl:'main/_serviceDemo.html',
				controller: 'ServiceDemo',
			});

			$urlRouterProvider.otherwise('home');
		}]);