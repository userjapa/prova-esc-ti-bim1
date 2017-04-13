angular
	.module('app', ['ngRoute'])
	.config(function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: "home.html",
			controller: "Controller"
		})
		.when('/cadastro', {
			templateUrl: "teste.html",
			controller: "Controller"
		})
		.when('/manterProduto', {
			templateUrl: "manterProduto.html",
			controller: "Controller"
		})
		.otherwise({redirectTo: "/"})
	})